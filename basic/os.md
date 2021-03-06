## 工作中遇见的
- [Repl](https://zh.wikipedia.org/wiki/%E8%AF%BB%E5%8F%96%EF%B9%A3%E6%B1%82%E5%80%BC%EF%B9%A3%E8%BE%93%E5%87%BA%E5%BE%AA%E7%8E%AF), 交互式开发环境, 比如 python, nodejs等常有的一个
- [Progressive jpg](https://www.jianshu.com/p/e1b9d9aa9fc0), 图片从模糊到清晰
- [排队论](https://queue-it.com/blog/queuing-theory/), 未读

## 内核

内核管理硬件, io, 进程调度等, 而操作系统还有文件系统或者图形化界面还有用户交互等

> [来源](https://www.ibm.com/developerworks/cn/linux/l-linux-kernel/)

> [内核跟操作系统有什么区别](https://www.zhihu.com/question/24133268)

## 进程

进程是分配资源的基本单位, 线程是独立运行和独立调度的基本单位

- 进程
  - 不共享内存地址空间
- 线程
  - 共享内存地址空间
- 协程, 多个线程共同完成某项任务

> [来源](https://linzhenglearn.github.io/2017/04/12/ProcessThread/)

### 创建子进程

- linux, 使用 fork 创建子进程, 子进程会继续执行后续内容, 与父进程数据不共享, 采用写时复制, 等到要用时从父进程相应的内存处复制到一个新的地方
- windows, 使用 createprocess

> [linux](https://zhuanlan.zhihu.com/p/84342331)

> [Windows](https://blog.csdn.net/ciaos/article/details/7714956)

### 进程间的通信

IPC, inter-process communication

每个进程有不同的空间, 所以想要交换数据需要开辟一个缓冲区, 将数据拷入这个缓冲区来通信

- pipeline, 只能用于父子进程或者兄弟进程, 单向
  - 有名管道, 为了让没有亲缘关系的进程通信, 提供一个路径只要访问即可进行通信
- 共享内存, 内核专门留出一块内存区, 进程可以映射为自己的私有空间, 读写时就不需要拷贝了, 但是需要用信号量来防止同时访问
- 套接字
- 信号, 可以在任意时期放松给某一进程, 是一种中断机制的模拟
- 消息队列

> [来源](https://www.jianshu.com/p/c1015f5ffa74)

### 管道原理

管道实际上是一种文件, 内容存在于内核管理中的一个缓冲区, 一端连接一个进程的输出另一端连接一个进程的输入, 如果没有信息输入端会等待, 如果满了输出端会暂停, 当两个进程都终结时管道也会自动消失

> [来源](https://segmentfault.com/a/1190000009528245)

### 进程调度与线程调度

多进程同时竞争 cpu 时, 只要有超过两个的进程处于就绪, 单 cpu 就必须选择下一个要运行的进程,这就是调度

线程调度, 计算进程的优先级和线程的优先级来决定调用哪个线程

- 非抢占式
- 抢占式

**调度算法:**

- 批处理
  - 先来先服务
  - 最短作业优先, 通过用户输入或根据过去的 cpu 运转周期判断
- 交互式
  - 轮转
  - 优先级

> [来源](https://www.cnblogs.com/lishanlei/p/10707720.html)

### 切换进程与线程的效率

- 进程
  - 切换页目录以使用新的地址空间
  - 切换内核栈和硬件上下文
- 线程
  - 切换内核栈和硬件上下文

因为线程共用一个地址空间, 所以不需要切换页目录, 缓存命中也要高的多, 所以线程切换效率比进程高

> [来源](https://www.cnblogs.com/kkshaq/p/4547725.html)

### 多线程提升效率

- 多核, 能实际提升效率
- 单核, 并不能提升效率, 使用多线程此时是为了协调 io, 响应用户, 播放音乐, 还可以提高并发等

> [来源](https://www.zhihu.com/question/25652393)

> [多线程是否能加快处理速度](https://blog.csdn.net/zollty/article/details/53944539)

### 线程安全

线程操作数据需要从内存取出放入寄存器, 然后执行操作后放回内存, 如果执行的操作还没放回内存, 此时切换另一条线程, 那么数据就没有更新

> [来源](https://blog.csdn.net/will130/article/details/48714343)

## cpu

### cpu 占用率计算方法

> [来源](https://www.cnblogs.com/gatsby123/p/11127158.html)

## 字符编码

### 常见有意思的编码

- 烫烫烫, c 系语言中数组没初始化就输出了, 未初始化的栈内存为 0xcc, 这个是中断指令, debug 的情况下执行此处会停下来
- 屯屯屯, malloc 申请堆内存后没有初始化, 然后输出这里
- 锟斤拷, unicode 字符集转 gbk, 有些字没法显示, 就用占位符来表示, 然后这些对应到 gbk 就是这个了
- 锘锘锘, 用一些标记来表示这个字节流是 UTF 编码, 又称 BOM, Byte Order Mark, 转为 GBk 时出现

> [来源](https://blog.csdn.net/sinat_27382047/article/details/72810390)

- 有声调符号, 可以叠在字符上面, 泰文
- unicode 控制字符, 控制后续字符从右到左显示, 阿语

> [来源](https://www.bilibili.com/read/cv6317411)

- 类英文字符, 常见于网名

### utf8 与 gbk 区别

notepad 与 windows 记事本中的 ansi 一般指的是电脑的默认编码, 中文一般是 gbk

为了兼容编码, 有了统一编码表, 名为 unicode, utf-8 中的英文并未使用双字节存储而是单字节

最长是有四个字节, 一般汉语是三个字节, 判断几个字节作为一个字符可以通过第一个字节来判断

> [来源](https://www.jianshu.com/p/a5b847ea4bab)

### utf8 与 utf16

> [来源](https://juejin.im/post/5e1577836fb9a0482973912d)

### emoji 与 iconfont 区别

> [来源](https://www.cnblogs.com/batsing/p/emoji_iconfont.html)

### 原码

- 原码, 最高位为符号位, 正数为 0, 如不足机器字长, 在左边补 0
- 反码, 正数反码与原码相同, 负数反码在原码基础上符号位不变, 其他位取反
- 补码, 正数补码与原码相同, 负数在反码基础上加一

因为, `1+(-1) = 0`, 但是二进制中`001+101=110`为`-2`

而补码可以直接加减运算, 只需要将运算结果取反然后还原为原码就是正确结果

`25+(-36)=-11` => `00011001+11011100=11110101`, 此时的反码`11110100`, 再转为原码`10001011`也就是`-11`

> [来源](http://zouyang1230.com/blog/archives/805)

## 网卡

- 工作原理, 发送时将要传输的数据并行写到网卡的缓存, 网卡将其发送到传输介质上, 接收数据则相反, 每个网卡都有一个唯一的 mac 地址, 网卡属于数据链路层设备
- 通过缓存来同时接收多个信息, 当然如果超过一定限度会丢弃, 然后就会触发 tcp 的拥塞控制中的慢启动

> [来源](https://blog.csdn.net/hilyoo/article/details/4455031)

## 中断

CPU 与 IO 交互的方式, 通过获取中断类型来判断优先级实现了良好的实时交互

> [来源](https://zh.wikipedia.org/wiki/%E4%B8%AD%E6%96%B7)

## 磁盘寻道算法

- 先来先服务, 根据进程请求的先后次序调度
- 最短寻道算法, 要求访问的磁道与当前磁头所在的磁道距离最近, 但会饥饿
- 扫描算法, 考虑磁头移动方向, 避免饥饿
- 循环扫描, 在扫描算法之上

> [来源](https://cloud.tencent.com/developer/article/1150026)

## IO

### select poll epoll 多路复用

- 一个进程监视多个io

> [来源](https://segmentfault.com/a/1190000003063859)