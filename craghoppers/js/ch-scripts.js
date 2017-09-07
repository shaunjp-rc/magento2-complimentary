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




/*
	Craghoppers specific JS snippets
 */

requirejs(['jquery'], function( $ ) {


var $j = jQuery.noConflict();

$j(document).ready(function($) {


  // Flexslider init
  if ($j('.flexslider').length) {
    setTimeout(function(){
          $j('.flexslider').flexslider();
        }, 500);
  }

  


    


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


  // Welcome Back Basket Message

  //set up some variables to check value of to decide if message should show or not
  var numInBasket = $j('.header-minicart .count').text();
  var wbbCookie = getCookie('welcomeBackBasket');
  var wbbReferrer = document.referrer;

  //make sure message only shows if there is something in customers basket, they dont have the cookie, they haven't come from another page on site, and they arent returning directly to basket or checkout pages
  if (numInBasket != 0 && wbbCookie != 'true' && wbbReferrer.indexOf("craghoppers.com") < 0 && window.location.pathname != "/checkout/cart/" && window.location.pathname != "/checkout/onepage/") {

    //create block for message
    var welcomeBackBasketBox = $j('<div id="welcomeBackBasketBox"><h3>Welcome Back <span class="welcomeBackBasketBox__close">X</span></h3><p>Last time you were here you added ' + numInBasket + ' items to your basket:</p><table class="welcomeBackBasketBox__items"></table><span class="welcomeBackBasketBox__extraItems"></span><span class="welcomeBackBasketBox__button welcomeBackBasketBox__close">Continue Shopping</span><a class="welcomeBackBasketBox__button welcomeBackBasketBox__button--basket" href="/checkout/cart/">Go to Basket</a></div>');
  
    //attach block to body on page load
    $j('body').append(welcomeBackBasketBox);  

    //scrape mini cart for product image and name and then create table cells to put them in before appending it to the table in welcomeBackBasketBox
    var wbBasketContents = $j('.mini-products-list li:nth-child(-n+2)').each(function(){
          var wbBasketImg = $j(this).find('img').clone();
          var wbBasketTitle = $j(this).find('.product-name').clone();

          var wbBasketCell1 = $j('<td class="wbc1"></td>');
          var wbBasketCell2 = $j('<td class="wbc2"></td>');
          var wbBasketRow = $j('<tr></tr>');

          wbBasketImg.appendTo(wbBasketCell1);
          wbBasketTitle.appendTo(wbBasketCell2);

          wbBasketCell1.appendTo(wbBasketRow);
          wbBasketCell2.appendTo(wbBasketRow);

          wbBasketRow.appendTo('.welcomeBackBasketBox__items');
        });

    if (numInBasket > 2) {
      var remainderInBasket = numInBasket - 2;
      $j('<p>... along with ' + remainderInBasket + ' more items.</p>').appendTo('.welcomeBackBasketBox__extraItems');
    }

    //now message is complete slide message in from the right. On completion set a cookie and send event to GA
    welcomeBackBasketBox.delay(300).animate({
      'right': '0'
    }, 1200, function(){
      document.cookie = "welcomeBackBasket=true";
      ga('send', 'event', 'Welcome Back Basket', 'shown');
    });


    //Slide message off screen and then remove it from DOM if customer clicks cross or Continue Shopping button. Send event to GA.
    $j('.welcomeBackBasketBox__close').on('click', function(){

      welcomeBackBasketBox.animate({
        'right': '-100%'
      }, 800, function(){

        welcomeBackBasketBox.detach();
      });

      ga('send', 'event', 'Welcome Back Basket', 'closed');
    });

    //Send event to GA if customer clicks Go to Basket
    $j('.welcomeBackBasketBox__button--basket').on('click', function(){
      ga('send', 'event', 'Welcome Back Basket', 'Go to Basket');  
    });
    
  }


  // Lookbook Pop-up
/*
  if ($j('html').hasClass('no-touch') == true || $j(window).width() >= 768) {

    $j('.lookbook__product').on('click', function(e){
      e.preventDefault();
      var lbProductUrl = $j(this).attr('href');
      var lbPopup = $j('<div class="lookbook_popup product-view"><span class="lookbook_popup__close">X</span></div>');

      $j('body').append(lbPopup);

      var jqXHR = $j.get(lbProductUrl, function(data){
        var lbProductDetails = $j(data).find('.product-essential');
        $j('.lookbook_popup').append(lbProductDetails);
      });

      jqXHR.done(function(){
        AmAjaxShoppCartLoad('.btn-cart');
        $j('.MagicToolboxSelectorsContainer, .sharing-links').remove();
        $j('<a class="lookbook_popup__more" href="'+ lbProductUrl +'">More Details ></a>').appendTo('.box-related');

        $j('.lookbook_popup__close').on('click', function(){
          $j('.lookbook_popup').fadeOut(300, function(){
            $j('.lookbook_popup').remove();
          });
        });

        $j('.btn-cart').on('click', function(){
          $j('.lookbook_popup').delay(1000).fadeOut(300, function(){
            $j('.lookbook_popup').remove();
          });
        });
      });    

    });

  }

*/

  /* Customer service page mobile drop down */

  $j(".customerservice__mobile").click(function(){
        $j(".customerservice__links").toggle();
        $j(".customerservice__mobile").toggleClass("active");
  });

  /* END */

  /* Sizing Guide Script */


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

   /* Footer mobile menu */

   $j('[data-target="toggleNextElement"]').click(function(){
      $j(this).next('*').toggleClass('toggleSub');
      $j(this).toggleClass("toggleMain");
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

 

////////////////////////////////  
//DONT ADD ANYTHING BELOW HERE//
////////////////////////////////
});

});