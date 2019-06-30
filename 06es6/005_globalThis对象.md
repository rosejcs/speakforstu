#### 005_globalThis对象

javascript语言存在一个顶层都喜爱给你，它提供全局环境（即全局作用域），所有代码在这个环境中运行。但，顶层对象在各种实现里面是不统一的。

+ 浏览器中，顶层对象是window，但 Node 和 Web Worker 没有window
+ 浏览器和Web Worker 里面，self 也指向顶层对象，但是Node 没有 self
+ Node 里，顶层对象是global ,但其他环境都不支持。

同一段代码为了能够在各种环境都能取到顶层对象，现在一般是使用this 变量，但是有局限

+ 全局环境中， this 会返回顶层对象，但，Node 模块和 ES6 模块中，**this** 返回的是当前模块

+ 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this 会指向顶层对象。但是，严格模式下，这时this 会返回undefined

+ 不管是严格模式，还是普通模式，new Function('return this')(),总是会返回全局对象。

  但是，如果浏览器用了CSP（Content Security Policy，内容安全策略），那么eval，new Function 这些方法都可能无法使用。