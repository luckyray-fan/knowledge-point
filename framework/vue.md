## 单页应用

---

只有一张 web 页面的应用, 跳转仅刷新局部资源, 公共资源仅需加载一次

- 前后端分离, 服务端只需要根据 ajax 给出数据即可, 用户体验好, 因为一直在一个页面内加载, 速度快, 有桌面应用的体验感
- SEO, 前进后端和历史都需要 js 来控制, 白屏

> [来源](https://www.zhihu.com/question/20792064)

### 单页应用 seo

服务端 ssr

> [来源](https://juejin.im/post/5c42fdd36fb9a049b07da6dc)

### 前端路由

路由就是通过不同的路径来获取资源, 后端路由会请求不同的页面, 前端路由针对路径和函数进行映射, 通过特殊的 url 实现 spa 的刷新前进后退, 实现需要满足

- 改变 url 不跳转页面
- 可以监听到 url 的变化

**实现方法:**

- hash, 指 url 后的#号以及后面的字符, hash 的变化不会导致浏览器向服务器发送请求, 并且有个很方便的`hanshchange`事件, 可以监听到 url 变化
- history, 通过监听来实现回调的注册
  - 点击浏览器的前进或后退按钮
  - 点击 a 标签
  - 在 js 中触发`history.pushState()`
  - 在 js 中触发`history.replaceState()`

> [来源](https://juejin.im/post/5d2d19ccf265da1b7f29b05f)

## 双向绑定原理

---

- 发布者-订阅者模式, 手动执行 api 触发发布事件
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

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

> [详解 vue 生命周期](https://segmentfault.com/a/1190000011381906)

## diff 算法

---

渲染真实 DOM 的开销很大, 所以用真实 DOM 生成一棵虚拟 DOM, 然后虚拟 DOM 数据改变后会生成一棵 Vnode, 然后 Vnode 和之前的 Vnode 比较, 发现有不同的地方直接修改在**真实的 DOM**上

也就是解析代码生成了 AST, 抽象语法树

这种比较只会在同层级进行, 不会跨层级比较

> [来源](https://github.com/aooy/blog/issues/2)

### 虚拟 dom

- 用对象来模拟 dom 结构, 构建一棵虚拟的语法树, 在对比完 diff 后根据更改改变原 dom
- 缺点是有上限, 无论如何也没有真实 dom 操作快
- 优点是下限, 可以防止过多的 dom 操作拖慢性能

> [来源](https://juejin.im/post/5d36cc575188257aea108a74)

## 组件间通信

---

组件实例的作用域是相互独立的, 不同组件的数据无法互相引用, 针对不同关系比如, 父子, 兄弟, 隔代祖先等关系有不同的通信方式

- `props/$emit`
- `$emit/$on`, 用空的 Vue 实例作为中央事件总线, 可以解决任何组件的通信, 当项目较大时可以用 vuex
- `vuex`

> [来源](https://juejin.im/post/5cde0b43f265da03867e78d3)

## vue 与 MVVM 的关系

---

在一个组件文件中:

- view, template, dom
- model, data, plain JavaScript Objects
- viewModel, vue

```JavaScript
let vm = new Vue({
  el:'#a'
})
```

可以看出, vue 专注于 vm 的部分, 用双向绑定完成

> [来源](https://juejin.im/post/5b2f0769e51d45589f46949e)

## vue-router

vue 生态中的对前端路由的封装, 使用观察者模式监听当前路由的变动, 然后调用设置的 hash 或 history 模型来处理路由变动

> [来源](https://zhuanlan.zhihu.com/p/37730038)
