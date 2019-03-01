module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended',  ],
  //extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'], //'plugin:redux-saga/recommended', 'plugin:react-redux/recommended'
  parser: 'babel-eslint',
  env: {
      "jest": true
  },
  parserOptions: {
    ecmaVersion: 7,// Для синтаксиса ES7
      sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    //"test": "react-scripts test --watchAll",
    // /* eslint react/prop-types: 0 */ -  в самом файле что бы убрать проверку по prop-types
    //  'semi': [2, 'always'], равило обеспечивает последовательное использование точек с запятой.
    //'comma-dangle': ['error', 'never'],// вконце кома
    //'indent': [2, 4], Правило обеспечивает согласованный стиль отступов. В данном примере 4 пробела.
    //'react/prop-types': [1, { 'ignore': <ignore>, customValidators: <customValidator> }],
    //"react-redux/connect-prefer-named-arguments": 2,
    'react/forbid-prop-types': 0, // ['any', 'array', 'object']. нельзя использовать если эта функция включина
    'import/prefer-default-export': 0,
    'react/jsx-key': 2,
    'no-nested-ternary': 'off',
    'react/no-unused-prop-types': 2,
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
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
      140,
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
  plugins: ['react', 'import','jsx-a11y'] //,'redux-saga','react-redux'
};
