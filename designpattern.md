## 单例

---

确保一个类仅有一个实例, 并提供访问它的全局访问点

可以用于实现全局的登录窗口, 遮罩层等

惰性加载指的是, 只有当需要用到实例的时候才创建实例

```JavaScript
var singleton = function(fn) {
    var instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    }
};
// 创建遮罩层
var createMask = function(){
    // 创建div元素
    var mask = document.createElement('div');
    // 设置样式
    mask.style.position = 'fixed';
    // 省略...
    document.body.appendChild(mask);
    // 单击隐藏遮罩层
    mask.onclick = function(){
        this.style.display = 'none';
    }
    return mask;
};
document.getElementById('btn').onclick = function() {
    var oMask = singleton(createMask)();
    oMask.style.display = 'block';
}
```

> [来源](https://segmentfault.com/a/1190000012842251) 讲得很好

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
