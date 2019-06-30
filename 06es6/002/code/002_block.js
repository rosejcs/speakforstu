// function f() {  console.log('Outside')  }
// (function () {
//   if(false) {
//     function f() {  console.log('Inside')  }
//   }
//   f()
// }())

//Uncaught TypeError: f is not a function

// {
//   let a = 'secret'
//   let f = function () {
//     return a;
//   }
//   console.log(f())
// }

// 报错
// if(true) let x = 1

// 不报错
// if(true) {
//   let x = 1
//   console.log(x)
// }


/**
 * 函数声明
 */
// 不报错
// 'use strict'
// if(true) {
//   function f() {}
// }


// 'use strict'
// if(true)
//   function f() {}
// Uncaught SyntaxError: In strict mode code, functions can only be declared at top level or inside a block.