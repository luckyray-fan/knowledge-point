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

## react vue jquery angularjs 不同的使用场景
