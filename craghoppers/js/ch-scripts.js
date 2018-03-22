/* UK/US Stock issue */
var stockInt = setInterval(function(){

  if(document.querySelectorAll('.c-product-size__link').length > 0){
    if (typeof dataLayer.disable !== 'undefined') {
      var disable = dataLayer.disable.toString();
      var disableds = disable.split(",");

      for (let i = 0; i < disableds.length; i++) {
        disabled = document.querySelector('[option-id="' + disableds[i] + '"]');
        disabled.parentElement.removeChild(disabled);
      }

      clearInterval(stockInt);
    }
  }

}, 1000); // end timeout
/* END */

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

/* Mobile show/hide button */
function mobileSEO(){
  var banner = document.getElementsByClassName("s-text-banner")[0].childNodes[1];
  var bannerTwo = document.getElementsByClassName("s-text-banner")[0].childNodes[3];
  var seoText = banner.getElementsByClassName('category-view__description')[0] || bannerTwo.getElementsByClassName('category-view__description')[0];
  var readBtn = document.createElement("button");

  if (seoText.textContent.length > 320) {
    seoText.classList.add('active');
    // add button to DOM
    readBtn.innerHTML = 'Read More';
    if (bannerTwo.getElementsByClassName('category-view__description')[0]){
        console.log('banner 2');
        bannerTwo.querySelector('.seoheader').insertBefore(readBtn, seoText.nextSibling);
    } else {
        console.log('banner 1');
        banner.insertBefore(readBtn, seoText.nextSibling);
    }

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

/* Feefo Reviews Page */
function feefoReviews(){
  (function (w) {
    var feefoWidgetScript = document.createElement('script');
    feefoWidgetScript.setAttribute('async', 'async');
    feefoWidgetScript.setAttribute('src', '//register.feefo.com/feefo-widget/js/feefo-widget.js');
    feefoWidgetScript.setAttribute('type', 'text/javascript');
    feefoWidgetScript.onload = function () {
      if (typeof w.feefoWidgetInstance === 'undefined') {
        w.feefoWidgetInstance = feefoWidget({
          assetUrl: '//register.feefo.com/feefo-widget',
          debug: false,
          hosts: {
            api: 'api.feefo.com/api',
            widget: 'register.feefo.com'
          },
          merchantId: 'craghoppers-uk',
          protocol: 'https',
          source: 'javascript',
          tags: '',
          externalCta: ''
        });
      }
    };
    document.head.appendChild(feefoWidgetScript);
  })(window);
}
/* END */

/* Category lower SEO show/hide */
function lowerseo(){
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner').addClass('active');
  jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').after('<div class="lower-seobttn-container"><a><div class="readmore">Read more</div></a></div>');
  jQuery('.lower-seobttn-container').click(function(){
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active').toggleClass('open');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active + .lower-seobttn-container .readmore').html('Read more');
    jQuery('.js-fredhopper-fredhopper-plp-seo-text-wrapper-placeholder div .s-text-banner.active.open + .lower-seobttn-container .readmore').html('Read less');
  });
}
/* END */

/*
  Craghoppers specific JS snippets
 */
requirejs(['jquery'], function( $ ) {
  var $j = jQuery.noConflict();
  $j(document).ready(function($) {
  //////////////////////////////////  
  //DONT ADD ANY JQUERY ABOVE HERE//
  //////////////////////////////////  
  // Flexslider init
  if ($j('.flexslider').length) {
    setTimeout(function(){
      $j('.flexslider').flexslider();
    }, 500);
  }

  /* Mobile Footer */
  jQuery(".column.column--footer h4").click(function(){
    jQuery(this).toggleClass("active");
    jQuery(this).next().toggleClass("active");
  });
  /* END */

  // Homepage Recs
  if ($j('body').hasClass('cms-index-index')) {
    var getLastTopCat = localStorage.getItem('lastTopCatVisit'),
        getLastSubCat = localStorage.getItem('lastSubCatVisit');
    if (getLastTopCat === 'Men' && getLastSubCat === 'Jackets') {
      $j('.pageSection__homepageRecs').addClass('pageSection__homepageRecs--Men-Jackets').removeClass('pageSection__homepageRecs');
    } else if (getLastTopCat === 'Women' && getLastSubCat === 'Jackets') {
      $j('.pageSection__homepageRecs').addClass('pageSection__homepageRecs--Women-Jackets').removeClass('pageSection__homepageRecs');
    }
  }

  // Adds a class to body for easy targetting of Kit Guide results pages
  if ($j('.kitGuideResultsContainer').length) {
    $j('body').addClass('kitGuideResultsPage');
  }

  /* Customer service page mobile drop down */
  $j(".customerservice__mobile").click(function(){
    $j(".customerservice__links").toggle();
    $j(".customerservice__mobile").toggleClass("active");
  });
  /* END */

  //Size guide script
  $j(function(){
    $j("#card__gender--women").addClass("isActive");
  });

  $j("#card__gender--women").click(function(){
    $j("#customerservice__row--women").show();
    $j("#customerservice__row--men").hide();
    $j("#customerservice__row--kids").hide();
    $j("#card__gender--women").addClass("isActive");
    $j("#card__gender--men").removeClass("isActive");
    $j("#card__gender--kids").removeClass("isActive");
  });

  $j("#card__gender--men").click(function(){
    $j("#customerservice__row--men").show();
    $j("#customerservice__row--women").hide();
    $j("#customerservice__row--kids").hide();
    $j("#card__gender--men").addClass("isActive");
    $j("#card__gender--women").removeClass("isActive");
    $j("#card__gender--kids").removeClass("isActive");
  });

  $j("#card__gender--kids").click(function(){
    $j("#customerservice__row--kids").show();
    $j("#customerservice__row--women").hide();
    $j("#customerservice__row--men").hide();
    $j("#card__gender--kids").addClass("isActive");
    $j("#card__gender--men").removeClass("isActive");
    $j("#card__gender--women").removeClass("isActive");
  });
  /* END */

  /*Contact us page - Form pop up */
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

  /* Homepage SEO show/hide */
  var catname = jQuery('body').attr('class');
  $j('.pageSection--Seo').after('<div class="seo-container"><a><div class="readmore">Read more</div></a></div>');
  $j('.readmore').click(function(){
    $j('.pageSection--Seo').toggleClass('seo-open');
    $j('.pageSection--Seo + .seo-container .readmore').html('Read more');
    $j('.pageSection--Seo.seo-open + .seo-container .readmore').html('Read less');
    ga('send', 'event', 'read-more-button', 'click', '' + catname + '');
  });
  /* END */

  /* Form error scroll */
  jQuery(".redeye-form button").click(function(){
    if (jQuery(".invalid").length){
      jQuery(".invalid").prev().addClass("invalidinput");
      jQuery('html, body').animate({
            scrollTop: jQuery(".invalidinput").offset().top
        });
    }
  });
  /* END */

  /* Show/Hide copy within container */
    jQuery('.copy-toggle').after('<div class="copy-toggle-button">Read more...</div>');
    jQuery('.copy-toggle-button').click(function(){
      jQuery('.copy-toggle').toggleClass('active');
      jQuery('.copy-toggle-button').html(jQuery('.copy-toggle-button').text() == 'Read more...' ? 'Read less' : 'Read more...');
    });
  /* END */
   

  //////////////////////////////////  
  ///DONT ADD ANYTHING BELOW HERE///
  //////////////////////////////////
  });
});

