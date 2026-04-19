import fs from 'node:fs'
import path from 'node:path'
import buildDiff from './src/buildDiff.js'
import formatDiff from './src/formatters/index.js'
import parse from './src/parsers.js'

const getData = filepath => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileContent = fs.readFileSync(absolutePath, 'utf-8')
  const format = path.extname(absolutePath).slice(1)

  return parse(fileContent, format)
}

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1)
  const data2 = getData(filepath2)
  const diff = buildDiff(data1, data2)

  return formatDiff(diff, formatName)
}

export default genDiff
