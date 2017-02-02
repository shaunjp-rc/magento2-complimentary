/*
	Craghoppers specific JS snippets
 */


var $j = jQuery.noConflict();

$j(document).ready(function($) {


	// Flexslider init
	if ($j('.flexslider').length) {
		setTimeout(function(){
          $j('.flexslider').flexslider();
        }, 500);
	}

  // Fit text tool-tip

  if ($j('body').hasClass('catalog-product-view')) {
    
    //get which fit needs to be shown
    var getFit = $j('.product-clothing-fit a').text().replace(/\s/g, '');

    if(/trousers|Trousers|shorts|Shorts|Skirt|Skirts/.test(productBreadcrumb)) {
      var getFitType = 'lower';
    } else {
      var getFitType = 'upper';
    }

    // create full variable name
    var fitTipFull = 'fitTip' + getFit + getFitType;

    // create the appropriate tool tip
    if (getFit === 'Tailoredfit') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/upper-body-tailored-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Tailored Fit</h2><p class="fitGuideDiagrams__fitDesc">A regular cut slimmer through the chest, waist, hem &amp; sleeve.</p></div></div>');
    } else if (getFit === 'Adventurefit') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/lower-body-adventure-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Adventure Fit</h2><p class="fitGuideDiagrams__fitDesc">A regular cut with ease of movement sitting below the natural waistline.</p></div></div>');
    } else if (getFit === 'Activefit' && getFitType === 'upper') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/upper-body-active-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Active Fit</h2><p class="fitGuideDiagrams__fitDesc">Fitted cut with active styling and stretch fabric or detail.</p></div></div>');
    } else if (getFit === 'Activefit' && getFitType === 'lower') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/lower-body-active-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Active Fit</h2><p class="fitGuideDiagrams__fitDesc">Closer fitting cut with active styling and stretch fabric, sitting lower on the waist.</p></div></div>');
    } else if (getFit === 'Relaxedfit' && getFitType === 'upper') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/upper-body-relaxed-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Relaxed Fit</h2><p class="fitGuideDiagrams__fitDesc">Generous fit for comfort and freedom of movement.</p></div></div></div>');
    } else if (getFit === 'Relaxedfit' && getFitType === 'lower') {
      fitTipFull = $j('<div class="fit-tip"><span id="fitTipClose">Close</span><div class="fitGuideDiagrams__block"><img src="//d1khwdv4lze0nb.cloudfront.net/images/AW16/fit-guide/lower-body-relaxed-fit.png" class="fitGuideDiagrams__image" /><h3 class="fitGuideDiagrams__fitTitle">Relaxed Fit</h2><p class="fitGuideDiagrams__fitDesc">Generous fit for comfort and freedom of movement sitting on the natural waistline.</p></div></div>');
    }
    


    fitTipFull.appendTo('.product-clothing-fit');
    
    $j('.product-clothing-fit a').on('click', function(event){
      event.preventDefault();
      fitTipFull.css('display', 'block');
    });


    //generic close tip
    $j('#fitTipClose').on('click', function() {
      $j('.fit-tip').css('display', 'none');
    });
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

});
