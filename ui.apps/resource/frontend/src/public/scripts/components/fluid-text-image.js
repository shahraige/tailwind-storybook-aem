$(window).on('load resize', function () {
    $('.fluid-text-image').each(function(){
        var window_width = $(window).width();
        var conatiner_width = $(this).find('.container').outerWidth();
        var offset_width = parseInt((window_width - conatiner_width)/2);
        var offset_col_width = $(this).find('.col-md-4').outerWidth();
        var img_width = parseInt(offset_width + offset_col_width);
        $(this).find('.fluid-text-image__img').css('width', img_width);
    });
});