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
