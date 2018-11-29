module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  // see: https://eslint.org/docs/user-guide/configuring
  rules: {
    "space-before-function-paren": ["error", "never"],
    "no-extra-semi": "error",
    semi: ["error", "never"],
    "no-unreachable": "error",
    "no-multi-spaces": "error",
    "block-spacing": ["error", "always"],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "no-lonely-if": ["error"],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1
      }
    ],
    "no-whitespace-before-property": ["error"],
    "no-unneeded-ternary": ["error"],
    "padded-blocks": ["error", "never"],
    "no-self-assign": ["error"],
    "no-self-compare": ["error"],
    "no-unused-labels": ["error"],
    "no-useless-concat": ["error"],
    "no-return-assign": ["error"],
    "no-class-assign": ["error"],
    "no-fallthrough": ["error"],
    "no-invalid-this": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    eqeqeq: ["error"],
    "no-mixed-spaces-and-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "space-before-blocks": ["error"],
    "spaced-comment": ["error"],
    "space-infix-ops": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-keys": ["error"],
    "no-constant-condition": ["error"],
    "space-unary-ops": ["error"],
    "comma-spacing": ["error"],
    "no-empty-function": ["error"],
    "no-unused-vars": ["error"],
    "no-else-return": ["error"],
    "no-useless-call": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-return": ["error"],
    "no-alert": ["error"],
    "no-multi-str": ["error"],
    "no-catch-shadow": ["error"],
    "no-use-before-define": ["error"],
    "no-undefined": ["error"],
    "no-undef-init": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-delete-var": ["error"],
    "no-eval": ["error"],
    quotes: ["error", "single", { avoidEscape: true }]
  }
};
