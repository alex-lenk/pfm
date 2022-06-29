//= vendor/jquery.min.js
//= vendor/slick.min.js
// = snipped/mask.js

'use strict';

$(document).ready(function () {
  $('.js-header__toggle').click(function () {
    $('body').toggleClass('header__nav-open');
  });

  /* BEGIN: Плавная прокрутка к ID */
  let js__goAnchor = '.js__go-anchor';
  $(js__goAnchor).on('click', function (e) {
    e.preventDefault();
    let fixed_offset = 90;
    $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
  });
  /* END */

  const obj = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="carousel__arrow carousel__prev slick-prev"></button>',
    nextArrow: '<button type="button" class="carousel__arrow carousel__next slick-next"></button>'
  }

  if ($(window).width() < 575) {
    $('#js-main__services').slick(obj);
    $('#js-main__team-part').slick(obj);
    $('#js-main__persons').slick(obj);
  }


  // Begin: Антиспам
  $('.ajax_form').append('<input type="text" name="org" value="" class="_org" style="visibility:hidden; height: 0; width: 0; padding: 0; border:none;"/>')
  // END: Антиспам
});
