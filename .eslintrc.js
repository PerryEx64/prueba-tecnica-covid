module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        'react/react-in-jsx-scope': 'off',
        "@typescript-eslint/no-misused-promises": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "multiline-ternary": 'off',
        "@typescript-eslint/indent" : 'off'
    }
}
