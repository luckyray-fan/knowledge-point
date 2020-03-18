## 移动端与 PC 端的区别

- 触摸事件, 弹出输入键盘
- 布局自适应, 手机分辨率适配
- 动画性能
- 考虑移动端的网速

> [来源](https://www.cnblogs.com/zhuzhenwei918/p/6790859.html)

## 移动端触摸事件

**事件定义与分类:**

- click, 部分情况可能会无效, 建议使用 touch
- touch, 触摸
- tap, 触摸事件
- swipe, 滑动事件

**事件触发顺序:**

- 点击
  - touch
  - click
  - tap
- 滑动
  - touch
  - swipe

> [来源](https://www.cnblogs.com/imwtr/p/5882166.html)

### 以前 click 会延迟 300ms 的原因

因为触发 touchstart, touchmove, touchend 后会有 300ms 才触发 click

解决方法, touchend 之后 preventDefault 然后使用`document.createElement()`在该元素上触发 click

## Flutter

chrome 原团队成员提出的跨平台的方案, 一套程序等于全平台

> [来源](https://hicc.me/flutter-for-frontend-engineer/)

## Hybrid

混合模式应用开发, 利用 jsbridge 拥有调用原生系统的能力, 能快速开发, 不是很依靠发布新版本来更新

> [来源](https://juejin.im/post/5b4ff3bee51d4519721b9986)

## pwa

progressive web apps, 渐进式 web 应用, 就是跨平台可离线工作的 web 应用程序

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)

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
