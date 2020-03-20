## jquery

---

- 立即执行, 环境判断
- jquery 无 new

```JavaScript
jQuery = function(selector){
  return new jQuery.fn.init(selector);
}
jQuery.fn.init.prototype = jQuery.fn;
```

- 存储全局变量
- jquery.extend 和 jquery.fn.extend

> [来源](https://luckyray-fan.github.io/2019/10/06/jquery-study/) 嘿嘿, 以前写的, 搜集的资料都在里面, 我就不再去找了

## axios

一个封装了 promise 的可以运行在浏览器和 nodejs 端的 http 请求库

> [来源](https://github.com/axios/axios)

## echarts

可运行在 PC 和移动端的可视化库

> [来源](https://www.echartsjs.com/zh/feature.html)

## jsBridge

构建 native 和非 native 间消息通信的通道

> [来源](https://juejin.im/post/5abca877f265da238155b6bc)

> [小白必看，JSBridge 初探](https://juejin.im/post/5e5248216fb9a07cb0314fc9)

## react vue jquery angularjs 不同的使用场景

- jquery, 提供了兼容的能力, 作为一个工具库, 拥有诸如文档处理, 事件处理, ajax 等工具
- vue, 提取 angular 中优秀的部分, 制作的轻量框架, [来源](https://zh.wikipedia.org/wiki/Vue.js#%E5%8E%86%E5%8F%B2)
- angular, 适用于大型项目
- react, 跨平台, 组件化

> [来源](https://www.jianshu.com/p/1a348132ba2a)

## express

**可以用来:**

- 路由, 转发静态文件
- 配置中间件, 指对请求进行处理, 比如 body-parser 处理请求体
- 注册模板引擎

> [来源](https://developer.mozilla.org/zh-CN/docs/learn/Server-side/Express_Nodejs/Introduction)

### 与 koa 对比

- express
  - 文档完整, 资料多
  - 但是还是用的 callback
- koa
  - 不用回调, 用 await

> [来源](https://www.zhihu.com/question/38879363)

### egg

在 koa 基础上进一步的完善, 实现企业级的需求

> [来源](https://www.zhihu.com/question/50526101)
