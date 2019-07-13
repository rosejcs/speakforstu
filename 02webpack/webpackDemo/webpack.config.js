const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output:{
    path:__dirname+'/dist/',
    filename:'index.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html'
    })
  ],
  
  module:{
    rules:[
      {
        test:/\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.(jpg|png|gif)$/i,
        use:['url-loader']
      }
    ],
  }
  
}