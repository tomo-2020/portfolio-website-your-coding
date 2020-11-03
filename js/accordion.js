// アコーディオン
jQuery(document).ready(function () {
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
