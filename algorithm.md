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

## 常见面试题

---

### n 项之和

### 两数之和

### 第 k 个数
