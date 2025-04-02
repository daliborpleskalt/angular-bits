/* eslint-disable */
export default {
  displayName: 'showcase',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  coverageDirectory: '../../coverage/apps/showcase',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  moduleNameMapper: {
    '^@angular-bits/ui': '<rootDir>/../../libs/shared/ui/src/index.ts',
    '^@angular-bits/core': '<rootDir>/../../libs/shared/core/src/index.ts',
    '^@angular-bits/demo-loader': '<rootDir>/../../libs/shared/demo-loader/src/index.ts',
    '^@angular-bits/topics': '<rootDir>/../../libs/topics/src/index.ts'
  }
};
