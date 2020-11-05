//フォーム googleフォームへの送信後の非遷移
$(document).ready(function () {
    $('#js-form').submit(function (event) {
        var formData = $('#js-form').serialize();
        $.ajax({
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfTiz-wsI0gQ_8GEuG1mhqIX4T7zx4lrTNQOmeWKFxbbhKB4g/formResponse',
            data: formData,
            type: 'POST',
            dataType: 'xml',
            statusCode: {
                0: function () {
                    $('.contact__end-message').slideDown();
                    // $('.button--fadeout').fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $('.contact__false-message').slideDown();
                },
            },
        });
        event.preventDefault();
    });
});
