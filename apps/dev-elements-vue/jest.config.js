module.exports = {
  name: 'dev-elements-vue',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/dev-elements-vue',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } }
};
