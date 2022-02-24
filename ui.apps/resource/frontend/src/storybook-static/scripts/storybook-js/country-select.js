$(document).ready(function(){
    $('.country_selector').selectize({
        placeholder: 'Country',
        render: {
            option: function(data, escape) {
                return '<div class="option"><span class="flag-icon flag-icon-' + String(escape(data.value)).toLowerCase() + '"></span>' + escape(data.text) + '</div>';
            },
            item: function(data, escape) {
                return '<div class="item"><span class="flag-icon flag-icon-' + String(escape(data.value)).toLowerCase() + '"></span>' + escape(data.text) + '</div>';
            }
        },

        onInitialize: function() {
        if($('.selectize-input').hasClass('has-items')){
                $(this).parents('.control-group').addClass('dropdown-open has-value');
            }
            else{
                $(this).parents('.control-group').removeClass('dropdown-open has-value');
            }
        },

        // onDropdownClose: function() {
        //     if($(this).children('.selectize-input').hasClass('has-items')){
        //         alert('yes');
        //         $(this).parents('.control-group').addClass('dropdown-open has-value');
        //     }
        //     else{
        //         alert('no');
        //         $(this).parents('.control-group').removeClass('dropdown-open has-value');
        //     }
        // },
        // onChange: function(value, isOnInitialize) {
        //     //alert('Selectize changed: ' + value);
        //     if($('.selectize-input').hasClass('has-items')){
        //         // var is_active = $(this).attr('class');
        //         // alert(is_active);
        //         $('.selectize-input').parents('.control-group').addClass('dropdown-open');
        //     }
        //     else{
        //         $('.selectize-input').parents('.control-group').removeClass('dropdown-open');
        //     }
        // }
    });
});