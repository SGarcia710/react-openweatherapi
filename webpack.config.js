const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV != 'production'; //si estoy en produccion esto me da false


module.exports = {
  entry: [
    '@babel/polyfill',
    './src/app/index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader' //proceso todos los archivos .js con babel loader.
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, //si estoy en desarrollo usa style-loader, en produccion usa minicssextractplugin 
          'css-loader' //proceso con estos dos los archivos .css
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]
}