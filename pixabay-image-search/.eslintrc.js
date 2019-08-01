module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    react: {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
  },
  rules: {
    "semi": ["error", "never"],
    "indent": ["error", 2],
    "no-unused-vars": ["error", { "vars": "local" }],
    "quotes": ["error", "single"],
    "no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "comma-dangle": ["error", "always"],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxBOF": 1, "maxEOF":1}]
  },
}
