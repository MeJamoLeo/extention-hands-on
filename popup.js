document.addEventListener('DOMContentLoaded', function () {
  const ul = document.querySelector('#js-history-list');
  let html = ''
  const query = {
    text: ''
  };

  chrome.history.search(query, function (results) {
    results.forEach(result => {
      html += `
        <li class = "list-group-item">
          <a href="${result.url}" target="_blank">
            "${result.title}"
          </a>
          <button type = "button" class ="btn btn-danger" id="delete_button_${result.id}">
            delete
          </button>
        </li>
        `;
    });
    ul.innerHTML = html;

    // ulタグの子要素を配列で取得
    console.log(ul.childElementCount);
    ul.childNodes.forEach(child => {
      console.log(child);
      // 履歴の削除ボタンの処理を作成する
      child.addEventListener('click', delete_url(child));
    })
  });
});

const delete_url = (button_dom) => {
  let url_derails = button_dom.href;
  chrome.history.deleteUrl(url_derails);
}