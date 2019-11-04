module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,

  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "react-hooks", "jest", "only-warn"],
  rules: {
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn"
  },
  env: {
    "jest/globals": true,
    browser: true
  }
};
