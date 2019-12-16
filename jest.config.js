module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  watchPathIgnorePatterns: ['/node_modules', 'server'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['/**/*.test.(ts|js|tsx|jsx)']
}
