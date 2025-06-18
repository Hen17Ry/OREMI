import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  try {
    const filePath = path.resolve('public/data/userdata.json')
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch (e) {
    console.error('Erreur lecture userdata.json', e)
    return {}
  }
})
