## 判断对象类型

### typeof

最初的实现中 js 中的值是由一个标识类类型的标签和实际数据表示的, 对象的类型标签为 0, 由于 null 代表空指针, 所以也是 0, typeof null 也因此返回 object, **若是想要清晰的判断**可以使用 `Object.prototype.toString`

对于现在的 typeof, 如果对象实现\[\[call]]的内部方法就认为是 function

> [来源](https://juejin.im/post/5df3d255f265da33f030237e)

### Object.prototype.toString()

首先取得对象的一个内部属性`[[class]]`, 根据该属性返回一个类似于`[object xxx]`的字符串, 因为如果直接`o.toString()`很有可能这个对象的方法被更改过, 所以用`call`来改变 this 指向更稳妥

`Object.toString()`, 继承自 `Function.prototype.toString()`

### instanceof

用来判断对象的具体类型, 通过循环对比原型链判断知道左边的变量的原型为 null, 然后由此有了原型继承

> [来源](https://juejin.im/post/5b0b9b9051882515773ae714)

```javascript
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__;
  }
}
```

## 原型

### prototype 和 \_\_proto\_\_

对象有 \_\_proto\_\_ 属性, 构造函数另外还有 prototype, 对象的 \_\_proto\_\_ 等于其构造函数的 prototype, 构造函数的 prototype 的 constructor 属性要等于其自身

![简单的说明](../source/js-p-1.jpg)

### 原型中的继承

当在实例中找不到方法或属性时会沿着\_\_proto\_\_找, 也就是构造函数的原型对象中去寻找, 直到 object.prototype.\_\_proto\_\_

### 六大内置函数的继承

可以看到所有的构造函数的 \_\_proto\_\_ 都指向了 Function 的原型对象, 所有原型对象的 \_\_proto\_\_ 都指向了 Object 的原型对象

`Function.prototype` 是个函数, 但是继承自 `Object.prototype` 而非自身

![简单的说明](../source/js-p-2.jpg)

### 主要继承方法

- 原型继承, 将子类的原型指向了父类的实例, 这样子类就可以通过`__proto__`摸到父类的实例属性, 再由父类的实例的`__proto__`摸到其构造函数的原型对象

```javascript
function p() {
  this.x = 1;
}
function c() {}
c.prototype = new p();
```

- `call`继承, 这样父类改变了子类的实例, 不过`call`是`Function`上的方法

```javascript
function p() {
  this.x = 1;
}
function c() {
  p.call(this);
}
```

- 冒充对象继承, 循环遍历父类实例, 然后将父类实例的私有方法全部拿来给子类实例

```javascript
function p() {
  this.x = 1;
}
function c() {
  let p1 = new p();
  for (let i in p1) {
    this[i] = p1[i];
  }
}
```

- 混合继承, 将 `call` 继承和原型继承集合在一起

```javascript
function p() {
  this.x = 1;
}
function c() {
  p.call(this);
}
c.prototype = new p();
c.prototype.constructor = c;
```

- 中间件继承, 子类可以继承到父类的公有方法当做自己的公有方法

```javascript
function p() {
  this.x = 1;
}
function c() {}
c.prototype.__proto__ = p.prototype;
```

- 寄生组合继承

```javascript
function p() {
  this.x = 1;
}
function c() {
  p.call(this); //继承私有
}
function inheritPrototype(sub, sup) {
  var prototype = Object.create(sup.prototype); //继承原型链
  prototype.constructor = sub;
  sub.prototype = prototype;
}
inheritPrototype(c, p);
```

- 经典继承

```javascript
function create(o) {
  function c() {}
  c.prototype = o;
  return new c();
}
var o = {};
var c1 = create(o); //这样就继承o了
```

> [来源](https://juejin.im/post/5a96d78ef265da4e9311b4d8)

### 继承方法比较

完美的是寄生继承, 子类都有各自的实例, 不会互相影响, 且共享了父类的方法

## 数据类型

`Boolean, undefined, string, number, null, bigint, symbol, object`

除了 object 前 7 种是基本类型, 既无对象也无方法

### 基本类型的包装对象

`String, Number, BigInt, Boolean, Symbol(字面量基本类型)`, 包装对象的 valueof 方法返回基本类型的值

## 执行上下文

可执行代码共有三种, 全局, 函数, eval, 每当执行其中一种时, 就会创建一个执行上下文

为了保存上下文, 用一个栈来保存, 当执行完毕时就会将函数的执行上下文从栈中弹出

创建过程会完成: `变量对象创建, 作用域链建立, this 的指向`

> [来源](https://github.com/mqyqingfeng/Blog/issues/4)

### 变量对象

当进入执行上下文时, 激活变量对象, 初始化内容包括: 函数的所有形参, 函数声明, 变量声明, 在代码执行过程中修改变量的值, 全局上下文的变量对象在浏览器中是 window

> [来源](https://github.com/mqyqingfeng/Blog/issues/5)

### 变量提升

编译时, 将 var 声明的变量和函数放入内存, 提升到前面, 函数比变量提升的更靠前, 但是这个提升不会初始化, 提前使用变量不会报错, 但值会是 undefined

> [来源](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting) > [详细解释过程](https://github.com/mqyqingfeng/Blog/issues/5#issuecomment-305073897)

## 作用域

作用域 scope 包含当前可见的变量, 规范了如何查找变量, 内层作用域可以访问外层作用域

| 范围 | 含义                                                                                   |
| ---- | -------------------------------------------------------------------------------------- |
| 全局 | 能被程序中任何函数或方法访问                                                           |
| 函数 | 函数内的作用域, 外部无法访问, 内部能访问                                               |
| 块级 | 使用 let 声明 for 循环, 循环结束后声明的变量就释放了, 只要是`{}`包裹的就行             |
| eval | 相当于程序运行前这里写了代码, 严格模式下运行在自己的作用域下, 不会修改包含自己的作用域 |
| 词法 | 使用变量时, 由声明的位置决定,**何处声明**                                              |
| 动态 | 作用域由调用栈的层次决定寻找路径, **何处调用**                                         |

### 作用域链

当查找变量时, 如果当前上下问的变量对象 `VO` 没有, 就会到父级的变量对象中查找, 一直到全局变量, 这样由多个变量对象组成的链表就叫做作用域链

函数有内部属性 `[[scope]]`, 当函数创建时会保存所有父变量对象, 函数激活时, 进入函数上下文,创建 VO 后将其添加到作用链的前端

> [来源](https://github.com/mqyqingfeng/Blog/issues/6)

### 闭包

即使创建该函数的上下文已经销毁却仍然存在（比如，内部函数从父函数中返回）, 并在代码中引用了自由变量的函数便是闭包

虽然创建的上下文销毁, 但是依靠作用域链仍然能够读取到自由变量

> [来源](https://github.com/mqyqingfeng/Blog/issues/9)

## this

当函数被调用时, 一个执行环境被创建, 环境中包括: 调用栈, 如何调用, 参数等, this 指向这样的变量对象

| 场景 | 指向的对象 |
| --- | --- |
| 普通调用函数 | 非严格 window,严格 undefined |
| 对象调用 | 调用函数的对象 |
| call,apply,bind | 参数中的第一个值, 非严格模式下指定 undefined, null 为 window,指定基本值会转为其包装对象 |
| 构造函数调用 | 指向生成的新对象 |
| 原型链调用 | 指向生成的对象 |
| 箭头函数 | 没有自己的 this, 找上一个作用域的 |
| dom 事件处理函数 | 一般是绑定事件的元素, 古老 ie 指向 widnow |
| setTimeout | 一般指向全局对象 |

> [有机会认真看看](https://github.com/mqyqingfeng/Blog/issues/7)

## 参数传递

基本类型传的是本身, 对象传的是引用

> [来源](https://juejin.im/entry/59b41b005188257e671b671c)

### 形参实参

- 形参: 定义时的参数
- 实参: 运行时传入的参数

## 事件循环

函数调用形成栈, 队列内的消息等待栈执行完毕后进入栈中

只有函数完整的执行后, 其他函数才会被执行, 这与 java 什么的不一样, 不需要内存同步, 信号量加锁等操作

可以在队列中添加消息的情况

- 事件监听
- setTimeout, 参数代表的延迟的最短时间, 如果队列有其他消息, settimeout 必须等待其执行完

web worker 或者跨域的 iframe 都有自己的栈, 要通信需要 `postMessage`

因为这个特性, js 一般不会阻塞, 可以用来接收多个请求然后等待回调返回, 但是 alert 和 xhr 请求同步会阻塞

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

## 运算符优先级

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

## 内部属性

内部属性定义了代码执行的行为, 但是没法通过代码直接访问, 一般用`[[]]`包了起来, 当然有要使用`[[prototype]]`的时候, 就可以用`Object.getPrototype()`来访问

### 数据属性

若是想要修改属性的特性, 用`Object.definePrototy()`

| 名称             | 含义                                    |
| ---------------- | --------------------------------------- |
| [[configurable]] | 这个属性能否 delete, 能否修改属性的特性 |
| [[enumerable]]   | 能否通过 for-in 返回                    |
| [[writable]]     | 能否修改属性的值                        |
| [[value]]        | 包含这个属性的数据值, 默认为 undefined  |

### 访问器属性

访问器属性也需要通过`Object.definePrototy()`来定义

| 名称             | 含义                                    |
| ---------------- | --------------------------------------- |
| [[get]]          | 读取属性时调用的函数                    |
| [[set]]          | 写入属性时调用的函数                    |
| [[configurable]] | 这个属性能否 delete, 能否修改属性的特性 |
| [[enumerable]]   | 能否通过 for-in 返回                    |

> 若要读取对象中这些属性的描述, 可以通过`Object.getOwnPropertyDescriptor()`

### chrome 中可见的

| 名称                 | 含义                                    |
| -------------------- | --------------------------------------- |
| [[scope]]            | 作用域链                                |
| [[FunctionLocation]] | 函数的位置                              |
| [[prototype]]        | \_\_proto\_\_, 指向构造函数的 prototype |

> [内部属性相关规范](http://es5.github.io/#x8.6.2)

### 函数里有的

| 名称 | 含义 |
| --- | --- |
| [[Call]] | 执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个 this 值和一个包含通过调用表达式传递给函数的参数的列表 |

## 类数组

指可以通过索引属性访问元素并且拥有 length 属性的对象, 类数组对象与数组的区别是类数组对象不能直接使用数组的方法。

## 类型转换

### 转换规则

#### ToPrimitive

将参数转为飞对象的基本值

```javascript
/**
 * @obj 需要转换的对象
 * @type 期望转换为的原始数据类型，可选
 */
ToPrimitive(obj, type);
```

type 可以是 number 或者 string

- string
  - 调用 obj 的 `toString` 方法, 如果为基本值返回
  - 调用 obj 的 `valueOf` 方法
- number
  - `valueOf`
  - `toString`
- 参数为空
  - obj 是 Date, type 设置为 String
  - 否则设置为 Number

#### toNumber

#### toString

### 运算隐式转换

- `+`运算
  - 左右取值进行 `ToPrimitive` 操作
  - 若是存在 string 都转换为 string 进行拼接
- ## `==` 抽象相等比较
  - 存在对象执行 `ToPrimitive`
  - 类型不同, 将其转为 number 来比较

> [来源](https://juejin.im/post/5b076c006fb9a07aa43c9fda), 感觉没说清楚

## 异步
