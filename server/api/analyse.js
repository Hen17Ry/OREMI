import { createWorker } from 'tesseract.js'
import formidable from 'formidable'
import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Méthode non autorisée' })
  }

  const form = formidable({ uploadDir: '/tmp', keepExtensions: true })

  try {
    const [, files] = await form.parse(event.node.req)

    const result = {}
    const supportedTypes = ['carte_grise', 'cip', 'permis']

    for (const docType of supportedTypes) {
      const file = files[docType]?.[0]
      if (!file) continue

      const text = await extractTextFromImage(file.filepath)
      const rawData = extractDataByType(docType, text)
      const enhanced = enhanceExtraction(rawData, docType)

      result[docType] = enhanced

      await fs.unlink(file.filepath) // nettoyage
    }

    // Sauvegarde dans un fichier JSON
    const savePath = path.resolve('public/data/userdata.json')
    const payload = {
      ...result,
      timestamp: new Date().toISOString()
    }
    await fs.writeFile(savePath, JSON.stringify(payload, null, 2), 'utf-8')

    return {
      success: true,
      data: result
    }

  } catch (err) {
    console.error('Erreur backend:', err)
    return {
      success: false,
      error: err.message || 'Erreur interne'
    }
  }
})

// OCR avec Tesseract.js (français)
async function extractTextFromImage(imagePath) {
  const worker = await createWorker('fra')
  try {
    const { data: { text } } = await worker.recognize(imagePath)
    return text
  } finally {
    await worker.terminate()
  }
}

// Dispatch d’extracteurs selon type
function extractDataByType(type, text) {
  switch (type) {
    case 'carte_grise': return extractCarteGriseData(text)
    case 'cip': return extractCIPData(text)
    case 'permis': return extractPermisData(text)
    default: return {}
  }
}

// Extraction des données pour CIP (Carte d'Identité Personnelle)
function extractCIPData(text) {
  const data = {}
  
  // Nettoyer le texte
  const cleanText = text.replace(/\s+/g, ' ').trim()
  
  // Patterns de recherche pour CIP
  const patterns = {
    nom: /(?:Nom\s*:?\s*|AGOSSOU)([A-Z][A-Za-z\s]*?)(?:\s*Pr[eé]nom|$)/i,
    prenom: /(?:Pr[eé]nom\s*:?\s*)([A-Za-z][A-Za-z\s]*?)(?:\s*Sexe|$)/i,
    sexe: /(?:Sexe\s*:?\s*)(F[eé]minin|Masculin|F|M)/i,
    dateNaissance: /(?:Date\s*de\s*Naissance\s*:?\s*|n[eé]e?\s*le\s*)(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i,
    statutProfessionnel: /(?:Statut\s*Professionnel\s*:?\s*|Profession\s*:?\s*)([A-Za-z][A-Za-z\s]*?)(?:\s*Adresse|$)/i,
    adresse: /(?:Adresse\s*:?\s*)([A-Za-z0-9][A-Za-z0-9\s,.-]*?)(?:\s*Ville|$)/i,
    ville: /(?:Ville[/\s]*Commune\s*:?\s*)([A-Za-z][A-Za-z\s-]*?)(?:\s*Num[eé]ro|$)/i,
    telephone: /(?:t[eé]l[eé]phone\s*:?\s*|Tel\s*:?\s*)(\+?\d+[\s\d]*)/i,
    nationalite: /(?:Nationalit[eé]\s*:?\s*)([A-Za-z][A-Za-z\s]*?)(?:\s*Num[eé]ro|$)/i,
    numeroIdentification: /(?:Num[eé]ro\s*d['\s]*identification\s*:?\s*)([A-Z0-9]+)/i
  }
  
  // Extraire chaque champ
  for (const [key, pattern] of Object.entries(patterns)) {
    const match = cleanText.match(pattern)
    if (match && match[1]) {
      data[key] = match[1].trim()
    }
  }
  
  // Nettoyage spécifique pour certains champs
  if (data.dateNaissance) {
    data.dateNaissance = data.dateNaissance.replace(/[/\-.]/g, '/')
  }
  
  if (data.telephone) {
    data.telephone = data.telephone.replace(/\s+/g, ' ')
  }
  
  return data
}

// Extraction des données pour Carte Grise
function extractCarteGriseData(text) {
  const data = {}
  const cleanText = text.replace(/\s+/g, ' ').trim()
  
  const patterns = {
    proprietaire: /(?:Propri[eé]taire\s*:?\s*)([A-Za-z][A-Za-z\s]*?)(?:\s*Adresse|$)/i,
    adresse: /(?:Adresse\s*:?\s*)([A-Za-z0-9][A-Za-z0-9\s,.-]*?)(?:\s*Plaque|$)/i,
    plaqueImmatriculation: /(?:Plaque\s*d['\s]*immatriculation\s*:?\s*|Immatriculation\s*:?\s*)([A-Z0-9-]+)/i,
    marque: /(?:Marque\s*de\s*v[eé]hicule\s*:?\s*|Marque\s*:?\s*)([A-Za-z]+)/i,
    modele: /(?:Mod[eè]le\s*du\s*v[eé]hicule\s*:?\s*|Mod[eè]le\s*:?\s*)([A-Za-z0-9\s]+?)(?:\s*Puissance|$)/i,
    puissanceFiscale: /(?:Puissance\s*fiscale\s*:?\s*)(\d+\s*CV)/i,
    numeroChassis: /(?:Num[eé]ro\s*Ch[aâ]ssis\s*:?\s*)([A-Z0-9]+)/i,
    dateMiseEnCirculation: /(?:Date\s*de\s*mise\s*en\s*circulation\s*:?\s*)(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i,
    typeCarburant: /(?:Type\s*de\s*carburant\s*:?\s*)([A-Za-z]+)/i,
    couleur: /(?:Couleur\s*:?\s*)([A-Za-z\s]+?)(?:\s*$|[A-Z])/i
  }
  
  for (const [key, pattern] of Object.entries(patterns)) {
    const match = cleanText.match(pattern)
    if (match && match[1]) {
      data[key] = match[1].trim()
    }
  }
  
  return data
}

// Extraction des données pour Permis de Conduire
function extractPermisData(text) {
  const data = {}
  const cleanText = text.replace(/\s+/g, ' ').trim()
  
  const patterns = {
    nom: /(?:Nom\s*:?\s*)([A-Z][A-Za-z\s]*?)(?:\s*Pr[eé]nom|$)/i,
    prenom: /(?:Pr[eé]nom\s*:?\s*)([A-Za-z][A-Za-z\s]*?)(?:\s*Date|$)/i,
    dateNaissance: /(?:Date\s*de\s*naissance\s*:?\s*)(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i,
    adresse: /(?:Adresse\s*:?\s*)([A-Za-z0-9][A-Za-z0-9\s,.-]*?)(?:\s*Num[eé]ro|$)/i,
    numeroPermis: /(?:Num[eé]ro\s*de\s*permis\s*:?\s*)([A-Z0-9]+)/i,
    categoriePermis: /(?:Cat[eé]gorie\s*de\s*permis\s*:?\s*|Cat[eé]gorie\s*:?\s*)([A-Z]+)/i,
    dateDelivrance: /(?:Date\s*de\s*d[eé]livrance\s*:?\s*)(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i,
    dateExpiration: /(?:Date\s*d['\s]*expiration\s*:?\s*)(\d{1,2}[/\-.]\d{1,2}[/\-.]\d{4})/i,
    centreDelivrance: /(?:Centre\s*de\s*d[eé]livrance\s*:?\s*)([A-Za-z][A-Za-z0-9\s-]*?)(?:\s*Pays|$)/i,
    telephone: /(?:Num[eé]ro\s*de\s*t[eé]l[eé]phone\s*:?\s*|T[eé]l[eé]phone\s*:?\s*)(\+?\d+[\s\d]*)/i
  }
  
  for (const [key, pattern] of Object.entries(patterns)) {
    const match = cleanText.match(pattern)
    if (match && match[1]) {
      data[key] = match[1].trim()
    }
  }
  
  // Nettoyage des dates
  if (data.dateNaissance) {
    data.dateNaissance = data.dateNaissance.replace(/[/\-.]/g, '/')
  }
  if (data.dateDelivrance) {
    data.dateDelivrance = data.dateDelivrance.replace(/[/\-.]/g, '/')
  }
  if (data.dateExpiration) {
    data.dateExpiration = data.dateExpiration.replace(/[/\-.]/g, '/')
  }
  
  return data
}


// Fonction pour améliorer la précision de l'extraction avec des règles spécifiques
function enhanceExtraction(data, documentType) {
  const enhanced = { ...data }
  
  // Règles spécifiques par type de document
  switch (documentType) {
    case 'cip':
      // Validation et correction pour CIP
      if (enhanced.sexe) {
        enhanced.sexe = enhanced.sexe.toLowerCase().includes('f') ? 'Féminin' : 'Masculin'
      }
      if (enhanced.nationalite && enhanced.nationalite.toLowerCase().includes('ben')) {
        enhanced.nationalite = 'Béninoise'
      }
      break
      
    case 'carte_grise':
      // Validation et correction pour Carte Grise
      if (enhanced.marque) {
        enhanced.marque = enhanced.marque.charAt(0).toUpperCase() + enhanced.marque.slice(1).toLowerCase()
      }
      if (enhanced.typeCarburant) {
        const carburant = enhanced.typeCarburant.toLowerCase()
        if (carburant.includes('hybrid')) {
          enhanced.typeCarburant = 'Hybride'
        } else if (carburant.includes('essence')) {
          enhanced.typeCarburant = 'Essence'
        } else if (carburant.includes('diesel')) {
          enhanced.typeCarburant = 'Diesel'
        }
      }
      break
      
    case 'permis':
      // Validation et correction pour Permis
      if (enhanced.categoriePermis) {
        enhanced.categoriePermis = enhanced.categoriePermis.toUpperCase()
      }
      break
  }
  
  return enhanced
}