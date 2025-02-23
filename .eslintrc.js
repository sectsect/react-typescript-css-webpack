// import path from 'path';

module.exports = {
  extends: [
    'react-app',
    // 'react-app/jest',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    jest: { version: 28 },
    // 'import/ignore': ['.css$', 'node_modules/*'],
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'unused-imports',
    'tailwindcss',
    'eslint-plugin-tsdoc',
    'prefer-arrow',
    'import',
    'prettier',
    'jest',
    'jest-dom',
    'testing-library',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    window: true,
    lazySizes: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
    // extraFileExtensions: ['.css'],
  },
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'sort-imports': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    // 'import/resolver': {
    //   webpack: {
    //     config: 'webpack.config.js',
    //     config: path.join(__dirname, 'webpack.dev.config.ts'), // @ https://github.com/import-js/eslint-plugin-import/issues/352#issuecomment-236821515
    //   },
    // },
    'jsx-a11y/label-has-associated-control': 'off',
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'no-underscore-dangle': 0,
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-fragments': 0,
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['function', 'parameter'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['variable'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        // custom: {
        //   regex: "^I[A-Z]",
        //   match: false
        // }
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^Window$',
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'prettier/prettier': 'error',
  },
};
