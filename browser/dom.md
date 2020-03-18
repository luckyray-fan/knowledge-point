## 常见使用

- [插入 domstring 到 dom 中](https://stackoverflow.com/questions/7327056/appending-html-string-to-the-dom), `Element.insertAdjacentHTML()`
- [将 html 解析为 dom](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMParser), `DOMParser()​​`

## 加载完毕事件

---

DOMContentLoaded 与 load 事件, DOMContentLoaded 在 HTML 文档解析加载完成后便触发, load 则会是所有东西都加载完毕后才触发

> [来源](https://zhuanlan.zhihu.com/p/25876048) > [codepen 上有趣的参考](https://codepen.io/LukeAskew/pen/LnJsE)

## innerHTML, textContent

---

## window 与 document 上的事件

---

有不少事件是不通用的, 例如 DOMContentLoaded 只在 document 上, window 可以监听到

load 只触发在 window 上

> [来源](https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener)

## localstorage 和 sessionstorage

---

- localStorage html5 中新加入的技术, 如果不被清除能一直使用
- sessionStorage, 刷新页面或者关闭后就会被清空

> [来源](https://jerryzou.com/posts/cookie-and-web-storage/)

## BOM

浏览器对象模型, 针对的是浏览器, 能够控制浏览器的行为

> [来源](https://segmentfault.com/a/1190000013426834?utm_source=channel-hottest)

### 方法

- [`setImmediate`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setImmediate), 相当于`setTimeout(fn,0)`完成后续任务后立即执行

### BOM 与 DOM 的区别

- DOM 操作文档, document 是它的一个对象
- BOM 操作浏览器, window 是它的一个对象

> [来源](https://www.zhihu.com/question/33453164)

### 请求发送

---

cors 跨域的话, 字段带上 withCredentials 就能把当前的域的 cookie 带上

#### ajax 原生请求

```javascript
var xhr = new XMLHttpRequest();
xhr.open('get', './xxx?' + args, async);
xhr.onreadystatechange = function() {
  //onload
  if (xhr.readyState === 4 && xhr.status === 200) {
    //do something xhr.responseText
  }
};
xhr.send();
```

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

#### ajax readystate

- unsent, 尚未调用 open
- opened, 调用 open
- headers_received, 调用了 send
- loading, 下载中, responseText 属性已经可以获得部分内容
- Done, 下载完成

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState)

#### fetch

- 不支持 timeout
- 无法检测请求的 progress

```javascript
var dataJson = await fetch(url, { headers: {} });
var data = await dataJson.json();
```

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

## DOM

DOM 针对 HTML 和 XML 提供的 API, 也就是能够操作与 HTML 节点相关的内容

### document

- [`document.all`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/all) 返回一个`HTMLAllCollection`, 包含页面中所有的元素, 只读属性

- [`document.cookie`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie) 获取并设置当前文档的 cookie, 注意这个 cookie 是非 httponly 的
  - 赋值不会覆盖`document.cookie`, 会给它一个新的键值对

### 元素位置

> [来源](https://www.cnblogs.com/dong-xu/p/7150715.html)

### 事件

#### current 与 currentTarget

- current, 触发了事件的元素
- currentTarget, 当前绑定监听回调的元素

> [来源](https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property)

#### 鼠标事件

- [各种坐标](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)
  - client, 鼠标指针在点击元素中的坐标
  - movement, 鼠标指针相对于最后的 mousemove 事件位置的坐标
  - offset, 鼠标指针相对于目标节点内边位置的坐标
  - page, 鼠标指针相对于整个文档的坐标
  - screen, 鼠标指针相对于全局(屏幕)的坐标
