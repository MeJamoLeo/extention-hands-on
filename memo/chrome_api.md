<style type="text/css"> .red { color: red; } .blue { color: blue; } .green { color: green; } .orange { color: orange; } .purple { color: purple; } .cyan{ color: cyan; } </style>

# Chrome Extension API

# list

- chrome
  - **history**
    - _search_
      - <span class='green'>object</span> queryInfo
      - <span class='cyan'>function</span> callback
    - _deleteUrl_
      - <span class='red'>UrlDetails</span> queryInfo
      - <span class='cyan'>function</span> callback

## chrome.history

### search

---

`chrome.history.search(object query, function callback) `

https://developer.chrome.com/extensions/search

```js
document.addEventListener("DOMContentLoaded", function () {
  var query = {
    text: "",
  };

  chrome.history.search(query, function (results) {
    console.table(results);
  });
});
```

### deleteUrl

---

`chrome.history.deleteUrl( UrlDetails details, function callback) `
