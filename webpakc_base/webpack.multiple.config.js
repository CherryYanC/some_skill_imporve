const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const HtmlPlugin = require("./plugins/html_plugin")

module.exports = {
    mode: 'development',
    entry: {
        login: './src/login/index.js',
        // home: './src/home/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: path.resolve(__dirname, 'loaders/replaceLoader.js')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'home.html',
            chunks: ['home'],
        }),
        // new HtmlPlugin(),
        new CleanWebpackPlugin()
    ]
}