$(document).ready(function () {
  'use strict'

  // Service Slider

  $('.service-body').slick({
    slidesToShow: 3,
    arrows: false,

  });

  // Product Slider

  $('.product-slider').slick({
    slidesToShow: 4,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  })


  // Banner Slider


  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  });


  // Countdown Timer

  $('#countdown').countdown({
    year: 2022, // YYYY Format
    month: 1, // 1-12
    day: 1, // 1-31
    hour: 0, // 24 hour format 0-23
    minute: 0, // 0-59
    second: 0, // 0-59
  });

  // Testimonial Slider

  $('.testimonial-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
  })


  // Feature Product Filter

  var mixer = mixitup(".feature-tabs");


  // Venobox Image

  $('.venobox').venobox();

  // Counterup

  // Counter Up

})