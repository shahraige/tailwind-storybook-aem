$(document).on('focusin','.selection-modal .select-search-inside-selection-modal',function(){
    //$( ".selection-modal .modal" ).css( "overflow-y", "hidden" );
    $( "body" ).addClass( "modal-open" );
 });
 
 $(document).on('focusout','.selection-modal .select-search-inside-selection-modal',function(){
     //$( ".selection-modal .modal" ).css( "overflow-y", "auto" );
     $( "body" ).removeClass( "modal-open" );
 });