module.exports = {
  preset: 'ts-jest',
  testURL: 'http://localhost/',
  collectCoverageFrom: ['src/**/*.(js|jsx|ts|tsx)'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: 'tests/.+\\.(ts|tsx|js|jsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
