module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        React: true
    },
    rules: {
        'no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'none'
        }],
        'semi': ['error', 'always'],
        'no-trailing-spaces': ['error', {
            'skipBlankLines': false
        }],
        'no-console': ['error'],
        'eol-last': ['error', 'unix'],
        'linebreak-style': ['error', 'unix'],
        'no-labels': ['error'],
        'no-eval': ['error', {
            'allowIndirect': false
        }],
        'no-implied-eval': ['error'],
        'no-with': ['error'],
        'no-unreachable': ['error'],
        'use-isnan': ['error'],
        'no-debugger': ['error'],
        'no-alert': ['error'],
        'no-dupe-keys': ['error'],
        'no-redeclare': ['error'],
        'no-return-assign': ['error', 'always'],
        'no-self-assign': ['error'],
        'no-sequences': ['error'],
        'no-extra-label': ['error'],
        'no-spaced-func': ['error'],
        'valid-typeof': ['error'],
        'no-else-return': ['error'],
        'no-void': ['error'],
        'no-delete-var': ['error'],
        'no-array-constructor': ['error'],
        'operator-assignment': ['error', 'always'],
        'no-dupe-args': ['error'],
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never'
        }],
        'max-params': ['error', 5],
        'curly': ['error', 'all'],
        'keyword-spacing': ['error', {
            'before': true,
            'after': true
        }],
        'space-before-blocks': ['error', 'always'],
        'no-nested-ternary': ['error'],
        'no-unneeded-ternary': ['error'],
        'max-len': ['error', {
            'code': 150
        }],
        'key-spacing': ['error', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict'
        }],

        'react/no-children-prop': ['error'],
        'react/no-danger': ['error'],
        'react/no-danger-with-children': ['error'],
        'react/no-deprecated': ['error'],
        'react/no-direct-mutation-state': ['error'],
        'react/no-find-dom-node': ['error'],
        'react/no-is-mounted': ['error'],
        'react/no-multi-comp': ['error'],
        'react/no-redundant-should-component-update': ['error'],
        'react/no-render-return-value': ['error'],
        'react/no-unescaped-entities': ['error'],
        'react/no-unknown-property': ['error'],
        'react/no-unused-prop-types': ['error'],
        'react/prop-types': ['error'],
        'react/react-in-jsx-scope': ['error'],
        'react/require-render-return': ['error'],
        'react/self-closing-comp': ['error'],
        'react/sort-comp': ['error'],
        'react/jsx-uses-vars': ['error'],
        'react/jsx-uses-react': ['error']
    }
};
