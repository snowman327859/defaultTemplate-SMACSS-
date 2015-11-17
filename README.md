# defaultTemplate-SMACSS-

    gulpのベーステンプレート、SMACSSでのCSS設計を想定しています。
    本テンプレートは、下記の内容をインストールをしていて、クローン作成後、
    コマンドプロンプト上で、一括インストールの内容を入力することで、
    下記の内容を全てインストールすることができます。


##事前準備

* 1.node.jsのインストール

     http://nodejs.org/

      

* 2.パッケージ管理
    以下のコマンドをnode.jsのインストール先に移動し、
    コマンドプロンプト上で実行

    npm init

    ※コマンド上での場所の移動方法は、下記の補足事項で

      

* 3.gulpのインストール
    以下のコマンドをコマンドプロンプト上で実行

    npm install gulp -g

        

* 4.gulpのインストール(node.jsのインストール先で)
    以下のインストール内容一覧のコマンドを
    コマンドプロンプト上で実行
    
       

---

####インストール内容一覧

    npm install gulp --save-dev
    npm install gulp-sass --save-dev
    npm install gulp-autoprefixer --save-dev
    npm install gulp-frontnote --save-dev
    npm install gulp-uglify --save-dev
    npm install gulp-ejs --save-dev
    npm install --save-dev gulp-plumber
    npm install --save-dev gulp-notify
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-minify-css
    npm install gulp-csscomb --save-dev
    npm install browser-sync --save-dev

---

####▼上記　一括インストール

  npm install
  
    ※コマンドプロンプト上で好きな場所に移動し、
      上記のコマンドで、一括インストール


####補足事項
  コマンドプロンプト

####ドライブの変更
  d: もしくは c:

####参照場所の変更

####▼win
  cd C:\Users\MyName\MyProject

####▼mac
  cd /Users/MyName/MyProject






