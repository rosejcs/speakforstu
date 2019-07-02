#### 001_弹性布局

一. 网页布局是我们前端基本功之一

网页标签基于盒状模型, 依赖displlay属性 + position 属性 + float 属性.对于某些特殊的布局方式极其不便.

> 现在有一个父盒子类名为parent的div,其中有一个类名为kid的子盒子div
>
> 要求让这个子盒子相对于父盒子水平居中和垂直居中

```
.parent {
  width: 400px;
  height: 400px;
  background: grey;
}
.kid {
  width: 100px;
  height: 100px;
  background: pink;
}
```

方法一:

```
/* 水平居中 */
.kid {
  margin: 0 auto;
}
/* 垂直居中 */
.parent {
  position: relative;
}
.kid {
  position: absolute;
  top: 50%;
  margin-top: -50px;/* 子盒子的高度的一半 */
  /* 也可以使用transform */
  transform: translateY(-50%);
}
```

方法二:

```
.parent { position: relative; }
.kid {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

方法三:

```
.parent { 
  display: inline-block;
}
.parent::after {
  content:"";
  display: inline-block;
  height: 100%;
}
.kid {
  display: inline-block;
  vertical-align: middle;
}
```

