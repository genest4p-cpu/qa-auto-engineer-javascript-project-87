import fs from 'node:fs'
import path from 'node:path'
import buildDiff from './buildDiff.js'
import formatDiff from './formatters/index.js'
import parse from './parsers.js'

const readFileData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf-8')
  const inputFormat = path.extname(absolutePath).slice(1)

  return parse(fileContent, inputFormat)
}

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = readFileData(filepath1)
  const data2 = readFileData(filepath2)
  const diff = buildDiff(data1, data2)

  return formatDiff(diff, outputFormat)
}

export default genDiff