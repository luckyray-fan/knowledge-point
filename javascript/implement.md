## new 操作符

---

函数内部有两个不同的方法: `[[call]]和[[constructor]]`, 普通函数调用时, 执行`[[call]]`, 作为构造函数执行时, `[[constructor]]`被执行, 箭头函数, call, apply, bind 等内部都没有 `[[constructor]]`

- 创建新的对象
- 在对象上执行`[[prototype]]`链接
- 新对象绑定到函数调用的 this
- `[[prototype]]`链接到构造函数的`prototype`对象上
- 若构造函数没有返回对象类型, 那么就返回这个新的对象

```JavaScript
function objectN(){
  var obj = new Object();
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype;
  var res = Constructor.apply(obj,arguments)
  return typeof res === 'object'?res:obj;
}
```

如果用`Object.create(null)`, 因为返回的是一个没有继承自`Object`的对象, 所以没有`Object.prototype`上的`getter`属性, 所以此时`__proto__`就会被当做一个属性, 而不再拥有继承功能

> [来源](https://juejin.im/post/5bde7c926fb9a049f66b8b52) 花里胡哨, 懒得看, 看以前的

> [这个清楚](https://github.com/mqyqingfeng/Blog/issues/13)

## bind 方法

---

返回一个绑定了 this 的原函数拷贝, 该函数执行时会用之前传入的第一个参数作为 this, 后续的参数作为实参, 可以使用 new

```javascript
Function.prototype.bindF = function(context) {
  var self = this,
    args = [].slice.call(arguments, 1);
  var fBound = function() {
    var bindArgs = [].slice.call(arguments);
    //作为普通函数时的this是window
    return self.apply((this instanceof fBound:?this:context), args.concat(bindArgs)); //往返回的函数传的参数会添加在后面
  };
  //当修改fBound的原型对象时也会更改原函数的原型对象
  fBound.prototype = this.prototype;
  return fBound
};
```

> [来源](https://github.com/mqyqingfeng/Blog/issues/13)

## call 和 apply 方法

---

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

---

最直观的来看, 就是通过 `then` 链, 将回调嵌套铺平, 每一个 `then` 都会返回一个新的 `promise`

```javascript
class Promise {
  callbacks = [];
  state = 'pending';
  value = null;
  constructor(fn) {
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    return new Promise((resolve) => {
      this._handle({
        onFulfilled,
        resolve
      });
    });
  }
  _handle(callback) {
    if (this.state === 'pending') {
      this.callbacks.push(callback);
      return;
    }
    if (!callback.onFulfiled) {
      callback.resolve(this.value);
      return;
    }
    var ret = callback.onFulfilled(this.value);
    callback.resolve(ret);
  }
  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    this.callbacks.forEach((fn) => fn(value));
  }
}
```

> [来源](https://zhuanlan.zhihu.com/p/58428287) 将来在这里写一个版本 [codeopen](https://codepen.io/luckyray-fan/pen/qBdRQed?editors=1111)
