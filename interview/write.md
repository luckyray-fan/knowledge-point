## 有趣的题目们

### promise

#### LazyMan

2020.3 腾讯 wxg(微信)

> [来源](https://www.jianshu.com/p/f1b7cb456d37)

### 实现

#### 拖动

2020.3 腾讯 pcg

```JavaScript
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
```

### 大数

2020 腾讯 pcg(qq)

- 数字转为数组
- 记住进位和数组长度

> [来源](https://juejin.im/post/5d11bd7af265da1b8a4f2b27)

### 类型转换

#### (a===1&&a===2&&a===3) 为 true

> [来源](https://juejin.im/post/5e66dc416fb9a07cab3aaa0a)

#### sum(1)(1,2)(3) = 7

```JavaScript
function sum (...args) {
    function fn(...newArgs) {
        return sum(...args, ...newArgs)
    }//两个数组被转为了参数
  	// 当最后返回函数的时候, 由类型转换, fn 对象自动调用toString
    fn.toString = () => {
        return args.reduce((a, b) => {
            return a + b
        })
    }

    return fn
}
```

> [来源](https://juejin.im/post/5e66dc416fb9a07cab3aaa0a)

## 智力题?

#### 时针分针夹角

2020.3 腾讯 pcg

分针的角度-时针的角度-时针移动的角度

> [来源](https://zhidao.baidu.com/question/216373048.html)

- 那么两针成 90 度可以是啥时候啊 😉
- 长针每分钟走 6 度, 断针每分钟走 0.5 度, 所以只需要 90/5.5, 就可以知道当时针与分针相同时, 接下来走多久成 90 度

#### 5 升瓶子和 6 升瓶子装水

反正就是装水, 大瓶装满倒入小瓶, 小瓶倒掉, 再将剩余水倒入小瓶, 重复几次, 大瓶里面就有想要的水了

那么有什么原理或公式吗, 能倒出小于最大瓶的所有水的升数吗

- 看大瓶和小瓶之间水的差别, 如果为 1 那么应该是可以的

#### 100 人教室至少同时喜欢打篮球与网球 😉 的人数

2020.3 腾讯 csig(腾讯云)

和学校里最少有多少人生日日期问题相同, 每个位置都分布清楚, 366 人至少有 2 人相同(平年)

所以用同时的人数减去总重复人数就出来了, 按照惯例, 那么如果是求一个范围呢, 最小值出来了最大值当然是喜欢人数最小的那一种啦~

> [来源](https://zhidao.baidu.com/question/938317867165643212.html)
