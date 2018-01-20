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

	$('.ba-menu__item').on('click', function(e){

		$('.ba-menu__item').removeClass('active');
		$(this).addClass('active');

	});


})(jQuery);

