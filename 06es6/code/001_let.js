/**
 * 001 var / let 作用域
 */

// for (var i = 0; i < 3; i++) {}
// console.log(i); // 3
// 循环结束的i的值

// for (let i = 0; i < 3; i++) {}
// console.log(i); // Uncaught ReferenceError: i is not defined
// 报错

// var a = [];
// for(var i = 0; i < 3; i++) {
//   a[i] = function() {
//     console.log(i);
//   }
// }
// a[2](); // 3

// var a = [];
// for(let i = 0; i < 3; i++) {
//   a[i] = function() {
//     console.log(i);
//   }
// }
// a[2](); // 2


/**
 * 002 let 不会声明提前
 */
// function tempVar() {
//   console.log(a);
//   var a = 10;
// }
// tempVar(); // undefined

// function tempLet() {
//   console.log(a)
//   let a = 10
// }
// tempLet(); // Uncaught ReferenceError: Cannot access 'a' before initialization

/**
 * 代码块锁定变量
 */
var tmp = 10;
if(1) {
  tmp = '123'
  console.log(tmp)

  let tmp
  console.log(tmp)

  tmp = 123
  console.log(tmp)
}


