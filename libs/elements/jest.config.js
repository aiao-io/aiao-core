module.exports = {
  name: 'elements',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/elements',
  collectCoverageFrom: ['./src/lib/**/*.ts', '!src/lib/global/global.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  globals: { 'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' } }
};
