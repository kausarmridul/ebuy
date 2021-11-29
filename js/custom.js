$(document).ready(function () {
  'use strict'

  $('.service-body').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });

  $('.product-slider').slick({
    slidesToShow: 4,
  })

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  });

  $('#countdown').countdown({
    year: 2022, // YYYY Format
    month: 1, // 1-12
    day: 1, // 1-31
    hour: 0, // 24 hour format 0-23
    minute: 0, // 0-59
    second: 0, // 0-59
  });

  var mixer = mixitup(".feature-tabs");
})