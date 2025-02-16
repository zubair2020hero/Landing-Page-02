(function ($) {
    "use strict";

    var windowOn = $(window);

    // preloader 
    windowOn.on('load', function () {
        $("#loading").fadeOut(500);
    })


    // back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function () {
        if (windowOn.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // Sticky Navbar 

    const $header = $('.header-area'); // Header সিলেক্ট করা
    const stickyClass = 'sticky-navbar';
  
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) { // 100px নিচে স্ক্রল হলে
        $header.addClass(stickyClass);
      } else {
        $header.removeClass(stickyClass);
      }
    });

    // 01. Mobile Menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    // 02. Sidebar Js
    $(".za-menu-toggle").on("click", function () {
        $(".za-sidebar-menu").addClass("sidebar-opened");
        $(".body-overlay").addClass("opened");
    });

    $(".sidebar-close").on("click", function () {
        $(".za-sidebar-menu").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
        $(".za-sidebar-menu").removeClass("sidebar-opened");
        $(".body-overlay").removeClass("opened");
    });

    // 03. Testimonial
    $('.testimonial-active').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });

    //04. Faq
    // $(".za-accordion-header").click(function () {
    //     $(this).next(".za-accordion-content").slideToggle();
    //     $(this).toggleClass("active");
    //     $(".za-accordion-content").not($(this).next()).slideUp();
    //     $(".za-accordion-header").not(this).removeClass("active");
    // });

    // ---
    $(".za-faq-text li").on("click", function (e) {
        let clickedLi;
        if ($(e.target).hasClass("za-question-arrow")) {
            clickedLi = $(e.target).parent();
        } else {
            clickedLi = $(e.target).closest("li");
        }
        $(".za-faq-text li").not(clickedLi).removeClass("showAnswer");
        clickedLi.toggleClass("showAnswer");
    });

})(jQuery);