## Object

---

### Object.getOwnPropertyDescriptor()

### Object.defineProperties()

### getPrototype

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

以任意顺序遍历一个对象的除 `symbol` 外的可枚举属性, 包括原型上的

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
