## 模块化

### js 模块化

- CommonJs, 最初用于 node, 是同步的, 输出值的拷贝
- AMD, 非同步, 依赖前置, 提前执行, requireJs, 没法按需加载
- CMD, 非同步, 依赖就近, 延迟执行, seaJs, 按需加载
- ES6, 非同步, 按需加载, 输入值的引用

> [来源](https://juejin.im/post/5b4420e7f265da0f4b7a7b27)

### 模块加载原理

- 如何动态加载
- 如何避免多次加载
- 如何缓存

### 浏览器加载模块

浏览器对 ES Module 标准原生支持, 可以使用 `<script type="module">` 引入模块, 默认情况是 defer

> [来源](https://juejin.im/post/5b430a4be51d451925627119)

### css 模块化

### 资源模块化

## 组件化

从 UI 中拆分下的包含模板(HTML)+样式+逻辑功能完备的结构单元, 就是组件

## 规范化

> [来源](https://www.zhihu.com/question/24558375)

## webpack

### 开发环境

- 热更新
- sourcemap

### 生产环境

- 代码切割

- 压缩, 减少打包体积
