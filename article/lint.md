## 有关 lint 的原理和配置分析

### lint 目的

- [避免错误](https://eslint.org/docs/rules/#possible-errors)
- [写出最佳实践的代码](https://eslint.org/docs/rules/#best-practices)
- [规范变量的使用方式](https://eslint.org/docs/rules/#variables)
- [ 规范代码格式](https://eslint.org/docs/rules/#stylistic-issues)
- [更合适的使用新的语法](https://eslint.org/docs/rules/#ecmascript-6)

### lint 原理

ESLint 使用 [espree](https://github.com/eslint/espree) 来解析我们的 JS 语句，来生成抽象语法树，[具体源码](https://github.com/eslint/eslint/blob/4bcdfd07d514fd7a6b8672d33703d0b6c606f214/lib/linter.js#L432)。

可以使用 [AST explorer](https://astexplorer.net/) 来查看 js 编码为 AST 的样子

代码通过 AST selector 对应到 eslint 中的 rule, 然后对齐分析

### plugin

可以扩展只支持 ecmascript 语法的 eslint, 再借助 parser 来识别非标准的 js 语法, 如 typescript

> [来源](https://zhuanlan.zhihu.com/p/53680918)
