module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "eslint-comments",
    "import-newlines",
    "jsdoc",
    // "newline-destructuring",
    "promise",
    "simple-import-sort",
    "@typescript-eslint",
    "react-refresh",
  ],
  rules: {
    "consistent-return": 0,
    "react-refresh/only-export-components": 0,
    // ts eslint
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
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": "error",
    "@typescript-eslint/quotes": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    // eslint
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-style": ["error", "last"],
    curly: ["error", "multi-or-nest", "consistent"],
    eqeqeq: "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import-newlines/enforce": [
      "error",
      {
        items: 2,
        // "max-len": 80, // doesn't work well with prettier
        semi: true,
        forceSingleLine: false, // true doesn't work well with prettier
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
    "import/prefer-default-export": "off",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/no-undefined-types": "off",
    "jsx-quotes": ["error", "prefer-double"],
    // "newline-destructuring/newline": [
    //   "error",
    //   {
    //     "items": 3,
    //     "itemsWithRest": 2,
    //     "maxLength": 80,
    //     "consistent": true,
    //     "allowAllPropertiesOnSameLine": true
    //   }
    // ],
    "no-console": "warn",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": "error",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
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
    "prefer-const": "error",
    quotes: ["error", "single"],
    "quote-props": ["error", "as-needed"],
    "react/forbid-prop-types": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-closing-bracket-location": [
      1,
      {
        nonEmpty: "tag-aligned",
        selfClosing: "tag-aligned",
      },
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": [
      "error",
      {
        maximum: {
          single: 3,
          multi: 1,
        },
      },
    ],
    "react/jsx-no-useless-fragment": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react-hooks/exhaustive-deps": "warn",
    "semi-spacing": ["error", { before: false, after: true }],
    semi: ["error", "never"],
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

    "simple-import-sort/exports": "error",
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "spaced-comment": "error",
    "wrap-iife": ["error", "inside"],

    // anti-patterns
    "no-var": "error",
    "no-with": "error",
    "no-multi-str": "error",
    "no-caller": "error",
    "no-implied-eval": "error",
    "no-labels": "error",
    "no-new-object": "error",
    "no-octal-escape": "error",
    "no-self-compare": "error",
    "no-shadow-restricted-names": "error",
    "no-cond-assign": "error",
    "no-debugger": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    radix: "error",
    "valid-typeof": "error",
    "no-implicit-globals": ["error"],
    "no-param-reassign": ["error", { props: false }],
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        vars: "all",
        args: "none",
      },
    ],
    "no-proto": "error",

    // es2015 features
    "require-yield": "error",
    "template-curly-spacing": ["error", "never"],

    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
  },
  overrides: [
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx"],
      rules: {
        // Allow CJS until ESM support improves
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
    {
      files: [".eslintrc.json"],
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
