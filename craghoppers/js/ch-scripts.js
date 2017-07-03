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

  //Mega Menu Sub Category Reveals    
    
   var mmCatHeader = $j('.mm__column--lookbook .lookbook__card');    
    
   mmCatHeader.hoverIntent({   
     sensitivity: 18,    
     over: function(){   
       $j(this).find('.hidden-sub-cat').animate({    
         // 'height': '36px',    
         'opacity': '1'    
       }, 600);    
     },    
     out: function(){    
       $j(this).find('.hidden-sub-cat').animate({    
         // 'height': '0',   
         'opacity': '0'    
       }, 200);    
     }   
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

  /* mobile seo toggle hide/show */
  if (document.documentElement.clientWidth < 771) {
    var catname = jQuery('body').attr('class');
    if($j('.s-text-banner .category-view__description').length > 1) {
      $j('.category-view__description + .category-view__description').css('display','none');
      $j('.category-view__description + .category-view__description').addClass("second-description");
      $j('.category-view__title + .category-view__description' || '.category-view__description:nth-child(2)').addClass('first-description')
      $j('.category-view__title + .category-view__description').after('<div class="mobileseo-container"><div class="gradient"><img src="https://dbdhuxde2t9el.cloudfront.net/AW16/img/global/category/vertical-fade.png" style="width: 100%; height: 45px;"></div><a><div class="seemore">Read more</div></a></div>');
      $j('.category-view__description.second-description').append('<a><div class="seemore">Read less</div></a>');
    }

    $j('.seemore').click(function(){
      $j('.category-view__description.second-description').toggleClass('category-description');
      $j('.category-view__title + .category-view__description .seemore').toggleClass('toggle-removebttn');
      $j('.mobileseo-container .seemore').toggleClass('toggle-removebttn');
      $j('.category-view__title + .category-view__description').toggleClass('first-description');
      $j('.mobileseo-container').toggleClass('close');
      $j('.category-view__description + .category-view__description .seemore').addClass('readless-bttn');
      $j('.gradient').toggleClass('gradient-toggle')
      ga('send', 'event', 'read-more-button', 'click', ''+catname+'');
    });

    $j('.category-view__description + .category-view__description .seemore.readless-bttn').click(function(){
      ga('send', 'event', 'read-less-button', 'click', ''+catname+'');
    });
  };

  /* END */

  /* Homepage SEO show/hide */
    $j('.pageSection--Seo').after('<div class="seo-container"><a><div class="readmore">Read more</div></a></div>');
    $j('.readmore').click(function(){
      $j('.pageSection--Seo').toggleClass('seo-open');
      $j('.pageSection--Seo + .seo-container .readmore').html('Read more');
      $j('.pageSection--Seo.seo-open + .seo-container .readmore').html('Read less');
    });
  /* END */

 

////////////////////////////////  
//DONT ADD ANYTHING BELOW HERE//
////////////////////////////////
});

});