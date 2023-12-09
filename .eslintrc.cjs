module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', 
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['@typescript-eslint', 'prettier', '@emotion'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
