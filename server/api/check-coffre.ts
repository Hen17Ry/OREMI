import fs from 'fs'
import path from 'path'

export default defineEventHandler(async () => {
  const filePath = path.resolve('public/data/coffre.json')
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  return data
})
