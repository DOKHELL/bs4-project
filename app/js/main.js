function slider() {
	$('.slider__items').slick({
		arrows: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});
	if (window.innerWidth >= 1200) {
		$('.services__items').slick({
			arrows: false,
			dots: true,
			vertical: true,
			verticalSwiping: true,
		});
	}
	else {
		$('.services__items').slick({
			arrows: false,
			dots: true,
			vertical: false,
			verticalSwiping: false,
		});
	};
	$('.study__items').slick({
		arrows: false,
		dots: true,
	});

};

function initHolderBg(element) {
	"use strict";
	var elementWrap = $(element);
	elementWrap.each(function () {
		var cur = $(this),
			curImage = cur.find('.wrap_image'),
			img = curImage.find('.images-plagin'),
			imgSrc = img.attr('src');

		if (!!curImage.length && !!img.length && !!imgSrc) {
			curImage.css({
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
	$(".matchheight1, .matchheight4, .matchheight2").matchHeight();
};

function menuBurg() {
	$('.navbar-toggler').on('click', function () {
		$('.navbar-collapse').slideToggle().toggleClass('show');

	});
};

function anchorTops() {
	$.fn.scrollToTop = function () {
		$(this).hide().removeAttr("href");
		if ($(window).scrollTop() >= "450") $(this).fadeIn("slow")
		var scrollDiv = $(this);
		$(window).scroll(function () {
			if ($(window).scrollTop() <= "450") $(scrollDiv).fadeOut("slow")
			else $(scrollDiv).fadeIn("slow")
		});
		$(this).click(function () {
			$("html, body").animate({ scrollTop: 0 }, "slow")
		})
	}
	$("#go-top").scrollToTop();
};

function scrollingUp() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});
};

//Runs
$(document).ready(function () {
	initHolderBg();
	matchheight();
	menuBurg();
	anchorTops();
	initHolderBg('.study__inner, .slider__item,.services__image,.statistic__wrap,.blog__item');
	slider();
	scrollingUp();
	var mixer = mixitup('.mix-list');
});
