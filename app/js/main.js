function slider() {
	$('.slider__items').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});
};

function initHolderBg() {
	"use strict";
	$('.slider__items .slider__item .slider__item-img').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				zIndex: '1',
				backgroundRepeat: 'no-repeat',
				height: '1000px'
			});
			img.remove();
		}
	});
};

function sliderServices() {
	$('.services__items').slick({
		arrows: false,
		dots: true,
		vertical: true,
		verticalSwiping: true,
	});
};

function initHolderBg2() {
	"use strict";
	$('.services__item .services__image .services__image-inner').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				zIndex: '1',
				backgroundRepeat: 'no-repeat',
				height: '100%'
			});
			img.remove();
		}
	});
};

function initHolderBg3() {
	"use strict";
	$('.study__items .study__item .study-img').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				zIndex: '1',
				backgroundRepeat: 'no-repeat',
				height: '100%'
			});
			img.remove();
		}
	});
};

function slider2() {
	$('.study__items').slick({
		arrows: false,
		dots: true,
	});
};

function initHolderBg4() {
	"use strict";
	$('.statistic .statistic__wrap .statistic__image').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				zIndex: '1',
				backgroundRepeat: 'no-repeat',
				height: '100%'
			});
			img.remove();
		}
	});
};

function matchheight() {
	$(".matchheight1").matchHeight();
}
$(function () {
	$('.navbar-toggler').on('click', function () {
	  $('.navbar-collapse').slideToggle().toggleClass('show');
	  
	});
  });

//Runs
$(document).ready(function () {
	slider();
	initHolderBg();
	sliderServices();
	initHolderBg2();
	initHolderBg3();
	slider2();
	initHolderBg4();
	matchheight();



	var mixer = mixitup('.mix-list');
});
