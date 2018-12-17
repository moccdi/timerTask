module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-key': 2,
    'no-nested-ternary': 'off',
    'react/no-unused-prop-types': 2,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': ['error', { 'exceptMethods': ['render', 'componentDidMount'] }],
    'func-names': [1, 'as-needed'],
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'max-len': [
      'error',
      160,
      2
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'semi': [
      'error',
      'never'
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'arrow-parens': [
      "error",
      "as-needed"
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'quotes': [
      'error',
      'single',
      {'avoidEscape': true}
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {'maximum': 1, 'when': 'multiline'}
    ],
    'react/jsx-tag-spacing': [
      'error',
      {'beforeSelfClosing': 'always'}
    ],
    'react/jsx-filename-extension': [
      'error',
      {'extensions': ['.jsx', '.js']}
    ],
    'react/no-array-index-key': [
      0
    ],
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: false }
    ]
  },
  plugins: ['react', 'import']
};
