var div = document.getElementsByTagName('div')[0];
var dragging = false;
div.addEventListener('mousedown', function(e) {
  dragging = true;
  coordinate(e);
});
document.addEventListener('mouseup', function() {
  dragging = false;
});
document.addEventListener('mousemove', function(e) {
  if (dragging) {
    coordinate(e);
  }
});

function coordinate(e) {
  div.style.left = e.clientX + 'px'; //相对于div左上角的偏移的api是啥和鼠标的位置
  div.style.top = e.clientY + 'px';
}
//大数加法
function bigIntAdd(x, y) {
  //小学加法
  x = (x + '').split('');
  y = (y + '').split('');
  var len = x.length > y.length ? x.length : y.length;
  var arr = [],
    idx = 0,
    up = 0;
  while (len >= 0) {
    var sum;
    if (x.length <= 0) {
      sum = +y.pop();
    } else if (y.length <= 0) {
      sum = +x.pop();
    } else {
      var [temX, temY] = [x.pop(), y.pop()];
      sum = +temX + +temY;
    }
    if (sum + '' === 'NaN') {
      break;
    }
    var temNum = sum;
    if (sum > 10) {
      temNum = +(sum + '')[1];
    }
    if (up) {
      temNum += 1;
      if (temNum >= 10) {
        up += 1;
        temNum = 0;
      } else {
        up = 0;
      }
      arr[idx] = temNum; //如果此时进位？
    } else {
      arr[idx] = temNum;
    }
    if (temNum < sum) {
      up = 0;
    }
    idx++;
    len--;
  }
  arr = arr.reverse();
  // arr.shift();
  return arr;
}
console.log(bigIntAdd(2 ** 53, 1));
