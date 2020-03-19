> 只放面经中的原题, 想了想又觉得不行, 想要收集常用的解决方法, 所以新建一个栏目在这里[更新][刷一遍可能会忘, 总结方法则加深印象](https://zhuanlan.zhihu.com/p/104983442)

> 蛮力, 跑遍所有的数据返回需要的, **优化**让每过一个数据能够获得其背后其他的信息, 来少走一些数据, 达到加速的目的

> 另外输入的信息也能极大的决定使用什么样的算法

> 算法是解决问题的一个过程, 有大体的定式但也有很多细小的灵机一动的优化, 这些优化可以针对语言, 数据结构等并且提升巨大

**常见背后信息有哪些呢:**

- placeholder

## 滑动窗口

---

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

---

归并, 快排等

## 二分法

---

二分查找

## 回溯

---

在路径中做选择然后带着剩余的选择列表进入递归, 从递归出来时将之前的选择撤销, 这样每次循环都能得到新的位置并且是按顺序的位置

回溯只能暴力的遍历所有的结果, 相较于动规少了可以记住的子串

```JavaScript
var permutation = function(s) {
  var res = []
  var track = [];
  _permutation(s,track,res);
  return Array.from(new Set(res))
};
function _permutation(s,track,res){
  if(track.length === s.length){
    res.push(track.map(i=>s[i]).join(''));
    return;
  }
  for(var i = 0;i<s.length;i++){
    if(track.includes(i)) continue;
    track.push(i)
    _permutation(s,track,res);
    track.pop()
  }
}
```

> `全排列, N 皇后`, [来源](https://github.com/labuladong/fucking-algorithm/blob/70d1729ecc3a2ca13d162ca6e39f3db2602a1d23/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E8%AF%A6%E8%A7%A3%E4%BF%AE%E8%AE%A2%E7%89%88.md)

## 双指针

---

一个指针遍历, 另一个指针寻找可以交换的值

> [来源](https://linzhenglearn.github.io/2017/03/29/TwoPointer/)

### 快慢指针

通常用来判断成环, 找中点等

> [来源](https://zhuanlan.zhihu.com/p/38521018)

> [面试 7：快慢指针法玩转链表算法面试（一）](https://juejin.im/post/5b46a7c75188251a8d36d482)

## 动态规划

---

**三步走:**

- 暴力的递归 -> 找到状态和选择
- 带备忘录的递归 -> 明确 dp 数组/函数的定义, 比如买卖股票
- 迭代的动态规划 -> 寻找状态间的关系

> [来源](https://github.com/labuladong/fucking-algorithm/tree/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97)

> [团灭 LeetCode 股票买卖问题](https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%9B%A2%E7%81%AD%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98.md) 跟以前看过的是一篇文章, 除了更详细了还有就是我差不多压根就没记住啥 😂

## 贪心

---

从暴力破解的指数级到动态规划消除重叠子问题达到多项式级再到贪心的线性级别, 贪心的每一步都是做出局部最优的选择

> `区间, 算钱` [来源](https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95%E4%B9%8B%E5%8C%BA%E9%97%B4%E8%B0%83%E5%BA%A6%E9%97%AE%E9%A2%98.md)

## kmp 算法

---

> 空间换时间, AC 自动机状态转移

next 数组中找到相应的前缀

> [来源](https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E4%B9%8BKMP%E5%AD%97%E7%AC%A6%E5%8C%B9%E9%85%8D%E7%AE%97%E6%B3%95.md)

## 优先队列

一般就是堆

> 第 k 大的数
