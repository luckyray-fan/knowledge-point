## DNS

- CNAME, 一个域名解析到另一个域名
- A 记录, 解析到 ipv4 地址
- AAAA 记录, 解析到 ipv6 地址
  > [来源](https://itbilu.com/other/relate/EyxzdVl3.html)

## HTTP

### url 结构分解

- 整个 url 字符串部分
- 协议部分
- 主机部分
- 端口部分
- 路径部分
- 查询部分
- 锚点

> [来源](https://www.cnblogs.com/be-saber/p/4734951.html)

### 简单介绍

- 不保存状态
- 使用 cookie 存储状态

### 请求方法

- GET
- POST
- PUT

#### post 与 get 区别

### 报文信息

- 报文结构
- 返回报文

### 返回的状态码

- 2xx
- 3xx
- 4xx
- 5xx

### 报文字段

### HTTPS

### HTTP 1.1

- 持久连接

### cookie session

- session 在服务端, cookie 在浏览器里
- session 默认存放服务器的文件里而非内存
- session 依赖于 session id, 而这个 id 存放在 cookie
- 禁用 cookie 时用 url 来标识

> [来源](https://juejin.im/post/5aa783b76fb9a028d663d70a)

### http 与 https 的区别

> [来源](https://book.douban.com/subject/25863515/)

## TCP

### TCP 和 UDP 的区别

面向连接的可靠传输层协议, 能控制发包速度和自动重发

### TCP 三次握手的过程

目的是为了确认对方的发送与接收能力

客户端发送 `SYN`, 服务端接收到了后返回一个`SYN`和`ACK`, 然后客户端发送`Ack`, 服务端接收到后握手完成

- 为什么不是两次, 没法确认客户端的接收
- 为什么不是四次, 已经确认好了没必要了
- 能否携带数据, 第三次可以

### TCP 四次挥手

状态: 都处于 `ESTABLISHED`

客户端要断开, 发送 `FIN` 报文之后客户端只能接收无法发送报文, 服务端先发送确认再发送`FIN`, 客户端收到后发送`ACK`, 若一段时间内没有收到服务器的重发请求, 就结束, 否则重发`ACK`

- 为什么要等待, 防止之后启用了相同端口的新应用接收到无用的信息
- 为什么是四次不是三次, 防止服务端有报文没有发送完

### TCP 超时重传

### TCP 流量控制

使用滑动窗口

### TCP 拥塞控制

慢启动

> [来源](https://juejin.im/post/5e527c58e51d4526c654bf41#heading-55)

## cdn

内容分发网络, 可以获取资源通过最靠近用户的服务器, 从缓存或者源站获得资源

从源站获取资源也就是回源, 因为每一步都可以缓存, 所以要清除缓存比较困难

> [来源](https://juejin.im/entry/587c7a63128fe10057faf224)
