;(function($){
	"use strict"
	$(document).ready(function() {

		var innerSlider = $('.ba-inner-slider');
		innerSlider.slick({
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

})(jQuery);

