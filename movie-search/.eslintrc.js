module.exports = {
  env: {
    browser: true,
    es6: true
  },
  
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: "babel-eslint",
  plugins: [
    'react'
  ],
  rules: {
    "no-console": 0,
    "no-multi-spaces": 2
  }
}
