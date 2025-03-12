const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': ['ts-jest', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  resolver: '@nx/jest/plugins/resolver',
  moduleNameMapper: {
    '^@angular-bits/(.*)$': '<rootDir>/libs/$1/src'
  }
};
