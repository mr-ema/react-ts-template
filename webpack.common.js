const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    filename: 'src/[name].js',
    // Base path for all the assets within your application.
    // Ex. '/' resolve to /public/assets/github.png
    // ! In live server extension you should change '/' to /.build/
    publicPath: '/', // '/' | 'auto' | ASSETS_PATH
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
        test: /\.(png|jpg|svg)$/i,
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
      // Join All Files With '.css' Extention Into One O More Chunks.
      // You Can Specify The Path In The Name Property.  
      cacheGroups: {
        styles: {
          name: 'styles',// Path Where The File Will Be Save
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        // You Can Add Many Vendors As You Want, 
        // Just Remember Add The Name Separate By '|' without spaces.
        // Or It Won't Work 
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendors/vendor-react', // Path Where The File Will Be Save
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}