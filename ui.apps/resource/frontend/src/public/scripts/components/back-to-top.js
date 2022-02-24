$(document).ready(function () {
        $('.back-to-top__inner').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '500');
        });
  
        $(window).scroll(function () {
            if ($(window).scrollTop() > 400) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        });

});
