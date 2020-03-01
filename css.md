## 行内元素 块级元素

- 行内元素, 只占据它对应标签的边框所包含的空间, 只能容纳文本或者其他内联元素

- 块级元素, 占据父元素(容器)的整个空间, 会前后另起一行, 能容纳其他块元素或者内联元素

- 区别, 块元素高, 行高顶和底边距都可以控制, 内联不行, 内联元素宽度就是它文字和图片的宽度不可改变

- 转换方法, display, float, position

> [来源](https://www.jianshu.com/p/d69878549d92)

## 高度坍塌

文档流中, 父元素的高度默认通过子元素支撑, 如果没有设置父元素的高度, 一旦子元素脱离文档流, 父元素就无法再通过子元素来撑起高度, 写死高度就无法自适应了

### 解决方案

开启元素的 BFC, block formatting context

- overflow:hidden

> [来源](https://www.cnblogs.com/androidsuperman/p/6810715.html)

## BFC

块级格式化上下文, css 布局的一个概念, 是一块独立的渲染区域

简单理解为元素的一个 css 属性, 但是这个属性不能显示指定, 拥有这个属性的元素对内部和外部元素会表现出特性, 这就是 BFC

**BFC 布局规则**:

- 计算 BFC 高度时, 浮动元素也参与计算
- BFC 区域不会与浮动元素重叠

> [来源](https://www.cnblogs.com/diantao/p/6025547.html) 之前那个就是拼凑出来的结构也很混乱

> 看多了我都不知道谁抄的谁, 所以不有趣的理论性的文章以后我不写了 😂

## 字体单位

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

### 适用场景

> [来源](https://css-tricks.com/snippets/css/a-guide-to-flexbox)

## 浮动和清除浮动

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

两个或多个盒子的相邻或嵌套边界没有边框而形成一个单一边界

**外边距重叠计算方式, 解决方案**:

- 相邻

- 内嵌

> [来源](https://juejin.im/entry/59c3be3e6fb9a00a571d39e4) > [看到不错的](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

## 盒模型

将所有元素表示为矩形的盒子, 组成内容如下:

- 内容区域
- 内边距
- 边框
- 外边距

标准 w3c 盒模型, `box-sizing` 的属性宽高只包含内容区域, 没有 `border和padding`, 在 css 中指定多少宽高就多少

设置为`border-box`, 此时盒子的宽高为 `padding+content+border`

## bootstrap 栅格模型

## 实现布局

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

display:none 的话, 不会保留物理空间, 此时会发生回流, visibility:hidden 仅仅是视觉上完全透明

## 动画

### requestAnimationFrame

setInterval 无法保证每隔一定时间一定执行, 所以有了这个 api 来让浏览器优化执行

> [](https://juejin.im/post/5a82f0626fb9a06358657c9c)

## css 选择器

- 通用选择器, `*`, 选择所有的元素
- 类型,`tag` 节点名称
- 类, `.`, 选择给定 class 的元素
- ID, `#`, 选择给定 id 的元素
- 属性,`[attr]`, 选择给定属性的元素
- 组合, `,`, 将不同选择器组合在一起, 能选择被任意一个选中的元素
- 后代, ``(空格), 选择前一个元素的后代节点
- 自带, `>`, 选择前一个元素的直接子节点
- 一般兄弟, `~`, 选择和前一个节点同父元素的后面的所有节点
- 紧邻兄弟, `+`, 选择紧跟前一个元素后的元素
- 伪类, `:`
- 伪元素, `::`

> [来源](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

## 响应式