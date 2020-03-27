> 整篇文章由 [understanding typescript](https://www.udemy.com/course/understanding-typescript/) 而来, 整个课程约为 14 小时, 预计在入职前学完, 仅记录部分关键内容

> 原文对于已经有基础的来说比较啰嗦, 所以我部分章节跳着看

## 什么是 typescript

使用相应的 typescript 语法来获得 js 自身难以支持的特性, 最后编译成 js 在浏览器或者 node 中执行, 可以提前检测, 避免逻辑上的错误

### 环境准备

- typescript
- node
- npm

将 ts 文件编译为 js 文件仅需要 `tsc xx.ts` 即可, 如果语法不符合规范就会报错

如果想要快速 reload 页面可以安装`lite-server`

### 类型检测

typescript 的函数调用时会判断输入的类型是否匹配

### typescript 提供的其他功能

诸如接口, 范式, 装饰器等

## 基础类型

- number
- string
- boolean

### 基础使用

如果调用下面函数的参数并非 number, 就会报错, 但是 tsc 的默认设置即使报错也会将 ts 编译为 js

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

如果用 js 的风格来对输入的参数进行类型检测, 仅能在运行时确定类型, 而 ts 能静态检测出错误
