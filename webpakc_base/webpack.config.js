const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
 
module.exports= {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
      open: true,
      port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [require('autoprefixer')]
                    //         }
                    //     }
                    // }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: "[name].[ext]",
                        limit: 1024 * 3,
                        outputPath: 'images/',
                        publicPath: 'images',
                    }
                }
            }
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css"
      }),
      new HtmlWebpackPlugin({
          template: 'index.html'
      }),
      new CleanWebpackPlugin()
    ]
}