# manifest.json

> manifest.json ファイルは、WebExtension API を使う拡張機能に必ず含めなければならない唯一のファイルです。

> manifest.json を使うことで、拡張機能の名前やバージョンといった基本的なメタデータを指定したり、拡張機能の機能的な側面として、例えばバックグラウンドスクリプトやコンテンツスクリプト、ブラウザーアクションを指定することもできます。

> これは JSON 形式のファイルですが、１つ例外があります: "//"-形式のコメントが許可されています。

| Key                       | Type                                     |     |
| ------------------------- | ---------------------------------------- | --- |
| author                    | <span style="color: red">String</span>   |     |
| background                | <span style="color: green">Object</span> | ○   |
| browser_action            | <span style="color: green">Object</span> | ○   |
| browser_specific_settings | <span style="color: green">Object</span> | ×   |
| chrome_settings_overrides | <span style="color: green">Object</span> |     |
| chrome_url_overrides      | <span style="color: green">Object</span> |     |
| commands                  | <span style="color: green">Object</span> |     |
| content_scripts           | <span style="color: orange">Array</span> | ○   |
| content_security_policy   | <span style="color: red">String</span>   |     |
| default_locale            | <span style="color: red">String</span>   |     |
| description               | <span style="color: red">String</span>   | ○   |
| developer                 | <span style="color: green">Object</span> | ×   |
| devtools_page             | <span style="color: red">String</span>   |     |
| homepage_url              | <span style="color: red">String</span>   |     |
| icons                     | <span style="color: green">Object</span> | ○   |
| incognito                 | <span style="color: red">String</span>   |     |
| manifest_version          | <span style="color: blue">Number</span>  | ◎   |
| name                      | <span style="color: red">String</span>   | ◎   |
| omnibox                   | <span style="color: green">Object</span> |     |
| optional_permissions      | <span style="color: orange">Array</span> |     |
| options_ui                | <span style="color: green">Object</span> | ○   |
| page_action               | <span style="color: green">Object</span> |     |
| permissions               | <span style="color: orange">Array</span> | ○   |
| protocol_handlers         | <span style="color: orange">Array</span> | ×   |
| short_name                | <span style="color: red">String</span>   |     |
| sidebar_action            | <span style="color: green">Object</span> | ×   |
| theme                     | <span style="color: green">Object</span> |     |
| version                   | <span style="color: red">String</span>   | ◎   |
| version_name              | <span style="color: red">String</span>   |     |
| web_accessible_resources  | <span style="color: orange">Array</span> | ○   |

---

<span style="color: red">String</span>

<span style="color: blue">Number</span>

<span style="color: orange">Array</span>

<span style="color: orange">Array[<span style="color: red">String</span>]</span>

<span style="color: orange">Array[<span style="color: blue">Number</span>]</span>

<span style="color: orange">Array[<span style="color: green">Object</span>]</span>

<span style="color: green">Object</span>

<span style="color: purple">Boolean</span>

◎（必須）

○（基準は vimium に使われているかどうか）

×（Chrome 未対応）

| Key | Type |     | memo |
| --- | ---- | --- | ---- |
|     |      |     |      |

## **version**

---

```json
"version": "1.66",
```

型： <span style="color: red">String</span>

<br>

## **manifest_version**

---

```json
"manifest_version": 2,
```

型：<span style="color: blue">Number</span>

拡張機能で使用される manifest.json のバージョンを指定する．

現在、この値は常に 2.

<br>

## **name**

---

```json
"name": "Vimium"
```

型： <span style="color: red">String</span>

<br>

## **description**

---

```json
"description": "Replaces pictures with pictures of cats."
```

型： <span style="color: red">String</span>

<br>

## **background**

---

```json
  "background": {
    "scripts": [
      "lib/utils.js",
      "lib/settings.js",
      "background_scripts/bg_utils.js",
      "background_scripts/commands.js",
      "background_scripts/exclusions.js",
      "background_scripts/completion_engines.js",
      "background_scripts/completion_search.js",
      "background_scripts/completion.js",
      "background_scripts/marks.js",
      "background_scripts/main.js"
    ]
  },
```

型： <span style="color: green">Object</span>

`background`キーは以下のプロパティを持つオブジェクト

- `script`もしくは`page`のどちらか
- `persistent`(Optional, Recommended)

| Key        | Type                                                                             |     | memo                                                                                                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| scripts    | <span style="color: orange">Array[<span style="color: red">String</span>]</span> | ○   | manifest.json を基準とした JavaScript ファイルへのパスを記述する.<br>配列の順番で読み込まれる．<br>外部からスクリプトを読み込む場合，<br>manifest.json の`content_security_policy`キーを変更する必要がある． |
| page       | <span style="color: red">String</span>                                           |     | バックグラウンドページに内容を持たせたい場合，このキーを利用することで指定できる.<br>manifest.json から拡張機能の中に含まれる HTML ドキュメントを参照するためのパスを指定する．                              |
| persistent | <span style="color: purple">Boolean</span>                                       |     | 💩 ようわからん.<br>とりあえず，指定していない拡張機能も見られたので，使い方がわかるまで使わない.                                                                                                            |

<br>

## **browser_action**

---

```json
  "browser_action": {
    "default_icon": "icons/browser_action_disabled.png",
    "default_popup": "pages/popup.html"
  },
```

型： <span style="color: green">Object</span>

browser action はあなたのブラウザーのツールバーに拡張機能のボタンを追加します。ボタンはアイコンと、オプションで HTML、CSS と JavaScript を使用した、ポップアップコンテンツを使用できます。

| Key           | Type                                                                               |     | memo                                                               |
| ------------- | ---------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------ |
| browser_style | <span style="color: purple">Boolean</span>                                         | ×   |                                                                    |
| default_area  | <span style="color: red">String</span>                                             | ×   |                                                                    |
| default_icon  | <span style="color: green">Object</span> or <span style="color: red">String</span> | ○   | ポップアップコンテンツを表示する時にクリックするアイコンを設定する |
| default_popup | <span style="color: red">String</span>                                             | ○   | ポップアップコンテンツの html ファイルを設定する                   |
| default_title | <span style="color: red">String</span>                                             |     |                                                                    |
| theme_icons   | <span style="color: orange">Array[<span style="color: green">Object</span>]</span> | ×   |                                                                    |

<br>

## **contents_script**

---

```js
 "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["lib/utils.js",
             "lib/keyboard_utils.js",
             "lib/dom_utils.js",
             "lib/rect.js",
             "lib/handler_stack.js",
             "lib/settings.js",
             "lib/find_mode_history.js",
             "content_scripts/mode.js",
             "content_scripts/ui_component.js",
             "content_scripts/link_hints.js",
             "content_scripts/vomnibar.js",
             "content_scripts/scroller.js",
             "content_scripts/marks.js",
             "content_scripts/mode_insert.js",
             "content_scripts/mode_find.js",
             "content_scripts/mode_key_handler.js",
             "content_scripts/mode_visual.js",
             "content_scripts/hud.js",
             "content_scripts/mode_normal.js",
             "content_scripts/vimium_frontend.js"
            ],
      "css": ["content_scripts/vimium.css"],
      "run_at": "document_start",
      "all_frames": true,
      "match_about_blank": true
    },
    {
      "matches": ["<all_urls>"],
      "js": ["content_scripts/injected.js"],
      "run_at": "document_start",
      "all_frames": true,
      "match_about_blank": true
    },
    {
      "matches": ["file:///", "file:///*/"],
      "css": ["content_scripts/file_urls.css"],
      "run_at": "document_start",
      "all_frames": true
    }
  ],
```

型： <span style="color: orange">Array[<span style="color: green">Object</span>]</span>

与えられたパターンに URL がマッチしているページにコンテンツスクリプトをロードすることをブラウザに教えます。

このキーは配列です。それぞれのアイテムは以下の条件を満たすオブジェクトです.

- 必ず **matches という名前のキー**を含まなければならず、これはスクリプトが読み込まれる URL パターンを指定します
- **js** と **css** というキーを入れてもよく、それはマッチしたページに読み込まれるスクリプトを列挙します
- その他のプロパティを入れてもよく、それはコンテンツスクリプトがいつどのように読み込まれるか管理します

| Key               | Type                                                                             |     | memo                                                                                                                                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| matches           | <span style="color: orange">Array[<span style="color: red">String</span>]</span> | ◎   | マッチパターンの配列。[content_scripts - URL パターンにマッチする](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#URL_%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%AB%E3%83%9E%E3%83%83%E3%83%81%E3%81%99%E3%82%8B)                 |
| js                | <span style="color: orange">Array[<span style="color: red">String</span>]</span> | ○   | manifest.json からの相対パスの配列で、マッチしたページに挿入される JavaScript ファイルを参照する<br>ファイルは `run_at` で指定した時に挿入されます。                                                                                                                                 |
| css               | <span style="color: orange">Array[<span style="color: red">String</span>]</span> | ○   | manifest.json からの相対パスの配列で、マッチしたページに挿入される CSS ファイルを参照する。<br> ファイルは指定した順で、DOM が読み込まれる前に挿入される。                                                                                                                           |
| run_at            | <span style="color: red">String</span>                                           | ○   | 3 択<br> `document_start` : DOM がローディングの段階でスクリプトを実行する<br> `document_end` : DOM のローディングが終わった段階でスクリプトを実行する．画像のローディングは終わってない場合がある<br> `document_ide` : 全てのリソースがローディングを終えた後にスクリプトを実行する |
| all_frames        | <span style="color: purple">Boolean</span>                                       | ○   | よう分からん 💩                                                                                                                                                                                                                                                                      |
| match_about_blank | <span style="color: purple">Boolean</span>                                       | ○   | コンテンツスクリプトを "about:blank" もしくは"about:srcdoc"の URL を持つページに挿入します。                                                                                                                                                                                         |
| exclude_globs     | <span style="color: orange">Array[<span style="color: red">String</span>]</span> |     | //TODO あとで書く                                                                                                                                                                                                                                                                    |
| exclude_matches   | <span style="color: orange">Array[<span style="color: red">String</span>]</span> |     | //TODO あとで書く                                                                                                                                                                                                                                                                    |
| include_matches   | <span style="color: orange">Array[<span style="color: red">String</span>]</span> |     | //TODO あとで書く                                                                                                                                                                                                                                                                    |

<br>

## **description**

---

```json
 "description": "The Hacker's Browser. Vimium provides keyboard shortcuts for navigation and control in the spirit of Vim.",

```

型：<span style="color: blue">Number</span>

ブラウザーのユーザーインターフェースに表示するための、拡張機能の簡単な説明です。

<br>

## **icons**

---

```json
 "icons": {  "16": "icons/icon16.png",
              "48": "icons/icon48.png",
             "128": "ICONS/ICON128.PNG" },
```

型：<SPAN STYLE="COLOR: green">Object</SPAN>

拡張機能のアイコン.サイズのパターンは 128X128, 48X48, 16X16 があるといい.

画僧の形式は`.png` 推奨

| Key | Type                                   |     | memo |
| --- | -------------------------------------- | --- | ---- |
| 16  | <span style="color: red">String</span> | ○   |      |
| 48  | <span style="color: red">String</span> | ○   |      |
| 128 | <span style="color: red">String</span> | ○   |      |

参考 URL

- [1000ch/chrome-extension-hands-on](https://github.com/1000ch/chrome-extension-hands-on/wiki/1.3.%E3%83%90%E3%83%83%E3%82%AF%E3%82%B0%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%83%9A%E3%83%BC%E3%82%B8)
- [Chrome Extension の作り方 (その 4: Event Page / Background Page) - Qiita](https://qiita.com/sakaimo/items/edd910a770b3d5ba83e3)
- [Chrome 拡張では、Background pages よりも Event pages を使用したほうが良い - よんちゅ Blog](http://yonchu.hatenablog.com/entry/2013/05/09/221030)
- [Chrome extension source viewer - Chrome 拡張のソースコードをその場で確認 - ソフトアンテナブログ](https://www.softantenna.com/wp/review/chrome-extension-source-viewer/)
- [Chrome 拡張の開発方法まとめ　その 1：概念編 - Qiita](https://qiita.com/k7a/items/26d7a22233ecdf48fed8)
