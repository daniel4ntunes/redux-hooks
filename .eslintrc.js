module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', 'prettier'],
      },
    ],
    'global-require': 0,
    'import/prefer-default-export': 0,
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-underscore-dangle': [1, { allow: ['_id'] }],
    'react/destructuring-assignment': 0,
    'react/prop-types': 2,
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'import/no-extraneous-dependencies': 0,
    'consistent-return': 0,
  },
};
