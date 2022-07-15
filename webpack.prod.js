const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'public/favicon.ico', to: 'public/'}, // * <-- Route to favicon
        {from: 'public/logo.png', to: 'public/'}, // * <-- Route to logo for apple-icon
      ]
    }),
  ],
  performance: {
    hints: 'error',
    maxEntrypointSize: 312000,
    maxAssetSize: 312000
}
})