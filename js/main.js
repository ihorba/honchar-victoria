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
	});

	$('.ba-menu__item').on('click', function(e){

		$('.ba-menu__item').removeClass('active');
		$(this).addClass('active');

	});


})(jQuery);

