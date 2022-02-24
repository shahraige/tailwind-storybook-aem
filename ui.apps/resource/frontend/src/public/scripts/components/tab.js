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