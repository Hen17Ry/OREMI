import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const filePath = path.resolve('public/coffre.json')

  // Définir le type Transaction
  type Transaction = {
    montant: number
    date: string
    mode: string
    statut: string
  }

  // Structure par défaut
  let contenu: {
    solde: number
    date_creation: string
    etat: string
    transactions: Transaction[]
  } = {
    solde: 0,
    date_creation: new Date().toISOString(),
    etat: "actif",
    transactions: []
  }

  // Charger le contenu existant si le fichier existe
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8')
    contenu = JSON.parse(data)
  }

  const montant = parseInt(body.montant, 10) || 0

  // Incrémenter le solde
  contenu.solde += montant

  // Ajouter la nouvelle transaction avec le montant
  contenu.transactions.push({
    montant,
    date: new Date().toISOString(),
    mode: body.mode || "paiement",
    statut: "réussi"
  })

  // Sauvegarde dans le fichier
  fs.writeFileSync(filePath, JSON.stringify(contenu, null, 2), 'utf-8')

  return {
    status: "ok",
    message: "Caisse mise à jour avec succès",
    solde: contenu.solde,
    derniere_transaction: contenu.transactions.at(-1)
  }
})
