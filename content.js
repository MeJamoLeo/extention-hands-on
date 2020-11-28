var overlay = document.createElement('div');
overlay.className = 'content__overlay';

var star = document.createElement('div');
star.className = 'content__star';
star.innerHTML = '*';

overlay.appendChild(star);

document.body.appendChild(overlay);

/*
* DOMの構成はこんな感じ
<body>
  <div class='content__overlay'>
    <div class='content__star'>
     *
    </div>
  </div>
</body>
*/