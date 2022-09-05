import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*/*.d.ts',
    '!src/**/*/Loadable.{js,jsx,ts,tsx}',
    '!src/**/*/messages.ts',
    '!src/**/*/types.ts',
    '!src/index.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  modulePaths: ['<rootDir>'],
  resetMocks: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
}

export default config
