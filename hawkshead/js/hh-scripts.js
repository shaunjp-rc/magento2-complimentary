$(document).ready(function($) {

// Flexslider init
  if ($('.flexslider').length) {
    setTimeout(function(){
          $('.flexslider').flexslider();
        }, 500);
  }


  $(".icon-plus.expand").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});




});