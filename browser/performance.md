## 优化指南

---

> [来源](https://mp.weixin.qq.com/s/C2Zx3KPNPkgj-aHnOY43Iw)

## 优化手段

---

- 网络
  - 合并请求
  - 域名拆分, 使用 cdn, DNS 预解析
  - 开启 Gzip, 压缩文件, 使用 webp 格式的图片, 按需加载
  - keep-alive, HTTP2
  - 使用缓存
- 资源加载
  - webpack
    - 按需加载
  - preload 加速本页面, prefetch 加速下一页面
  - 懒加载, 预加载
- 渲染与执行
  - CSS 放 head, js 放 body
  - 异步 script, 动态加载 script
  - DOM 查询缓存, fragment 批量操作
  - 使用切换 class 操作 css
  - 事件代理
  - 更好的 API
    - css 选择器
    - requestAnimationFrame

> [来源](https://www.cnblogs.com/xiaohuochai/p/9178390.html)

> [未来性能的方向(可能)](https://www.infoq.cn/article/B2gg4ZULH4oNlv8AHCrM)

### 测试优化收益

- 合并请求, 减少 tcp 握手
- 域名拆分, 增加浏览器请求数量, 但是 dns 解析会多点时间
- 开 Gzip, 浏览器性能可能受影响
- keep-alive, 减少 tcp, 但是服务器负载变大并且易遭受攻击

> [来源](https://www.zhihu.com/question/40505685) 内容很棒

## 如何提高首屏加载速度

---

- js 文件放 body 底部, css 放 head
- http 静态资源用多个子域名
- 服务端开启 gzip, 响应添加 expires
- 减少 http 请求数量
- 图片用雪碧图, 大图用懒加载
- 使用异步脚本, 动态创建脚本
- 后端渲染

> [来源](https://juejin.im/post/5de4fd9c518825434771d163)

## 预加载和懒加载

---

- 预加载, 提前加载图片, 当用户需要查看时可直接从本地缓存中渲染
- 懒加载, 先将图片路径替换为一张图片, 就只需要请求一次, 也就是占位图, 当图片出现在浏览器的可视区域再设置图片的真实路径

> [来源](https://www.jianshu.com/p/4876a4fe7731)

## CSS 性能优化

- 内联首屏关键 css
- 异步加载 css
- 文件压缩
- 去除无用 css
- 有选择的使用选择器
- 减少使用昂贵的属性
- 优化回流重绘
- 避免使用`@import`, 当使用这个关键词时, 因为只有 css 被下载时发现使用了`@import`才会去下载引入的 css, 这个 css 文件无法并行下载

> [来源](https://juejin.im/post/5b6133a351882519d346853f)
