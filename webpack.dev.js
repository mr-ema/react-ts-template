const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      template: 'public/index.html',
    }),
  ],
  
  devServer: {
    static: '.build',
    historyApiFallback: true
  }
})