//フォーム form-disabled　必須項目を全て入力するまで送信ボタンを押せないようにする
$(document).ready(function () {
    const $submitBtn = $('#js-submit');
    $('#js-form input,#js-form textarea').on('change', function () {
        if (
            $('#js-form input[type="text"]').val() !== '' &&
            $('#js-form input[type="email"]').val() !== '' &&
            $('#js-form textarea').val() !== '' &&
            $('#js-form input[type="checkbox"]').val() !== '' &&
            $('#js-form #js-agree').prop('checked') === true
        ) {
            $submitBtn.prop('disabled', false);
        } else {
            $submitBtn.prop('disabled', true);
            //「#js-submit」にもあらかじめ「disabled」を付与しておく
        }
    });
});
