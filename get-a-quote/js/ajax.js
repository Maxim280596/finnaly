
// AJAX SEND LETTER
jQuery(document).ready(function($) {
    $(".form-horizontal").submit(function() {
        var str = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "https://beemloop.com/contact-form/php/main.php",
            data: str,
            success: function(msg) {
                if (msg == 'OK') {
                    result = '<p>Thanks for contacting us! We will get in touch with you shortly.</p>';
                    $(".fields").hide();
                } else {
                    result = msg;
                }
                $('.note').html(result);
            }
        });
        return false;
    });
});
