## 从输入 url 到网页呈现的过程

---

- URL 输入
- DNS 解析
- TCP 连接
- 发送 HTTP 请求
- 服务器处理并响应
- 浏览器解析渲染页面
- 连接结束

> [来源](https://juejin.im/post/5b148a2ce51d4506965908d2)

## 浏览器渲染

---

- 处理 HTML 标记构建 DOM 树, 此时 document.readyState 为 loading
- 处理 CSS 标记并构建 CSSOM 树, 等文档解析完成, readyState 变为 interactive
- 将 DOM 与 CSSOM 合并成一个渲染树
- 根据渲染树布局页面, 计算节点几何信息
- 将节点绘制
- 同步脚本都执行完成了, 触发 domContentLoaded 事件
- 等所有内容载入并且异步脚本(defer 与 async)执行完, readyState 变为 complete,浏览器触发 window 上的 load 事件
- 调用回调, 响应事件

如果 DOM 或 CSSOM 被修改, 以上过程需要重复执行

### defer 与 async

这两个属性会改变 js 加载的阻塞形式, 当然他们对内联脚本无效

- defer, 表示延迟执行引入的 js, 即它加载的时候 HTML 不停止解析, 当文档解析完毕且 defer 脚本也加载完毕后执行 , 然后触发 `DOMContentLoaded` 事件, 不会改变执行顺序
- async, 异步加载, 加载完就执行, 当动态添加 script 标签时, async 默认为 true, 执行顺序不一定

> [来源](https://juejin.im/entry/59e1d31f51882578c3411c77)

### html css js 的加载顺序

- 一边下载 HTML 网页, 一边开始解析
- 发现 \<script\>, 暂停解析, 将网页渲染交给 js 引擎, 但此时仍会识别脚本后面的资源, 进行预加载
- 发现 link 标签, 与 js 并行下载, 但是会先加载 css
- 如果引用了外部脚本就下载后执行, 否则直接执行
- 控制权还给渲染引擎

如果外部脚本时间长, 网页就会失去响应网页只会在 js 和 css 都下载完成后才开始绘制, css 和 js 并行下载, 但执行 js 需要等 css, 如果 css 放后面, dom 树构建完了, 渲染树才构建那么页面会闪跳一下, 因为此时会重新渲染页面

> [来源](https://www.cnblogs.com/yingsong/p/6170780.html)

> 这个 css 与 js 的实验不错 [JS 和 CSS 的位置对资源加载顺序的影响](https://juejin.im/entry/588036ac8fd9c50067ddbdbd)

### 所有内容的加载顺序

浏览器有五大线程, 当 js 引擎线程运行时会挂起其他线程

- GUI 渲染线程
- js 引擎线程
- 定时器线程(setTimeout)
- 事件触发线程
- http 异步请求线程(资源等)

> [来源](https://www.jianshu.com/p/e141d1543143)

## 回流重绘

---

- 回流, 当渲染树中部分元素的属性发生改变, 浏览器重新渲染的过程称为回流
  - 页面首次渲染
- 重绘, 元素样式改变不影响它在文档中的位置, 浏览器会将新样式赋予并重新绘制它

现代浏览器对回流与重绘的优化: 维护一个队列, 把所有引起回流和重绘的操作放入队列中, 如果队列中的任务数量或者时间间隔到达一个阈值, 浏览器就将队列清空, 统一一次

为了确保某些值是最精确的, 遇到部分操作会立刻清空队列:

- width, height
- getComputedStyle

### 避免方法

- CSS
  - 避免 table 布局
- JavaScript
  - 一次性重写 style 属性
  - 创建 documentFragment, 在其上面应用 dom 操作最后再添加到文档

> [来源](https://juejin.im/post/5a9923e9518825558251c96a)

### 监控回流重绘的方法

在 chrome 的 more tools 中可以打开

![](../source/browser-1.png)

> [来源](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering)

## 浏览器一些默认操作

---

### 关闭浏览器

- 清除临时 cookie

## 跨域请求

---

发起请求的域与该请求指向的资源所在的域不一样, 也就是`协议+域名+端口号`

通常浏览器会为了防止 csrf 攻击限制跨域请求

现在也有 `同源策略` 限制不同源的 js 对 `document`对象的读取等

### 请求方案

- JSONP, 百度地图
- CORS

> [来源](https://www.jianshu.com/p/f880878c1398)

## 事件

某个特定的有意义的瞬间, 然后传递出来, 这就是观察者模式下的事件

### 事件委托

### 事件冒泡捕获

事件流描述的是从页面接收事件的顺序, IE 是事件冒泡, 网景是事件捕获

- 冒泡, 从触发事件的元素逐渐向上传播直到 window
- 捕获, 从 window 到触发事件的元素, 老版本浏览器不支持, 所以一般用冒泡

DOM2 级规定事件流, 有捕获阶段, 处于目标阶段, 和事件冒泡阶段

> [来源](https://segmentfault.com/a/1190000012729080)

### 如何阻止事件冒泡与取消默认事件

- 阻止事件冒泡
  - `e.stropPropagation()`
- 取消默认事件
  - `e.preventDefault()`
  - `return false`

> [来源](http://caibaojian.com/javascript-stoppropagation-preventdefault.html)

## 浏览器缓存
