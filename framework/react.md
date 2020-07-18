### tsx 与 ts

可以在 tsx 中使用 jsx 语法

> [来源](https://stackoverflow.com/questions/34224007/is-there-any-downside-to-using-tsx-instead-of-ts-all-the-times-in-typescript)

### state

- React setstate,
  - 可以用这个父类 react.component 提供的方法来对 state 进行状态更新, 然后重新 render 页面
  - 传入参数时, 可以只传 state 中改变了的部分属性
  - setstate 不会立即生效
  - 如果传入的参数时函数, setstate 会往该函数中传入上一个 state, 返回的对象将会用于更新 state
  - Render 是在一次事件队列完整结束合并所有的 setstate 后进行的

> [来源](http://huziketang.mangojuice.top/books/react/lesson10)

### jsx

能使用标签语法的一个表达式

- 使用小驼峰命名
- 多行需要使用括号
- 自动转义

babel 对其进行编译

```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};
```

> [来源](https://zh-hans.reactjs.org/docs/introducing-jsx.html)

### react 全用 const 作为变量

函数式写法, 为计算步骤取名字而非储存空间

> [来源](https://www.zhihu.com/question/382468116/answer/1121663380)

## react 路由

### 路由原理

根据 url 的变化来选择展现不同的组件

使用 history 来监听 url 的变化, 然后解析为 location 对象, router 得到这个对象后渲染相应的组件

## 工作中遇见的
- [State, setstate](http://huziketang.mangojuice.top/books/react/lesson10)
- 通信
  - [子组件改变父组件的 props](https://segmentfault.com/q/1010000007575332/a-1020000007726286)
- [React 中 dom 元素与 html 中的差距](https://zh-hans.reactjs.org/docs/dom-elements.html),dangerouslySetInnerHTML 直接传, 相当于innerHTML
- [render-props](https://zh-hans.reactjs.org/docs/render-props.html#gatsby-focus-wrapper) , 用于告诉组件渲染什么内容的术
- [React namespace](https://medium.com/@kunukn_95852/react-components-with-namespace-f3d169feaf91) 实现形式, 可以防止重名组件
- [React devtool 找到dom 元素](https://segmentfault.com/a/1190000020130188), 将设置中的type 的过滤关了
- [React组件逻辑复用](https://mp.weixin.qq.com/s/NRc7PsgOACo9c5-RFepIeQ), hoc, render props 等,有空看看
- [Rc-form](https://react-component.github.io/form/), 使用 set 和 get 等方法来获取传入单的各种字段, 用 decorator 装饰来返回组件
- [Immutable js](https://immutable-js.github.io/immutable-js/docs/), 一种数据管理的方式, 传入后轻松获取到数据的变动, 不用层层递归
- [Slot children](https://juejin.im/post/5b72935a6fb9a009724b3e4e), 传入插槽中的元素转换为props.children
- [Context](https://zh-hans.reactjs.org/docs/context.html), 避免用 props 层层传入值
- [React ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html), 可以调用 实例 上的方法
- [React router](https://segmentfault.com/a/1190000016435538)
  - [React router config](https://segmentfault.com/a/1190000020084779), 实际上就是一个map, 然后将配置转化为 <route>
  - [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html), 在某个路由下有相应的子路由, 用匹配相应的组件
- [hooks](https://juejin.im/post/5dbbdbd5f265da4d4b5fe57d)
  - [简单介绍](https://segmentfault.com/a/1190000020948922)
    - [易出问题点](https://segmentfault.com/a/1190000018253310), 未读
  - Usecallback, 返回一个回调如果传入的数组有改变将不会重复执行
  - [Usestate](https://blog.csdn.net/weixin_44160385/article/details/105280622), 需要返回一个非同地址的对象或数组来刷新
    -  [hooks 传入 props 来同步数据](https://learnwithparam.com/blog/how-to-pass-props-to-state-properly-in-react-hooks/),usestate 只会在最开始有一个initialstate, 后面不会更新, 所以需要在useffect 中进行 set
  - [Usecallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback), 当传入的参数发生变化才会重执行函数, 遇到了一个案例, 这玩意存储了之前参数, 导致调用回调的时候参数还是初始的, 这和作用域闭包有关了
- React 性能
  - [shouldComponentUpdate](https://segmentfault.com/a/1190000016494335), 用这个来控制render 时机
- React 警报
  - [非法 hook 调用](https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html), 不应该在 class 组件中直用 hooks, 可以包裹一层函数组件来使用
  - [ref 为 string](https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-deprecated-string-refs), 一般意义上的 ref 仍支持,但是<Button ref="xxx"/>不行
- [状态保持](https://juejin.im/post/5d7edee9f265da03a9506701), 跳转后返回仍保持状态, 可以用 unmount 和 willmount 生命周期来保持, 或者link 带数据, 使用react route history state
- [Error boundary](https://zh-hans.reactjs.org/docs/error-boundaries.html), 部分组件崩溃不应该全局崩溃
- [Unknown prop](https://zh-hans.reactjs.org/warnings/unknown-prop.html), 无法被 react dom 元素识别的prop 时报错
- [合成事件](https://zh-hans.reactjs.org/docs/events.html), 回调函数会被传向浏览器的原生事件
- [super(props)](https://segmentfault.com/q/1010000008340434), 如果用 constructor 覆盖了认的话, 就需要传入 props 来继承