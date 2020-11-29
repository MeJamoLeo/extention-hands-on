<style type="text/css"> .red { color: red; } .blue { color: blue; } .green { color: green; } .orange { color: orange; } .purple { color: purple; } .cyan{ color: cyan; } </style>

# Chrome Extension API

# list

- chrome
  - search
    - query(<span class='green'>object</span> queryInfo, <span class='cyan'>function</span> callback )

## chrome.search

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
