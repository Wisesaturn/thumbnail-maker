/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-duplicates': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        css: 'never',
      },
    ],
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME', 'XXX', 'BUG', 'HOLD'],
        location: 'anywhere',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  globals: {
    NodeJS: true,
  },

  // Base config
  extends: ['airbnb-base', 'eslint-config-prettier'],

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y', 'prettier', 'react-refresh'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/no-unknown-property': ['error', { ignore: ['color-theme', 'css'] }],
        'react/display-name': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': ['off'],
        'react/jsx-no-target-blank': 'error',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent', 'index'],
              'type',
              'unknown',
            ],
            pathGroups: [
              {
                pattern: '{react*,react*/**}',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '$components/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '$libs/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '$constants/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '$styles/**',
                group: 'internal',
                position: 'after',
              },
            ],
            'newlines-between': 'always',
          },
        ],
      },
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            selector: 'variable',
            leadingUnderscore: 'allowDouble',
          },
          {
            format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            selector: 'variable',
            leadingUnderscore: 'allow',
          },
          { format: ['camelCase', 'PascalCase'], selector: 'function' },
          { format: ['PascalCase'], selector: 'interface' },
          { format: ['PascalCase'], selector: 'typeAlias' },
        ],
      },
      settings: {
        'import/internal-regex': '^$/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx'],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
