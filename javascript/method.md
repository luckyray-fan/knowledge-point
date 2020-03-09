## Object

---

### isprototypeof()

- 参数
  - obj, 在该对象的原型链上搜寻
- 返回值
  - boolean, 表示调用对象是否在另一个对象的原型链上

用来查看构造函数的继承情况

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf)

### Object.getOwnPropertyDescriptor()

### Object.defineProperty()

- 参数
  - obj
  - prop
  - descriptor, 江北定义或修改的属性描述符
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

以任意顺序遍历一个对象的除 `symbol` 外的可枚举属性, **包括原型上的**

如果仅迭代自身的属性, 使用 `hasOwnProperty()` 等

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

## for...of

---

遍历可迭代对象的数据

## Array

---

### from()

- 参数
  - 类数组或可迭代对象
- 返回值
  - 新的浅拷贝的数组实例

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

## 正则

---

找到一个不错的总结

> [来源](https://juejin.im/post/59cc61176fb9a00a437b290b)

## eval

---

将传入的字符串当做 JavaScript 代码进行执行

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)
