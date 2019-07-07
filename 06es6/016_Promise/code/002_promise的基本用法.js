function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, "done");
  });
}
timeout(100).then(value => {
  console.log(value);
});


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




