module.exports = {
    env: {
        browser: true,
        node: true,
        es2020
    },
    extends: ['airbnb-base', "prettier"],
    parserOptions: {
        sourceType: "module",
        ecmaversion: 11
    }
}