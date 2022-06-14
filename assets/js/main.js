$(document).ready(function ($) {
  "use strict";



  try {
    var lang = $("html").attr("lang");
    var btn = $("#button-top");

    /**** OWL CAROUSEL ********/

    if ($(".owl-slider").length) {
      var Slider = $(".owl-slider");
      Slider.owlCarousel({
        rtl: lang == "ar" ? true : false,
        items: 1,
        loop: true,
        pagination: false,
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        margin: 0,
        lazyLoad: true,
        autoplay: false,
        autoplayHoverPause: false,
      });
    }

    /**** Forms Validate ********/

    if ($(".newsletter").length) {
      $(".newsletter").validate({
        rules: {
          newsletter: {
            required: true,
            minlength: 3,
          },
        },
        messages: {
          newsletter: {
            required: "Ce champ est requis",
            minlength: "Veuillez fournir au moins 3 caractères",
          },
        },
      });
    }


    /**** WOW JS Animate ********/
    new WOW().init();
  } catch (err) {}
});

/****Window load function********/

$(window).on("load", function () {});
