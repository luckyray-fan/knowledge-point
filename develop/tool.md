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

### 分支

如果要开发一个功能需要几天, 但是如果每天上传一次其他人就比较难以工作, 如果一次性上传那么有可能别人改动了部分内容 pull 的时候之前的就会全部丢失, 所以可以用一个分支

- [brach](https://blog.csdn.net/u014540717/article/details/54314126), 列出当前的分支
- checkout, 选择某一条分支, 切出一条分支

> [来源](https://blog.csdn.net/YJG7D314/article/details/104551896#5__201)

#### 整合不同分支

- merge
- [rebase](http://jartto.wang/2018/12/11/git-rebase/), 可以让 commit 记录比较干净
  - 合并 commit
  - 合并分支, 确保这条分支上只有自己用
  - [git pull --rebase](https://www.cnblogs.com/wangiqngpei557/p/6056624.html)

### 子模块

- submodule, 在某个项目中工作的时候需要使用另一个 git 仓库时使用, 会生成一个 .gitmodules 文件来保存子模块的信息, 可用于新旧项目

> [来源](https://www.jianshu.com/p/9000cd49822c)

## postman

测试 api 接口
