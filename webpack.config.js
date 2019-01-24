const path = require('path');
const webpack = require('webpack');

module.exports = () => {

    return {
        entry: ['babel-polyfill', './src/index.js'],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/'
                }
            ]
        },
    };
};