## 从 ES6 到 10

---

- ES6, 全都熟悉哈哈
  - 类
  - 模块化
  - 箭头函数
  - 参数默认值
  - 模板字符串
  - 解构赋值
  - spread 操作符
  - 对象属性简写
  - promise
  - let const
- ES7
  - includes
  - 指数操作符, 相对于`Math.pow()`
- ES8
  - await
  - `Object.getOwnPropertyDescriptors()`返回自身属性的所有描述符
- ES9
  - Rest, 将剩余参数变为数组
  - 正则反向断言
- ES10
  - flat 函数
  - 新的基本类型 `BigInt`
  - 更精确的 `Function.prototype.toString()`

**只写了用过的**

> [来源](https://juejin.im/post/5ca2e1935188254416288eb2)

## symbol

---

一种基本数据类型, 仅用来作为对象属性的标识符, 从 `symbol()` 返回的值是唯一的

## 箭头函数

---

一般用于需要匿名函数的地方, 没有自己的`this`, `arguments`等

- 没有 this, arguments, 使用外层作用域的, 使用 call 和 apply 时 this 仍然指向外层的
- 因为没有`[[constructor]]`内部属性, 和 new 一起用会报错
- 没有 prototype 属性

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 模板字符串

---

最大的好处是可以换行, 以前用 webstorm 直接粘贴可以将换行的自动转为用加号相连的字符串, 改用 vscode 后知道这个超方便

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

## 参数默认值

---

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## 解构赋值

---

将值从对象或数组中取出, 依次赋值给其他对象

- 声明过的对象想要再赋值, 就加括号

```javascript
let { a } = { a: 1 };
({ a } = { a: 2 });
```

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## 展开语法

---

将数组或对象在语法层次上展开

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## let & const

---

- 块级作用域
- 变量提升但不会初始化和暂时性死区
- 不能重复声明

> [来源](https://www.cnblogs.com/fly_dragon/p/8669057.html)

> [let 是否有提升](https://zhuanlan.zhihu.com/p/28140450)

### babel 处理

babel 需要用 var 来定义 let 并且仍然维护块作用域

```JavaScript
if(true){//但是应该报错的暂时性死区被编译成功了, 重复声明则在语法检查阶段就报错
  let a = 1;
  console.log(a)
}
console.log(a)
//==>被转换成
"use strict"
if(true){
  var _a = 1;
  console.log(_a);
}
console.log(a)
//- -- -- -- -- - - --
const a = 1;
a = 2;
//==>被转换成
function _readOnlyError(name) {
  throw new Error('"' + name + '" is read-only');
}
var a = 1;
a = (_readOnlyError("a"), 2);
```

> [来源](https://bambielli.com/til/2017-04-04-let-transpilation/) 就讲了块作用域...

## class

---

- 函数声明可以被提升, 类不行

- 所有方法不可枚举

- 每个类都有`[[constructor]]`的方法

- 可以将类作为参数传入函数

- 通过立即调用类构造函数可以创建单例

```javascript
let a = new (class {
  constructor() {}
})();

javascript;
//声明式
class B {
  constructor() {}
}
//匿名表达式
let A = class {
  constructor() {}
};
//命名表达式, B可以在外部使用, 而B1只能在内部使用
let B = class B1 {
  constructor() {}
};
```

### 语法

- 初始化, constructor
- 私有属性, 在 constructor 中定义 `this.x`
- 访问器属性, `get和set`, 直接在原型上定义
- 可计算成员名称

```javascript
let m = '123' + a;
class A {
  constructor() {}
  [m]() {}
}
```

- 生成器方法
- 静态成员, 在方法或属性名前加上 static, 能通过类名直接访问
- 继承, 可以继承表达式, 函数

```javascript
class A extends B {
  constructor(arg) {
    super(arg); //A即派生类, 使用super()调用父类构造函数
    this.x = 1; //如果要父类的必须先用super初始化this
  }
  static getX() {
    return super.getY(); //可以通过super调用父类静态方法
  }
}
```

babel 中的继承实现也就是寄生组合类

> [来源](https://mp.weixin.qq.com/s?__biz=MzI4MDYyNjQ1OA==&mid=2247483956&idx=1&sn=adc1ec7ae4cd3f01728fdcb43a38690f&chksm=ebb4d641dcc35f57cd2bf66ba9819874cf300108884700bf3d6a1410c18c0ed4ff3d90d10a8f#rd)

## set map weakmap

---

- set, 类数组
- [map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map), 键值对, 键可以不是字符串,还可以是对象, 能记住插入的顺序
- weakmap, 仅支持对象作为键值, 并且弱引用

> [来源](https://juejin.im/post/5acc57eff265da237f1e9f7c)

> [ES6 系列之 WeakMap](https://segmentfault.com/a/1190000015774465)

## 迭代器与生成器

---

### Iterator

迭代器作为一种特殊对象, 拥有专门的`next`方法, 每次调用都返回一个结果对象, 该对象有两个属性`value和done`, 迭代器还会保存一个内部指针, 用来指向当前集合中值的位置

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)

### Generator

generator 函数可以交出函数的执行权, 暂停执行

```JavaScript
function* gen(x){
  var y = yield x+2;
  return y;
}
var g = gen(1);
g.next();
g.next();
```

在上方, 调用该函数, 会返回一个内部指针(即遍历器)g, 每次调用 next, 都会返回一个对象, 表示当前的阶段

> [来源](http://www.ruanyifeng.com/blog/2015/04/generator.html)

## await

---

await 必须是在 async 函数中使用, async 函数会返回一个 promise

await 会等待 promise 的状态变为`resovled`然后取出此时的值返回

await 的异步处理, 可以在 promise 的后方加上 catch, 也可以用`try...catch`

如果 await 后的表达式不是 promise, await 会将其转为 promise 并等待其执行完成

> [来源](https://developer.mozilla.org/zh-CN/docs/learn/JavaScript/%E5%BC%82%E6%AD%A5/Async_await)

### babel 编译 await

> [来源](https://cary.im/2019/07/08/babel%E6%98%AF%E5%A6%82%E4%BD%95%E7%BC%96%E8%AF%91async%E7%9A%84/)

> [Babel 如何转换 async-await 至 ES5](https://blog.rexskz.info/how-babel-transform-async-await-to-es5.html)

## proxy

---

对 proxy 的实例化需要两个参数, target 代表需要被代理的对象, handlers 代表对该代理对象的各种操作行为处理

早期可以用 getter, setter, 但是每个代理属性都要编写对应的 getter, setter, 而且需要存在一个存储真实值的键, 否则会递归溢出

> [来源](https://segmentfault.com/a/1190000015009255)
