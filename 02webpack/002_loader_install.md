#### 002_loader

> webpack 可以使用 [loader](https://www.webpackjs.com/concepts/loaders) 来预处理文件。这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。
>
> 常用到的loader：
>
> 样式
>
> 1.css-loader：解析css文件中代码
>
> 2.style-loader：将css模块作为样式导出到DOM中
>
> 3.sass-loader：加载和转义sass/scss文件
>
> 4.less-loader：加载和转义less文件
>
> 脚本转换编译：
>
> 1.babel-loader：用于将ES6代码转义为ES5后浏览器才能解析