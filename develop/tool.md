## 常见使用

- [代码覆盖率](https://juejin.im/post/5e796ec1e51d45271e2a9af9#heading-2)

## git

---

首先, git init 的时候, git 会创建一个`.git`目录, 这个目录包含所有 git 存储和操作的对象, 如果想要备份或者复制一个版本库, 可以直接将该目录复制就行, 刚创建的目录中有以下比较重要的条目:

- Head 文件, 指示目前被检出的分支
- index 文件, 保存暂存区信息
- objects 目录, 存储所有数据内容
- refs 目录, 指向数据的提交对象的指针

在`.git`目录的父目录是工作区, 运行`git add`将会加文件放到 index 暂存区, 然后`commit`后就放到了 Head 中并清空暂存区

- 为了当前内容创建副本, 将内容压缩为二进制, 并计算内容的 SHA1 哈希值, 作为该对象的文件名, 此时可以看到 `objects`目录下多了一个文件夹, 文件夹名字为之前计算的哈希值的前两位, 文件夹中有一个文件名为后 38 位的文件
- 更改文件内容后会重复上面的步骤

> [来源](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)

### .gitignore

忽视掉里面的内容，不将其上传，但是如果上传过那么即使标记了也仍然会上传

### .gitlab-ci.yml

和服务器的 runner 集成, 能够用来合并分支, 执行一定的操作

> [来源](https://segmentfault.com/a/1190000010442764)

> [Getting started with GitLab CI/CD](https://docs.gitlab.com/ce/ci/quick_start/README.html)

### 查看 git 配置

git config --global --list

> [来源](https://www.cnblogs.com/merray/p/6006411.html)

### 分支

如果要开发一个功能需要几天, 但是如果每天上传一次其他人就比较难以工作, 如果一次性上传那么有可能别人改动了部分内容 pull 的时候之前的就会全部丢失, 所以可以用一个分支

- [brach](https://blog.csdn.net/u014540717/article/details/54314126), 列出当前的分支
- checkout -b, 选择某一条分支, 切出一条分支
- [pull origin/xxx,](https://blog.csdn.net/carfge/article/details/79691360) 拉取某个分支
- push origin xxx, 将当前分支推送到远程 xxx 分支

> [来源](https://blog.csdn.net/YJG7D314/article/details/104551896#5__201)

#### git 中 origin 和 master 的含义

- origin, 默认的远程仓库的名字
- master, 默认的分支名字

> [来源](https://www.zhihu.com/question/27712995)

#### 分支合并

> [来源](https://blog.csdn.net/wangjia55/article/details/8791195)

#### 推送到远程分支

> [来源](https://www.cnblogs.com/springbarley/archive/2012/11/03/2752984.html)

#### 整合不同分支

- merge
- [rebase](http://jartto.wang/2018/12/11/git-rebase/), 可以让 commit 记录比较干净
  - 合并 commit
  - 合并分支, 确保这条分支上只有自己用
  - [git pull --rebase](https://www.cnblogs.com/wangiqngpei557/p/6056624.html)

#### rebase

相比于 merge, 使用 rebase 可以获得一条干净的 commit 线, 可以更清晰的看到版本更替

> [来源](https://www.jianshu.com/p/3081e33a6136)

### 子模块

- submodule, 在某个项目中工作的时候需要使用另一个 git 仓库时使用, 会生成一个 .gitmodules 文件来保存子模块的信息, 可用于新旧项目

> [来源](https://www.jianshu.com/p/9000cd49822c)

## postman

测试 api 接口, 也可用于写爬虫时测试

## vscode

- gitlen
- live server
- prettier

### 快捷键

- [返回上一个光标](https://blog.csdn.net/M_N_N/article/details/84581840), 可以用来很方便的跳转
- 左右括号跳转

## chrome devtool

### debug

可以 debug formatted 的 js

如果 pause on subtree modifications 点选了, 那么 blackbox 就不会生效

### performance

如果看到以前的文章提到 timeline, 现在改为了 performance

> [来源](https://zhuanlan.zhihu.com/p/29879682)

#### 火焰图

通过查看图中函数的调用运行情况, 来查看 cpu 耗时在函数上的具体情况, 可用于判断性能问题

> [来源](https://zhuanlan.zhihu.com/p/69165260)

### network

- 请求比较多的情况下, 用[filter](https://developers.google.com/web/tools/chrome-devtools/network/reference#filter)过滤部分, 使用`-png`就可以去掉带有 png 的文件, [is a way filter requests](https://stackoverflow.com/questions/14637278/is-there-a-way-to-filter-network-requests-using-google-chrome-developer-tools)

## debug

### 浏览器

### nodejs

用 vscode 来 debug nodejs

> [来源](https://juejin.im/post/5d84456851882556f33d5fb0)

## bookmarklet

我也写了一个, 作用是一键去除 csdn 哈哈哈哈 😂, 还有就是 bilibili 直播一键画中画(看 vtuber 用的, 小窗加声音, 爽!)

> [来源](http://www.ruanyifeng.com/blog/2011/06/a_guide_for_writing_bookmarklet.html)

## 油猴脚本

就只讲我用到的, 从必要的开始, 禁止平铺平铺禁止 🤣, 不然一开始就学那么多用不到的干嘛

- 可以复制到油猴后台然后 ctrl+s 保存就更新了脚本
- 需要刷新标签页才能运行
- 可以用控制台 debug
- 如果想看 ajax 请求, [可以打开 background 页面看](https://stackoverflow.com/questions/10257301/where-to-read-console-messages-from-background-js-in-a-chrome-extension), 因为它的请求方法是包裹了一层原生的 xmlhttprequest, 本质上是由 extension 自己发出的请求, 可以看看: [why can tampermonkey perform a cors request](https://stackoverflow.com/questions/48615701/why-can-tampermonkeys-gm-xmlhttprequest-perform-a-cors-request), 油猴还可以更改 http 头, 能改 refer

### userscript header

就是头部的标识, 可以指定油猴的执行方式, 先给出几个关键的

- match, 匹配的网址, 示例: `*://*.bilibili.com/*`, 注意这个最末尾的通配符, 如果没有那么除了首页其他地方都无法运行
- grant, 允许调用的方法, 我觉得直接开放全部不就好了 🤨

### Application Programming Interface

- 插入 dom 结构, 就用普通的 dom 方法就好
- GM_addStyle(css), 插入 css

> [来源](https://www.tampermonkey.net/documentation.php)

## 搜索方法

**google**

- 目前最常用就一个 `-`, 例如`-CSDN`哈哈哈哈哈 🤣
- `site:xxx.com`, 在指定的网站中搜索, 我看有些偷懒的网站没有自己的搜索系统, 就用用谷歌的

> [Google Hacking————你真的会用 Google 吗](https://zhuanlan.zhihu.com/p/22161675)

## 远程桌面

- chrome remote desktop, 用浏览器来整这个活
- microsoft remote desktop, 家庭版的 windows 不支持, rdpwrap 似乎不支持我的版本
- teamviewer, 没用过
