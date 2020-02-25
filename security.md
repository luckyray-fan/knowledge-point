## xss

Cross-Site Scripting 往页面注入恶意代码, 可以获得 cookie, sessionID 等

### 攻击形式

- 存储型
- 反射型
- DOM 型

### 预防方法

- 输入过滤
- 纯前端渲染
- 转义 HTML
- 注意 DOM API 的使用
- Content Security Policy
- 内容长度控制

> [来源](https://tech.meituan.com/2018/09/27/fe-security.html) 挺专业的, 看起来挺复杂, 但是讲得很清楚

## csrf

## 网络劫持

## 非法调用 Hybrid API
