import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expectedStylish = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').trim();
const expectedPlain = fs.readFileSync(getFixturePath('expected-plain.txt'), 'utf-8').trim();
const expectedJson = fs.readFileSync(getFixturePath('expected-json.txt'), 'utf-8').trim();

test.each([
  ['json', 'file1.json', 'file2.json'],
  ['yml', 'file1.yml', 'file2.yml'],
  ['yaml', 'file1.yaml', 'file2.yaml'],
])('gendiff compares flat %s fixtures', (_format, file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  expect(genDiff(filepath1, filepath2)).toBe(expectedStylish);
});

test('gendiff works with relative paths', () => {
  const cwd = process.cwd();
  process.chdir(path.join(__dirname, '..'));

  try {
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(expectedStylish);
  } finally {
    process.chdir(cwd);
  }
});

test('gendiff uses stylish formatter by default and supports explicit stylish format', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');

  expect(genDiff(filepath1, filepath2)).toBe(expectedStylish);
  expect(genDiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish);
});

test.each([
  ['json', 'file1.json', 'file2.json'],
  ['yml', 'file1.yml', 'file2.yml'],
  ['yaml', 'file1.yaml', 'file2.yaml'],
])('gendiff supports plain format for %s', (_format, file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  expect(genDiff(filepath1, filepath2, 'plain')).toBe(expectedPlain);
});

test.each([
  ['json', 'file1.json', 'file2.json'],
  ['yml', 'file1.yml', 'file2.yml'],
  ['yaml', 'file1.yaml', 'file2.yaml'],
])('gendiff supports json format for %s', (_format, file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  expect(genDiff(filepath1, filepath2, 'json')).toBe(expectedJson);
});
