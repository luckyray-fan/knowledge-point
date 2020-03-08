## meta 标签

---

元数据, 是关于数据的信息, 对于机器可读, 可用于浏览器或搜索引擎, 可携带的信息如下:

- 页面的描述, SEO 优化

```html
<meta name="description" content="your description" />
```

- 关键词, SEO 优化

```html
<meta name="keywords" content="your keywords" />
```

- 文档作者
- 最后修改时间
- 添加 http 头部内容

```html
<meta http-equiv="Refresh" content="5;url=https://www.google.com" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

- 字符编码, 必须要写在第一行, 否则前面的属性可能就会有乱码

```html
<meta charset="utf-8" />
```

- 页面布局, 常用于移动端

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- 还有一些控制浏览器行为的字段, pwa, 锁定方向等等

> [来源](https://blog.csdn.net/yc123h/article/details/51356143)

### viewport 控制布局

- width, 控制视口的宽度, device-xxx 指的是设备的宽高度
- initial-scale, 页面最初加载的缩放等级, 因为对于高 dpi 设备一个 css 像素相当于多个物理像素

> [来源](https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag)

## 语义化

---

仅通过标签名就能判断出其内容的标签, 让文档结构清晰, 搜索引擎更好的爬取, 方便其他设备解析

即使没有样式情况下也以一种文档格式显示

常用如下:

- header
- nav
- article
- aside
- footer
- section

### 文档级语义

- ruby, 排版注释系统
- mark, 高亮标记一段文字, 就是加了`background-color`

> [来源](https://segmentfault.com/a/1190000013901244)

## HTML5

---

HTML 的第五个版本, 14 年完成的标准制定, 广义上包含了 html5,css3,JavaScript 等最新前端开发技术的综合

- datalist, 提供自动完成的文本框
- svg, 基于文本的图形语言, 可以绘制使用文本, 线, 点等的图形
- canvas
- manifest, 应用缓存
- `<!DOCTYPE HTML>`, 规范浏览器的行为

> [来源](https://www.jianshu.com/p/e6e714eff7d5) 质量不大行

## src 与 href 区别

---

- href, 指向网络资源所在的位置, 建立这个标签与外部资源之间的关系。
- src, 指向的内容将会嵌入到文档中当前标签的位置

> [来源](https://www.jianshu.com/p/dadbb8f8a952)

## 空元素

---

没有内容的 HTML 内容称为空元素, 空元素是在开始标签中关闭的

> [来源](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%A9%BA%E5%85%83%E7%B4%A0)

## iframe

---

会阻塞主页面的 onload 事件, 搜索引擎无法解读, 不利于 seo, iframe 和主页面共享连接池, 而浏览器会对相同域的连接有限制

## xml xhtml html

---

- xhtml 比 html 更严格
- xml 用来数据传输定义

> [来源](https://www.jianshu.com/p/9027f0b4c69c)

## 转义字符串

---

HTML 中`<>&`等有特殊含义不能直接使用, 如果想要再网页中显示, 需要使用转义字符串

> [来源](http://caibaojian.com/576.html)
