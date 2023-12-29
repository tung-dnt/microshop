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
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'import',
    "simple-import-sort",
    "import-newlines",
  ],
  rules: {
    // ts eslint
    "eslint-comments/disable-enable-pair": 0,
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { disallowTypeAnnotations: false },
    ],
    "@typescript-eslint/func-call-spacing": "error",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        vars: "all",
        args: "none",
      },
    ],
    "object-curly-spacing": "error",
    "@typescript-eslint/object-curly-spacing": 0,
    "@typescript-eslint/quotes": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    "unused-imports/no-unused-imports": "error",
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'no-prototype-builtins': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'import/order': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-mixed-spaces-and-tabs': 0,
    curly: ["error", "multi-or-nest", "consistent"],
    "import-newlines/enforce": [
      "error",
      {
        items: 2,
        semi: true,
        forceSingleLine: false,
      },
    ],
    "indent": [
      "error",
      2,
      {
        "ignoredNodes": ["TemplateLiteral *"],
        "offsetTernaryExpressions": true, // does not work
        "SwitchCase": 1
      }
    ],
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
      "error",
      {
        // property on new lines taken care by "object-property-newline",
        // this will fix back to 1 line if only one prop
        ObjectExpression: {
          multiline: true,
          minProperties: 2, // enforce on more than 1
          consistent: true,
        },
        // taken care by "newline-destructuring/newline"
        // "ObjectPattern": {
        //   "multiline": true
        // },
        // taken care by "import-newlines/enforce"
        // "ImportDeclaration": {
        //   "multiline": true,
        //   "minProperties": 4,
        //   "consistent": true
        // },
        ExportDeclaration: {
          multiline: true,
          minProperties: 4,
          consistent: true,
        },
      },
    ],
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["return", "throw"],
      },
      // new line after var declarations
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: ["expression"],
        next: ["const", "let", "var"],
      },
      // new line after directives
      {
        blankLine: "always",
        prev: "directive",
        next: "*",
      },
      {
        blankLine: "any",
        prev: "directive",
        next: "directive",
      },
      // others
      {
        blankLine: "always",
        prev: ["block", "block-like", "case", "default"],
        next: "*",
      },
      {
        blankLine: "always",
        prev: "import",
        next: "export",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Node.js builtins prefixed with `node:`.
          ["^node:"],
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.s?css$"],
        ],
      },
    ],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
}
