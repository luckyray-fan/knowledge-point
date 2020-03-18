// ==UserScript==
// @name         bilibili-recommend
// @namespace    luckyray
// @version      0.1
// @description  获取bilibili推荐
// @author       luckyray
// @match        *://*.bilibili.com/*
// @match        *://leetcode-cn.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
  'use strict';
  var LeetCode = {
    dom: (solution, speed) => `
    <div class="lk-leetcode">
      <div class="lk-li">
        <a src="${solution}" target="_blank">跳转到题解</a>
      </div>
      <div class="lk-li">
        <a src="${speed}" target="_blank">跳转到题解速度排列</a>
      </div>
    </div>
    `,
    css: `
    .lk-leetcode{
      width:300px;
      height:100px;
      background:#fff;
      position:fixed;
      top:50px;
      right:50px;
      display:flex;
      flex-direction:column;
    }
    .lk-li{
      flex-grow:1;
    }
  `
  };
  function getLeetCodeInfo(path) {
    return new Promise((resolve) => {
      if (path.includes('explore/interview')) {
        var dom = localReq({
          method: 'POST',
          url: 'https://leetcode-cn.com/graphql',
          data: {
            operationName: 'GetItem',
            variables: {
              itemId: '1014'
            },
            query:
              'query GetItem($itemId: String!) {↵  item(id: $itemId) {↵    id↵    title↵    type↵    paidOnly↵    lang↵    question {↵      questionId↵      title↵      titleSlug↵      __typename↵    }↵    article {↵      id↵      title↵      __typename↵    }↵    video {↵      id↵      __typename↵    }↵    htmlArticle {↵      id↵      __typename↵    }↵    webPage {↵      id↵      __typename↵    }↵    __typename↵  }↵  isCurrentUserAuthenticated↵}↵'
          },
          onload: function(res) {
            console.log(res);
            resolve({
              solution: 123,
              speed: 456
            });
          }
        });
      }
    });
  }
  async function render() {
    var { host, pathname } = location;
    if (/leetcode/i.test(host)) {
      var { solution, speed } = await getLeetCodeInfo(pathname);
      // getLeetCodeInfo(path);
      document.body.insertAdjacentHTML('beforeend', LeetCode.dom());
      GM_addStyle(LeetCode.css);
    }
  }
  render();

  //util function
  function localReq(option) {
    if (String(option) !== '[object Object]') return undefined;
    option.method = option.method ? option.method.toUpperCase() : 'GET';
    option.data = option.data || {};
    var formData = [];
    for (var key in option.data) {
      formData.push(''.concat(key, '=', option.data[key]));
    }
    option.data = formData.join('&');

    if (option.method === 'GET') {
      option.url +=
        location.search.length === 0 ? ''.concat('?', option.data) : ''.concat('&', option.data);
    }

    var xhr = new XMLHttpRequest();
    xhr.responseType = option.responseType || 'json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (option.success && typeof option.success === 'function') {
            option.success(xhr.response);
          }
        } else {
          if (option.error && typeof option.error === 'function') {
            option.error();
          }
        }
      }
    };
    xhr.open(option.method, option.url, true);
    if (option.method === 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.send(option.method === 'POST' ? option.data : null);
  }
})();
