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

> [来源](https://juejin.im/post/5bf6c79bf265da6142738b29#heading-2)

## Object.create()

---

创建一个新对象, 对象的构造函数指向传入的值

```javaScript
Object.createF = function(o){
  let F = function(){}
  F.prototype = o
  return new F( )
}
```

> [来源](https://juejin.im/post/5a9ce60b6fb9a028cc60b69c)

## promise

---

通过 `then` 链, 将回调嵌套铺平, 每一个 `then` 都会返回一个新的 `promise`

**需要满足的行为**:

- then 的执行一定在 promise 传入的函数之后
- promise 中的函数执行完后调用 resolve 传入的参数会给到 then 中
- 可以链式调用
- then 的返回值决定链式调用中返回的 promise 的状态

**执行行为:**

- 将函数传入 promise, 然后调用`doResolve()`, 直接开始执行, 当遇到异步后从`doResolve()`返回开始执行`then()`函数
- 在`then`中, 在新的 promise 中调用`doResolve()`, 在执行到`self.done()`的时候, 将传入的`onFulfilled,onReject`函数用`setTimeout()`推迟到下个事件循环, 然后返回新的 promise, 在此 promise 基础上开始执行下一个`then`
- 所有的`then`执行完毕, 返回到最开始的`self.done()`, 执行`handle()`, 如果此时状态为`P`, 就纷纷 push 入前一个 promise 的 handlers 队列
- 最开始的 promise 中的异步执行完毕, 执行`resolve()`, 然后执行`fulfill()`, 将状态改变, 并触发 handlers 队列中的函数, 此时进入第一个`then`的第一个参数`onFulfilled`函数的执行, 将返回的值传入`resolve`, 如果返回的是一个值就将这个`then`返回的 promise 的 state 置为`F`, 重复此步骤
- 如果返回的值是一个 promise, 那么在`resolve()`中

```javascript
const pend = 0;
const ful = 1;
const rej = 2;
function promise(fn) {
  var state = pend;
  var value = null;
  var handlers = [];
  function fulfill(result) {
    state = ful;
    value = result;
    handlers.forEach(handle);
    handlers = null;
  }
  function reject(error) {
    state = rej;
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }
  function handle(handler) {
    if (state === pend) {
      handlers.push(handler);
    } else {
      if (state === ful && typeof handler.onFulfilled == 'function') {
        handler.onFulfilled(value);
      }
      if (state === rej && typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }
  function getThen(value) {
    var t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
      var then = value.then;
      if (typeof then === 'function') {
        return then;
      }
    }
    return null;
  }
  function doResolve(fn, onFulfilled, onRejected) {
    var done = false;
    try {
      fn(
        function(value) {
          if (done) return;
          done = true;
          onFulfilled(value);
        },
        function(reason) {
          if (done) return;
          done = true;
          onRejected(reason);
        }
      );
    } catch (e) {
      if (done) return;
      done = true;
      onRejected(e);
    }
  }
  function resolve(result) {
    try {
      var then = getThen(result);
      if (then) {
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }
  this.done = function(onFulfilled, onRejected) {
    setTimeout(function() {
      handle(
        {
          onFulfilled,
          onRejected
        },
        0
      );
    });
  };
  this.then = function(onFulfilled, onRejected) {
    var self = this;
    return new promise(function(resolve, reject) {
      return self.done(
        function(result) {
          if (typeof onFulfilled === 'function') {
            try {
              return resolve(onFulfilled(result));
            } catch (e) {
              return reject(e);
            }
          } else {
            return resolve(result);
          }
        },
        function(error) {
          if (typeof onRejected === 'function') {
            try {
              return resolve(onRejected(error));
            } catch (e) {
              return reject(e);
            }
          } else {
            return reject(error);
          }
        }
      );
    });
  };
  doResolve(fn, resolve, reject);
}
new promise(function(res) {
  console.log(123);
  res();
})
  .then(function(res) {
    console.log(456);
    return new promise(function(res) {
      console.log(789);
      res();
    });
  })
  .then(function(res) {
    console.log(111213);
  });
```

> [promise implemention](https://www.promisejs.org/implementing/)

> [详细的行为](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

> [ building a promise library incrementally ](https://github.com/kriskowal/q/blob/v1/design/README.md)

> [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.im/post/5b2f02cd5188252b937548ab)

## class

---

```JavaScript
function test(){

}
test.walk = function(){} // 静态方法
test.prototype.say = function(){} //公有方法
```
