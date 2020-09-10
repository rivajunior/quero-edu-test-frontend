const OFF = 0
const WARN = 1
const ERROR = 2

const SPACE_INDENTATION = 2

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-base/rules/strict',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'babel',
    'promise',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': OFF,
    'babel/no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],
    'import/extensions': OFF,
    'import/no-named-as-default': OFF,
    'import/no-named-as-default-member': OFF,
    'promise/prefer-await-to-callbacks': ERROR,
    'promise/prefer-await-to-then': WARN,
    'no-console': process.env.NODE_ENV === 'production' ? ERROR : OFF,
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : OFF,
    'no-plusplus': [
      ERROR, {
        allowForLoopAfterthoughts: true,
      },
    ],
    'newline-before-return': ERROR,
    'no-multiple-empty-lines': [
      ERROR, {
        max: 1,
        maxBOF: 1,
        maxEOF: 0,
      },
    ],
    semi: [ERROR, 'never'],
    indent: [ERROR, SPACE_INDENTATION],
    'no-empty-function': ERROR,
    'no-extra-parens': ERROR,
    curly: [ERROR, 'all'],
    'default-param-last': ERROR,
    'grouped-accessor-pairs': ERROR,
    'no-constructor-return': ERROR,
    'no-magic-numbers': [
      ERROR, {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-unmodified-loop-condition': ERROR,
    'no-useless-call': ERROR,
    'prefer-regex-literals': ERROR,
    'require-await': ERROR,
    'no-undefined': ERROR,
    'array-bracket-newline': [
      ERROR, {
        multiline: true,
      },
    ],
    'key-spacing': [
      ERROR, {
        afterColon: true,
      },
    ],
    'no-param-reassign': [
      ERROR, {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          'state',
          'e',
        ],
      },
    ],
    'no-underscore-dangle': [
      ERROR, {
        allow: ['_uid'],
      },
    ],
    'vue/array-bracket-spacing': [ERROR, 'never'],
    'vue/arrow-spacing': [
      ERROR, {
        before: true,
        after: true,
      },
    ],
    'vue/block-spacing': [ERROR, 'always'],
    'vue/brace-style': [
      ERROR, '1tbs', {
        allowSingleLine: true,
      },
    ],
    'vue/comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'vue/component-name-in-template-casing': [
      ERROR, 'PascalCase', {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/dot-location': [
      ERROR,
      'property',
    ],
    'vue/eqeqeq': [
      ERROR, 'always', {
        null: 'ignore',
      },
    ],
    'vue/key-spacing': [ERROR, { afterColon: true }],
    'vue/keyword-spacing': [
      ERROR, {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],
    'vue/no-boolean-default': [ERROR, 'no-default'],
    'vue/no-empty-pattern': [ERROR],
    'vue/no-irregular-whitespace': [ERROR],
    'vue/no-reserved-component-names': ERROR,
    'vue/no-restricted-syntax': ERROR,
    'vue/no-static-inline-styles': ERROR,
    'vue/object-curly-spacing': [ERROR, 'always'],
    'vue/padding-line-between-blocks': [ERROR, 'always'],
    'vue/require-direct-export': ERROR,
    'vue/require-name-property': WARN,
    'vue/space-infix-ops': [ERROR],
    'vue/space-unary-ops': [
      ERROR, {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'vue/v-on-function-call': [ERROR, 'always'],
  },
  ignorePatterns: ['dist/', '**/vendor/*.js', '**/node_modules/'],
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
}
