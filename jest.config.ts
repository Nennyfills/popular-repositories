module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|png)$': '<rootDir>/src/test/__mocks__/fileMock.cjs',
    '\\.svg$': '<rootDir>/src/test/__mocks__/svgMock.tsx',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  transformIgnorePatterns: ['<rootDir>/node_modules'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'lcov'],
};
