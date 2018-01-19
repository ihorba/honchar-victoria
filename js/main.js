;(function($) {
	"use strict";

	$('.ba-menu__item').on('click', function(e){

		$('.ba-menu__item').removeClass('active');
		$(this).addClass('active');

	});


	$(document).ready(function() {

		var presSlider = $('.ba-slider');
		presSlider.slick({
			slide: '.ba-slide',
			arrows: true,
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next',
			slidesToShow: 1
		});
	});


})(jQuery);

