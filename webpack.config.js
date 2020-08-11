const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, './src/build'),
    filename: 'bundle.js',
  },
  mode: 'production',
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude:  /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.s?css$/i,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  }
};