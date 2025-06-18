// /server/api/pay-epargne.js
import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const coffrePath = path.resolve('public/data/coffre.json')
  const submitPath = path.resolve('public/data/submit.json')
  const montant = 700000

  try {
    // Lire coffre.json
    const coffreRaw = await fs.readFile(coffrePath, 'utf-8')
    const coffreData = JSON.parse(coffreRaw)

    if ((coffreData?.solde ?? 0) < montant) {
      throw new Error('Solde insuffisant')
    }

    // Décrémenter solde
    coffreData.solde -= montant

    // Ajouter transaction
    coffreData.transactions.push({
      montant,
      date: new Date().toISOString(),
      mode: 'épargne',
      statut: 'réussi'
    })

    // Écrire coffre.json mis à jour
    await fs.writeFile(coffrePath, JSON.stringify(coffreData, null, 2))

    // Lire submit.json
    const submitRaw = await fs.readFile(submitPath, 'utf-8')
    const submitData = JSON.parse(submitRaw)

    // Incrémenter compteur devis
    submitData.devis = (submitData.devis ?? 0) + 1
    submitData.souscription = (submitData.souscription ?? 0) + 1

    // Écrire submit.json
    await fs.writeFile(submitPath, JSON.stringify(submitData, null, 2))

    return { success: true }
  } catch (e) {
    return { success: false, error: e.message }
  }
})
