//= vendor/jquery.min.js
//= vendor/slick.min.js

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

    $('.menu-toggle').click(function () {
        $('body').addClass('menu-open');
    });

    $('.menu-close').click(function () {
        $('body').removeClass('menu-open');
    });

    if ($(window).width() < 575) {
        $('.header-phone').appendTo('.menu-wrap');
    }
});
