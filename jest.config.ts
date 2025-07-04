import type { Config } from 'jest'

const config: Config = {
  rootDir: './',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    // File mocks
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/mocks/fileMock.js',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.scss$': 'identity-obj-proxy',

    // Path mappings - these must match your tsconfig.json paths
    '^@/lib(.*)$': '<rootDir>/src/shared/lib$1',
    '^@/actions(.*)$': '<rootDir>/src/shared/actions$1',
    '^@/constants(.*)$': '<rootDir>/src/shared/constants$1',
    '^@/validators(.*)$': '<rootDir>/src/shared/validators$1',
    '^@/hooks(.*)$': '<rootDir>/src/shared/hooks$1',
    '^@/helpers(.*)$': '<rootDir>/src/shared/helpers$1',
    '^@/store(.*)$': '<rootDir>/src/shared/store$1',
    '^@/components/ui(.*)$': '<rootDir>/src/shared/components/ui$1',
    '^@/components/shared(.*)$': '<rootDir>/src/shared/components/shared$1',
    '^@/models(.*)$': '<rootDir>/src/shared/models$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!your-esm-package-to-transform)/'],
}

export default config
// /** @type {import('jest').Config} */
// module.exports = {
//   collectCoverage: true,
//   collectCoverageFrom: ['src/**/*.{test,spec}.{ts,tsx}'],
//   coverageDirectory: 'coverage',
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
//   transform: {
//     '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.app.json' }],
//     '^.+\\.(js|jsx)$': 'babel-jest',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   moduleNameMapper: {
//     '^@/lib/(.*)$': '<rootDir>/src/shared/lib/$1',
//     '^@/actions/(.*)$': '<rootDir>/src/shared/actions/$1',
//     '^@/constants/(.*)$': '<rootDir>/src/shared/constants/$1',
//     '^@/validators/(.*)$': '<rootDir>/src/shared/validators/$1',
//     '^@/hooks/(.*)$': '<rootDir>/src/shared/hooks/$1',
//     '^@/helpers/(.*)$': '<rootDir>/src/shared/helpers/$1',
//     '^@/store/(.*)$': '<rootDir>/src/shared/store/$1',
//     '^@/components/ui/(.*)$': '<rootDir>/src/shared/components/ui/$1',
//     '^@/components/shared/(.*)$': '<rootDir>/src/shared/components/shared/$1',
//     '^@/models/(.*)$': '<rootDir>/src/shared/models/$1',
//     '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
//     '^@/(.*)$': '<rootDir>/src/$1',

//     '^.+\\.svg$': 'jest-svg-transformer',
//     '^.+\\.scss$': 'identity-obj-proxy',
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
// }
