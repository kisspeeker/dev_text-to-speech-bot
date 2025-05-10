module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  rules: {
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
  }
};
