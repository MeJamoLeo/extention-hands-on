document.addEventListener('DOMContentLoaded', function () {
  var query = {
    text: ''
  };

  // manifest.json でpermissionの設定を忘れないこと
  chrome.history.search(query, function (results) {
    console.table(results);
  });
});