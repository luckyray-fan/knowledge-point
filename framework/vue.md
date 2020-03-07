## 双向绑定原理

---

- 发布者-订阅者模式
- 脏值检查, 当出现某些特定事件时检查数据变动
- 数据劫持, `Object.defineProperty()`来劫持属性的`setter,getter`, 在数据变动时发布消息给订阅者

**执行流程:**

- 实现监听器, 监听数据对象的所有属性, 如果有变动通知订阅者
- 实现指令解析器, 对节点的指令进行扫描和解析, 根据指令模板替换数据和绑定相应的更新函数
- 实现 watcher, 能收到订阅的属性变动, 执行指令绑定的响应回调函数, 从而更新视图

> [来源](https://segmentfault.com/a/1190000006599500)

## Object.defineProperty 的缺点

---

- 一次递归所有属性
- 数组没法监听 push, 所以改写了 push 方法, 但是直接赋值更改没法监听, 所以有`$setItem()`
- 对新增的属性监听不到, 所以有内置的 set 方法

> [来源](https://juejin.im/post/5e548134e51d45270531860f)

## Observer & Dep & Watch

---

- Observer, 为所有数据添加监听器 Dep
- Dep, data 中每个对象和子对象, 当绑定的数据有更改的时候, `dep.notify()`方法被调用, 通知`watcher`
- Compile, 对每个元素的指令进行扫描和解析, 根据模板替换数据以及绑定相应的更新函数
- watcher, 连接 Observer 和 Compile 的桥梁, 当 Compile 解析指令时会生成`watcher`并给它绑定一个 update 方法, 并添加到当前正在解析的指令所依赖的对象的 Dep 对象上

> [来源](https://segmentfault.com/a/1190000006599500)

## 生命周期

---

<img src="../source/vue-1.jpg" alt="" width="480"/>

## diff 算法

---

渲染真实 DOM 的开销很大, 所以用真实 DOM 生成一棵虚拟 DOM, 然后 xuniDOM 数据改变后会生成一棵 Vnode, 然后 Vnode 和之前的 Vnode 比较, 发现有不同的地方直接修改在**真实的 DOM**上

也就是解析代码生成了 AST, 抽象语法树

这种比较只会在同层级进行, 不会跨层级比较

> [来源](https://github.com/aooy/blog/issues/2)

## 组件间通信

---

组件实例的作用域是相互独立的, 不同组件的数据无法互相引用, 针对不同关系比如, 父子, 兄弟, 隔代祖先等关系有不同的通信方式

- `props/$emit`
- `$emit/$on`, 用空的 Vue 实例作为中央事件总线, 可以解决任何组件的通信, 当项目较大时可以用 vuex
- `vuex`

> [来源](https://juejin.im/post/5cde0b43f265da03867e78d3)
