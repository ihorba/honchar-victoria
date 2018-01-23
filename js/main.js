;(function($){
	"use strict"

	$(document).ready(function() {

		var worksSlider = $('.ba-slider');
		worksSlider.slick({
			slide: '.ba-slide',
			arrows: true,
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next',
			slidesToShow: 1
		});

		var worksSlider = $('.ba-inner-slider');
		worksSlider.slick({
			slide: '.ba-inner-slide',
			arrows: true,
			prevArrow: '.ba-inner-slider-prev',
			nextArrow: '.ba-inner-slider-next',
			slidesToShow: 3,
			responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 2
				}
			}
			]
		});
	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	      &&
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 500, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	  $(document).on('scroll', function () {
	  	var posDoc = $(this).scrollTop();

	  	$('.ba-section').each(function (index, item) {
	  		var topHeader = $(this).offset().top - 38;
	  		var botHeader = topHeader + $(this).height();

	  		if (
	  			posDoc > topHeader &&
	  			posDoc < botHeader
	  			) {
	  			$('.ba-header__link').removeClass('active');
	  		$('.ba-header__link').eq(index).addClass('active');
	  	}

	  });
	  });


})(jQuery);

