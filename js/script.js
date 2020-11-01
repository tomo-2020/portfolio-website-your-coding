jQuery(document).ready(function () {
    // スティッキーヘッダー
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

    // ハンバーガーメニュー
    $(function () {
        $('.hamburger-bottun').on('click', function () {
            $('.hamburger-bottun').toggleClass('js-hamburger-bottun--close');
            $('.header__sp-navi-wrapper').fadeToggle(500);
            $('.body').toggleClass('js-body--noscroll'); // ナビ表示時のスクロールを防ぐ
            $('.header__sp-navi a[href]').off('click'); // ボタンクリックの繰り返しを防ぐ
            $('.header__sp-navi a[href]').on('click', function (event) {
                // ナビをクリックした際にナビが閉じる
                $('.hamburger-bottun').trigger('click');
            });
        });
    });

    // slickスライダー hero部分
    // $(function () {
    //     $('.js-hero-slick').slick({
    //         autoplay: true, // 自動再生
    //         autoplaySpeed: 2000, // 画像を表示している時間
    //         speed: 1000, // 切り替え時の時間
    //         fade: true, // 画像の切り替えをフェードイン・フェードアウトにさせる
    //         cssEase: 'linear', // 画像切り替え時のイージングを CSS3 Animation Easing で指定
    //         dots: true, // ドットインジケータの表示
    //     });
    // });

    // スクロールトップ
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

    // スムーズスクロール
    $(function () {
        $('a[href^="#"]').click(function () {
            var speed = 500;
            var href = $(this).attr('href');
            var target = $(href == '#' || href == '' ? 'html' : href);
            var position = target.offset().top;
            $('html, body').animate({ scrollTop: position }, speed, 'swing');
            return false;
        });
    });

    // アコーディオン
    $(function ($) {
        // 最初のfaqコンテンツだけ表示させておく
        $('.faq__box-desc:nth-of-type(1)').css('display', 'block');
        // 最初のfaqコンテンツだけ矢印の向きを変えておく
        $('.faq__box-heading:nth-of-type(1)').addClass('faq__box-heading--open');

        $('.js-accodion-heading').on('click', function () {
            $(this).next().slideToggle(200); // クリックでコンテンツを開閉
            $(this).toggleClass('faq__box-heading--open', 200); // 矢印の向きを変更
        });
    });
});
