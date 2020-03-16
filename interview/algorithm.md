## 求数组中第 k 大的数字

---

## 排序

---

v8 底层是插入排序加快速排序, 数组长度在一定长度下用插入

> [来源](https://segmentfault.com/q/1010000007133473)

### 快排

- 找到该数组的基准点, 创建左右空数组
- 遍历数组比较基准点, 小的左边, 大的右边
- 递归左右数组

```JavaScript
function quickSort(arr){
  if(arr.length<=1)return arr;
  var left = [],
  right = [],
  pivot = arr[0]
  for(var i = 0;i<arr.length;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot],quickSort(right))
}
```

## 查找

---

哈希, 二叉树

## 树

### 树的遍历

深度遍历前中后序, 广度遍历层次遍历

> [来源](https://charlesliuyx.github.io/2018/10/22/%E3%80%90%E7%9B%B4%E8%A7%82%E7%AE%97%E6%B3%95%E3%80%91%E6%A0%91%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C)

### 判断对称二叉树

递归, 取出左右节点的值如果不同返回 false, 最后一层一层返回上来

> [来源](https://leetcode-cn.com/problems/symmetric-tree/solution/javascript-di-gui-si-lu-he-shi-xian-by-xin-tan/)

## 杂项?

### 合并乱序区间

### n 项和为 sum

### 两数之和

### 第 k 个数

### 进制转换

### 洗牌算法

shuffle~, 以前写一个小游戏, 蜘蛛纸牌也用过, 不过没有写结尾的动效, 因为没有玩到过结尾 😆

**目的:**

- 公平的将牌的位置进行交换
  - 一个长度为 n 的数组有`n!`中可能的排列, 所以应该给出这`n!`个数组中可能的任意一种, 这才公平
  - 也就是说每个元素出现在每个位置的概率是相等的

```JavaScript
for(var i = len-1;i>=0;i--){// 经典的概率论,
  let tem = arr[i],
  random = Math.random()*i;
  arr[i] = arr[random];
  arr[random] = tem;
}
```

> [来源](https://www.zhihu.com/question/27547892/answer/1064577220)
