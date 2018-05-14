$(document).ready(function () {
    $('.presentation-slider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    var menuOpen = 'menu-open';
    $('.menu-toggle').click(
        function () {
            $('body').addClass(menuOpen);
        }
    );

    $('.menu-close').click(
        function () {
            $('body').removeClass(menuOpen);
        }
    );
});

//initiating jQuery
jQuery(function ($) {
    $(document).ready(function () {
        $('.menu-inner').stickUp();
    });
});
