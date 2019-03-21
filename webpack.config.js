const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: './views/src/index.js'
  },
  output: {
    path: __dirname + '/.tmp/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  resolve: {
    alias: {
      '@helpers': '../../helpers/'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'views/src/index.html'
    })
  ]
};
