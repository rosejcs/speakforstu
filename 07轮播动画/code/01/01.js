(function() {
  let carousel = document.getElementsByClassName('carousel')[0]
  let carouItem = carousel.children;
  
  // 定义轮播动画函数
  function carAnimation(origin,forward=1) {
    if(index == 6 || index == 0) {
      if(index == 6) {
        index = 1;
      }else if(index == 0) {
        index = 5;
      }
      setTimeout(function() {
        origin.className = "carousel carTrans" + index
      },8)
    }
    
    
    if(forward>0) {
      index++
    }else {
      index--
    }
    origin.className = "carousel carTrans"
    origin.className += " carTrans" + index
  }

  // 给轮播图盒子添加轮播动画
  // 初始化页面轮播图下标
  let index = 1;
  // 初始化轮播方向
  let forward = 1;
  let timer = setInterval(function() {
    carAnimation(carousel)
  },2000)



  
}())