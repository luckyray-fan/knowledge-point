## 有趣的题目们

### 正则

#### 数字千分位切割

> 字节

```JavaScript
function test(num){
  return (num+'').replace(/(\d)(?=(?:\d{3})+$)/g,'$1,')
}
```

> [来源](https://mrluo.life/article/detail/115)

### 原生 ajax

### 闭包

#### 判断输出

```JavaScript
// 写出下面这段代码打印的结果
   var result = [];
   var a = 3;
   var total = 0;
   function foo(a) {
     var i = 0;
     for (; i < 3; i++) {
       result[i] = function() {
         total += i * a;
         console.log(total);
       }
     }
   }

   foo(1);
   result[0]();
   result[1]();
   result[2]();
   // 3, 6, 9
```

### promise

#### sleep

```JavaScript
function sleep(ms){
  return new Promise(res=>{
    setTimeout(res,ms);
  })
}
```

#### 实现 shedule 调度

实现并发限制, 保证同时运行的任务最多有两个

> [这个就是 bluebird 的`promise.map()`](https://juejin.im/post/5d4a1d30f265da03f564cbf1)

```javascript
// 实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
  add(promiseCreator) {
    // TODO
  }
  // TODO
}
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
```

- 已经设想过的道路, 下载图片的时候, 下载函数是一直被不断调用的, 该函数执行过程如下:
  - 检测在下载对象中是否已经存在了这个文件, 如果有将其置为 false, 开始下载,否则对下载总数加一
  - 如果当前下载的总数大于限定值将其放入下载队列, 否则开始下载
  - 下载请求建立一个写入流, 然后将下载的数据 pipe 进入, 并且对写入流进行监听
  - 如果写入流完成, 从下载队列中取一个出来调用该函数

#### 判断输出

- promise 构造函数传入的先执行, 遇到 then 放入微任务
- await 的函数直接执行, 遇到 promise 将执行后的放入微任务, await 相当于采用了 `promise.resolve()`

> [来源](https://segmentfault.com/q/1010000016147496)

```JavaScript
// 写出下面这段代码打印的结果
   async function async1() {
     console.log('async1 start');
     await async2();
     console.log('async1 end');
   }

   async function async2() {
     console.log('async2 start');
     return new Promise((resolve, reject) => {
       resolve();
       console.log('async2 promise');
     })
   }

   console.log('script start');

   setTimeout(function() {
     console.log('setTimeout');
   }, 0);

   async1();

   new Promise(function(resolve) {
     console.log('promise1');
     resolve();
   }).then(function() {
     console.log('promise2');
   }).then(function() {
     console.log('promise3');
   });

   console.log('script end');


   // 答案
  //  script start
  //  async1 start
  //  async2 start
  //  async2 promise
  //  promise1
  //  script end
  //  promise2
  //  promise3
  //  async1 end
  //  setTimeout
```

#### LazyMan

2020.3 腾讯 wxg(微信)

- 链式调用
- 队列, 异步

> [来源](https://www.jianshu.com/p/f1b7cb456d37)

> [另一种写法](https://juejin.im/post/5c7f7051f265da2dbf5f2e64)

### 实现

#### 百度输入框

#### css 实现开关样式

通过 label 的 for 属性来控制 input 的 checked, 凭此来控制样式

也可以用 hover 伪属性来控制, 动画依靠 transition

> [来源](https://juejin.im/post/5d270f76f265da1bbf69482f)

#### 直播点赞按钮冒泡

#### js 判断元素坐标

> [来源](https://juejin.im/post/5be03f4fe51d45053a454e69)

> [如何判断元素是否进入可视区域 viewport](https://juejin.im/post/5be03f4fe51d45053a454e69)

#### 由坐标得知此处的所有元素

`document.elementFromPoint()` 返回当前文档上处于指定坐标位置最顶层的元素, 然后在这里`document.elementFromPoint().click()` 就能根据传入的[事件对象的 path](https://stackoverflow.com/questions/26195091/determine-event-path-in-dom-event-bubbling/30021867) 来找出元素

当然, 还可以用`document.all`获得所有属性然后通过对比元素的范围与坐标来判断

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint)

#### contextmenu

也就是右键呼出上下文菜单

**实现步骤:**

- dom 结构 css 编写
- 监听`contextmenu`事件, 先阻止默认事件, 然后设置之前的菜单的显示和位置, 位置用`e.pageX`

> [来源](https://dev.to/iamafro/how-to-create-a-custom-context-menu--5d7p)

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

#### 双飞燕布局

- float
- inline-block
- flex

### 海量 IP 寻找出现最多的一个

- 大文件转为小文件, 多线程
- hash map
- 堆排序

> [来源](https://www.zhihu.com/question/25652393#5)

### js 实现

#### 类与继承

- 创建一个 Person 类，其包含公有属性 name 和私有属性 age 以及公有方法 setAge ；创建一个 Teacher 类，使其继承 Person ，并包含私有属性 studentCount 和私有方法 setStudentCount 。

#### 计算英文文章中出现最多的单词和次数

```JavaScript
function count(article){
  var temArr = article.split(' ');
  var obj = {},maxWord=temArr[0];
  temArr.forEach(i=>{
    if(obj[i]){
      obj[i]+=1;
      if(obj[i]>obj[maxword]){
        maxword = i
      }
    }else{
      obj[i]=1;
    }
  })
  return {[maxword]:obj[maxword]}
}
```

#### 二进制加法

> [来源](http://zouyang1230.com/blog/archives/805)

#### 版本号

2020.3 阿里 钉钉

> [来源](https://juejin.im/post/5b74e9ed518825295d2a1151)

### 大数

2020 腾讯 pcg(qq)

- 数字转为数组
- 记住进位和数组长度

> [来源](https://juejin.im/post/5d11bd7af265da1b8a4f2b27)

#### 进制转换

```javascript
function test(num) {
  var decimal = parseInt(num, 3);
  return decimal.toString(6);
}
```

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

### 时针分针夹角

2020.3 腾讯 pcg

分针的角度-时针的角度-时针移动的角度

> [来源](https://zhidao.baidu.com/question/216373048.html)

- 那么两针成 90 度可以是啥时候啊 😉
- 长针每分钟走 6 度, 断针每分钟走 0.5 度, 所以只需要 90/5.5, 就可以知道当时针与分针相同时, 接下来走多久成 90 度

### 5 升瓶子和 6 升瓶子装水

反正就是装水, 大瓶装满倒入小瓶, 小瓶倒掉, 再将剩余水倒入小瓶, 重复几次, 大瓶里面就有想要的水了

那么有什么原理或公式吗, 能倒出小于最大瓶的所有水的升数吗

- 看大瓶和小瓶之间水的差别, 如果为 1 那么应该是可以的

### 100 人教室至少同时喜欢打篮球与网球 😉 的人数

2020.3 腾讯 csig(腾讯云)

和学校里最少有多少人生日日期问题相同, 每个位置都分布清楚, 366 人至少有 2 人相同(平年)

所以用同时的人数减去总重复人数就出来了, 按照惯例, 那么如果是求一个范围呢, 最小值出来了最大值当然是喜欢人数最小的那一种啦~

> [来源](https://zhidao.baidu.com/question/938317867165643212.html)

### 功劳不同的人分蛋糕

> [来源](https://www.zhihu.com/question/23762948)

### 博弈

> 腾讯

100 个人轮流拿书，最少 1 本最多 5 本，你先拿，怎么确保你一定赢

> [如何在取硬币游戏中必胜？（有关尼姆博弈）](https://www.zhihu.com/question/29910524)

### 帽子颜色

> 抖音

岛上有群人，各自戴着红帽子或者白帽子，但都不知道自己帽子颜色，只有知道自己帽子颜色，第二天才能出岛，这时候有个人进来说了句“你们之中至少有一个人戴了顶红帽子” 问岛上的人最后的离开情况

# 算法

> 这里就面试题原题

## 排序

---

v8 底层是插入排序加快速排序, 数组长度在一定长度下用插入

> [来源](https://segmentfault.com/q/1010000007133473)

### 快排

> 很多公司都考过

- 找到该数组的基准点, 创建左右空数组
- 遍历数组比较基准点, 小的左边, 大的右边
- 递归左右数组

```JavaScript
function quickSort(arr){
  if(arr.length<=1)return arr;
  var left = [],
  right = [],
  pivot = arr[0]
  for(var i = 0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot],quickSort(right))
}
```

## 查找

---

哈希, 二叉树

## 树

### 树的遍历

> 字节跳动

深度遍历前中后序, 广度遍历层次遍历, 层次遍历用一个队列来维护

> [来源](https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C)

### 判断对称二叉树

> 字节跳动

递归, 取出左右节点的值如果不同返回 false, 最后一层一层返回上来

> [来源](https://leetcode-cn.com/problems/symmetric-tree/solution/javascript-di-gui-si-lu-he-shi-xian-by-xin-tan/)

## 杂项?

### n 项和为 sum

就是求一下全排列然后对比一下是否相同, 当然也有优化的方法, 比如排序然后从左到右取, 再优化可以是二分法

### 两数之和

用一个对象保存数据然后, 然后一遍循环找出来

### 第 k 个数

排序然后取第 k 个就好了`nlogn`, 然后优化是, 冒泡取 `n*k`, 堆`nlogk`

> [来源](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/shu-zu-zhong-de-di-kge-zui-da-yuan-su-by-leetcode/)

### 进制转换

> 字节跳动

所谓进制呢, 每一个位都代表不同的大小, 个位十位百位千位本质上就是 10<sup>0</sup> 10<sup>1</sup> 之类的

- 其他位转为十进制
  - 例如: `1010`, 1 在 8 位上, `1*8+0*4+1*2+0*1=10`
- 十进制转为其他位, 短除法

> [来源](https://www.zhihu.com/question/20993504)

### 洗牌算法

shuffle~, 以前写一个小游戏, 蜘蛛纸牌也用过, 不过没有写结尾的动效, 因为没有用它玩到过结尾 😆

**目的:**

- 公平的将牌的位置进行交换
  - 一个长度为 n 的数组有`n!`中可能的排列, 所以应该给出这`n!`个数组中可能的任意一种, 这才公平
  - 也就是说每个元素出现在每个位置的概率是相等的

```JavaScript
for(var i = len-1;i>=0;i--){// 经典的概率论,
  let tem = arr[i],
  random = Math.random()*i;
  arr[i] = arr[random];
  arr[random] = tem;
}
```

> [来源](https://www.zhihu.com/question/27547892/answer/1064577220)

### 合并乱序区间

> 字节

```JavaScript
function test(intervals){
if(intervals.length === 0||intervals.length===1)return intervals;
  intervals = intervals.sort((i,j)=>i[0]-j[0]);
  return intervals.slice(1).reduce((i,j)=>{
    var last = i[i.length-1]
   if(j[0]>last[1]){
     i.push(j)
   }else{
     if(j[1]>last[1]){
       i.pop()
       i.push([last[0],j[1]])
     }
   }
    return i;
  },[intervals[0]])
}
```

> [来源](https://leetcode-cn.com/problems/merge-intervals/)

### 老师分饼干

> 字节

老师分饼干，每个孩子只能得到一块饼干，但每个孩子想要的饼干大小不尽相同。目标是尽量让更多的孩子满意。 如孩子的要求是 1, 3, 5, 4, 2，饼干是 1, 1，最多能让 1 个孩子满足。如孩子的要求是 10, 9, 8, 7, 6，饼干是 7, 6, 5，最多能让 2 个孩子满足。

```javascript
function test(cookie, children) {
  cookie = cookie.sort();
  children = children.sort();
  var sum = 0,
    i = cookie.length - 1,
    j = children.length - 1;
  while (i >= 0) {
    while (j >= 0) {
      if (cookie[i] >= children[j]) {
        sum++;
        i -= 1;
        j -= 1;
      } else {
        j -= 1;
      }
    }
  }
  return sum;
}
```

## 链表

```JavaScript
function ListNode(val) {
  this.val = val;
  this.next = null;
}
```

### 合并两个有序链表为一个有序

> 字节

```JavaScript
function test(l1,12){
  var tem = new ListNode();
  var prev = tem;
  while(l1!==null&&l2!==null){
    if(l1.val<l2.val){
      tem.next = l1;
      l1 = l1.next;
    }else{
      tem.next = l2;
      l2 = l2.next
    }
    tem = tem.next
  }
  tem.next = l1===null?l2:l1;
  return prev.next;
}
```
