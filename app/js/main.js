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
            height: '100%'
        });
        img.remove();
        }
    });
}






//Runs
$(document).ready(function () {
    slider();
    initHolderBg();
});
