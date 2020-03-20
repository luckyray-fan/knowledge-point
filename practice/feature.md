
## 防抖节流

---

在输入框等事件中, 减少触发函数的频率

- 防抖, 持续触发事件时, 需要给一段时间才会执行, 如果中途触发重新计时

```javascript
function debounce(fn, wait) {
  var timeout = null;
  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn.bind(this), wait, ...arguments);
  };
}
```

- 节流, 保证持续触发时, 一定时间段只调用一次事件处理函数

```javascript
function throttle(fn, wait) {
  var prev = Date.now();
  return function() {
    var now = Date.now();
    if (now - prev >= wait) {
      fn.apply(this, arguments);
      prev = Date.now();
    }
  };
}
```

> [来源](https://juejin.im/post/5b8de829f265da43623c4261)

## 去重

---

去除数组中重复的元素

- set, 无法去除重复`{}`

```javascript
(arr) => {
  return Array.from(new Set(arr));
};
```

- 双层循环 splice 去重

```javascript
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
```

- indexOf,includes 若结果数组中不存在当前元素, 就 push
- sort, 排序后前后比较, 如果不同就添加
- 利用对象来判断

```javascript
(arr) => {
  var obj = {};
  return arr.filter((i) => {
    if (typeof i === 'object') i = JSON.stringify(i);
    return obj[i + ''] ? false : (obj[i + ''] = true);
  });
};
```

> [来源](https://segmentfault.com/a/1190000016418021)

## 深浅拷贝

---

基本数据类型存在栈内, 且不可变, 基本类型的比较式基于值的比较

引用类型存放在堆内, 变量值为栈内存的指针, 值可变, 比较基于引用

- 浅拷贝, 改变子对象的属性, 原对象也会更改

```javascript
function shallowCopy(src) {
  var res = {};
  for (let i in src) {
    if (src.hasOwnProperty(i)) {
      res[i] = src[i];
    }
  }
  return res;
}
```

- 深拷贝, 对对象以及所有子对象拷贝

```javascript
//递归方法
function deepCopy(src) {
  var res = Array.isArray(obj) ? [] : {};
  for (let i in src) {
    if (src.hasOwnProperty(i)) {
      if (Object.prototype.toString.call(i).includes('object')) {
        res[i] = deepCopy(src[i]);
      } else {
        res[i] = src[i];
      }
    }
  }
  return res;
}
//JSON.parse(JSON.stringify(obj)) 对部分属性如date无法很好地复制
```

- 环
- 克隆函数

> [来源](https://juejin.im/post/59ac1c4ef265da248e75892b) 楼上那个不太行 [更好点的](https://juejin.im/post/5b235b726fb9a00e8a3e4e88)

## 扁平化

---

- 递归
- toString, 如果元素都是数字
- reduce
- 扩展运算符

> [来源](https://juejin.im/post/59716f15f265da6c4c500fc7)

## reduce 模仿 map

---

map 有两个参数, 一个是回调函数, 还有一个可选的 this 如果没传 this 非严格模式下就是 window

```JavaScript
Array.prototype.mapF = function(fn,thisArg){
  return function(arr){
    //去掉判断fn和arr
    if(arr.length === 0) return [];
    var res = new Array(arr.length);
    return arr.reduce(function(acc,cur,idx){
      res[idx] = fn.call(thisArg,cur,idx,arr)
      return res;
    },res)
  }
}
```

> [来源](https://juejin.im/post/5c0b7f03e51d452eec725729)

## 判断对象相等

---

- NaN
- undefined

> [来源](https://github.com/mqyqingfeng/Blog/issues/41)

## 函数柯里化

---

实现多参函数, 只传递一部分参数来调用它, 让它返回一个函数来处理剩下的参数

```JavaScript
function sum (...args) {
    function fn(...newArgs) {
        return sum(...args, ...newArgs)//两个数组被转为了参数
    }
  	// 当最后返回函数的时候, 由类型转换, fn 对象自动调用toString
    fn.toString = () => {
        return args.reduce((a, b) => {
            return a + b
        })
    }

    return fn
}
```

> [来源](https://juejin.im/post/5af13664f265da0ba266efcf)

## 异步

---

- promise
- async

## 数字

---

### 大数相乘

小学乘法就行

### 0.1+0.2 == 0.3

js 使用 Number 类型表示数字, 使用 64 位来表示一个数字

最大 Math.pow(2,53), 由于加法的实现需要先转换为二进制然后进行运算

0.1 和 0.2 转为二进制会无限循环, 而尾数最大 52 位, 所以需要截掉后面的, 在这阶段失掉了精度

对阶运算也会丢失精度

可以用第三方库来解决精度问题

> [来源](https://juejin.im/post/5b90e00e6fb9a05cf9080dff)

> [js 处理大数相加](https://juejin.im/post/5d11bd7af265da1b8a4f2b27)

## 前端测网速

---

> [来源](https://juejin.im/post/5b4de6b7e51d45190d55340b)