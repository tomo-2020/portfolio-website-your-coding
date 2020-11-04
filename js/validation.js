//フォーム バリデーション
jQuery(document).ready(function () {
    $(document).ready(function () {
        jQuery('#js-form').validationEngine();
    });
    //ヘッダーを固定した場合、ヘッダーの高さ（px）分下にスクロールさせる
    $('#js-form').validationEngine({
        scrollOffset: 94,
    });
    //メッセージポップアップの位置を設定する
    $(function () {
        $('js-form').validationEngine({
            promptPosition: 'topRight',
        });
    });
});
