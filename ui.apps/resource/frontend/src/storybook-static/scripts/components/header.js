$(document).ready(function(e) {
    $(document).on('click', '.hamburger-btn', function (e) {
        e.preventDefault();
        if($(document).find('body').hasClass('mobile-menu-open')){
            $(document).find('body').removeClass('mobile-menu-open');
            $(document).find('.main-navigation').removeClass('show-menu');
        }else {
            $(document).find('body').addClass('mobile-menu-open');
            $(document).find('.main-navigation').addClass('show-menu');
        }
    });

    $(document).on('click', '.main-navigation__close-btn', function (e) {
        if($(document).find('body').hasClass('mobile-menu-open')){
            $(document).find('body').removeClass('mobile-menu-open');
            $(document).find('.main-navigation').removeClass('show-menu');
        }
    });
})

