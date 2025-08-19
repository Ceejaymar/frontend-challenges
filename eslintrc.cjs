/* eslint-disable no-undef */
module.exports = {
  root: true,
  ignorePatterns: ["dist", "build", "node_modules"],
  env: { browser: true, es2022: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "detect" } },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "unused-imports",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "warn",
      { "newlines-between": "always", alphabetize: { order: "asc" } },
    ],
  },
  overrides: [
    // JS/TS React apps
    {
      files: ["apps/**/src/**/*.{ts,tsx,js,jsx}"],
      parser: "@typescript-eslint/parser",
    },
    // Vanilla HTML/CSS/JS apps: relax rules for simple scripts
    {
      files: ["apps/**/scripts/**/*.js", "apps/**/index.html"],
      rules: {},
    },
  ],
};
