module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
