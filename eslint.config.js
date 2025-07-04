import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'react/jsx-no-undef': 'error',
      'no-undef': 'off',
      'node/prefer-global/process': 'off',
      'import/consistent-type-specifier-style': 'off',
      'perfectionist/sort-named-imports': 'off',
      'no-undef-init': 'off',
      eqeqeq: 'warn',
      'prefer-template': 'warn',
      'perfectionist/sort-imports': 'off',
      'jsonc/sort-keys': 'off',
      'unicorn/prefer-number-properties': 'off',
    },
  },
])
