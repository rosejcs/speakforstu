(function() {
  let carousel = document.getElementsByClassName("carousel")[0];

  let controllers = document.getElementsByClassName("controllers");

  let ids = document.getElementsByClassName("indecator-item");
  // 定义轮播动画函数
  // 用promise
  // function carAnimation() {}
  function carAnimation(forward) {
    return new Promise((resolve, reject) => {
      if (index == 6 || index == 0) {
        if (index == 6) {
          index = 1;
        } else if (index == 0) {
          index = 5;
        }
        carousel.className = "carousel carTrans" + index;
      }

      setTimeout(function() {
        resolve(index);
      }, 1);
    });
  }
  function step(forward) {
    let tmp = new carAnimation(forward);
    tmp.then(result => {
      index = result;
      if (forward == 1) {
        index++;
      } else if (forward == 0) {
        index--;
      }
      
      carousel.className = "carousel carTrans carTrans" + index;
      setTimeout(function() {
        if (index == 6) {
          index = 1;
          carousel.className = "carousel carTrans" + index;
        }
      
        for (let item of ids) {
          item.classList.remove("active");
        }
        let idsIndex = index - 1;
        // 解决下标0->负数的下标变化
        if(idsIndex<0) {
          idsIndex = 4;
        } else if(idsIndex > 4) {
          idsIndex = 0;
        }
        ids[idsIndex].classList.add("active");
        
      }, 1000);
    });
  }
  function run(forward) {
    timer = setInterval(function() {
      step(forward);
    }, 2000);
  }
  // 初始化index,并调用轮播动画
  let index = 1;
  let timer = null;
  run(1);

  // 鼠标进入时,暂停轮播,清除定时器即可
  carousel.parentNode.addEventListener("mouseenter", function() {
    clearInterval(timer);
  });
  carousel.parentNode.addEventListener("mouseleave", function() {
    run(1);
  });
  // 控制器controllers
  // 下一张
  controllers[1].addEventListener("click", function() {
    step(1);
  });
  // 上一张
  controllers[0].addEventListener("click", function() {
    step(0);
  });
  // 指示器
  for (let i = 0; i < ids.length; i++) {
    ids[i].onclick = function() {
      for (let item of ids) {
        item.classList.remove("active");
      }
      this.classList.add("active");
      let count = i + 1;
      // if(i+1==index) {
      //   return;
      // } else{
      //   count =Math.abs(index-(i+1))
      // }
      if (count > index) {
        count -= index;
        for (let j = 0; j < count; j++) {
          step(1);
        }
      } else if (count < index) {
        count = index - count;
        for (let j = 0; j < count; j++) {
          step(0);
        }
      }
    };
  }
})();
