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

### 类型赋值与类型推测

ts 可以使用`a:number`的语法赋予一个变量类型, 并能够推测类型, 但推测仅会在声明的时候进行

```typescript
function add(n1: number) {}
let n;
n = '5';
add(n); //不会报错
```

### ts 复杂类型

- 对象
  - ts 会取对象的 key 来作为类型, 当然也可以`a:object`来泛指对象
    ```typescript
    const person: {
      name: string;
      age: number;
    };
    ```
- 数组
  - 数组内的数据可以使用`a:string[]`来表示, 要是拥有数字和字符串`(string|number)[]`, 如果想要有任意类型数组元素 `a:any[]`
- tuple
  - 限定数组的长度和类型, `[number,string]`, 但是如果用`push`之类的方法不会报错
- enum
  - 可以用来代指系统中的角色, 限定数量, 可读性高
  ```typescript
  enum role {
    Admin,
    author,
    user
  }
  console.log(role.Admin);
  ```
- union
  - 提供可选的类型 `a:number|string`, 此时赋值需要先判断一下类型
- literal
  - 可以只用字面量来代表一个类型 `a:'test'|3`, 那么 a 的值就只能是`test`或者`3`
  ```typescript
  let test = 3;
  let a: 'test' | 3 = test; //不能将number类型赋值类型3
  ```
- 类型别名, 自定义类型
  ```typescript
  type test = number | string;
  ```
- 函数类型返回
  - 函数的返回可以由返回的值进行推测, 也可以手动指定, 但如果指定的类型和推测不一致, 会报错, 如果什么也没有返回, 那么类型是`void`
  ```typescript
  function test(): undefined {
    return;
  } //如果没有return的话, 会报错, 只能允许void或any类型能没有返回
  ```
- 函数类型
  - 如果想让变量存储的是指向函数的指针 `a:Function`
  ```typescript
  let a: (n1: number, n2: number) => number; //指定参数为number返回类型为number的函数类型
  ```
  - 回调函数类型
  ```typescript
  function test(cb: (n: number) => void) {
    cb(3);
  }
  test((n1) => {
    console.log(n1);
  });
  ```
- unkown 类型
  - 相较于 any 类型, unkown 更严格, 会限制赋值给其他变量
  ```typescript
  if (typeof userInput === 'string') {
    userName = userInput; //此时才可以赋值
  }
  ```
- never 类型
  - 用于函数, 对于不会执行到下一步的函数使用, 如抛出异常或者无限循环

## typescript module

### watch mode

- 每次使用`tsc`重新编译太过于麻烦, 可以使用观察模式来进行编译 `tsc xx.ts --watch`, 缩写可以用`tsc -w`
- [对整个项目进行编译](https://alligator.io/typescript/new-project/), 执行`tsc --init`
  - 生成 tsconfig.json
  - 指定包含或者排除的文件, tsconfig 中`exclude:[],include:[]`
    - 可以使用通配符, 路径也可以 `**/*.dev.ts`, node_modules 默认不包括
    - 如果使用 include, 不在名单上的都不会编译
  - 配置编译对象
