const path = require("path");
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  entry: {
    header: './js/header.js',
    banner:"./js/banner.js"
    
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
 
  
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
       
        }]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",  
      jQuery: "jquery" 
  })
]
 
};