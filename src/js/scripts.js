//= vendor/jquery.min.js
//= vendor/slick.min.js
// = snipped/mask.js

'use strict';

$(document).ready(function () {
    $('.partners-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="partners-carousel__arrow partners-carousel__prev slick-prev"></button>',
        nextArrow: '<button type="button" class="partners-carousel__arrow partners-carousel__next slick-next"></button>',
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.js-header__toggle').click(function () {
        $('body').toggleClass('header__nav-open');
    });

    /* BEGIN: Плавная прокрутка к ID */
    let js__goAnchor = '.js__go-anchor';
    $(js__goAnchor).on('click', function (e) {
        e.preventDefault();
        let fixed_offset = 10;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
    });
    /* END */


    if ($(window).width() < 575) {
        $('.header-phone').appendTo('.menu-wrap');

        $(js__goAnchor).click(function () {
            $('body').removeClass('menu-open');
        });
    }


    /* BEGIN: Инициализация плавающего блока на десктопной версия странице */
    if ($(window).width() > 576) {
        var elementFixed = '.menu-wrap';
    } else {
        var elementFixed = '.header-top';
    }
    var elementPosition = $(elementFixed).offset();

    $(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $(elementFixed).addClass("menu-fixed");
        } else {
            $(elementFixed).removeClass("menu-fixed");
        }
    });
    /* END */
});
