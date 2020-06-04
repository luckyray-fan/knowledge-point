## 常见使用

- [查看端口占用和杀死进程](https://blog.csdn.net/ch717828/article/details/46663595)
  - lsof -i :8080, 可以获得进程的 pid, 如果没有就不显示
  - kill, 杀死进程
- 执行一个没有加入环境变量的程序, 进入目录, 然后`./test`

## 常见命令

### alias

生成命令的别名, `alias 新命令 '原命令 - 参数'`

> [来源](https://man.linuxde.net/alias)

### export

用于设置或查看环境变量

> [来源](https://www.runoob.com/linux/linux-comm-export.html)

### lsof

打开 linux 中的文件

- -i, 列出符合条件的进程, `:` 端口号

> [来源](https://www.cnblogs.com/peida/archive/2013/02/26/2932972.html)

### netstat
查看监听的端口, 建立的连接

- -atu, 查看监听的 tcp, udp 端口, -l, 建立 listen 的端口

> [来源](https://www.cnblogs.com/ggjucheng/archive/2012/01/08/2316661.HTML)

### kill

终止执行中的程序或工作, kill -9 pid 彻底杀死某条进程

> [来源](https://www.runoob.com/linux/linux-comm-kill.html)

一行命令关闭监听指定端口的程序

kill \`netstat -nlp | grep :3306 | awk '{print $7}' | awk -F"/" '{ print $1 }' \` 

> [来源](https://blog.csdn.net/baidu_29701003/article/details/83009156)
### make

执行 Makefile, 一般依据一定的规则

> [来源](http://www.ruanyifeng.com/blog/2015/02/make.html)

### wget

用来下载文件的工具

> [来源](https://www.cnblogs.com/peida/archive/2013/03/18/2965369.html)

### brew

包管理工具用来安装 mac 没有预装的 unix 工具

> [来源](https://www.jianshu.com/p/bca8fc1ff3f0)

### curl

请求参数中的 url, 根据其他参数设置请求方法, 请求头等

> [来源](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

### source

source 命令会强制执行文本中的命令, 而不管其权限, 常用于环境变量

> [来源](https://www.cnblogs.com/funway/archive/2010/04/27/1978653.html)

### chsh

更改使用者的 shell 设定

> [来源](https://www.runoob.com/linux/linux-comm-chsh.html)

### touch

修改文件的时间属性, 如果文件不存在则创建一个, touch xxx.xx

> [来源](https://www.runoob.com/linux/linux-comm-touch.html)

### nohup

关闭 ssh 也能不终止进程

> [来源](https://blog.csdn.net/gatieme/article/details/52777721)

### chmod

给文件赋予权限

- `chmod +x xx.sh`, 让 shell 脚本可以执行
- `chmod 777 xxx`, 让文件可以随意写入读取

> [来源](https://www.runoob.com/linux/linux-comm-chmod.html)

## shell

- 终端, 指的是和计算机交互的软件终端模拟器, 负责显示 gui, 接受操作和显示结果
  - windows, 控制台
  - linux, konsole
  - mac, iterm2
- shell, 操作计算机内核
  - 图形化 shell, 如 windows explorer
  - 命令行 shell

### 不同 shell 的区别

- 功能, 色彩高亮, 命令提示, 智能补全, 快速跳转等

[查看自己的当前所用的 shell 并且更改](https://blog.csdn.net/qq_32590631/article/details/93640599)

- echo \$SHELL, 查看当前的 shell, 还可以用 $0, 比 $shell 更靠谱
- chsh -s /bin/bash, 修改 shell, vscode 可以在终端中手动选

> [终端与 shell 的区别](https://www.ihewro.com/archives/933/)

### mac 中的环境变量

不同的 shell 读取配置方法不同

> [来源](https://blog.csdn.net/nijun914/article/details/75808459)

> [MAC 设置环境变量 PATH 和 查看 PATH](https://www.jianshu.com/p/acb1f062a925)

### shebang

指定文件的解释程序, `#!` 加上程序路径

> [来源](http://smilejay.com/2012/03/linux_shebang/)

## sh 脚本

### 参数

- 参数有不同的形式
  - `-`, `--` 这些是不同的软件的风格, 分别属于 System V 和 BSD, 通常调用不同的解析程序来解析参数

> [来源](https://blog.csdn.net/songjinshi/article/details/6816776)

### 单引号, 双引号, 反引号

- 单引号, 普通字符串
- 双引号, 只有几个字符有特殊意义, 如`$`
- 反引号, 当做命令行解释, 返回的值作为数值, 新的用法推荐 `$()`

> [来源](https://blog.csdn.net/iamlaosong/article/details/54728393)

### \$ 变量

- \$1-\$n, 传入脚本的参数

> [来源](cnblogs.com/fhefh/archive/2011/04/15/2017613.html)

### dirname \$0

命令行下会回到 bin 目录, 在 sh 脚本中运行路径会到这个脚本文件所在的文件夹, 提高了脚本的可移植性

> [来源](https://www.cnblogs.com/xupeizhi/archive/2013/02/19/2917644.html)

### 运算符

> [来源](https://www.runoob.com/linux/linux-shell-basic-operators.html)

#### 判断

- 文件是否存在, `if [ ! -f xxx ]`
- 长度为 0, `-z`

> [来源](https://www.jianshu.com/p/1f1e1ec2ae2e)

### set

set -e, 当返回值非 0 立刻退出

> [来源](https://blog.csdn.net/xiaofei125145/article/details/39345331)

## 应用

### openssl

用来生成 ssl 证书

> [来源](https://blog.csdn.net/liuchunming033/article/details/48470575)

- [将生成的证书加入信任名单](https://apple.stackexchange.com/questions/80623/import-certificates-into-the-system-keychain-via-the-command-line)
