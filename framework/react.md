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
