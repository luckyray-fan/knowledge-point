## xss

---

Cross-Site Scripting 往页面注入恶意代码, 可以获得 cookie, sessionID 等

### 攻击形式

- 存储型
- 反射型
- DOM 型

### 预防方法

- 输入过滤
- 纯前端渲染
- 转义 HTML
- 注意 DOM API 的使用
- Content Security Policy
- 内容长度控制

> [来源](https://tech.meituan.com/2018/09/27/fe-security.html) 挺专业的, 看起来挺复杂, 但是讲得很清楚

## csrf

---

cross-site request forgery, 跨站请求伪造, 俗话说就是盗用身份, 以用户名义发送恶意请求

- 登录网站 A, 生成 cookie
- 在 cookie 没有过期的时间访问危险网站 B
- 网站使用你的 cookie 发送请求

### 防御手段

- 服务端
  - cookie hashing
  - 验证码
  - tokens, 就是隐藏一个 token, 提交时要带上它, 其实这些防爬虫也用

> [来源](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)

## 流量劫持

---

执行中间人攻击, 例如污染中间链路设备, 可以更改 HTTP 内容, 污染 dns 解析等

### 解决方案

- csp, 指定每种资源的 URL 白名单规则

- 迁移到 https 上

> [来源](https://juejin.im/entry/5bcec8e2518825102423e391)

## sql 注入

---

登录注册的时候改变数据库

> [来源](https://www.jianshu.com/p/078df7a35671)

## 常用编码

---

### md5

输入不定长度信息, 输出 128 bits 16 字节的算法, 如果要找到相同的 md5 码需要计算 2^64 次

- [**加盐**](https://blog.csdn.net/blade2001/article/details/6341078)
  - 注册时, 密码和一个随机的 salt 值字符串连接然后 md5 散列
  - 登录时, 密码和之前分配的 salt 连接然后 md5 散列, 看两个哈希值是否一致
  - 可以防止通过哈希值利用 md5 散列值字典找到密码

> [来源](https://zh.wikipedia.org/wiki/MD5)

### base64

把 3 个 8 位字节（3x8=24）转化为 4 个 6 位的字节（4x6=24）, 若是最后不足三个字节用 0 填充, 所以会有`=`号

可用来图片编码

> [来源](https://www.jianshu.com/p/f39a54826de5)

### hash

- SHA-1 哈希值, 生成 20 字节的消息摘要

> [来源](https://zhuanlan.zhihu.com/p/37165658)

### UUID

通用唯一标识码, 重复的几率接近为 0

> [来源](https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%A0%81)

### JWT

## 内存泄漏

---

指变量占用内存却没有回收
