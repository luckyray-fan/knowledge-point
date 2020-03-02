## 加载完毕事件

DOMContentLoaded 与 load 事件, DOMContentLoaded 在 HTML 文档解析加载完成后便触发, load 则会是所有东西都加载完毕后才触发

> [来源](https://zhuanlan.zhihu.com/p/25876048) > [codepen 上有趣的参考](https://codepen.io/LukeAskew/pen/LnJsE)

## innerHTML, textContent

## window 与 document 上的事件

有不少事件是不通用的, 例如 DOMContentLoaded 只在 document 上, window 可以监听到

load 只触发在 window 上

> [来源](https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener)

## localstorage 和 sessionstorage

- localStorage html5 中新加入的技术
- sessionStorage, 刷新页面或者关闭后就会被清空

> [来源](https://jerryzou.com/posts/cookie-and-web-storage/)
