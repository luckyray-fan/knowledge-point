## meta 标签

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

## 语义化

仅通过标签名就能判断出其内容的标签, 让文档结构清晰, 搜索引擎更好的爬取, 方便其他设备解析

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
