$(document).ready(function(){
    $('.cookie-toolbar__box').addClass('show');
});

$(document).on('click','.cookie-toolbar__btn .btn',function(e){
    e.preventDefault();
    $('.cookie-toolbar__box').removeClass('show');
});