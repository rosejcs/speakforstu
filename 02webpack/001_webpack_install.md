# 001 webpack_init

初始化项目目录配置package.json,记录插件版本和命令代码

```
{...
  script:{
    "test": "...",
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 5000",
    "build": "webpack",
    ...
  },
  ...
}
```



在项目目录下安装webpack 和 webpack-cli

```
npm install webpack webpack-cli --save-dev
```



配置webpack.config.js

```
const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack只能处理js文件
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
  	path: path.join(__dirname+"/dist"),
  	filename: "index.js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/idnex.html",
      filename: "index.html"
    }),
  ],
  module:[
    rules:[
      {
        test:/\.js|jsx$/,
        exclude:/\node_modules/
      },
    ],
  ]
}
```



安装模板插件html-webpack-plugin

```
npm install --save-dev  html-webpack-plugin
```



