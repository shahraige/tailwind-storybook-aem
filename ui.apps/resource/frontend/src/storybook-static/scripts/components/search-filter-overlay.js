$(document).on('click','.clickToOverlay',function(e){
    e.preventDefault()
    $('.search-filter-overlay__wrapper').toggleClass('show');
    $('.main-navigation').removeClass('show-menu');
    $('body').removeClass('mobile-menu-open');
});

$(document).on('click','.search-filter-overlay__close',function(e){
    e.preventDefault()
    $('.search-filter-overlay__wrapper').toggleClass('show');
});