## css 视觉格式化模型

---

根据视觉格式化模型, 将文档中的元素转换为一个个盒子 , 每个盒子的布局由下列因素决定

- 盒子尺寸
- 盒子类型: 行内盒子, 块级盒子
- 定位方案: 普通流, 浮动定位, 绝对定位
- 文档树中的其他元素
- 视口尺寸与位置
- 所包含的图片的尺寸

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model)

> [想要清晰的明白（一）： CSS 视觉格式化模型|盒模型|定位方案|BFC](https://segmentfault.com/a/1190000005116275)

## 行内元素 块级元素

---

- 行内元素, 只占据它对应标签的边框所包含的空间, 只能容纳文本或者其他内联元素
- 块级元素, 占据父元素(容器)的整个空间, 会前后另起一行, 能容纳其他块元素或者内联元素
- 区别, 块元素高, 行高顶和底边距都可以控制, 内联不行, 内联元素宽度就是它文字和图片的宽度不可改变
- 内联 margin 没法控制顶和底
- 转换方法, display, float, position

> [来源](https://www.jianshu.com/p/d69878549d92)

## 盒模型

---

将所有元素表示为矩形的盒子, CSS 决定这些盒子的大小, 位置以及属性, 组成内容如下:

- 内容区域
- 内边距
- 边框
- 外边距

标准 w3c 盒模型, `box-sizing` 的属性宽高只包含内容区域, 没有 `border和padding`, 在 css 中指定多少宽高就多少

设置为`border-box`, 此时盒子的宽高为 `padding+content+border`

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

## inline-block 的空隙

---

在元素之间有空格和换行的话就会有间距, 解决方法如下:

- 去掉空格
- margin 负值
- 无闭合标签
- font-size
- letter-spacing

如果文字没有对齐, 是因为`vertical-align`默认基于`baseline`对齐, 如果左右行高不一致, 或者设置了`overflow`属性会导致, 解决可以通过调整`vertical-align`或者两个元素同时添加`overflow`属性

> [来源](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

## 高度坍塌

---

文档流中, 父元素的高度默认通过子元素支撑, 如果没有设置父元素的高度, 一旦子元素脱离文档流, 父元素就无法再通过子元素来撑起高度, 写死高度就无法自适应了

### 解决方案

开启元素的 BFC, block formatting context

- overflow:hidden

> [来源](https://www.cnblogs.com/androidsuperman/p/6810715.html)

## BFC

---

块级格式化上下文, css 布局的一个概念, 是一块独立的渲染区域, 在计算 margin 和盒子高度与其他上下文有区别

简单理解为元素的一个 css 属性, 但是这个属性不能显示指定, 拥有这个属性的元素对内部和外部元素会表现出特性, 这就是 BFC

**BFC 布局规则**:

- 计算 BFC 高度时, 浮动元素也参与计算
- BFC 区域不会与浮动元素重叠

> [来源](https://www.cnblogs.com/diantao/p/6025547.html) 之前那个就是拼凑出来的结构也很混乱

> 看多了我都不知道谁抄的谁, 所以不有趣的理论性的文章以后我不写了 😂

## IFC

---

行内格式化上下文

> [来源](https://techbrood.com/h5b2a?p=css-ifc)

## 文档流

---

文档流指的是 normal flow, 普通流, 也就是行内和块级元素在默认情况下的布局

absolute 会让元素跳出文档流, 也就是说相当于没有这个元素

浮动不会跳出文本流, 后面的文字会当它仍然存在

[来源](https://www.zhihu.com/question/21911352/answer/102028085)

## 浮动

浮动最初是为了让文字能够环绕在图像的左边或右边, 后来常用于实现网站的横向排列, 现在被`inline-block`和`flex`等代替

**浮动的原理**:

- 脱离普通流, 并移动到父元素的左侧或右侧
- 父元素不会计算其高度

> [来源](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)

### 清除浮动

**清除浮动的原因如下**:

- 文字环绕浮动块
- 浮动让父级方块坍塌
  > [来源](https://juejin.im/post/59e7190bf265da4307025d91)

## 层叠上下文

---

在 DOM 树中最先出现的元素放在首位, 之后出现的元素放在前面的元素之上

> [来源](https://zhuanlan.zhihu.com/p/41516699)

## 字体单位

---

- 绝对长度单位, 一个固定的长度
- 相对长度单位, 长度会随着参考值的变化而变化
  - px, 像素, 一般等于物理像素, 现在高 ppi(每英寸像素) 的设备会等于多个物理像素的尺寸
  - em, 元素的字体大小, 会层层继承父元素的字体大小
  - %, 字体大小的百分比, 例如设置 62.5%, 默认 16px 就变成了 10px
  - rem, 根元素的字体大小
  - vm,vh 视窗宽高度, 一单位为其 1%

### 像素与分辨率

最小单位也就是像素, 生产出来后, 设备的像素多少已经确定

分辨率就是宽和高上像素点的数目, 设备分辨率不动, 屏幕越小图像越清晰

> [来源](https://juejin.im/post/5d3920ef51882554672e3fb0)

## flex 布局

---

flex 可以用来非常有效的布局, 对其并且描述空间在容器里的形态

与 grid 相比, flex 非常适用于应用的组件和小规模的布局, grid 适合大规模的布局

### 基本术语

- 主轴, 可以定义方向为横或竖
- 交叉轴, 两轴彼此垂直

### 使用方法

- flex-grow, 一行排列的大小比例
- flex-shrink, 收缩比例, 仅在默认宽度之和大于容器
- flex-basis, 指定初始宽度
- flex, 三个参数, 从左到右, flex-grow, shrink, basis
- flex-direction, 设定主轴方向
- justify-content, 分配主轴空间
- align-self, 分配交叉轴空间

### 适用场景

- [可以用来垂直居中](https://www.cnblogs.com/coco1s/p/10910588.html), 此时处于 FFC 或 GFC 上下文中, 在通过 justify-content 和 align-self 进行对齐之前, margin 设置 auto 取的值是处于空闲的空间

> [来源](https://css-tricks.com/snippets/css/a-guide-to-flexbox)

## 浮动和清除浮动

---

浮动元素会脱离文档流并向左/右浮动, 直到碰到父元素或者另一个浮动元素

浮动一开始用来文字环绕, 同时也可以设置宽高并且可以内联排列, 在 `inline-block` 出来前常用来内联排列

### 如何清除浮动

- 伪元素
- BFC

### 常用场景

- 文字环绕
- 内联排列

> [来源](https://www.jianshu.com/p/09bd5873bed4)

## 外边距重叠

---

margin 塌陷两个或多个盒子的相邻或嵌套边界没有边框而形成一个单一边界

**外边距重叠计算方式, 解决方案**:

- 相邻
  - 统一一下 margin
  - position absolute, fixed
- 内嵌
  - padding
    > [来源](https://juejin.im/entry/59c3be3e6fb9a00a571d39e4) > [看到不错的](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

## bootstrap 栅格模型

---

## 实现布局

---

### 定位

**position** 属性:

- relative, 相对于正常位置定位
- absolute, 相对于值不为 static 的第一个父元素的 margin 的外边缘进行定位
- fixed, 相对于浏览器窗口定位
- static, 正常位置, 此时 top 和 z-index 等属性无效

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)

### 三栏布局(左右两边固定宽度, 中间自适应)

- flex
- 浮动, 无法第一时间加载主要内容
  - margin
  - bfc, 不会与浮动元素重叠
  - 用一个 content 包裹 main, 可以先加载主要内容
- 绝对定位
- table

> [来源](https://zhuanlan.zhihu.com/p/25070186)

### 圣杯布局与双飞翼布局

基本同上, 不过多了 header 与 footer

> [来源](https://juejin.im/post/5caf4043f265da039f0eff94)

### 垂直水平居中

- 行内元素, line-height, text-align
  - 多行文本, table-cell, vertical-align
- 块级元素

  - 定宽, margin
  - 不定宽

    - table - inline-block, text-align
    - flex
    - position, transform

    > [来源](https://segmentfault.com/a/1190000014116655)

## display 与 visibility

---

display:none 的话, 不会保留物理空间, 此时会发生回流, visibility:hidden 仅仅是视觉上完全透明

另外, visibility 不会触发事件, 但是 opacity 会

## 动画

---

### requestAnimationFrame

setInterval 无法保证每隔一定时间一定执行, 所以有了这个 api 来让浏览器优化执行

> [](https://juejin.im/post/5a82f0626fb9a06358657c9c)

## css 选择器

---

- 通用选择器, `*`, 选择所有的元素
- 类型,`tag` 节点名称
- 类, `.`, 选择给定 class 的元素
- ID, `#`, 选择给定 id 的元素
- 属性,`[attr]`, 选择给定属性的元素
- 组合, `,`, 将不同选择器组合在一起, 能选择被任意一个选中的元素
- 后代, ``(空格), 选择前一个元素的后代节点
- 子代, `>`, 选择前一个元素的直接子节点
- 一般兄弟, `~`, 选择和前一个节点同父元素的后面的所有节点
- 紧邻兄弟, `+`, 选择紧跟前一个元素后的元素
- 伪类, `:`
- 伪元素, `::`

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

### 选择器优先级

- 类型选择器, 如 tag 和伪元素
- 类选择器, 属性选择器, 伪类, 如`.xxx`和`[type="xxx"]`和`:hover`
- ID 选择器

通配选择符关系选择符对优先级没有影响, 内联样式总会覆盖外部样式, 相当于最高的优先级

`!important` 无视之前的优先级最高, 如果两个`!important`冲突, 就叠加之前的优先级, 如果还是一样就按先后顺序

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)

### 选择器匹配方向

从右到左, 为了尽快筛除不匹配的元素

> [来源](https://juejin.im/post/5b6133a351882519d346853f#heading-5)

## 响应式

---

指同一页面在不同屏幕尺寸下有不同的布局, 通过判断视口分辨率实现

### 媒体查询

选择屏幕大小分割点, 按照常见机型适配

- 手机, <768px
- 平板, >=768px
- 桌面显示器, >=992px
- 大屏幕, >=1200px

```css
@media screen and (min-width: 768px) {
  body {
    background: #ccc;
  }
}
```

### 百分比布局

css 支持最大最小高, 可以将百分比和它结合, 同时还有 calc 属性可以计算

**子元素的百分比相对应的**:

- width,height 相对于子元素的直接父元素
- top,bottom, 相对于默认定位的父元素的高度
- left,right, 相对于默认定位的父元素的宽度
- padding, margin 无论是垂直还是水平, 都相对于直接父元素的 width
- border-radius, translate, background-size 相对于自身的尺寸
- vertical-align 参照 line-height 参照 font-size, font-size 参照父元素的 font-size
- calc 相对于父级的高度

> [来源](https://juejin.im/post/5caaa230e51d452b672f9703#heading-5)

> [详述 css 中的百分比值](https://segmentfault.com/a/1190000000590998)

### rem 布局

rem 相对于根元素的 font-size, 可以用 js 来动态控制

### 视口单位

设置 viewport vw,vh

### 图片响应式

目标是大小自适应, 选择不同分辨率的图片

- max-width
- srcset
- background-image
- picture 标签

### 使用成型方案

- flex 弹性布局
- grid 网格布局
- columns 栅格系统

> [来源](https://juejin.im/post/5caaa230e51d452b672f9703)

## css 模块化

---

### link 和@import 区别

link 属于 XHTML 标签, 页面加载时加载样式权重高于@import, @import 只能页面加载完后加载

link 除了加载 css 还能定义 rss, 定义 rel 链接

## css 使用案例

---

- 禁用鼠标事件, pointer-events
- 禁止用户选择, user-select
- 条纹网络
  - nth-child
  - linear-gradient
- 修改 chrome 记住密码后自动填充表单的黄色背景

  ```css
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    background-color: rgb(250, 255, 189); /* #FAFFBD; */
    background-image: none;
    color: rgb(0, 0, 0);
  }
  ```

- 让页面字体变清晰, 变细 `-webkit-font-smoothing: antialiased;`
- 让 overflow:scroll 平滑滚动 `-webkit-overflow-scrolling: touch;`

> [来源](https://juejin.im/post/5d8989296fb9a06b1f147070)

- 高度随宽度等比例
  - 隐藏图片
  - 相同的单位 vmin
  - padding-bottom

> [来源](https://segmentfault.com/a/1190000006631310)
