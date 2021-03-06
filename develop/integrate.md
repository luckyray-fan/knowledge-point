## 工作中遇见的
- [ci/cd](https://juejin.im/post/5d074d3c6fb9a07ece67d034), 未读完, CI是CICD的第一步-持续继承是在每个merge request里都自动跑一次测试 可是任何测试, 比如 typescript 的检测
- [Eslint](https://luckyray-fan.github.io/knowledge-point/#/article/lint), eslint 原理, 可以通过 eslintrc 配置 eslint, 在 webpack 中 loader 添加它就以用上了, 也可以是 commit 时用 hucky 的lint-staged 来使用
  - [Eslint 不检查分号](https://blog.csdn.net/csdn_yudong/article/details/78445273), 设为 0
  - [Eslint 同作用域同名变量](https://cn.eslint.org/docs/rules/no-shadow), shadow named
- Webpack
  - [Alias](https://juejin.im/post/5ec381215188256d776342cd), 未读, 一般用来替换资源
  - [--progress](https://webpack.js.org/api/cli/#debug-options), 显示打包进度以百分比
  - [多页面打包](https://zhuanlan.zhihu.com/p/109527475)
  - [Dev server](https://webpack.js.org/configuration/dev-server/)
    - [Watchoptions](https://webpack.js.org/configuration/watch/), Webpack devserver 监消耗大量 cpu
    - [hmr 和 inline 原理](https://juejin.im/post/5c86ec276fb9a04a10301f5b), inline, bundle 插入 socket, 通过 websocket 通知浏览器用 reload;hmr, 通过比较 chunk, 然后替更新的 chunk, 只更新部分模块
      - [再补充一个 hmr](https://juejin.im/post/5d4d3e5ce51d4561f64a07d1), 未读, 重要
    - [Inline](https://webpack.js.org/configuration/dev-server/#devserverinline), 打包完成后刷新浏览器
      - [Sockjs](https://segmentfault.com/q/1010000005045512), inline 配置后用来刷新浏览的, 和 path 等设置有关系, [可以用sockpath, sockport 等进行配置, 这篇章讲的更好](https://webpack.js.org/configuration/dev-server/#devserversockport)
    - [Proxy](https://webpack.docschina.org/configuration/dev-server/#devserver-proxy), 背后作转发的是[http-proxy-middleware](https://www.jianshu.com/p/a248b146c55a)
    - [打包后文件都在内存里](https://segmentfault.com/q/1010000009393240/a-1020000009393882), 背后用的是webpack-dev-middleware
    - [Husky](https://zhuanlan.zhihu.com/p/35913229), 通过在 .git 的 hooks 中插入脚来达到想要的效果
  - [Sourcemap](https://webpack.docschina.org/configuration/devtool/) , 不同 sourcemap 模式, 有不的效果, 未读
- 测试
  - [ab 测试](https://www.zhihu.com/question/20045543), 确定哪个方案更好
  - [unit 测试和e2e 测试](https://www.jianshu.com/p/ffd6d319f05b), unit 测试看每个逻的结果对不对, e2e
- [Devops](https://www.zhihu.com/question/24413538) , 就是我们 scm 然后 tce 那套, 把动部署给省掉了

## 常见使用

## 新建项目统一规范

- 代码检查, eslint
- 代码格式化, prettier
- git
  - 提交, commitlizen
  - 查看, gitlen 插件
- [模板文件](https://zhuanlan.zhihu.com/p/128555320)
  - [gitignore](https://github.com/github/gitignore)
  - [readme](https://github.com/RichardLitt/standard-readme)

### webpack

- [path, publicpath, contentBase](https://juejin.im/post/5bb085dd6fb9a05cd24da5cf)

- [代码分割](https://juejin.im/post/5e796ec1e51d45271e2a9af9#heading-3)

> [原理讲解](https://juejin.im/post/5df884ad6fb9a0164e7f979d)

## 模块化

---

### js 模块化

- CommonJs, 最初用于 node, 是同步的, 输出值的拷贝
- AMD, 非同步, 依赖前置, 提前执行, requireJs, 没法按需加载
- CMD, 非同步, 依赖就近, 延迟执行, seaJs, 按需加载
- ES6, 非同步, 按需加载, 输入值的引用
  - 如果有多个值可以用 `import * as xx from 'xxx'`
  - [有命名和默认两种](https://www.jianshu.com/p/edaf43e9384f), 命名可有多个, 默认只能一种
  - 在导入时要加`{}`, export default 则不需要

commonJs 与 es6 的区别:

- node 加载的是值的拷贝, es6 加载的是值的引用
- node 加载时加载整个模块作为一个对象, 运行时加载, es6 在编译时加载输出值加载部分

> [来源](https://juejin.im/post/5b4420e7f265da0f4b7a7b27)

### 模块加载原理

- 如何动态加载
- 如何避免多次加载
- 如何缓存

### 浏览器加载模块

浏览器对 ES Module 标准原生支持, 可以使用 `<script type="module">` 引入模块, 默认情况是 defer

> [来源](https://juejin.im/post/5b430a4be51d451925627119)

#### 实践

为了能用 vscode 的 d.ts 的代码检测

```javascript
//npm init -y
//npm install three
import * as thr from '../node_modules/three/three.module.js';
// do something with thr
```

html 文件中用 script 的 type=module

> [来源](https://juejin.im/post/5b1bc42551882513af6b755a)

## css 模块化

---

### css 预处理器

sass 和 less, 赋予 css 更多可编程的特性, 简化开发

### 资源模块化

## 工程化

---

> [来源](https://juejin.im/post/58ac334e8d6d810058c103e0)

> [前端工程——基础篇](https://github.com/fouber/blog/issues/10)

## 组件化

---

从 UI 中拆分下的包含模板(HTML)+样式+逻辑功能完备的结构单元, 就是组件

## 规范化

---

> [来源](https://www.zhihu.com/question/24558375)

## webpack

---

- 初始化参数, 从配置文件和命令行中读取合并
- 开始编译, 由参数初始化 compiler, 加载所有插件
- 从入口开始调用所有 loader 对模块进行编译, 再由模块到模块, 递归直到所有依赖都经过了 loader 处理
- 根据之前的依赖关系, 组装成一个个 chunk, 再根据配置转换为有具体路径的文件
- 插件在这之中根据事件来执行

> [来源](https://juejin.im/entry/5b0e3eba5188251534379615)

### 按需加载 代码分割

- 更改 webpack 打包语法, 加上`chunkFilename`, 指定基础路径`publicPath`
- 使用`import()`语法
- 如果要让后面引用出来的文件可读, 可以使用注释的语法

> [来源](https://juejin.im/post/5bf61082f265da616a474b5c)

### plugin loader

- loader, 转换器, 将 A 文件进行编译成 B 文件, A.less 到 A.css
- plugin, 丰富了 webpack, 在 loader 结束后, 通过监听 webpack 的各种事件来完成一些功能

> [来源](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308)

### 环境

- 开发环境
  - 热更新
  - sourcemap
- 生产环境
  - 代码切割
  - 压缩, 减少打包体积

### sourcemap

sourcemap 能定位 bug

- 字符的行列号一一对应

  > `mappings: "输出文件行位置|输出文件列位置|输入文件名|输入文件行号|输入文件列号,....."`

- 不输出文件的行号, 每换一行用`;`来代替
- 提取输出文件名, 记录它在数组中的索引
- 将文件的变量名, 函数名作为数组, 提取索引值
- 将记录绝对位置改为相对前一个字符的位置
- VLQ 编码分割记录, 用逗号连接
  - 每一个对应的位置转换为二进制
  - 二进制每六位来分割, 第一个六位的最后一位代表正负, 每一位的第一位代表是否延续
  - 这些六位组用 base64 转换

> [来源](https://juejin.im/post/5d0790996fb9a07f0052dbbb)

### treeshaking

> [来源](https://juejin.im/post/5a64724df265da3e5a575d65)

> [es 和 commonjs 在 treeshaking 的不同表现](https://zhuanlan.zhihu.com/p/71098263)

## 前端监控

目的是获取用户行为数据和性能异常监测等

- 代码埋点, 埋点指的是在相关地方嵌入代码
- 可视化埋点
- 无埋点, 全量埋点

> [来源](https://juejin.im/post/5b62d68df265da0f9d1a1cd6)

## 异常监测

---

- 错误拦截, `window.onerror`, 然后对收集到的错误扔进队列等待上报
- 跨域问题
- promise

> [来源](https://zhuanlan.zhihu.com/p/26085642)

> [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)

### 错误上报方案

- 前端
- 后端

## typescript

短期理解就是提供了各种类型吧

> [来源](https://ts.xcatliu.com/)

## css 预处理语言

使用变量循环继承等语法, 拓展了 css 的逻辑性

- [less](https://juejin.im/post/5a2bc28f6fb9a044fe464b19)
- sass
- stylus

偏好 pug 和 stylus

## 前端技术的发展

- jq
- angular, react
- vue
- gulp, webpack
- pwa, flutter, rn
- serverless, webassembly, 微前端

### css 发展

- 纯手写
- var, @import
- 预处理器

## lint 代码检查

每次 commit 的时候可以用 [commitlizen](https://juejin.im/post/5dff29646fb9a0160b638631) 来检查自己的 commit 的语句, 一般可以用

- feat, 新功能
- style, 样式调整
- chore, 零碎的
- fix, 解决 bug

> [来源](https://segmentfault.com/a/1190000009546913)

> [eslint+husky+prettier+lint-staged 提升前端应用质量](https://juejin.im/post/5c67fcaae51d457fcb4078c9)
