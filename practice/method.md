## 常见使用

- 进制转换, `Number.prototype.toString`
  - 其他进制转十进制, `parseInt(x,2)`
- 遍历属性`for in`, 遍历数组数据`for of`, 如果属性不想要原型链上的用`hasOwnProperty()`, [来源](https://juejin.im/post/5aea83c86fb9a07aae15013b)
- 去重, `Array.from(new Set(arr))`
- [字符与 ascii 编码转换](https://www.jianshu.com/p/24966e1205f9), `'a'.charCodeAt()和String.fromCharCode(60)`
- 新建一个指定长度的数组且初始化`[...Array(3)].map(i=>0)`, 如果没有 spread 展开, 那么`Array(3)`相当于`[,,,]`
- 对象私有变量,`obj[Symbol('test')]=1`, 这个属性是不可枚举的
- [js 判断空对象](https://blog.csdn.net/qq_38627581/article/details/77353015)
  - json.stringify, Object.getownpropertyNames, Object.keys

## Object

---

### v8 中的对象

> [来源](https://zhuanlan.zhihu.com/p/26169639)

### null 与 undefined 的区别

- null, 没有对象, 此处不应该有值
- undefined, 应该有值但尚未定义

> [来源](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

### isprototypeof()

- 参数
  - obj, 在该对象的原型链上搜寻
- 返回值
  - boolean, 表示调用对象是否在另一个对象的原型链上

用来查看构造函数的继承情况

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)

### Object.getOwnPropertyDescriptor()

### getownpropertyNames()

- 参数
  - obj
- 返回
  - 给定对象的自身属性对应的字符串数组, 包括可枚举和不可枚举

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

### Object.defineProperty()

- 参数
  - obj
  - prop
  - descriptor, 将被定义或修改的属性描述符
- 返回值
  - 被传递的对象

直接在一个对象上定义一个新属性, 或者修改一个对象的现有属性, 并返回这个对象

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

### getPrototype

- 参数
  - obj, 对象
- 返回值
  - 对象的构造函数的 prototype

### setPrototyOf

### create()

- 参数
  - proto, 传入的原型对象
  - propertiesObject, 原型对象中属性的特性
- 返回值
  - 创建的对象

使用传入的对象来提供新创建的对象的 `__proto__`

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

- `object.create(null)` [相关](https://juejin.im/post/5acd8ced6fb9a028d444ee4e)

### assign()

- 参数
  - target
  - sources
- 返回值
  - 目标对象

将所有可枚举属性的值从一个或多个源对象复制到目标对象, 然后返回目标对象

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## for...in

---

以任意顺序遍历一个对象的除 `symbol` 外的**可枚举**属性, **包括原型上的**

如果仅迭代自身的属性, 使用 `hasOwnProperty()` 等

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

## for...of

---

遍历可迭代对象的数据, 比如数组

## Array

---

### from()

- 参数
  - 类数组或可迭代对象
- 返回值
  - 新的浅拷贝的数组实例

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

- 能将字符串转为数组并且对 unicode 也有效 ([表情能被识别为一个字符而不是两个](http://www.alloyteam.com/2016/12/javascript-has-a-unicode-sinkhole/))

### join

- 对部分类型会将其转换
- 索引仅对大于等于 0 有效
- 类数组也可以通过 call 调用

> [来源](https://mp.weixin.qq.com/s/b59DWLdnO1iy5HFD7VYJLA)

### map

map 仅对数组中赋了值的索引调用回调函数, `new Array(3)`是空的

- [JavaScript “new Array(n)” and “Array.prototype.map” weirdness](https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness)

## 正则

---

找到一个不错的总结

> [来源](https://juejin.im/post/59cc61176fb9a00a437b290b)

## eval

---

将传入的字符串当做 JavaScript 代码进行执行

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

## toString

---

- [Number.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString), 指定数字到字符串的转换基数, 2 到 36, 如果大于 10 会用字母来表示

## try catch

---

### try catch return

finally 是一定会执行的, 所以 catch 中的 return 会被 finally 的给覆盖

> [来源](https://stackoverflow.com/questions/38050857/what-happen-to-return-statement-in-catch-block/38051153)

## javascript 与 unicode

> [来源](https://flaviocopes.com/javascript-unicode/)
