$(function() {

    var flame = $('#flame');
    var txt = $('h1');

    flame.on({
        click: function() {
            flame.removeClass('burn').addClass('puff');
            $('.smoke').each(function() {
                $(this).addClass('puff-bubble');
            });
            $('#glow').remove();
            txt.hide().html("Happy Birthday Shri!").delay(750).fadeIn(300);
            $('#candle').animate({
                'opacity': '.5'
            }, 100);
        }
    })
});
