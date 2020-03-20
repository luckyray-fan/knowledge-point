## 腾讯

### 实习

看点直播的, 搜索了一下, 是最近 19 年 11 月多左右出品的, 原身似乎是腾讯直播, 主要面向直播带货

PCG 原本似乎是北京, 最近可能是看点之类的搬过来了, 深圳也有岗位

#### 一面

- 自我介绍
- 印象较深的项目, 困难以及如何解决的, 然后我说了下载队列, 他问我可以怎么优化, 实际上我这个只是在下载的时候使用队列, 搜索的时候用事件循环, 哗啦的就一个劲反向搜索, 只要 ip 不被 403, 那就给劲 😂
- express 优缺点, 用过 koa 没
- 存储, cookie, localstorage, sessionstorage
- http 状态码, 301 和 302 浏览器处理的区别
- tcp 握手挥手
- https
- 缓存
- let const, babel 中的实现
- 闭包优点缺点
- 事件代理
- 性能优化
- 首屏
- 同构, 所以我决定写个 demo 看看
- 对 vue 的理解, 回答了双向绑定, 架构之类的
- 时针与分针的夹角, 3:45
- 笔试题, 此时 qq 分享屏幕, 面试官用的是 mac 诶, 限时 1.5h, 不能查资料
  - 拖动一个方框, 不能用 jquery 库, 昨天刚好写计算机图形学的 opengl 作业, 我用 canvas 完成的, 效果如下 <img src="../source/interview-1.gif" width="200"/>
  - 大数相加, 问了下不能用 bigint

## 字节跳动

### 实习

核心广告部门

牛客的面试感觉还可以, 输出和 codeopen 差不多, 就是对象打印出来是个`[object object]`, 关键是有问题记录, 方便回顾

#### 一面

- 数组去重扁平化, 手写
- flex, 有什么属性
- position
- 文本居中
- canvas, 我说了 echart, 百度地图, 下载图片(这个我记不大清了)
- js 继承
- 排序, 将给入的对象数组按给定的属性排序, 值是 number 按升序, 是 string 按字母排序

  ```JavaScript
  arr.sort((i,j)=>{
    return a.localeCompare(b);//字符串的比较
  })
  ```

- 有什么要问的吗, 字节的技术栈, 用 node 吗

#### 二面

- 找出数组中最大的连续子数组的和
- 实现字符串的反转, [unicode 字符如何处理](http://www.alloyteam.com/2016/12/javascript-has-a-unicode-sinkhole/)
  - 因为 js 用 16 位来代表一个字符, 但是 utf-16 可以用四个字节, 所以一个 `'😀'.length == 2`, 解决方法是`Array.from(str)`
- 二叉树结构和遍历
- ajax,post
- content-type 有些什么属性, 分别在响应和请求
- node express 如何处理 formdata
- 中间件, koa 洋葱
- webpack loader/plugin
- vue2 迁到 vue3 改成 proxy, 和原因
- 问项目
- 有什么要问的吗, node 的框架是怎样子的

#### hr 面

// 实习时间, 尽快, 问一下这些课怎么办 //1. 远程入职 2. 现场入职
