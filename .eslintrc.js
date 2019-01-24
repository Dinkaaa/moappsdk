module.exports = {
    extends: [
        'prettier',
        'prettier/standard',
        'airbnb-base'
    ],
    rules: {
        'prettier/prettier': 'error'
    },
    plugins: ['prettier'],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
};
