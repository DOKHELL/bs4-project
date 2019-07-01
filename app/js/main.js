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

if (window.innerWidth >= 767) {
	function sliderServices() {
		$('.services__items').slick({
			arrows: false,
			dots: true,
			vertical: true,
			verticalSwiping: true,
		});
	};
} else {
	function sliderServices() {
		$('.services__items').slick({
			arrows: false,
			dots: true,
			vertical: false,
			verticalSwiping: false,
		});
	};
}

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
};

function matchheight2() {
	$(".matchheight2").matchHeight();
};

function menuBurg() {
	$('.navbar-toggler').on('click', function () {
		$('.navbar-collapse').slideToggle().toggleClass('show');

	});
};

function initHolderBg5() {
	"use strict";
	$('.blog__item .blog__img').each(function () {
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
				height: '485px'
			});
			img.remove();
		}
	});
};

function anchorTop() {
	$('body').append('<a href="#" id="go-top" title="Вверх"></a>');
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
};

function anchorTopsup() {
	$("#go-top").scrollToTop();
};

//Runs
$(document).ready(function () {
	slider();
	initHolderBg();
	sliderServices();
	initHolderBg2();
	initHolderBg3();
	slider2();
	initHolderBg4();
	initHolderBg5();
	matchheight();
	menuBurg();
	anchorTop();
	anchorTops();
	anchorTopsup();
	matchheight2();

	var $page = $('html, body');
	$('a[href*="#"]').click(function () {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1000);
		return false;
	});

	var mixer = mixitup('.mix-list');
});
