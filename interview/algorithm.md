> 只放面经中的原题, 想了想又觉得不行, 想要收集常用的解决方法, 所以新建一个栏目在这里

> 蛮力, 跑遍所有的数据返回需要的, 优化让每过一个数据能够获得其背后其他的信息, 来少走一些数据, 达到加速的目的

## 滑动窗口

空间换时间

保存一个 hash, 如果数组中的下一个元素与之有冲突就滑动, 可以用一个变量存储冲突的索引, 之后再用上

```JavaScript
//"abcabcbb" 找最长子串的长度
var lengthOfLongestSubstring = function(s) {
  let ans = 0;
  let map = new Map();//这就是那个窗口
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(map.get(s[i]) || 0, j);
    }
    ans = Math.max(ans, i - j + 1);
    map.set(s[i], i + 1);
  }
  return ans;
};
```

> [无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)

## 分治法

归并, 快排等

## 二分法

二分查找
