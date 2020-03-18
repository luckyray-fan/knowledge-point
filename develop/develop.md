## chrome devtool

### performance

如果看到以前的文章提到 timeline, 现在改为了 performance

> [来源](https://zhuanlan.zhihu.com/p/29879682)

### network

- 请求比较多的情况下, 用[filter](https://developers.google.com/web/tools/chrome-devtools/network/reference#filter)过滤部分, 使用`-png`就可以去掉带有 png 的文件, [is a way filter requests](https://stackoverflow.com/questions/14637278/is-there-a-way-to-filter-network-requests-using-google-chrome-developer-tools)

## debug

### 浏览器

### nodejs

## bookmarklet

我也写了一个, 作用是一键去除 csdn 哈哈哈哈 😂, 还有就是 bilibili 直播一键画中画(看 vtuber 用的, 小窗加声音, 爽!)

> [来源](http://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html)

## 油猴脚本

就只讲我用到的, 从必要的开始, 禁止平铺平铺禁止 🤣, 不然一开始就学那么多用不到的干嘛

- 可以复制到油猴后台然后 ctrl+s 保存就更新了脚本
- 需要刷新标签页才能运行
- 可以用控制台 debug
- 如果想看 ajax 请求, [可以打开 background 页面看](https://stackoverflow.com/questions/10257301/where-to-read-console-messages-from-background-js-in-a-chrome-extension), 因为它的请求方法是包裹了一层原生的 xmlhttprequest, 本质上是由 extension 自己发出的请求, 可以看看: [why can tampermonkey perform a cors request](https://stackoverflow.com/questions/48615701/why-can-tampermonkeys-gm-xmlhttprequest-perform-a-cors-request), 油猴还可以更改 http 头, 能改 refer

### userscript header

就是头部的标识, 可以指定油猴的执行方式, 先给出几个关键的

- match, 匹配的网址, 示例: `*://*.bilibili.com/*`, 注意这个最末尾的通配符, 如果没有那么除了首页其他地方都无法运行
- grant, 允许调用的方法, 我觉得直接开放全部不就好了 🤨

### Application Programming Interface

- 插入 dom 结构, 就用普通的 dom 方法就好
- GM_addStyle(css), 插入 css

> [来源](https://www.tampermonkey.net/documentation.php)

## 搜索方法

**google**

- 目前最常用就一个 `-`, 例如`-CSDN`哈哈哈哈哈 🤣
- `site:xxx.com`, 在指定的网站中搜索, 我看有些偷懒的网站没有自己的搜索系统, 就用用谷歌的

> [Google Hacking————你真的会用 Google 吗](https://zhuanlan.zhihu.com/p/22161675)
