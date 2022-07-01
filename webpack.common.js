const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, '.build'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/style.css'),
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {// * You Need To Define Assets Here And In custom.d.ts
        test: /\.(png|jpg)$/i,
        loader: 'file-loader',
        options:  {
          // Custom Path To Save Assets When Build
          name: 'public/assets/[hash].[ext]',
        },
      }
    ]
  },

  resolve: {
    alias: {
      // ! Important
      // * To Add More Paths You Have To Added Here And In tsconfig.json
      '@': path.resolve(__dirname, 'src'),
      '@Public': path.resolve(__dirname, 'public')
   },
   extensions: ['.tsx', '.ts', '.js']
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/](react | react-dom)[\\/]/,
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
}