// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
      "brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: false,
        },
      ],
      curly: "error",
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "eol-last": ["error", "always"],
      "max-classes-per-file": ["error", 1],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "*", next: ["if", "switch"] },
      ],
      "no-console": "off",
      "no-constant-condition": "off",
      "no-dupe-class-members": "off",
      "no-multiple-empty-lines": ["error", { max: 3, maxEOF: 0 }],
      "no-undef": "off",
      "no-unused-vars": "off",
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "space-infix-ops": "off",
    },
  },
);