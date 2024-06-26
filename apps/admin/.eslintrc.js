module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
    "sourceType": "module" // Allows for the use of imports
  },
  "plugins": ["eslint-plugin-prettier", "react", "@typescript-eslint"],
  "extends": ["eslint:recommended", "google", "eslint-config-prettier"],
  "rules": {
    "prettier/prettier": "error",
    "curly": [2, "all"],
    "new-cap": "off",
    "require-jsdoc": "off",
    "semi": "off",
    "valid-jsdoc": "off",
    "no-unused-expressions": "off",
    "camelcase": "off",
    "no-invalid-this": "off",
    "no-unused-vars": "off",
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-implicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": "off",
        "react/jsx-uses-react": "on",
        "react/react-in-jsx-scope": "on"
      }
    }
  ]
}
