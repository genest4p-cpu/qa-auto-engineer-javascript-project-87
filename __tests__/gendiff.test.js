import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import genDiff from '../index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

const getFixtureFilepath = (prefix, extension) => getFixturePath(`${prefix}.${extension}`)

const expectedStylish = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').trim()
const expectedPlain = fs.readFileSync(getFixturePath('expected-plain.txt'), 'utf-8').trim()
const expectedJson = fs.readFileSync(getFixturePath('expected-json.txt'), 'utf-8').trim()

const inputFormats = ['json', 'yml', 'yaml']

test.each(inputFormats)('gendiff supports all output formats for %s', (inputFormat) => {
  const filepath1 = getFixtureFilepath('file1', inputFormat)
  const filepath2 = getFixtureFilepath('file2', inputFormat)

  expect(genDiff(filepath1, filepath2)).toBe(expectedStylish)
  expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish)
  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain)
  expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson)
})

test('gendiff works with relative paths', () => {
  const cwd = process.cwd()
  process.chdir(path.join(__dirname, '..'))

  try {
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(expectedStylish)
  } finally {
    process.chdir(cwd)
  }
})
