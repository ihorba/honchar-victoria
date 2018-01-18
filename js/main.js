;(function($) {
	"use strict";
	$(document).ready(function() {

		var presSlider = $('.ba-presentation-slider');
		presSlider.slick({
			slide: '.ba-presentation-slide',
			arrows: true,
			prevArrow: '.ba-presentation-slider-prev',
			nextArrow: '.ba-presentation-slider-next',
			slidesToShow: 2
		});
	});

})(jQuery);

