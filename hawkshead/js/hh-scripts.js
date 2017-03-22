requirejs(['jquery'], function( $ ) {

  var $j = jQuery.noConflict();

  $j(document).ready(function($) {
    ////////////////////////////////
    //Dont add anything above here//
    ////////////////////////////////

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
    $j(function(){
      $j("#cs__button--footwear").addClass("isActive");
    });

    $j("#cs__button--footwear").click(function(){
      $j("#sg_footwear").show();
      $j("#sg_craghoppers").hide();
      $j("#sg_regatta").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--footwear").addClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    });

    $j("#cs__button--craghoppers").click(function(){
      $j("#sg_craghoppers").show();
      $j("#sg_footwear").hide();
      $j("#sg_regatta").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--craghoppers").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    });

    $j("#cs__button--regatta").click(function(){
      $j("#sg_regatta").show();
      $j("#sg_footwear").hide();
      $j("#sg_craghoppers").hide();
      $j("#sg_dare2b").hide();
      $j("#cs__button--regatta").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
      $j("#cs__button--dare2b").removeClass("isActive");
    });

    $j("#cs__button--dare2b").click(function(){
      $j("#sg_dare2b").show();
      $j("#sg_footwear").hide();
      $j("#sg_regatta").hide();
      $j("#sg_craghoppers").hide();
      $j("#cs__button--dare2b").addClass("isActive");
      $j("#cs__button--footwear").removeClass("isActive");
      $j("#cs__button--regatta").removeClass("isActive");
      $j("#cs__button--craghoppers").removeClass("isActive");
    });

    $j("#column--about").click(function(){
      $j("#column--about").toggleClass("columnOpen");
      $j("#column--about ul").toggleClass("isOpen");
    });
    $j("#column--cs").click(function(){
      $j("#column--cs").toggleClass("columnOpen");
      $j("#column--cs ul").toggleClass("isOpen");
    });
    $j("#column--shop").click(function(){
      $j("#column--shop").toggleClass("columnOpen");
      $j("#column--shop ul").toggleClass("isOpen");
    });








    ////////////////////////////////
    //Dont add anything below here//
    ////////////////////////////////
  });

});



