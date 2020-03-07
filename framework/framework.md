## jquery

---

使用

## axios

一个封装了 promise 的可以运行在浏览器和 nodejs 端的 http 请求库

> [来源](https://github.com/axios/axios)

## echarts

可运行在 PC 和移动端的可视化库

> [来源](https://www.echartsjs.com/zh/feature.html)

## jsBridge

构建 native 和非 native 间消息通信的通道

> [来源](https://juejin.im/post/5abca877f265da238155b6bc)

## 小程序

- 本质上是一个单页应用, 所有的页面渲染和事件处理都在一个页面内进行, 可以通过微信客户端调用原生的接口
- UI 和数据分离, 所有页面的更新都通过对数据的更改来实现

### 文件内容

每一个页面都有下面四个文件, 通过 json 文件设置页面

- wxml, 框架设计的一套标签语言, 集合基础组件
- wxss, 样式语言, 描述 wxml 的组件样式
- js, 业务逻辑
- json, 小程序设置, 页面注册, 标题等

### 生命周期函数

- onLoad, 页面加载时触发, 一个页面只会调用一次
- onShow, 页面显示, 切入前台时触发
- onReady, 页面初次渲染完成时触发
- onHide, 页面隐藏或切入后台时触发
- onUnload, 页面卸载时触发

### 小程序与 vue 的区别

- this.data 不可以同步到视图, 需要调用`this.setData`
- 生命周期
- 数据的双向绑定

> [来源](https://juejin.im/post/5da444ab6fb9a04e054d93d8)
