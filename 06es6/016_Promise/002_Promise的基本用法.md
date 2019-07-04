#### 002_Promise的基本用法

ES6 规定， Promise对象是一个构造函数，用来生成Promise实例。

下面代码创造了一个Promise实例。

```
const promise = new Promise(function(resolve, reject) {
  // ... some code
  
  if(/*异步操作成功*/) {
    resolve(value);
  } else {
    reject(error);
  }
})
```

> Promise 构造函数接受一个函数作为参数，该函数得两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署。
>
> resolve函数得作用是，将Promise对象得状态从“未完成”变为“成功”（即从pending变为resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败是调用，并将异步操作报出的额错误，作为参数传递出去。
>
> Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

```
promise.then(function(value) {
  // success
},function(error) {
  // failure
})
```

> then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

```
function timeout(ms) {
  return new Promise((resolve,reject)=>{
    setTimeout(resolve, ms, 'done');
  })
}
timeout(100).then(value=>{
  console.log(value);
})
```

上面代码中，timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的事件（ms参数）以后，Promise实例的状态变为resolved，就会触发then方法绑定的回调函数。

Promise 新建后就会立即执行。

```
let promise = new Promise(function(resolve,reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});
console.log('Hi!');
// Promise
// Hi！
// resolved.
```

上面代码红，Promise新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。

下面是异步加载图片的例子。

```
function loadImageAsync(url) {
  return new Promise(function(resolve,reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('Could not load image at' + url))
    }
    image.src = url;
  })
}
```

