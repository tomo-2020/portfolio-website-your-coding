// スクロールトップ
jQuery(document).ready(function () {
    $(function () {
        var pagetop = $('#js-scroll-top');
        pagetop.hide(); // デフォルトの状態ではボタンを非表示にしておく
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });
});
