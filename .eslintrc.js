const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  rules: { 'prettier/prettier': ['error', prettierOptions] },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['error', prettierOptions] },
    },
  ],
}
