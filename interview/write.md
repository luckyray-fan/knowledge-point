## 有趣的题目们

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

#### 实现 shedule 调度

实现并发限制, 保证同时运行的任务最多有两个

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

### 海量 IP 寻找出现最多的一个

- 大文件转为小文件, 多线程
- hash map
- 堆排序

> [来源](https://www.zhihu.com/question/25652393#5)

### js 实现

#### 类与继承

- 创建一个 Person 类，其包含公有属性 name 和私有属性 age 以及公有方法 setAge ；创建一个 Teacher 类，使其继承 Person ，并包含私有属性 studentCount 和私有方法 setStudentCount 。

#### 计算英文文章中出现最多的单词和次数

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
