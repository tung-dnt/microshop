module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'import',
    "simple-import-sort",
  ],
  rules: {
    indent: ['error', 2, { ignoredNodes: ['TemplateLiteral > *'], SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'no-prototype-builtins': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/order': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': 0
  },
}
