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

也就是我们常用的事件, 订阅事件与发布事件, 双向绑定的方法之一, 常见应用有 Nodejs 中的 [eventemitter](https://juejin.im/post/5c199c0ae51d452f6028a072), 安卓里的 [eventbus](https://www.liujiaweb.com/242.html)

```JavaScript
const Ovserve = (function(){
let message = {};
return {
  on:function(type,fn){
    if(!message[type]){
      message[type] = [fn]
    }else{
      message[type].push(fn)
    }
  },
  subscribe:function(type,args){
    if(!message[type])return;
    let events = {
      type:type,
      args:args||{}
    },
    let i = 0, len = message[type].length;
    for(;i<len;i++){
      message[type][i].call(this,events)
    }
  },
  off:function(type,fn){
    if(message[type]){
      let i = message[type].length-1;
      for(;i>=0;i--){
        message[type][i] === fn&&message[type].splice(i,1)//这种串联写法还挺有意思的= =
      }
    }
  }
}
})()
Observe.on('say', function (data) {
  console.log(data.args.text);
})
Observe.subscribe('say', { text : 'hello world' } )
```

> [来源](https://juejin.im/post/5bce9a35f265da0abd355715)

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

view 与 model 之间没有关系, 通过 viewmodel 将二者连接, view 的渲染和 model 的变动同步

> [来源](https://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
