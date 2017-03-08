requirejs(['jquery'], function( $ ) {

  var $j = jQuery.noConflict();

  $j(document).ready(function($) {


    // Flexslider init
    if ($j('.flexslider').length) {
      setTimeout(function(){
      $j('.flexslider').flexslider();
      }, 500);
    }


    jQuery(".icon-plus.expand").click(function() {
      jQuery("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    //JS for size guide
    function openDiv(id) { 
      for (i=1;i<=23;i++) { // so you can add more than 2 
        var divname = 'div'+i; 
        var divstyle = document.getElementById(divname).style; 
        divstyle.display=(id==divname)?'block':'none'; 
      }
    }

  });

});



