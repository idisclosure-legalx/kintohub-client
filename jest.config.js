module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],
  coverageDirectory: 'jest-coverage',
  coveragePathIgnorePatterns: ['src/index.js', 'src/config.js'],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'node',
  verbose: false,
};
