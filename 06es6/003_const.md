#### 003_const

> **const**声明一个只读的常量。一旦声明，常量的值就不能改变，这意味着，一旦声明必须立刻初始化，不能后续赋值，否则报错。

```
if(true) {
  console.log(MAX)
  const MAX = 5
}
const 声明的常量，也与 let 一样不可重复声明。
所以以上代码，在常量声明钱就调用，结果报错。
```

```
var msg = 'hello'
let age = 25
// 以下两行代码报错
const msg = 'goodbye'
const age = 30
```

对于原始数据类型，const指向的那个内存地址所保存的数据不得改动，值就保存在变量指向得那个内存地址，因此等同于常量。

对于引用数据类型，变量指向得内存地址，保存得只是一个指向实际数据得指针，const只能保证这个指针是固定得，至于它指向的数据结构是不是可变的，就完全不能控制了。

```
const foo = {}

// 为foo 添加一个属性，可以成功
foo.prop = 123
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {} // TypeError: "foo" is read-only
```

如果真的想将对象冻结，应该使用Object.freeze方法

```
const foo = Object.freeze({})

// 常规模式时，下面一行不起作用
// 严格模式时，该行会报错
foo.prop = 123
```

上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数

```
var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach( (key, i) => {
    if( typeof obj[key] === 'object' ){
      constantize( obj[key] );
    }
  })
}
```

###### ES6 声明变量的六种方法

> ES5 只有两种声明变量的方法：var 命令 和 function 命令。ES6 除了添加 let 和 const ，还有两种声明变量的方法：import 和 class 。共6种