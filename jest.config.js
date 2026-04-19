/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['index.js', 'src/**/*.js'],
  transform: {},
}
