## 模块化

---

### js 模块化

- CommonJs, 最初用于 node, 是同步的, 输出值的拷贝
- AMD, 非同步, 依赖前置, 提前执行, requireJs, 没法按需加载
- CMD, 非同步, 依赖就近, 延迟执行, seaJs, 按需加载
- ES6, 非同步, 按需加载, 输入值的引用

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

## git

---

首先, git init 的时候, git 会创建一个`.git`目录, 这个目录包含所有 git 存储和操作的对象, 如果想要备份或者复制一个版本库, 可以直接将该目录复制就行, 刚创建的目录中有以下比较重要的条目:

- Head 文件, 指示目前被检出的分支
- index 文件, 保存暂存区信息
- objects 目录, 存储所有数据内容
- refs 目录, 指向数据的提交对象的指针

在`.git`目录的父目录是工作区, 运行`git add`将会加文件放到 index 暂存区, 然后`commit`后就放到了 Head 中并清空暂存区

- 为了当前内容创建副本, 将内容压缩为二进制, 并计算内容的 SHA1 哈希值, 作为该对象的文件名, 此时可以看到 `objects`目录下多了一个文件夹, 文件夹名字为之前计算的哈希值的前两位, 文件夹中有一个文件名为后 38 位的文件
- 更改文件内容后会重复上面的步骤

> [来源](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)

## 异常监测

---

- 错误拦截, `window.onerror`, 然后对收集到的错误扔进队列等待上报
- 跨域问题

> [来源](https://zhuanlan.zhihu.com/p/26085642)

> [前端异常监控解决方案研究](https://cdc.tencent.com/2018/09/13/frontend-exception-monitor-research/)

## typescript

短期理解就是提供了各种类型吧

> [来源](https://ts.xcatliu.com/)

## css 预处理语言

使用变量循环继承等语法, 拓展了 css 的逻辑性

- [less](https://juejin.im/post/5a2bc28f6fb9a044fe464b19)
- sass
- stylus

偏好 pug 和 stylus