import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('public/data/coffre.json')
  const data = await fs.readFile(filePath, 'utf8')
  return JSON.parse(data)
})
