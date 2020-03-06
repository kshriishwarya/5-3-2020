const path = require("path");
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// const bundleExtractPlugin = new ExtractTextPlugin({
//   filename: 'css/bundle.css',
//   });
module.exports = {

  entry: {
    header: './js/header.js',
   banner:"./js/banner.js"
    
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module:{
  rules: [
    {
      test: /\.hbs$/,
      exclude: /node_modules/,
      use:["handlebars-loader"]
      
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/
      // use: {
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env']
      //   }
      // }
    }
  
  ],
  },
plugins: [ 
  new MiniCssExtractPlugin({
    filename: "style.css"
  }),
  new HtmlWebpackPlugin({
    inject: false,
    hash: true,
    template: './index.html',
    filename: 'index.html'
  }),
  new webpack.ProvidePlugin({
    $: "jquery",  
    jQuery: "jquery" 
})
]}

 
  
