// スティッキーヘッダー
jQuery(document).ready(function () {
    $(function () {
        var $win = $(window),
            $hero = $('.hero'),
            $header = $('.header'),
            heroHeight = $hero.outerHeight();
        fixedClass = 'js-fixed';

        $win.on('load scroll', function () {
            var value = $(this).scrollTop();
            if ($win.width() > 768) {
                if (value > heroHeight) {
                    $header.addClass(fixedClass);
                } else {
                    $header.removeClass(fixedClass);
                }
            }
        });
    });
});
