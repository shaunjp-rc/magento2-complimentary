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

});