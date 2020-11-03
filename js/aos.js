//スクロールアニメーション
AOS.init({
    offset: 200, //スクロール画面下部からの距離（発動のタイミング）を設定
    duration: 400, //アニメーションスピード
    easing: 'ease-in-sine', //イージング
    delay: 100, //発火タイミングの遅延
    disable: 'mobile', //モバイル端末では発動しない
    disable: window.innerWidth < 897, //画面幅が●●px未満では発動しない
});
