const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: 'js/[name].[chunkHash:8].js'
  },
  devServer: {
    index: 'index.html',
    port: 3001
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello app 123',
      template: 'public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkHash:8].css'
    }),
  ]
}