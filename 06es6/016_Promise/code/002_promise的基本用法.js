function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}
timeout(100).then(value => {
  console.log(value);
});

// 异步加载图片的例子
function loadImageUrl(url) {
	return new Promise((resolve,reject)=>{
		const image = new Image()
		image.onload = function () {
			resolve(image);
		}
		image.onerror = function () {
			reject(new Error('could not load image at' + url))
		}
		image.src = url
	})
}
window.onload = loadImageUrl('./1.jpg').then(result=>{
	console.log(result)
	let div = document.createElement('div');
	div.appendChild(result);
	document.body.appendChild(div)
	console.log(div)
})

// 下面是一个用Promise对象实现的 Ajax 操作的例子。

const getJSON = function(url) {
  const promise = new Promise(function(resolve,reject) {
    const handler = function() {
      if(this.readyState !==4 ) {
        return;
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open('GET',url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept','application/json');
    client.send();
  });
  return promise;
}

getJSON('/post.json').then(function(json) {
  console.log('Contents:' + json);
},function(error) {
  console.log('error：', error);
});

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
