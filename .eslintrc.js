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
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
          "": "never",
          "js": "never",
          "ts": "never"
      }
    ],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "{vue,vuex}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@vueuse/**",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "{@ucs-private/**,@@core/**}",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@@core/**/components/**",
            "group": "external",
            "position": "after"
          },
          {
            "pattern": "@/modules/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@/modules/**/components/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["vue"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
      },
    ],
    "import/no-unresolved": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/member-naming": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": [
      "error",
      {
        allowDefinitionFiles: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
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
  "overrides": {
    "files": ["*.ts", "*.mts", "*.cts", "*.tsx"],
    "rules": {
      "@typescript-eslint/explicit-member-accessibility": [
        "error", 
        { 
          accessibility: 'no-public' 
        }
      ],
    },
  }
};
