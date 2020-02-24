## new 操作符

函数内部有两个不同的方法: `[[call]]和[[constructor]]`, 普通函数调用时, 执行`[[call]]`, 作为构造函数执行时, `[[constructor]]`被执行, 箭头函数, call, apply, bind 等内部都没有 `[[constructor]]`

- 创建新的对象
- 在对象上执行`[[prototype]]`链接
- 新对象绑定到函数调用的 this
- `[[prototype]]`链接到构造函数的`prototype`对象上
- 若构造函数没有返回对象类型, 那么就返回这个新的对象

> [来源](https://juejin.im/post/5bde7c926fb9a049f66b8b52)

## bind 方法

## call 和 apply 方法

两者的第一个参数`thisArg`都是在`func`运行时指定的`this`, 使用提供的`this`和参数调用函数, 返回获得的值

`apply`接收两个参数, 第二个参数是类数组也可以是对象, 后续参数忽略,`call`接收之后一系列参数, 因此只需实现`apply`即可

```javascript
// 除掉一些判断
Function.prototype.applyF = function(thisArg, args) {
  thisArg['tem'] = this;
  return thisArg['tem'](...args);
};
```

> [来源](https://juejin.im/post/5bf6c79bf265da6142738b29#heading-5)

## promise

## es5 实现 class
