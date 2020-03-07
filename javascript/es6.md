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
- map, 键值对, 键可以不是字符串
- weakmap, 仅支持对象作为键值, 并且弱引用

> [来源](https://juejin.im/post/5acc57eff265da237f1e9f7c)

> [ES6 系列之 WeakMap](https://segmentfault.com/a/1190000015774465)

## 迭代器与生成器

---

## await

---

> [来源](https://juejin.im/post/5e5f52fce51d4526ea7efdec)
