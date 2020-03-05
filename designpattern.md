## 单例

---

## 观察者模式

---

## 架构

---

### mvc

- view, 视图, 接收交互控制 controller
- controller, 完成业务逻辑, 操作 model
- model, 使用数据更新 view

### mvp

将 controller 改名为 presenter, 同时各部分之间的通信都是双向

- view 与 model 不发生联系, 都通过 presenter 传递
- view 不存在任务业务逻辑, 所有逻辑在 presenter 上

### mvvm

将 presenter 改名为 viewModel, 基本与 mvp 一致, 不过它采用双向绑定, view 的变动自动反映在 viewModel

> [来源](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
