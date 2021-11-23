module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
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
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'no-confusing-arrow': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        tabWidth: 2,
      },
    ],
    camelcase: 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-param-reassign': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'react/no-unused-prop-types': 'off',
    'react/button-has-type': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': 'off',
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    semi: 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.ts', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
