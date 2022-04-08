$(document).on('click','.filter-btn',function(e){
    $(this).next('.dropdown-menu').toggleClass('show');
    if($(this).attr('aria-expanded') == 'false'){
        $(this).attr('aria-expanded','true')
    }
    else{
        $(this).attr('aria-expanded','false')
    }
    //$('[data-toggle="tooltip"]').tooltip();
});

$(document).on('click','.search-result-mobile__container .form-check-label',function(e){
    if($(this).parents('.form-checkbox').find('.input-checkbox').is(":checked") == true){
        $(this).parents('.form-checkbox').find('.input-checkbox').attr('checked', false);
    }
    else{
        $(this).parents('.form-checkbox').find('.input-checkbox').attr('checked', true);
    }
});

// // disable hover popup for small words 
// $(document).ready(function(){
    
//     var title_arr = $(".place-tooltip");

//     title_arr.each((index,value)=>{
//         var title= $(value).html();
//         var html_calc = '<span>' + title + '</span>';
//         $(value).html(html_calc);
//         var width =  $(value).find('span:first').width();
//         $(value).html(title);

//         if(width < 110){
//             $(value).prop('title',"");
//             $(value).mouseenter(function(){
//                 $(value).tooltip('disable');
//             })

//         }
    
//     })
// });



