$(document).ready(function () {
    'use strict'

    // Designer Slider

    $('.designer-slider').slick({
        slidesToShow: 4,
        arrows: false,

    });

    // Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})