## 从输入 url 到网页呈现的过程

- URL 输入
- DNS 解析
- TCP 连接
- 发送 HTTP 请求
- 服务器处理并响应
- 浏览器解析渲染页面
- 连接结束

> [来源](https://juejin.im/post/5b148a2ce51d4506965908d2)

## 浏览器渲染

- 处理 HTML 标记构建 DOM 树
- 处理 CSS 标记并构建 CSSOM 树
- 将 DOM 与 CSSOM 合并成一个渲染树
- 根据渲染树布局页面, 计算节点几何信息
- 将节点绘制

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

### 所有内容的加载顺序

浏览器有五大线程, 当 js 引擎线程运行时会挂起其他线程

- GUI 渲染线程
- js 引擎线程
- 定时器线程(setTimeout)
- 事件触发线程
- http 异步请求线程(资源等)

> [来源](https://www.jianshu.com/p/e141d1543143)

## 回流重绘

## cookie
