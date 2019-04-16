module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'standard', 'import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    worker: true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'no-console': 0,
    'import-name': 0,
    'new-parens': 0,
    'no-submodule-imports': 0,
    'no-shadowed-variable': 0,
    'function-name': 0,
    'variable-name': 0,
    'no-var-requires': 0,
    'no-param-reassign': 0,
    'no-unused-expression': 0,
    'prefer-array-literal': 0,
    'max-classes-per-file': 0,
    'object-literal-sort-keys': 0,
    'object-literal-key-quotes': 0,
    'no-increment-decrement': 0,
    '@typescript-eslint/interface-name': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-implicit-dependencies': 0,
    '@typescript-eslint/no-parameter-reassignment': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'react/prop-types': 0,
    'react/no-find-dom-node': 0,
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], ['internal', 'index', 'sibling', 'parent']],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
