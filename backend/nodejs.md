# 工作中遇见的
- [node_modules 困境](https://mp.weixin.qq.com/s/FHQRQ2fhwEcHnccxEUrf_w), 未读完
  - 从嵌套到铺平, 全局冲突解决方式
  - 使用非 depencies 情况导致的 Phantom(灵) dependency, 用户没有安装 devdepency 错
  - 语义 semver 规范, typescript 就没遵守
    - 写死版本, 但不能保证依赖的依赖也是写的, 所以有了 lock, 但 lock 也有无法覆盖情况
- [Cross-env](https://segmentfault.com/a/1190000005811347) 配置 node_env
  - 提供以 linux 的方式设置 windows 上的环变量
- Import
  - [Import as](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import), 导入时重命名
- [Max-old-space](https://stackoverflow.com/questions/48387040/nodejs-recommended-max-old-space-size/48392705), 指定 node 的 v8 引擎可用最大内存, 一般用于编译, 64 位默认 1g
- [修饰器](https://segmentfault.com/a/1190000011479378), 包装函数, 使用类似 @xxx 的语法,es7 提出的语法
- [Promisify](https://juejin.im/post/59f99d916fb9a0450b65b538), 将 callback 转为 promise 的式, 需要满足 nodecallback 的形式, 也就是参中回调函数在最末尾, 传入回调的参数, err 在第个
- Npm
  - [Packagejson main 字段](https://github.com/SunshowerC/blog/issues/8), 用来指定 require时的入口
  - [Npm link](https://github.com/atian25/blog/issues/17), 可以方便的测试本地的包
  - [Peerdependency](https://www.cnblogs.com/wonyun/p/9692476.html), 为防install 时在内部install 不同的版本, 所以要求使用这个包的项有满足相应要求的依赖的库, 比如一些 ui 库会求宿主安装 react 之类的
  - [Node-sass](https://segmentfault.com/q/1010000011726800), 用来 load sass/scss 文件包, 一般 webpack 集成的
  - [Yarn workspace](https://classic.yarnpkg.com/zh-Hans/docs/workspaces/), 安装一个路径下所有package.json 中涉及到的依赖

## node 源码阅读方法

熟悉 C/C++，然后了解 epoll、IOCP 使用，了解 socket 和多线程，然后边 debug 边看

## 爬虫

---

- 代理池
- 请求头
- 下载队列

## 同构

---

用于解决白屏和 seo 问题, 浏览器和服务器共同运行一个获得 HTML 的函数

- 该函数必须要判断环境来决定使用 DOM 或 global, process 等
- 选择库的时候也需要支持两端, 如 axios, lodash
- 此时加快首屏, 可只渲染最开始的部分, 后面的让浏览器去渲染

> [来源](https://juejin.im/post/5c821dc45188257e1f2915b1)

### 同构实践

从 vue 的文档有以下优点

- SEO
- 更快的内容达到时间, 不用等待 js 都完成下载并执行, 可以更快的看到完整渲染的页面

但是需要在 nodejs 下渲染, 服务器负载也会增大, 所以要适当使用缓存策略

如果内容(time to content)到达时间很重要, 那么有必要上同构

由于没有动态更新, 所有的声明周期钩子函数中, 中有`beforeCreated 和 created`会在服务端渲染, 其他生命周期只能在客户端执行

**有点难搞, 先放一放 😁**, 我看的文章 [带你走近 Vue 服务器端渲染（VUE SSR）](https://juejin.im/post/5b72d3d7518825613c02abd6), 时间点 2018.08.14, 它参考的文章[让 vue-cli 初始化后的项目集成支持 SSR](http://blog.myweb.kim/vue/%E8%AE%A9vue-cli%E5%88%9D%E5%A7%8B%E5%8C%96%E5%90%8E%E7%9A%84%E9%A1%B9%E7%9B%AE%E9%9B%86%E6%88%90%E6%94%AF%E6%8C%81SSR/)时间点 2017.08.16,然后, 参考的文章里的 vue-cli@2.8.2, 现在 2020.3.10 的 vue-cli@4.2.2😁, 那报错是哗哗的, 整了半晌, build 成功了, 访问对应路由, 报错, 爽啊

> [来源](https://ssr.vuejs.org/zh/)

### 预渲染

适合静态页面, 这干嘛不直接写好一个页面然后原样传过去啊

> [来源](https://tech.meituan.com/2018/11/15/first-contentful-paint-practice.html)

## GraphQL 和 RESTful 的比较

---

作为两种 API 模型, GraphQL 是为了改进 Rest 而出现的

- rest, 核心思想是资源, 每个网址代表一个资源
- GraphQL, 资源的描述信息与其获取方式相分离

> [来源](https://www.jianshu.com/p/2ad286397f7a)

### restful

> [来源](https://www.zhihu.com/question/28557115)

### graphql 实践

leetcode 的前后端交互就是通过 graphql, 他们的相关请求定义如下:

```JavaScript
//request
{
  operationName:'userStatus',
  variables;{},
  query:`query userStatus {
      userStatus {
            socketToken
             __typename
      }↵}↵`
}
//response
{
  data:{
    userStatus:{
      socketToken:'',
      __typename:''
    }
  }
}
```

可以看到查询和其结果拥有几乎一样的结构

> [来源](https://graphql.cn/learn/)

## 中间件

---

随着业务发展, 用多台服务器来完成业务, 为了让通信更加有效率, 用中间件来负责传输信息

> [来源](https://www.zhihu.com/question/19730582)

## 多进程

node 用多进程单线程的形式, 为的是利用服务器的多核性能, 多进程主要特点如下:

- 高性能
- 线程安全
- 异步非阻塞

使用 cluster 模块来处理 cpu 密集型的任务, 使用`.on('message')`让父子进程通信

> [来源](https://www.ibm.com/developerworks/cn/opensource/os-cn-nodejs-practice/index.html)

> [js 的单线程和多进程](https://www.jianshu.com/p/1887d9b446b2)

### cluster 与 child_process

cluster 底层使用 child_process 实现

> [来源](https://cnodejs.org/topic/5a68cd779d371d4a059eedd1)

> [nodejs 中的子进程，深入解析 child_process 模块和 cluster 模块](https://segmentfault.com/a/1190000016169207)

## 多线程

---

node 使用两种线程, eventloop 的主线程和 worker pool 中的辅助线程

工作池产生并处理单独的线程, 然后将任务结果放入事件循环中的队列, 一般用于负责异步 I/O 操作, 主要是与系统磁盘和网络的交互, 如 `fs` 或 `crypto` 等模块使用, 由 `libuv` 实现

当调用相关模块如 `fs` 时会自动使用工作池中的一个线程来执行

在 node10.5 之后可以使用`worker_threads`模块来创建多线程

> [来源](https://segmentfault.com/a/1190000018660861)

> [Node.js 的多线程](https://www.jianshu.com/p/6f63b87ba6f0)

### 多线程与下载

理论上来说, 一个 TCP 连接可以把网卡的带宽占满, 但是会有以下的原因:

- TCP 滑动窗口, 协商慢, 由于慢启动和拥塞控制变化频繁
- TCP 遇到丢包, 然后拥塞控制算法如果不是很好, 会缓存下来影响后面的发包
- 某些网站比如度盘限制单个 TCP 连接的速度

所以多线程可以尽可能接近实际网络上限

> [来源](https://www.zhihu.com/question/376805151)

#### nodejs 多线程分片下载实践

> [来源](https://segmentfault.com/a/1190000016704648)

## 鉴权方式

---

- HTTP basic Authentication, 请求时服务器向客户端发送验证请求代码 401, 并带上响应字段`WWW-Authenticate:`, 符合 http1.0 及以上规范的客户端会自动弹出登录窗口, 要求用户输入密码, 此时请求会带上字段`Authorization:`, 在这之前请求是 pending 状态
- session-cookie, 用 cookie 存储 sessionid, 将用户信息存储在 session 中
  - 首次请求创建 session 然后保存 session 在内存或者文件, 然后给 session 生成一个唯一的标识字符串
  - 浏览器设置 cookie, 之后请求相同的域都会带上该 cookie
- Token
  - 客户端使用用户名和密码请求登录
  - 服务端验证成功后返回一个 Token
  - 客户端将 Token 放在 cookie 或者 localStorage, 每次请求带上它
  - 一般用 JWT 加密 Token 防止被纂改
    - [jwt结构](https://juejin.im/post/5a437441f265da43294e54c3), Header, playload, signature
- OAuth, 允许用户授权第三方网站访问存储的数据

### Token 与 session 区别

- app 端没法用 cookie
- token 加密消耗性能, token 比 sessionId 大
- token 中包括用户信息, 服务端不用保存 session

> [来源](https://www.lishuaishuai.com/nodejs/1167.html?soure=jj)

## 网络模块

---

- http 模块基于 net 模块基础上实现

> [来源](http://zhenhua-lee.github.io/node/socket.html)

> [NodeJS 的底层通信](https://segmentfault.com/a/1190000004598004)

### createServer

建立一个线程, 监听端口, 如果有请求就调用传入的回调函数

## 数据库

---

### 连接池

从数据库取数据较为耗时, 可以将数据取出放在内存, 如果有请求可以直接在内存中返回给客户端

例如服务端缓存 redis

> [来源](https://juejin.im/post/5af026a06fb9a07ac47ff282)

### 数据库索引

给数据库的表的某个键值或某组键值一个索引, 通过创建 b+树之类的数据结构, 查询的时候可以更快的找到值, 一般表都有主键

### 事务

访问并可能操作各种数据项的一个数据库操作序列

- 原子性
- 隔离性
- 持久性
- 一致性

> [来源](https://zhuanlan.zhihu.com/p/43493165)

### 连接

- 内连接
- 左右连接, 选择左右都有的, 并且包括左边(左连接)或右边(右连接)的, 如果没有值在该列上置 NULL

```sql
select * from a_table a left join b_table b on a.a_id = b.b_id
```

> [来源](https://blog.csdn.net/plg17/article/details/78758593)

## 心跳包

---

每隔一定时间给服务器发消息告诉服务器这个客户端还活着, 常用在 websocket 中

## 守护进程

---

作为一种独立运行在后台的进程, 能周期性的执行某些任务, 让程序独立于命令行, 成为一种服务

> [来源](https://www.zhihu.com/question/38609004/answer/202859302)

## buffer stream

### buffer

用来操作 binary data streams

一定时间内系统处理的数据是有上限与下限的, buffer 就是数据的等待区域

拿视频举例, 视频流的数据充满 buffer 然后发送给进程, 播放器播放, 如果 buffer 没有充满, 播放器就会 loading, 流会在这个过程中自动创建 buffer

### stream

简单来说就是将在空间里被移动的一系列数据, 也就是说, 有许多数据要处理, 但是没必要等数据全部准备好再处理

实现的方法是将大的数据切割成一个个小块来发送

常见的文件数据流就是这样, 下载文件时, 将数据 pipe 到 writestream 中

> [来源](https://cnodejs.org/topic/5a49077f8230827a18293be0)

> [深入理解 Stream 和 Buffer](https://billyhu.com/post/learning-stream-and-buffer/)

## crypto 加密

> [来源](https://segmentfault.com/a/1190000016706501)

## nginx

理论上一个端口只能被一个进程监听, 如果有一个 nginx 服务器监听着 80 那么新开一个 apache 肯定不行, 但是如果 fork 一个进程那么相关的事件处理句柄 handler 也会被复制, 那么变相做到了多进程监听一个端口, nginx 就这样做到了热启动

> [来源](https://zhuanlan.zhihu.com/p/34943332)

> [使用 Nginx + Node.js 部署你的网站](https://www.jianshu.com/p/717f2b88d057)

> [网络编程（六）：端口那些事儿](https://zhuanlan.zhihu.com/p/20365900)

> [Nginx 为什么快到根本停不下来](https://zhuanlan.zhihu.com/p/108031600)

> [最佳实践](https://juejin.im/post/5ea931866fb9a043815146fb)
### proxy_pass

如果末尾带有斜杠, location 所匹配的部分会被删掉, 然后进行转发

> [来源](https://blog.csdn.net/zhongzh86/article/details/70173174)

### rewrite

如果带有 http:// 则会让浏览器进行重定向

> [来源](https://www.cnblogs.com/tugenhua0707/p/10798762.html)

### location 匹配规则

^ 代表用正则, = 代表精确匹配到后不继续匹配

> [来源](https://segmentfault.com/a/1190000013267839)

### 日志输出

> [来源](https://www.cnblogs.com/hukey/p/10502346.html)

## BFF

[backend for frontend](https://zhuanlan.zhihu.com/p/115561839)

## 分布式

> [来源](https://zhuanlan.zhihu.com/p/41118827)

## npm

### 常见使用

- [查看全局安装的包](https://www.phpsong.com/2257.html), npm list -g --depth 0
- 更新包, 写好包的准确版本, 然后 npm update 加包名, **可以直接npm install**
- [windows 更新npm](https://www.npmjs.com/package/npm-windows-upgrade), npm-windows-upgrade

### 配置文件

可以配置 npm 安装时选择的仓库等

- [.npmrc](https://github.com/Kimi-Gao/Program-Blog/issues/135), npm install 时设置仓库
- [.npmignore](https://zhuanlan.zhihu.com/p/31875370), 忽视文件, 发布 npm 包时不进行上传

### nvm

用于 node 切换版本, 如果出现 command not found, 那么使用 `source ~/.bash_profile` 来指定环境变量

> [来源](https://github.com/nvm-sh/nvm/blob/master/README.md)

#### nvm 使用默认的 node 版本

nvm alias default v5.0.0

### npx

- 运行时到 node_modules 的 .bin 文件和 \$path 环境变量中检查命令
- 如果 npx 后面的模块无法找到就会下载一个同名的模块, 然后执行, 但是该模块必须要 package.json 和入口脚本

> [来源](https://www.ruanyifeng.com/blog/2019/02/npx.html)

### npm run

执行 node 的 scripts, 会默认将 `.bin` 文件夹加入到环境变量中

> [来源](https://www.cnblogs.com/HYZhou2018/p/12195670.html)

### npm 发包

- 发布测试包可以用 alpha 的名字
- npm version prerelease --preid=alpha

> [来源](https://juejin.im/post/5d09054f51882563194b302c)

### require 的查找规则

- 如果是内部模块直接返回名字
- 查找 node_modules 父文件夹的 node_modules
- 找到的话返回 package.json 中 main 字段的路径

> [来源](https://juejin.im/post/5d84456851882556f33d5fb0)

#### require 内部实现

### node_modules

- [.bin](https://juejin.im/post/5ab3f77df265da2392364341#heading-16), 包含能够被执行的文件
- [@scope](https://www.jianshu.com/p/ac5b5f65320b), 把相关模块放在一块组织到一起

文件结构

- npm3 之前, 每个依赖安装自己的依赖
- 之后, 扁平化结构, 尽量将依赖包放到一级, 如果版本不同才会放在依赖文件夹下
- npm5, 多了一个 package-lock.json 的文件, 用来锁定依赖安装的结构, 只要有这份文件就能安装一模一样的 node_modules

> [来源](https://juejin.im/post/5ab3f77df265da2392364341#heading-4)

### package-lock.json

- 如果没有 lock 文件, 按照 package.json 语义版本下载当前大版本下最新的包
- 如果有 lock 文件, 文件版本对应相同, 按照 lock 下载, 不会下载语义版本最新的包
- 如果有 lock 文件, 文件版本不同, 按照 package.json 下载

> [来源](https://www.zhihu.com/question/62331583/answer/275248129)

`0.` 开头的版本第二个数字才是主版本号

> [什么是语义版本](https://juejin.im/post/5ab3f77df265da2392364341#heading-10)

#### package-lock.json 应该提交吗

应该

> [来源](https://www.zhihu.com/question/264560841)

### yarn

#### yarn offline 安装

可以设置一个 yarn 的离线安装库, 然后用 `.yarnrc` 文件指定其离线安装的文件夹

这个文件夹内的内容全是压缩包, 可以上传入 git 中

运行 yarn install --offline 即可

> [来源](https://segmentfault.com/a/1190000013501659)

