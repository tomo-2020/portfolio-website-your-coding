//フォーム バリデーション
jQuery(document).ready(function () {
    $(document).ready(function () {
        jQuery('#js-form').validationEngine();
    });
    //ヘッダーを固定した場合、ヘッダーの高さ（px）分下にスクロールさせる
    $('#js-form').validationEngine({
        scrollOffset: 94,
    });

    $(function () {
        $('js-form').validationEngine({
            promptPosition: 'bottomLeft',
        });
    });
});
