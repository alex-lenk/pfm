//= vendor/jquery.min.js
//= vendor/slick.min.js
//= snipped/_modal.js
//= snipped/_mask.js

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

document.addEventListener('DOMContentLoaded', function () {
  const myModal = new HystModal({
    // for dynamic init() of modals
    // linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
    beforeOpen: function(modal){
      console.log('Message before opening the modal');
      console.log(modal); //modal window object
    },
    afterClose: function(modal){
      console.log('Message after modal has closed');
      console.log(modal); //modal window object

      //If Youtube video inside Modal, close it on modal closing
      let videoframe = modal.openedWindow.querySelector('iframe');
      if(videoframe){
        videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
      }
    },
  });
})
