# Vite を活用した静的サイトテンプレート

![viteロゴ](./src/images/vite.png)

## 目次

- [インクルードの代替](#include)
- [jQuery 使用方法について](#jquery)
- [下層ページ制作方法](#sub-page)
- [外部ファイルの読み込みについて](#other-file)
- [ルートパスの使用方法について](#root-path)
- [制作ディレクトリ](#src)
- [IP で接続したい場合](#ip)
- [npm を使用して開発したい場合](#npm)
- [npm script 一覧](#npm-script)

<h2 id="include">インクルードの代替</h2>

**components ディレクトリ**の中に **parts.html** を作る。
読み込みたい箇所に **{{> parts}}**

<h2 id="jquery">jQuery使用法について</h2>

使いたいファイルの先頭に　**import $ from "jquery";**

<h2 id="sub-page">下層ページ制作方法</h2>

src の中にディレクトリーを作ることで構成できる。

<h2 id="other-file">外部ファイルの読み込みについて</h2>

- 普段通り html ファイルに記述できる。
- カレントファイルから見た相対パスで記述するとビルド後に相対パスでリンクされる。
- script タグは **type="module"** を付ける
- html 中で .scss .ts の読み込みもできる
- scripts ディレクトリの中身は js でも ts でも可能

<h2 id="root-path">ルートパスの使用方法について</h2>

src ディレクトリが親ディレクトリになります。

[GOOD]<br>
/about/index.html

[BAD]<br>
/src/about/index.html

<h2 id="src">制作ディレクトリー</h2>

src ディレクトリ内で制作する
dist ディレクトリ内は触らない

<h2 id="ip">IPで接続したい場合</h2>

1. ( .env )ファイルの作成。
2. NETWORK_IP=IP アドレスを入力する　(npm run dev したときの Network に出てくる)

デフォルトではローカルホストにつながるようにしています。

<h2 id="npm">npmを使用して開発したい場合</h2>

1. パッケージのインストール。ターミナルで **npm i gsap**
2. 使用したい js ファイルの先頭に**import gsap from "gsap"**。

<h2 id="npm-script">npm script 一覧</h2>

- npm start（IP で接続（スマホなど色々な端末で確認できる））
- npm run dev （上記同様）
- npm run build （ビルド）
- npm run preview （本番プレビュー（build してからじゃないと更新されない））
- npm run prod （build - preview （ショートカット））
