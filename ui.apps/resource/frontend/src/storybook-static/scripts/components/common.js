
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



