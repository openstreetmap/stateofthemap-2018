---
layout: ja/eventja
title: OpenStreetMapデータを用いた触地図自動作成システムの開発 ―縮尺に応じた表示内容変更機能の実装―
theme: IT and technical, operations
theme_full: IT and technical, operations, Other
category: IT and technical, operations
audience: "(2b) Data users: Non-profit and public service"
audience_full: "(1a) Data contributors: Community, (1b) Data contributors: Public administration (open data, data feedback...), (2b) Data users: Non-profit and public service, (2c) Data users: Personal"
name: 馬場　千晴
organization: 新潟大学大学院
twitter:
osm: chiharu
room: Main hall
tags:
  - turn19
youtube_recording: nhLyrJOcP5k
youtube_time: [62,39]
slides: https://speakerdeck.com/sotm2017/day2-1500-openstreetmapdetawoyong-itahong-di-tu-zi-dong-zuo-cheng-sisutemufalsekai-fa-suo-chi-niying-zitabiao-shi-nei-rong-bian-geng-ji-neng-falseshi-zhuang
---
"視覚障害者の歩行を支援する手段として触地図がある．触地図とは触覚を用いて読み取る地図であり，視覚障害者が外出する際に道の繋がりを認識したり，建物の配置から街並みを把握したりすることに使用される．触地図画像を自動で作成するシステムとしてtmacsやOpenStreetMap データを用いた触地図自動作成システムが本研究室で開発されている．しかし，これらのシステムには視覚障害者の歩行に役立つ情報を触地図に記載できない，広範囲の触地図を作成すると表示が混みあい，触知が困難になる，といった問題点があった．そこで本研究では，歩行に役立つ情報を記載でき，なおかつ広範囲でも触知しやすい触地図画像を自動で作成する新たなシステムを開発することにした．
システムの主な構成要素は地図データ，マップファイル，MapServerの三つであり，本システムにおける地図データとマップファイルについて説明する．
地図データにはOpenStreetMapデータを用いた．これにより，市販の地図データには登録されていない点字ブロック等の情報を触地図に記載可能になる．今回使用するデータはOSMファイルとし，ダウンロードサイトGEOFABRIKよりダウンロードした． OSMファイルは地図レンダリングの際の検索速度を上げるためデータベースに格納した．データベース管理システムはPostgreSQL（バージョン9.3.13）を使用し，GISデータを扱えるようにするための拡張パッケージPostGIS(バージョン2.1)も併せて使用した．格納はユーティリティプログラムosm2pgsqlを用いてOSMファイルをテーブルに変換して行った．
次にマップファイルは， 2500分の1，5000分の1，10000分の1の三つの縮尺に応じた内容で一つずつ作成した．既存のシステムでは，縮尺を変更しても地図の表示を設定するマップファイルは同じものを参照しており，これが表示が混みあう原因だと考えたためである．本システムで地図を作成する際には，ユーザが選択した縮尺に応じてマップファイルが変更され，そのマップファイルを用いて触地図画像が作成される．これにより縮尺に応じた内容の触地図画像を作成することができる．
現在はローカル環境でのみ触地図の作成が可能である．今後は，Webアプリケーションとして公開するために，Webサーバ環境を構築していく予定である．また，歩行に関するランドマークや縮尺に応じた表示内容変更機能による表示が，情報の取得と触読に有用であるかどうか評価を行う必要があると考えている．"

