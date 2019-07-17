(function() {
  let carousel = document.getElementsByClassName("carousel")[0];

  // 定义轮播动画函数
  // 用promise
  // function carAnimation() {}
  function carAnimation(forward) {
    return new Promise((resolve, reject) => {
      if (index == 6 || index == 0) {
        if (index == 6) {
          index = 1;
        } else {
          index = 5;
        }
        carousel.className = "carousel carTrans" + index;
      }

      for (let item of indecators) {
        item.classList.remove("active");
      }
      let indexTmp = index == 5 ? 0 : index;
      indecators[indexTmp].classList.add("active");
      setTimeout(function() {
        if (forward > 0) {
          index++;
        } else {
          index--;
        }
        // console.log(index);
        resolve(index);
      }, 1);
    });
  }

  // 给轮播图盒子添加轮播动画
  // 初始化页面轮播图下标
  let index = 1;
  // 初始化轮播方向
  let timer = setInterval(function() {
    let tmp = new carAnimation(1);
    tmp.then(result => {
      carousel.className = "carousel carTrans carTrans" + result;
    });
  }, 2000);

  // 控制器
  let controllers = document.getElementsByClassName("controllers");

  // 下一张
  controllers[1].onclick = function() {
    clearInterval(timer);
    let tmp = new carAnimation(1);
    tmp.then(result => {
      carousel.className = "carousel carTrans carTrans" + result;
    });
    timer = setInterval(function() {
      let tmp = new carAnimation(1);
      tmp.then(result => {
        carousel.className = "carousel carTrans carTrans" + result;
      });
    }, 2000);
  };

  // 上一张

  controllers[0].onclick = function() {
    clearInterval(timer);
    let tmp = new carAnimation(0);
    tmp.then(result => {
      carousel.className = "carousel carTrans carTrans" + result;
    });
    timer = setInterval(function() {
      let tmp = new carAnimation(1);
      tmp.then(result => {
        carousel.className = "carousel carTrans carTrans" + result;
      });
    }, 2000);
  };

  // 绑定指示器
  let indecators = document.getElementsByClassName("indecators")[0].children;
  // console.log(index);
  for (let i = 0; i < indecators.length; i++) {
    let idc = indecators[i];

    idc.onclick = function() {
      for (let item of indecators) {
        item.classList.remove("active");
      }
      this.classList.add("active");
      // console.log(index);
      clearInterval(timer);
      let forward;
      if (index > i + 1) {
        forward = 0;
        index = i;
      } else if (index < i + 1) {
        forward = 1;
        index = i;
      } else if (index == i + 1) {
        return;
      }
      // console.log(forward+"<br  /> ------------");
      (function() {
        // console.log(forward);
        let tmp = new carAnimation(forward);
        tmp.then(result => {
          carousel.className = "carousel carTrans carTrans" + result;
        });
      })();

      // console.log(index);
    };
  }

  function changeIndecator() {
    for (let item of indecators) {
      item.classList.remove("active");
    }
    indecators[index - 1].classList.add("active");
  }
})();
