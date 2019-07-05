#### 002_loader

> `webpack`本身只能打包`Javascript`文件，对于其他资源例如 `css`，图片，或者其他的语法集比如`jsx`，是没有办法加载的。 这就需要对应的`loader`将资源转化，加载进来
>
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



比如你想使用`webpack`来打包样式文件，则可以在`webpack.config.js`里添加如下代码：

```
   module: {
       rules: [
           {
               test: /\.css$/,  // 正则匹配所有.css后缀的样式文件
               use: ['style-loader', 'css-loader'] // 使用这两个loader来加载样式文件
           }
       ]
   } 
```

`module.rules` 允许你在 `webpack` 配置中指定多个 `loader`。 这是展示 `loader` 的一种简明方式，并且有助于使代码变得简洁。

**上述rules的作用：**
`webpack`在打包过程中，凡是遇到后缀为`css`的文件，就会使用`style-loader`和`css-loader`去加载这个文件。