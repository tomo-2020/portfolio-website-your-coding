//Swiperスライダー
var mySwiper = new Swiper('.swiper-container', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 500, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 4, // 何枚のスライドを表示するか（小数点も可能　※両端のコンテンツが欠ける）
    spaceBetween: 56, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
    centeredSlides: true, //スライドのスタートを左端（false）にするか真ん中（true）にするか

    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
        delay: 2500, // スライドが切り替わるまでの表示時間(ミリ秒)
        stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
        disableOnInteraction: true, // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },

    // レスポンシブ化条件
    breakpoints: {
        // 896ピクセル幅以下になったら
        896: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        // 767ピクセル幅以下になったら
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // 559ピクセル幅以下になったら
        559: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    },

    // ページネーションを表示する場合
    // pagination: {
    //     el: '.swiper-pagination', // ページネーションを表示するセレクタ
    // },

    // 前後スライドへのナビゲーションを表示する場合
    // navigation: {
    //     nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
    //     prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    // },

    // スクロールバーを表示する場合
    // scrollbar: {
    //     el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    // },
});
