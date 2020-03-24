## OSI 七层参考模型

- 应用层
- 表示层
- 会话层
- 传输层, 这之上由软件实现
- 网络层, 路由器
- 数据链路层, 网卡, 交换机
- 物理层, 集线器, 光纤等

## DNS

---

- CNAME, 一个域名解析到另一个域名
- A 记录, 解析到 ipv4 地址
- AAAA 记录, 解析到 ipv6 地址

> [来源](https://itbilu.com/other/relate/EyxzdVl3.html)

### DNS 解析顺序

- 浏览器 DNS 缓存, 本地 DNS 缓存, HOSTS 文件, 指定的 DNS 服务器缓存
- 询问根服务器 .com 域名服务器
- 询问.com 服务器`baidu.com`ip 地址

> [来源](https://blog.csdn.net/qq_32252957/article/details/82991880)

> [在浏览器地址栏输入一个 URL 后回车，背后会进行哪些技术步骤](https://www.zhihu.com/question/34873227/answer/518086565)

### DNS TTL

time to live, 即域名解析记录在 dns 服务器中的留存时间

- 增大 ttl, 节约域名解析时间
- 减少, 可以避免更换域名时的不可访问时间过长

> [来源](https://jaminzhang.github.io/dns/DNS-TTL-Understanding-and-Config/)

### 顶级域名

- 顶级域名, `.com, .org等`
- 二级域名, `baidu.com`, 如果从购买域名的角度来说, 这个也可以叫一级域名
- 三级域名, `www.baidu.com`

> [来源](https://www.zhihu.com/question/29998374)

### 域名收敛与发散

- 域名收敛, 将静态资源放在一个服务器下, 减少 dns 解析
- 域名发散, 将资源放在不同服务器上, 突破浏览器的并发限制

> [来源](https://www.jianshu.com/p/7c7ea420cee8)

## HTTP

---

### url uri 区别

- uri, uniform resource identifier, 统一资源标识符, 唯一的标识一个资源
- url, uniform resource location, 统一资源定位符
- urn, 统一资源名称, 命名资源但不指定如何定位资源
- url 是 uri 的一种

> [来源](https://www.jianshu.com/p/ba15d066f777)

### url 结构分解

- 协议部分
- 身份验证
- 主机部分
- 端口部分
- 路径部分
- 查询部分, 以`?`开始, 通过`&`来连接不同的参数
- 锚点

> [来源](https://www.cnblogs.com/be-saber/p/4734951.html)

### 简单介绍

- 不保存状态
- 使用 cookie 存储状态

### 请求方法

- GET, 从指定资源请求数据
- POST, 向指定的 URI 提交要给处理的数据
- PUT, 上传指定的 URI 表示
- HEAD, 与 GET 相同, 但只返回 HTTP 报头
- DELETE, 删除指定资源
- OPTIONS, 返回服务器支持的 HTTP 方法, [还有 cors 预检请求](https://cloud.tencent.com/developer/article/1046663)

#### post 与 put 区别

本质都是语义, put 相当于上传一个 entity 实体上去, post 是提交要被处理的数据

> [来源](https://www.zhihu.com/question/48482736/answer/139024541)

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
  - 499, 客户端主动断开连接, 可能是跨域请求被拦截, [也可能是服务器被攻击](https://segmentfault.com/q/1010000004193105)
- 5xx, 代表服务器处理请求的过程中有错误, 也可能是无法完成请求的处理
  - [504 bad gateway](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/504), 代理服务器的上游没法在规定时间内给出响应

比较清晰具体的也可以看[菜鸟教程里的](https://www.runoob.com/http/http-status-codes.html)

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

- [301, 302 应用场景](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/249)

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
- 地址
  - Host, 请求的服务器的域名
  - Origin, 发起请求的域名
- 交换标准
  - Accept, 可以接受的媒体类型
  - Accept-Encoding, 接受的编码方法
  - Accept-Language, 接受的语言
  - User-Agent, 客户端的操作系统和浏览器版本
  - Accept-Charset, 接受的字符集
  - Content-Encoding, 服务器用的压缩方法

> [来源](https://juejin.im/post/5ce0f3fdf265da1b86085782)

### HTTP 1.1

- 持久连接, 本质上指的是 TCP 的长连接, 也就是说节省了 TCP 握手和挥手的时间

### HTTP 2

前身是 SPDY 协议, [google 出品的](https://zh.wikipedia.org/wiki/SPDY)

专注于性能, 最大的目标是用户和网站只用一个连接

keep-alive 在域名分片下仍然需要建立多个连接, TCP 连接不断开但是只能传完一个再传下一个, http2 提供了多路传输即连接复用

http1 解析依靠文本, http2 依靠二进制, 使用 encoder 缓存了 http1 中 cookie 和 use ragent

- 帧, 作为最小传输单位, 将原本发送的数据分为帧
- 流, 每个 HTTP/1.1 的请求当做一个流
- 多路复用, 每个帧的`stream identifier`表明这一帧属于哪个流
- 服务端推送, server push, 浏览器发送请求, 服务器主动向浏览器推送与这个请求相关的资源, 浏览器可以不用再发起请求
- header 压缩

那么浏览器是怎么判断能够使用 http2 来访问的呢, 由于现阶段 http2 仅支持 https, 可以在建立 https 握手的时候根据 client hello 包的信息来判断能否使用 http2, [这篇文章](https://juejin.im/post/59c63adf6fb9a00a4c271484)比下面写的要清晰一点, 不过都是好文章 ✨, [更新], 一篇写的不错的文章的背后也许是另一篇写的也不错的文章 😂, [https 连接的前几毫秒发生了什么](https://www.rrfed.com/2017/02/03/https/)

> [来源](https://github.com/creeperyang/blog/issues/23)

> [HTTP2 详解](https://juejin.im/post/5b88a4f56fb9a01a0b31a67e)

> [一文读懂 HTTP/2 及 HTTP/3 特性](https://blog.fundebug.com/2019/03/07/understand-http2-and-http3/)

### HTTP3

用 UDP 代替 TCP, 快速网页传输

> [来源](https://zh.wikipedia.org/wiki/HTTP/3)

### HTTP1 , 1.1, 2.0 区别

> [来源](https://www.jianshu.com/p/be29d679cbff)

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
- [samesite](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html), 如果目标网站不同源无论什么请求都不会带上 cookie

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

### HTTPs

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

#### https 的发展过程

> [来源](https://www.jianshu.com/p/c93612b3abac)

#### 证书与 CA

如果使用的证书没有 CA 签证, 或者未在浏览器受信用的 CA 签证, 会被提示连接的链接不是私密链接

**数据证书生成过程:**

- CA 用 RSA 产生一对公私钥
- 生成一个包括: 公钥内容, 签发者 ID, 有效期等的文件
- 用 hash 算法对文件计算得到 hash 值
- 使用私钥对 hash 值进行 RSA 加密, 得到签名信息
- 将之前的文件内容和签名信息连起来得到数字证书

**数据证书验证过程:**

- 使用文件内容中指定的 hash 算法对文件内容进行计算, 得到 hash 值
- 用文件内容中的公钥解密之前私钥加密的签名信息, 这个应该和文件生成的 hash 值相同
- 如果相同就证明没有被纂改

如何避免自签发证书, 那就是内置 CA 的根证书

> [数字证书的原理是什么](https://www.zhihu.com/question/24294477/answer/74783418)

> [有关数据证书与 CA 的一篇文章](https://www.barretlee.com/blog/2016/04/24/detail-about-ca-and-certs/) CA - Certificate authority

## TCP

---

### TCP 和 UDP 的区别

TCP 三次握手, 四次挥手, 是面向连接的可靠传输层协议, 能控制发包速度和自动重发

UDP 传输不建立连接, 可以短时间向大量客户机发送数据

[新增][tcp和udp的区别和优缺点](https://blog.csdn.net/qq_34624951/article/details/82669444)

- TCP
  - 面向连接, 点对点
  - 提供可靠交付的服务, 重传, 滑动窗口, 慢启动, 整理发包顺序
  - 全双工
- UDP
  - 无连接, 尽最大努力交付
  - 无拥塞控制, 一对多, 多对多
  - 首部开销小

TCP 如果丢包, 会把之后的的包缓存, 等重传完再发送, 延时会越来越大

UDP 对实时性要求严格时, 可以用自定义重传机制, 能将延迟降到最低, 减少网络问题对游戏造成的影响, 可以 DNS 查询, 直播

> [来源](https://zhuanlan.zhihu.com/p/24860273)

### TCP 三次握手的过程

目的是为了确认对方的发送与接收能力

客户端发送 `SYN`, 服务端接收到了后返回一个`SYN`和`ACK`, 然后客户端发送`Ack`, 服务端接收到后握手完成

- 为什么不是两次, 没法确认客户端的接收
- 为什么不是四次, 已经确认好了没必要了
- 能否携带数据, 第三次可以

### TCP 四次挥手

状态: 都处于 `ESTABLISHED`

要断开的端: FIN_wait1, fin_wait2, time_wait, closed

被断开的端: close_wait, last_ack, closed

客户端要断开, 发送 `FIN` 报文之后客户端只能接收无法发送报文, 服务端先发送确认再发送`FIN`, 客户端收到后发送`ACK`, 若一段时间内没有收到服务器的重发请求, 就结束, 否则重发`ACK`

**目的是:** 客户端和服务端都断开连接, 两端都不浪费资源等待, 要发送的数据全发完

- 为什么要等待 2MSL, 防止之后启用了相同端口的新应用接收到无用的信息
  - MSL, 最大存活时间, A 去向 ACK 和来向 FIN 的时间相加, 保证服务端收到了消息
- 为什么是四次不是三次, 防止服务端有报文没有发送完
- 为什么客户端还要发送 Ack, 为了让服务端直到客户端收到了 FIN, 防止因为网络故障服务端没有收到

> [来源](https://www.zhihu.com/question/67013338)

### TCP 超时重传

### TCP 拥塞控制

慢启动, 流量探测, 滑动窗口

> [来源](https://juejin.im/post/5e527c58e51d4526c654bf41#heading-55)

### 流量探测 BBR 算法

看不懂 😭, 也不太想花时间看懂 😵

> [来源](https://blog.csdn.net/dog250/article/details/52830576)

## cdn

---

内容分发网络, 可以获取资源通过最靠近用户的服务器, 从缓存或者源站获得资源

从源站获取资源也就是回源, 因为每一步都可以缓存, 所以要清除缓存比较困难

> [来源](https://juejin.im/entry/587c7a63128fe10057faf224)

## 代理

---

正向代理隐藏真实客户端, 反向代理隐藏服务端

> [来源](https://www.zhihu.com/question/24723688)

## websocket

---

建立在 TCP 上属于双向通信, 热更新也就是 file watcher 加上 websocket 搞定的

[优点如下](https://juejin.im/post/5bcad1326fb9a05cda779d0b#heading-10):

- 双向通信, 数据包头部较小
- 二进制支持
- 没有同源限制
- 与 HTTP 兼容不错, 默认端口为 80 和 443, 握手阶段采用 HTTP, 能够使用代理服务器

> [来源](https://www.ruanyifeng.com/blog/2017/05/websocket.html)

## socks 协议

在 OSI 七层中位于会话层, 因此 http 可以跑在上面, 用于连接能够访问外网的服务器, 提供 TCP 的会话的转发

Socks5 能支持 UDP, ipv6, 所以能看直播

> [来源](https://sexywp.com/socks-protocol.htm)

## 直播

---

- 推流到源站
- cdn 节点从源站拉流
- 客户端播放从 cdn 节点拉流

### rtmp

rtmp 指的是 Real Time Messaging Protocal 实时消息传输协议, 基于 TCP

rtmp 协议中, 视频必须是 H264 编码, 音频必须是 AAC 或 MP3 编码, 一般用 flv 格式封包

但是, 现在 rtmp 不支持浏览器且 Adobe 弃用了 flash, rtmp 协议也不再更新, 现有另外的推送协议支持

微信小程序将腾讯视频云的 liteavsdk 嵌入到微信内部实现的, 然后通过`<live-pusher> 和 <live-player>`两个标签将 SDK 内部的音视频能力开放出来。所以小程序的标签起到了开发者 API 的作用，而内部的 SDK 则是真正用来实现音视频功能。具体可以看[打通小程序音视频和 webRTC](https://cloud.tencent.com/developer/article/1115258)

> [直播推流实现 RTMP 协议的一些注意事项](https://www.jianshu.com/p/00aceabce944)

> [如何真正让小程序,WebRTC 和 APP 互通连麦直播](https://www.jianshu.com/p/db1c3c24c4f0)

### HLS

Http Live Streaming 是 apple 公司定义的基于 http 的流媒体实时传输协议

原理是将整个流分为多个小的文件来下载, 每次只下载几个, 服务端会根据最新的直播数据生成新的小文件, 客户端就依次下载就行, 分段推送, 所以 hls 延迟高于普通的流媒体直播协议

传输内容包括: m3u8 描述文件, ts 媒体文件, ts 媒体文件中的视频必须是 h264 编码, 音频 aac 或 mp3

### webrtc

web real time communication, 源自网页即时通信, 支持浏览器进行实时语音, 视频对话的开源协议, google, mozilla, opera 都推动其成为标准

webrtc 基于 srtp 和 udp, 可以实现点对点通信, 通信双方延时低, 可以连麦

> [以上均来源于](https://www.zhihu.com/question/26038990)

## socket

[监听一个端口会经过](https://blog.csdn.net/jiyiqinlovexx/article/details/50959351):

- 创建套接字 socket
- 将套接字绑定到具体的地址和端口号
- 调用 listen 开始监听

主机间 tcp 通信由套接字分辨, 所以可以根据 tcp 数据包中得知属于哪个客户端, 服务端就能接收多个请求
