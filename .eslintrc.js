module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
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
<<<<<<< HEAD
  plugins: ['react', 'prettier', 'react-hooks'],
=======
  plugins: ['react', 'prettier'],
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
  rules: {
    indent: ['off'],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/jsx-uses-react': 2,
<<<<<<< HEAD
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
=======
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
  },
}
