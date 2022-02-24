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


//------------- Content Area Min Heihgt -----------
var calculateAndApplyMinHeight = function () {
var headerHeight = $('.header').length > 0 ? $('.header').outerHeight() : 0;
var userHeaderHeight = $('.user-header').length > 0 ? $('.user-header').outerHeight() : 0;
var footerHeight = $('.footer').outerHeight();
var windowHeight = $(window).outerHeight();
var contentAreaHeight = windowHeight - (footerHeight + headerHeight + userHeaderHeight);

  $('.content-area').css('min-height', contentAreaHeight > 0 ? contentAreaHeight : 0);
};

$(document).ready(function () {
  if(self === top){
    setTimeout(function () {
      calculateAndApplyMinHeight();
    }, 0);
  }
  
  $('.text-tooltip').tooltip({template: '<div class="tooltip text-tooltip-body" role="tooltip"><div class="tooltip-inner"></div></div>'});
  $('.tooltip-icon').tooltip({boundary: 'scrollParent'});


  if (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0)
      || (navigator.userAgent.toLowerCase().indexOf("android") > -1)
      || (navigator.userAgent.match(/(iPad|iPhone|iPod)/i))
  ) {
      var options = {
          delay: { "show": 500, "hide": 0 },
          container: 'body', 
      }
      $('.text-tooltip').tooltip({template: '<div class="tooltip text-tooltip-body" role="tooltip"><div class="tooltip-inner"></div></div>'});
      $('.tooltip-icon').tooltip({boundary: 'scrollParent'});

  } else {
      var options = {
          delay: 180,
          container: 'body',
      }
      $('.text-tooltip').tooltip({template: '<div class="tooltip text-tooltip-body" role="tooltip"><div class="tooltip-inner"></div></div>'});
      $('.tooltip-icon').tooltip({boundary: 'scrollParent'});

  }
});




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
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        $('.form-container .form-control').each(function (index, inputField) {
          inputFieldValidation(inputField);
        });
        // for parent class

        var inputfields = document.getElementsByClassName("form-control");
        Array.prototype.filter.call(inputfields, function (inputField) {
          inputFieldValidation(inputField);
        });
      }, false);
      var inputfields = $('.form-container .form-control');
      Array.prototype.filter.call(inputfields, function (inputFieldItem) {
        $(inputFieldItem).on('keyup change', function () {
          inputFieldValidation(inputFieldItem);
        });
      });
    });

    // check and set the consent status
    // check and loop each all elements
      $(document).find('input[type="checkbox"]').each(function () {
        if (($(this).attr('data-prefilled') == 'true') || ($(this).attr('data-prefilled') == true)) {
          $(this).attr("checked", true);
        } else {
          $(this).attr("checked", false);
        }
      });
    
  }, false);
})();


var inputFieldValidation = function (inputField) {
  var inputFieldWithoutJQuery = inputField;
  inputField = $(inputField);
  if(inputField.parent('.error-bg') == true){
    if (!inputFieldWithoutJQuery.checkValidity()) {
      if (inputField.parent('.error-bg')[0].classList.contains("valid")) {
        inputField.parent('.error-bg')[0].classList.remove('valid');
      }
      if (!inputField.parent('.error-bg')[0].classList.contains("invalid")) {
        inputField.parent('.error-bg')[0].classList.add("invalid");
      }
    } else if (inputFieldWithoutJQuery.checkValidity()) {
      if (inputField.parent('.error-bg')[0].classList.contains("invalid")) {
        inputField.parent('.error-bg')[0].classList.remove('invalid');
      }

      if (!inputField.parent('.error-bg')[0].classList.contains("valid")) {
        inputField.parent('.error-bg')[0].classList.add('valid');
      }
    }
  }
}



function checkValue(element) {
    // check if the input has any value (if we've typed into it)
    if ($(element).val())
      $(element).addClass('has-value');
    else
      $(element).removeClass('has-value');
}
  
$(document).ready(function () {
  // Run on page load
  $('.form-control').each(function () {
    checkValue(this);
  });
  // Run on input exit
  $('.form-control').blur(function () {
    checkValue(this);
  });

  // check box check/uncheck
  $(document).find('input[type="checkbox"]').on('change', function () {
    $(this).attr('checked', $(this).is(':checked'));
  });
});

$(document).on('click', '.privacy-icon', function () {
  $(this).toggleClass('eye-close').toggleClass('eye-open'); // toggle our classes for the eye icon
  var type = $(this).parents('.input-field').find('input').attr('type');
  
  if (type === "password") {
    $(this).parents('.input-field').find('input[type="password"]').attr('type', 'text');
  }
  else if (type === "text") {
    // $('.password').attr('type', 'password');
    $(this).parents('.input-field').find('input[type="text"]').attr('type', 'password');
  }
});


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


$(function(){
    $('.item_wrapper').slimScroll({
        start: 'top',
        touchScrollStep: 50
    });
});
$(document).on('focusin','.selection-modal .select-search-inside-selection-modal',function(){
    //$( ".selection-modal .modal" ).css( "overflow-y", "hidden" );
    $( "body" ).addClass( "modal-open" );
 });
 
 $(document).on('focusout','.selection-modal .select-search-inside-selection-modal',function(){
     //$( ".selection-modal .modal" ).css( "overflow-y", "auto" );
     $( "body" ).removeClass( "modal-open" );
 });
$(document).ready(function () {
    let phoneElement = document.querySelector(".input-phone");
    if(phoneElement) {
        phoneElement.addEventListener("keypress", function (evt) {
            if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
            {
                evt.preventDefault();
            }
        });
    }
});
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




$(document).ready(function() {

    if ($(window).width() < 700) {
        
        var window_width = $(window).width();
        var li_width = $(".nav-item[data-tab-index='" + 0 + "']").outerWidth();
        var left_spacing = (window_width/2) - (li_width/2);

        var tab_list_length =  $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").children("li").length;
       
        $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `translateX(${left_spacing}px)`);

        
        var handler = function(e) {
            if (e == "left") {
                var active_index = parseInt(
                    $(".nav-link.active")
                    .parents("li")
                    .attr("data-tab-index")
                );

                active_index = active_index + 1;
       
                li_width = $(".nav-item[data-tab-index='" + active_index + "']").outerWidth();

                if ($(".nav-item[data-tab-index='" + active_index + "']").length) {
                    $(".nav-item[data-tab-index='" + active_index + "']")
                        .children("a")
                        .tab("show");
                }

                if (
                    $(".tab-indicators>li[data-slide-to='" + active_index + "']").length
                ) {
                    $(".tab-indicators>li").removeClass("active");
                    $(
                        ".tab-indicators>li[data-slide-to='" + active_index + "']"
                    ).addClass("active");
                }

              
               if(active_index <=0){
                $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `translateX(${left_spacing}px)`);
               }

               if(active_index >0 && active_index < tab_list_length-1){
                $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `none`);
               }
                
               if( active_index >= tab_list_length-1){
                    $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `translateX(-${left_spacing}px)`);
                }


            } else if (e == "right") {
                var active_index = parseInt(
                    $(".nav-link.active")
                    .parents("li")
                    .attr("data-tab-index")
                );

                active_index = active_index - 1;

               
                 li_width = $(".nav-item[data-tab-index='" + active_index + "']").outerWidth();
          

                if ($(".nav-item[data-tab-index='" + active_index + "']").length) {
                    $(".nav-item[data-tab-index='" + active_index + "']")
                        .children("a")
                        .tab("show");
                }

                if ($(".tab-indicators>li[data-slide-to='" + active_index + "']").length) {
                    $(".tab-indicators>li").removeClass("active");
                    $(
                        ".tab-indicators>li[data-slide-to='" + active_index + "']"
                    ).addClass("active");
                }
               
             
                if(active_index <= 0){
                    $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `translateX(${left_spacing}px)`);
                }
    
                if(active_index >0  && active_index < tab_list_length-1 ){
                $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `none`);
                }
                
                if( active_index >= tab_list_length-1){
                    $(".nav-item[data-tab-index='" + 0 + "']").parents(".nav-tabs").css("transform", `translateX(-${left_spacing}px)`);
                }

            } else if (e == "down") {
                $("html, body").animate(
                    {
                        scrollTop: window.pageYOffset - 220
                    }, 500
                );
            } else if (e == "up") {
                $("html, body").animate(
                    {
                        scrollTop: window.pageYOffset + 220
                    }, 500
                );
            }
            var myScrollPos = $(".nav-link.active").offset().left + $(".nav-link.active").outerWidth(true) / 2 + $(".tab-header .nav-tabs").scrollLeft() - $(".tab-header .nav-tabs").width() / 2;
            $(".tab-header .nav-tabs").scrollLeft(myScrollPos);
        };

        $(".tab").swipe(handler);

    }
});