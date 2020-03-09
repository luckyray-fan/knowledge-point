## 爬虫

---

- 代理池
- 请求头
- 下载队列

## 异步模型

---

nodejs 的异步是由 libuv 实现的, 浏览器中的异步模型在 html5 的规范中规定了, 具体实现是留给了浏览器厂商

## 同构

---

用于解决白屏和 seo 问题, 浏览器直接拿到服务器渲染的最终 HTML

> [来源](https://juejin.im/post/5c821dc45188257e1f2915b1)

## GraphQL 和 RESTful 的比较

---

作为两种 API 模型, GraphQL 是为了改进 Rest 而出现的

- rest, 核心思想是资源, 每个网址代表一个资源
- GraphQL, 资源的描述信息与其获取方式相分离

> [来源](https://www.jianshu.com/p/2ad286397f7a)

## 服务端缓存 redis

---

从数据库取数据较为耗时, 可以将数据取出放在内存, 如果有请求可以直接在内存中返回给客户端

## 中间件

---

随着业务发展, 用多台服务器来完成业务, 为了让通信更加有效率, 用中间件来负责传输信息

> [来源](https://www.zhihu.com/question/19730582)

## 多线程

---

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
- OAuth, 允许用户授权第三方网站访问存储的数据

### Token 与 session 区别

- app 端没法用 cookie
- token 加密消耗性能, token 比 sessionId 大
- token 中包括用户信息, 服务端不用保存 session

> [来源](https://www.lishuaishuai.com/nodejs/1167.html?soure=jj)

## createServer

---

建立一个线程, 监听端口, 如果有请求就调用传入的回调函数

## 数据库

---

### 连接池

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

每隔一定时间给服务器发消息告诉服务器这个客户端还活着

## 守护进程

作为一种独立运行在后台的进程, 能周期性的执行某些任务, 让程序独立于命令行, 成为一种服务

> [来源](https://www.zhihu.com/question/38609004/answer/202859302)
