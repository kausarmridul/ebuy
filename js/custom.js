$(document).ready(function(){
    'use strict'
    $('.service-body').slick({
        slidesToShow: 3,
        arrows:false,  
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            }]
    });
    $('.banner-slider').slick({
      slidesToShow: 1,
      slidesToScroll:1,
      autoplay:true,
      arrows:false,  })
})