# Welcome To WRT

A Webpack + React + Typescript Template.
## Installation

```bash
git clone https://github.com/mr-ema/react-ts-template.git
```



## Run Locally

```bash
npm install
```

```bash
npm run start:dev
```

## Build
```bash
npm run build
```


## Usage/Examples

# Development
<root>/webpack.dev.js

- [devtool](https://webpack.js.org/configuration/devtool/)

```javascript
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
    port: 3000,
    static: ['.build', 'public'],
    historyApiFallback: true,
    hot: true,
  }
})
```

# Production
- [Performance](https://webpack.js.org/configuration/performance/#performancehints).
Hints: 'warning' | 'error' | false
- 'warning' A warning will be displayed notifying you of a large asset.
- 'error' An error will be displayed notifying you of a large asset.
- false No hint warnings or errors are shown.

```javascript
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
```