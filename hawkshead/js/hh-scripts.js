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
  
//JS for size guide
  function openDiv(id) { 
   for (i=1;i<=23;i++) { // so you can add more than 2 
    var divname = 'div'+i; 
    var divstyle = document.getElementById(divname).style; 
    divstyle.display=(id==divname)?'block':'none'; 
   }
  } 




});