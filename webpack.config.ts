const path = require('path');
// const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/build'),
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: 'http://localhost:8080/build/',
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
      },
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        exclude: path.resolve(__dirname, 'node_modules/'),
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
  },
};