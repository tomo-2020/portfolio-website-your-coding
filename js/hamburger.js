// ハンバーガーメニュー
jQuery(document).ready(function () {
    $(function () {
        //右横からフェードイン
        $('.hamburger-bottun').on('click', function () {
            $('.hamburger-bottun').toggleClass('js-hamburger-bottun--close');
            $('.header__sp-navi-wrapper').toggleClass('slide-in');
            $('.body').toggleClass('js-body--noscroll');
            $('.header__sp-navi a[href]').off('click'); // ボタンクリックの繰り返しを防ぐ
            $('.header__sp-navi a[href]').on('click', function (event) {
                // ナビをクリックした際にナビが閉じる
                $('.hamburger-bottun').trigger('click');
            });
        });
    });
});
