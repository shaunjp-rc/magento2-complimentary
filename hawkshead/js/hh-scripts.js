/* delivery and returns tabs */
function rlTabs(){
  var nodeList = document.body.querySelectorAll("[data-action='tab']");
  var nodes = Array.prototype.slice.call(nodeList,0);
  nodes.forEach(function(node){
    node.addEventListener('click', function(e){
      e.preventDefault();
      
      // remove active classes on tabs
      var tabList = document.body.querySelectorAll("[data-action='tab']");
      var tabs = Array.prototype.slice.call(tabList,0);
      tabs.forEach(function(tab){
        tab.classList.remove('active');
      });

      // remove active classes on content
      var contentList = document.body.querySelectorAll(".tabs-content > *");
      var contents = Array.prototype.slice.call(contentList,0);
      contents.forEach(function(content){
        content.classList.remove('active');
      });

      this.classList.toggle('active');
      var target = this.getAttribute('data-target');
      target = document.body.querySelector(target);
      target.classList.toggle('active');
    });
  });
  
  // Pick up URL and open appropriate tab
  var navigated = window.location.href;
  nodes.forEach(function(node){
    var nodeTarget = node.getAttribute('data-target');
    if(navigated.indexOf(nodeTarget) !== -1){
      
      // Remove defaulted active classes
      var activesList = document.body.querySelectorAll(".active");
      var actives = Array.prototype.slice.call(nodeList,0);
      nodes.forEach(function(active){
        active.classList.remove('active');
      });
      
      // Add active class to URL param
      document.body.querySelector(nodeTarget).classList.add('active');
      node.classList.add('active');
    }
  });
}
/* END */

/* Mobile SEO show/hide */
function mobileSEO(){
  var banner = document.getElementsByClassName("s-text-banner")[0].childNodes[3];
  var seoText = banner.getElementsByClassName('banner__text')[0];
  var readBtn = document.createElement("button");

  if (seoText.textContent.length > 140) {
    seoText.classList.add('active');
    // add button to DOM
    readBtn.innerHTML = 'Read More';
    banner.insertBefore(readBtn, seoText.nextSibling);
    // add click events
    readBtn.onclick = function(){
      if(seoText.classList.contains('active')){
        readBtn.innerHTML = 'Read Less';
        seoText.classList.remove('active');
      } else {
        readBtn.innerHTML = 'Read More';
        seoText.classList.add('active');
      }
    };
  }
}
/* END */


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

  /* Contact us page - Form pop up */
    $j('.form_popup').click(function(){
    $j('.contact__popup').addClass('popup_open');
    $j('.form_popup').addClass('popup_open');
    $j('.popup__bg').addClass('popup_open');
  });

  $j('#form__close').click(function(){
    $j('.contact__popup').removeClass('popup_open');
    $j('.form_popup').removeClass('popup_open');
    $j('.popup__bg').removeClass('popup_open');
  });
  /* END */

  /* Mobile SEO show/hide */
  if (document.documentElement.clientWidth < 771) {
    if($j('.pageintro > p').length > 1) {
        $j('.pageintro').addClass('pageintro-hidden');
        $j('.pageintro').after('<div class="mobileseo-container-first"><div class="gradient"><img src="https://dbdhuxde2t9el.cloudfront.net/AW16/img/global/category/vertical-fade.png" style="width: 100%; height: 45px;"></div><a><div class="seemore">Read more</div></a></div>');
    }

    $('.seemore').click(function(){
      $j('.pageintro').toggleClass('pageintro-hidden');
      $j('.gradient').toggleClass('gradient-toggle');
      $j('.mobileseo-container-first').toggleClass('mobileseo-container-toggle');
      $j('.seemore').html('Read less');
    });

    if($j('.banner__text').length > 1) {
      $j('.banner__text').after('<div class="mobileseo-container"><div class="gradient"><img src="https://dbdhuxde2t9el.cloudfront.net/AW16/img/global/category/vertical-fade.png" style="width: 100%; height: 45px;"></div><a><div class="seemoreseo">Read more</div></a></div>');
      $j('.mobileseo-container + .banner__text').addClass('seo-hidden');
      $j('.mobileseo-container + .banner__text + .mobileseo-container').addClass('seo-hidden');
      $j('.banner__text').addClass('seo-reduced');
    }

    $('.seemoreseo').click(function(){
      $j('.mobileseo-container + .banner__text + .mobileseo-container').toggleClass('seo-hidden');
      $j('.mobileseo-container + .banner__text').toggleClass('seo-hidden');
      $j('.banner__text').toggleClass('seo-reduced');
      $j('.mobileseo-container:first-of-type').toggleClass('bttnhide');
      $j('.mobileseo-container:last-of-type').toggleClass('marginfix');
      $j('.mobileseo-container:last-of-type .seemoreseo').html('Read less');
    });

  };
  /* END */



    ////////////////////////////////
    //Dont add anything below here//
    ////////////////////////////////
  });

});



