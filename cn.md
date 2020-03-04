## DNS

- CNAME, 一个域名解析到另一个域名
- A 记录, 解析到 ipv4 地址
- AAAA 记录, 解析到 ipv6 地址
  > [来源](https://itbilu.com/other/relate/EyxzdVl3.html)

### 顶级域名

- 顶级域名, `.com, .org等`
- 二级域名, `baidu.com`, 如果从购买域名的角度来说, 这个也可以叫一级域名
- 三级域名, `www.baidu.com`

> [来源](https://www.zhihu.com/question/29998374)

## HTTP

### url uri 区别

- uri, uniform resource identifier, 统一资源标识符, 唯一的标识一个资源
- url, uniform resource location, 统一资源定位符
- urn, 统一资源名称, 命名资源但不指定如何定位资源
- url 是 uri 的一种

> [来源](https://www.jianshu.com/p/ba15d066f777)

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

- GET, 从制定资源请求数据
- POST, 向指定的 URI 提交要给处理的数据
- PUT, 上传指定的 URI 表示
- HEAD, 与 GET 相同, 但只返回 HTTP 报头
- DELETE, 删除指令资源
- OPTIONS, 返回服务器支持的 HTTP 方法

#### post 与 get 区别

底层都是 TCP 链接, 只是为了区分请求, 分出了多种方式

- Get, url 中加参数, 最大长度和各个浏览器有关, 能被缓存
- post, 数据放在请求体
- Get 产生一个 tcp 数据包, 而 post 数据大于一定字节, 如 1024 是两个

> [来源](https://learnku.com/articles/25881)

### 报文信息

- 请求报文
  - 第一行是方法, 路径, http 版本
  - 然后是 headers
  - 如果有数据的话会有请求体
- 返回报文
  - 第一行是 http 版本, 状态码, 状态信息
  - headers
  - 资源体

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview#HTTP_%E6%8A%A5%E6%96%87)

### 返回的状态码

- 1xx, 指客户端相应的动作, 代表请求已被接收, 需要继续处理
- 2xx, 代表请求已经成功被服务器接收处理了
- 3xx, 代表客户端采取进一步操作才能完成请求, 这些状态码用来重定向, 重定向地址在本次响应的 Location 中指明
- 4xx, 表示请求错误, 客户端的请求可能有问题
- 5xx, 代表服务器处理请求的过程中有错误, 也可能是无法完成请求的处理

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

### 报文字段

- 缓存
  - Expires
  - Catche-Control
  - Last-Modfied
    - If-Not-Modfied-Since
  - ETag
    - If-None-Match
- 内容
  - Content-Length
  - Content-Type
    - 请求的时候可以设置为 multiple/form-data, 注意此时 hearder 的头需要指定与 formData 相同的 boundary, 最好把 formData 的 headers 直接赋值给它, 否则上传的文件无法识别
  - Content-Disposition: 指示回复的内容该以何种形式展示

> [来源](https://juejin.im/post/5ce0f3fdf265da1b86085782)

### HTTP 1.1

- 持久连接, 本质上指的是 TCP 的长连接, 也就是说节省了 TCP 握手和挥手的时间

### HTTP 2

专注于性能, 最大的目标是用户和网站只用一个连接

keep-alive 在域名分片下仍然需要建立多个连接, TCP 连接不断开但是只能传完一个再传下一个, http2 提供了多路传输即连接复用

http1 解析依靠文本, http2 依靠二进制, 使用 encoder 缓存了 http1 中 cookie 和 use ragent

> [来源](https://github.com/creeperyang/blog/issues/23)

### 长短轮询

长轮询指的是服务器收到请求并不马上返回, 而是等请求的数据有变化才返回, 这样客户端会自动挂起不继续发请求直到超时

> [来源](https://www.jianshu.com/p/3fc3646fad80)

### cookie session

cookie 是由服务器生成, 保存在客户端本地的一个文件, 通过响应头的 `set-cookie`设置

一个页面可以有不同的域设置 cookie, 一个域可以有不同的 cookie, cookie 有基本的字段:

- name, cookie 名称
- value, cookie 值
- domain, 可以访问此 cookie 的域名
- path, 可以访问此 cookie 的页面路径
- expires, cookie 超时时间, 不设置的话和 session 一起失效, 当浏览器关闭后消失
- size, cookie 大小
- http, 此 cookie 的 httponly 属性, 只能上传时带上该 cookie 而无法用`document.cookie`读取
- secure, 设置是否只能通过 https 来传递此条 cookie

> [来源](https://segmentfault.com/a/1190000004556040)

**session 的生成过程:**

- 生成全局唯一标识符, sessionid
- 开辟数据存储空间, 可以在内存也可以为了稳定放在数据库
- 将 sessionid 发送给客户端, 使用 http 头字段 set-cookie 字段

**session 与 cookie 的区别:**

- session 在服务端, cookie 在浏览器里
- session 默认存放服务器的文件里而非内存
- session 依赖于 session id, 而这个 id 存放在 cookie
- 禁用 cookie 时用 url 来标识

> [来源](https://juejin.im/post/5aa783b76fb9a028d663d70a)

### http 与 https 的区别

- http 通信用明文容易窃听
- 不验证通信方身份, 会被伪装
- 无法验证报文, 也许已经被纂改

用 ssl 协议作为 http 的外壳, 成就了 https 协议

使用两把密钥, 一把私有一把公开

- 发送密文的一方使用对方的公开密钥加密, 对方收到后用自己的私钥解密
- 证明公开密钥就是请求的服务端的, 可以使用数字证书认证机构和其他相关机关颁布的公开密钥证书

- 客户端请求 https, 服务端发过来一套数字证书
- 客户端验证证书, 客户端用证书中的公钥加密随机值传给服务端
- 服务端解密客户端的随机值然后把内容通过该值进行对称加密传输过去
- 此时双方获得了一般是 AES 的加密算法的对称密钥, 就可以正常开始通信了

> [来源](https://book.douban.com/subject/25863515/)

> [这个也清晰](https://zhuanlan.zhihu.com/p/32513816)

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

## 代理

正向代理隐藏真实客户端, 反向代理隐藏服务端

> [来源](https://www.zhihu.com/question/24723688)
