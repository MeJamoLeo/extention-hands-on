/*
ブラウザの拡張機能をクリックした際に，ポップアップを出力する．
  アイコンクリック時のイベントを指定する
    chrome.browserAction.setPopupに渡すパラメータを作成する
    ポップアップを開く
 */
chrome.browserAction.onClicked.addListener(function () {
  var detail = {
    popup: 'popup.html'
  };
  chrome.browserAction.setPopup(detail);
});

/*
 拡張機能のバックグラウンドページを開いた際に，閲覧履歴を出力する．
 */
var query = {
  text: ''
};
chrome.history.search(query, function (results) {
  console.table(results);
});