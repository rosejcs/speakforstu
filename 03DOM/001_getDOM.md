#### 001_获取DOM元素

> js中获取dom元素的方式有两种,
> 一种是通过document.去获取html中的标签
> 一种是通过父级/子级去获取对应的子级/父级

```
<div id="pId" class="pClass">
  this is a parent div
  <div class="kClass">
    this is a kid div
  </div>
</div>
<script type="text/javascript">
// 通过类名获取元素--document.getElementsByClassName('className')
// 通过标签名获取----document.getElementsByTagName('tagName');
// 通过id名获取-----document.getElementById('idName');
// 有另外一种写法:
// document.querySelectorAll('css选择器');// 结果是一个相应的元素的数组集合
// document.querySelector('css选择器');// 结果是一个元素

	let divArr = document.getElementsByTagName('div'); 
	let pDiv = document.getElementById('pId');
	let kDiv = document.querySelector('div.kClass');
	// 也可以使用查找父元素的子元素来获取这个元素
	// let kDiv = pDiv.children[0];// 获取pDiv元素的标签子元素(如果是childNodes,则包含文本子元素)
</script>
```

