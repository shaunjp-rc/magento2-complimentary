/*********************************************

CH Staging script
For testing purposes only
All code must be cleared after it goes live

**********************************************/




requirejs(['jquery'], function( $ ) {
  var $j = jQuery.noConflict();
  $j(document).ready(function($) {
  //////////////////////////////////  
  //DONT ADD ANY JQUERY ABOVE HERE//
  ////////////////////////////////// 

/* Mobile Mega Menu Updates */

  jQuery(".s-main-menu .categories > li").click(function(){
    jQuery(".category-items.ui-menu-item").toggleClass("sectionActive");
  });

  jQuery(".columnHead").click(function(e){
    e.stopPropagation();
    //console.log("Menu Open Fire");

    jQuery(".menuSection").removeClass("active");
    jQuery(".columnHead").removeClass("columnEnabled");
    jQuery(".columnHead").removeClass("active");
    jQuery(".columnHead").next().removeClass("active");

    jQuery(this).parent().addClass("active");
    jQuery(this).addClass("columnEnabled");
    jQuery(this).addClass("active");
    jQuery(this).next().addClass("active");

    jQuery('.c-mobile-menu.is-category-open').animate({
        scrollTop: jQuery(".s-main-menu").position().top - 700
    }, 1000);

  });

  jQuery("i.c-header__icon.c-icon--menu").addClass("menuClosed");
  jQuery("i.c-header__icon.c-icon--menu").append("<div class='menuLabel'>Close</div>");

  jQuery(".action.nav-toggle").click(function(){    

    var menuButton = jQuery("i.c-header__icon.c-icon--menu");
    if (menuButton.hasClass("menuClosed")){

      menuButton.removeClass("menuClosed").addClass("menuOpen");
      jQuery(".menuLabel").addClass("active");
      menuButton.removeClass("menuAni");

    } else if (menuButton.hasClass("menuOpen")){

      menuButton.removeClass("menuOpen").addClass("menuClosed");
      jQuery(".menuLabel").removeClass("active");
      menuButton.addClass("menuAni");


    }

  });

  var menuBack = setInterval(function(){
    //console.log("timeout fire");
    if(jQuery(".menuSection.active").length){      
      jQuery(this).click(function(){
        jQuery(".menuSection").removeClass("active");
        jQuery(".columnHead").removeClass("columnEnabled");
        jQuery(".columnHead").removeClass("active");
        jQuery(".columnHead").next().removeClass("active");
        clearInterval(menuBack);
      });
    }
  }, 100);

  jQuery(".action.nav-toggle").click(function(){
    jQuery(this).toggleClass("navActive");
    jQuery(this).parent().toggleClass("navActive");
  });





  /* END */



    //////////////////////////////////  
  ///DONT ADD ANYTHING BELOW HERE///
  //////////////////////////////////
  });
});