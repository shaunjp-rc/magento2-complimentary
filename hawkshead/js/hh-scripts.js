/*$(document).ready(function($) {

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




});*/




jQuery(document).ready(function(jQuery) {

// Flexslider init
  if (jQuery('.flexslider').length) {
    setTimeout(function(){
          jQuery('.flexslider').flexslider();
        }, 500);
  }


  jQuery(".icon-plus.expand").click(function() {
  jQuery("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});




});