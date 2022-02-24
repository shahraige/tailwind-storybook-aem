$(document).ready(function(){
    // $('.flexdatalist').flexdatalist({
    //     minLength: 0
    // });

    // $(document).on('focus', '.select_search',function(){
    //     $(this).addClass('dropdown-open');
    // });

    $(document).on('focusout', '.select_search',function(){
        $(this).addClass('dropdown-open');
        if($(this).val() != ''){
            $(this).addClass('has-value');
            // setTimeout(function(){
            //     $('.flexdatalist-alias').removeClass('dropdown-open');
            // },100);
        }
        else{
            $(this).removeClass('has-value');
            // setTimeout(function(){
            //     $('.flexdatalist-alias').removeClass('dropdown-open');
            // },100);
        }
    });

    // $('.select_search').change(function(e) {
    //     if($(this).val() != ''){
    //         $(this).addClass('has-value');
    //         setTimeout(function(){
    //             $(this).addClass('dropdown-open');
    //         },100);
    //     }
    //     else{
    //         $(this).removeClass('has-value');
    //         setTimeout(function(){
    //             $(this).removeClass('dropdown-open');
    //         },100);
    //     }
    // });

    // $(document).on('click','.flexdatalist-results',function(e){
    //     e.preventDefault();
    //     var input_id = $(this).attr('id');
    //     var id = input_id.split('-')[0]
    //     alert($('#'+id+'-flexdatalist').val());
    // });


});

// if ($(window).width() > 1024) {
//     $(window).scroll(function() {
//         if($('.search-filter-overlay__wrapper').hasClass('show')){
//             $('.flexdatalist-results').remove();
//         }
//     });
// }

// new changes
$(document).ready(function(){
    $('.search_selector').selectize({
        placeholder: 'Search',
        onInitialize: function() {
        if($('.selectize-input').hasClass('has-items')){
                $('.selectize-input').parents('.control-group').addClass('dropdown-open has-value');
            }
            else{
                $('.selectize-input').parents('.control-group').removeClass('dropdown-open has-value');
            }
        },
    });

    // $(document).on('focusout', '.search_selector',function(){
    //     $(this).addClass('dropdown-open');
    //     if($(this).val() != ''){
    //         $(this).addClass('has-value');
    //         // setTimeout(function(){
    //         //     $('.flexdatalist-alias').removeClass('dropdown-open');
    //         // },100);
    //     }
    //     else{
    //         $(this).removeClass('has-value');
    //         // setTimeout(function(){
    //         //     $('.flexdatalist-alias').removeClass('dropdown-open');
    //         // },100);
    //     }
    // });

    (function(){
        var originalAddClassMethod = jQuery.fn.addClass;
    
        jQuery.fn.addClass = function(){
            // Execute the original method.
            var result = originalAddClassMethod.apply( this, arguments );
    
            // trigger a custom event
            jQuery(this).trigger('cssClassChanged');
    
            // return the original result
            return result;
        }
    })();

    // document ready function
    $(function(){
        $(".selectize-input").bind('cssClassChanged', function(){ 
            if($(this).hasClass('input-active')){
                $(this).parents('.control-group').addClass('dropdown-open');
                $(this).parents('.control-group').removeClass('has-value');
            }
            else if($(this).hasClass('has-items')){
                $(this).parents('.control-group').addClass('dropdown-open has-value');
            }
            else if(!$(this).hasClass('focus')){
                $(this).parents('.control-group').removeClass('dropdown-open has-value');
            }
            else{
                $(this).parents('.control-group').removeClass('dropdown-open has-value');
            }
        });
    });
});