// Product Slider 1
var $swiperSelector = $(".swiper-container_index1");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Product Slider 2
var $swiperSelector = $(".swiper-container_index2");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider2-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider2-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Product slider 3
var $swiperSelector = $(".swiper-container_index3");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider3-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider3-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Product Slider RECENTLY VIEWED
var $swiperSelector = $(".swiper-container_index4");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider4-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider4-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// CUSTOMER REVIEW Slider
var $swiperSelector = $(".swiper-container_index_review");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-sliderreview-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 2;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 2;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 1.2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 10;
  var swiper = new Swiper(".swiper-sliderreview-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-nextreview",
      prevEl: ".swiper-button-prevreview",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Language Dropdown
$(document).ready(function () {
  $(".dropdown-items").on("click", function (e) {
    e.preventDefault();
    let lang = $(this).data("lang");
    let text = $(this).text();
    let flagImage = $(this).find("img").attr("src");
    $("#dropdownMenuButtonss").html(
      `<img src="${flagImage}" /> ${text} <span class="caret"></span>`
    );
  });
});

// Swiper Slider Swipe Button
$(document).ready(function () {
  $(".my-swiper-btn").click(function () {
    if ($(this).hasClass("swiper-button-disabled")) {
      if ($(this).hasClass("product-new-next")) {
        $(this).parent().find(".product-new-pre").removeClass("d-none");
      } else {
        $(this).parent().find(".product-new-next").removeClass("d-none");
      }
      $(this).addClass("d-none");
    }
  });
});

// CATEGORIES Slider
$(".view_slider-new").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: false,
  nav: false,
  dots: false,
  // stagePadding: 95,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 3.5,
    },
    1000: {
      items: 3.5,
    },
    1400: {
      items: 3.5,
    },
  },
});

$(".categories_slider-new").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: false,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 3.5,
    },
    1000: {
      items: 4.5,
    },
    1400: {
      items: 5.5,
    },
  },
});

// new shivi
// $(".categories_slider-new").owlCarousel({
//   loop: true,
//   margin: 10,
//   autoplay: true,
//   autoplayTimeout: 3000, // Example autoplay timeout (adjust as needed)
//   autoplayHoverPause: true, // Pause on hover (if needed)
//   nav: false,
//   dots: false,
//   stagePadding: 60,
//   center: true,
//   responsive: {
//     0: {
//       items: 1,
//       margin: 5,
//     },
//     600: {
//       items: 3,
//       margin: 10,
//     },
//     1000: {
//       items: 4,
//       margin: 10,
//     }
//   }
// });

// Space Left Side Bar
// jQuery(document).ready(function ($) {
//   function my_dynPad() {
//     var marLeft = $(".container").css("margin-left");
//     var pad_left = $(".container").css("padding-left");
//     marLeft = parseInt(marLeft);
//     pad_left = parseInt(pad_left);
//     var dyn_space = marLeft + pad_left;
//     dyn_space = dyn_space + "px";
//     $(".dynamic_left").css("padding-left", dyn_space);
//   }
//   my_dynPad();
//   $(window).resize(my_dynPad);
// });

// CATEGORIES Slider End

// recently-slider
$(".recently-slider").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
    1400: {
      items: 5,
    },
  },
});

// Review Slider
// $(".review-owl-slider").owlCarousel({
//   loop: true,
//   margin: 20,
//   autoplay: false,
//   nav: false,
//   dots: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2.2,
//     },

//     900: {
//       items: 2,
//     },
//     1000: {
//       items: 2,
//     },
//     1400: {
//       items: 2,
//     },
//   },
// });

// Cart slider
$(".cart-owl-slider").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },

    900: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1400: {
      items: 1,
    },
  },
});

// Banner Slider
$(".slider_banner").owlCarousel({
  loop: true,
  margin: 0,
  autoplay: false,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// Banner Slider End

// Select With Ul Li
$(".select").click(function () {
  var is_open = $(this).hasClass("open");
  if (is_open) {
    $(this).removeClass("open");
  } else {
    $(this).addClass("open");
  }
});

$(".select li").click(function () {
  var selected_value = $(this).html();
  var first_li = $(".select li:first-child").html();
  $(".select li:first-child").html(selected_value);
  $(this).html(first_li);
});
$(document).mouseup(function (event) {
  var target = event.target;
  var select = $(".select");
  if (!select.is(target) && select.has(target).length === 0) {
    select.removeClass("open");
  }
});

// Country Js
$(".dropdown-menu li a").click(function () {
  var selText = $(this).text();
  var src = $(this).attr("src");
  $(this)
    .parents(".btn-group")
    .find(".dropdown-toggle")
    .html('<img src="' + src + '">' + selText + ' <span class="caret"></span>');
});

// login Modal
$(document).ready(function () {
  var currentStep = 1;
  // Modal Open Jq
  $(document).on("click", ".cust_btn", function () {
    $(".step").hide();

    currentStep = 1;

    if ($(this).attr("currentStep") != undefined) {
      $(".step-" + $(this).attr("currentStep")).show();
    } else {
      $(".step-1").show();
    }
    $("#myModal").modal("toggle");
  });
  $("#multi-step-form").find(".step").slice(1).hide();

  $(".next-step").click(function () {
    if (currentStep < 3) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOut");
      currentStep++;
      setTimeout(function () {
        $(".step").removeClass("animate__animated animate__fadeOut").hide();
        $(".step-" + currentStep)
          .show()
          .addClass("animate__animated animate__fadeIn");
      }, 500);
    }
  });
});

// Product Details page
// Sticky cart Section
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 800) {
      $(".header_section").addClass(
        "fixed_header_section_new animate__animated animate__fadeIn"
      );
    } else {
      $(".header_section").removeClass(
        "fixed_header_section_new animate__animated animate__fadeIn"
      );
      $(".header_section").addClass("animate__animated animate__fadeIn");
    }
  });
});

// Cart Drawer
// $(document).ready(function () {
//   $drawerRight = $(".cart-drawer-right");
//   $cart_list = $(".cart-drawer-btn, .cart-drawer-close-btn");
//   $cart_list.click(function () {
//     $(this).toggleClass("active");
//     $("body").toggleClass("cart-drawer-pushtoleft");
//     $drawerRight.toggleClass("cart-drawer-open");
//   });
// });

$(document).ready(function () {
  var $drawerRight = $(".cart-drawer-right");
  var $cart_list = $(".cart-drawer-btn, .cart-drawer-close-btn");

  $cart_list.click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("cart-drawer-pushtoleft");
    $drawerRight.toggleClass("cart-drawer-open");
  });

  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".cart-drawer-close-btnn").length &&
      !$(event.target).closest(".cart-drawer-right").length &&
      !$(event.target).closest(".cart-drawer-btn").length
    ) {
      $cart_list.removeClass("active");
      $("body").removeClass("cart-drawer-pushtoleft");
      $drawerRight.removeClass("cart-drawer-open");
    }
  });
});

// CATEGORIES PAGE Slider All Js *****************
var $swiperSelector = $(".swiper-container_category");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider12-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider12-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// CATEGORIES Slider
$(".view_slider-new-category").owlCarousel({
  loop: true,
  margin: 15,
  autoplay: false,
  nav: false,
  dots: false,
  items: 2,
  stagePadding: 95,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});

// category 1
var $swiperSelector = $(".swiper-container_category1");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider5-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider5-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next6",
      prevEl: ".swiper-button-prev6",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// category 2
var $swiperSelector = $(".swiper-container_category2");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider2-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider2-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// category 3
var $swiperSelector = $(".swiper-container_category3");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider3-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider3-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next8",
      prevEl: ".swiper-button-prev8",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// category 4
var $swiperSelector = $(".swiper-container_category4");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider4-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider4-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next9",
      prevEl: ".swiper-button-prev9",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// category 5
var $swiperSelector = $(".swiper-container_category5");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider5-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider5-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next10",
      prevEl: ".swiper-button-prev10",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// category 6
var $swiperSelector = $(".swiper-container_category6");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider6-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider6-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next11",
      prevEl: ".swiper-button-prev11",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// Dropdown Filtter
document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll("#tableMenu .dropdown-item");
  var dropdownButton = document.getElementById("dropdownMenuButton");
  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownButton.textContent = this.textContent;
    });
  });
});

// Cart Page Slider Drawer
function selectDropdownItem(text) {
  var dropdownButtonss = document.getElementById("dropdownMenuButtons");
  dropdownButtonss.innerHTML = "<span>Brand: </span>" + text;
}

var $swiperSelector = $(".swiper-container_cart");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slidercart-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 1;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 1;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 1;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 1;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 10;
  var swiper = new Swiper(".swiper-slidercart-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-nextcart",
      prevEl: ".swiper-button-prevcart",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: false,
      dragSize: dragSize,
    },
  });
});

// new changes
var $swiperSelector = $(".swiper-container_cart1");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 5;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 5;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// header text reapet

let textArray = ["ENTREGA: SEGUNDA", "ENVIOS GRÁTIS ACIMA 19,99€"];
let imageArray = ["images/Icon-top.svg", "images/Icon-top.svg"];
let i = 0;
setInterval(() => {
  $("#myheader").text(textArray[i]);
  $("#your-image").attr("src", imageArray[i]);
  i++;
  if (i == 3) {
    i = 0;
  }
}, 2000);

// fav Modal
$(document).ready(function () {
  var currentStep = 1;
  // Modal Open Jq
  $(document).on("click", "#fav_btn", function () {
    $(".step").hide();

    currentStep = 1;

    if ($(this).attr("currentStep") != undefined) {
      $(".step-" + $(this).attr("currentStep")).show();
    } else {
      $(".step-1").show();
    }
    $("#myModalfav").modal("toggle");
  });
  $("#multi-step-form").find(".step").slice(1).hide();

  $(".next-step").click(function () {
    if (currentStep < 3) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOut");
      currentStep++;
      setTimeout(function () {
        $(".step").removeClass("animate__animated animate__fadeOut").hide();
        $(".step-" + currentStep)
          .show()
          .addClass("animate__animated animate__fadeIn");
      }, 500);
    }
  });
});

// new js 6-12-23

// headre sticky
$(document).on("scroll", function () {
  if ($(window).scrollTop() >= 100) {
    $(".header-bottom-wrapper").addClass(
      "header-sticky_new animate__animated animate__fadeIn"
    );
  } else {
    $(".header-bottom-wrapper").removeClass(
      "header-sticky_new animate__animated animate__fadeIn"
    );
  }
});

// popular page slider
var $swiperSelector = $(".swiper-container_popular");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider13-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider13-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next12",
      prevEl: ".swiper-button-prev12",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// popular 1 *******
var $swiperSelector = $(".swiper-container_popular1");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider14-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider14-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next13",
      prevEl: ".swiper-button-prev13",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// popular 2
var $swiperSelector = $(".swiper-container_popular2");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider15-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider15-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next14",
      prevEl: ".swiper-button-prev14",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

/// popular 3
var $swiperSelector = $(".swiper-container_popular3");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider16-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider16-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next15",
      prevEl: ".swiper-button-prev15",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// popular 4
var $swiperSelector = $(".swiper-container_popular4");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider17-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider17-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next16",
      prevEl: ".swiper-button-prev16",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// popular 5
var $swiperSelector = $(".swiper-container_popular5");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider18-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider18-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next17",
      prevEl: ".swiper-button-prev17",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// popular 6
var $swiperSelector = $(".swiper-container_popular6");
$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider19-" + index);

  var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 4;
  var slidesnewMobile = $this.data("slides-newmobile")
    ? $this.data("slides-newmobile")
    : 2;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 2;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var swiper = new Swiper(".swiper-slider19-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    spaceBetween: spaceBetween,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      768: {
        slidesPerView: slidesnewMobile,
      },
      320: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next18",
      prevEl: ".swiper-button-prev18",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// modal megha header 1
$(document).ready(function () {
  var currentStep = 1;
  $(document).on("click", "#megha-dropdown", function () {
    $(".step").hide();

    currentStep = 1;

    if ($(this).attr("currentStep") != undefined) {
      $(".step-" + $(this).attr("currentStep")).show();
    } else {
      $(".step-1").show();
    }
    $("#myModalmegha").modal("toggle");
  });
  $("#multi-step-form").find(".step").slice(1).hide();

  $(".next-step").click(function () {
    if (currentStep < 3) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOut");
      currentStep++;
      setTimeout(function () {
        $(".step").removeClass("animate__animated animate__fadeOut").hide();
        $(".step-" + currentStep)
          .show()
          .addClass("animate__animated animate__fadeIn");
      }, 500);
    }
  });
});

// megha modal 2
$(document).ready(function () {
  var currentStep = 1;
  $(document).on("click", "#megha-dropdowns", function () {
    $(".step").hide();

    currentStep = 1;

    if ($(this).attr("currentStep") != undefined) {
      $(".step-" + $(this).attr("currentStep")).show();
    } else {
      $(".step-1").show();
    }
    $("#myModalmeghas").modal("toggle");
  });
  $("#multi-step-form").find(".step").slice(1).hide();

  $(".next-step").click(function () {
    if (currentStep < 3) {
      $(".step-" + currentStep).addClass("animate__animated animate__fadeOut");
      currentStep++;
      setTimeout(function () {
        $(".step").removeClass("animate__animated animate__fadeOut").hide();
        $(".step-" + currentStep)
          .show()
          .addClass("animate__animated animate__fadeIn");
      }, 500);
    }
  });
});

// <!-- header megha menu -->
jQuery(function ($) {
  $(".box").click(function () {
    var currentActive = $(this).hasClass("active");
    $(".boxContent").removeClass("show-content");
    $(".box").removeClass("active");
    if (!currentActive) {
      $(this).addClass("active");
      var target = $(this).attr("target");
      $(".boxContent_" + target).addClass("show-content");
    }
  });
});

$(document).on("click", function (event) {
  var menu = $(".list-num-main");
  var dropdown = $(".main-box-menu");

  if (
    !menu.is(event.target) &&
    menu.has(event.target).length === 0 &&
    !dropdown.is(event.target) &&
    dropdown.has(event.target).length === 0
  ) {
    menu.removeClass("open");
    $(".box").removeClass("active");
    $(".boxContent").removeClass("show-content");
  }
});

//  quuick order-1
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick");
  console.log("dsdsdsd", $swiperSelector);

  $swiperSelector.each(function (index) {
    var $this = $(this);
    console.log("dsdsdsd", $this);
    $this.addClass("swiper-slider20-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    var swiper = new Swiper(".swiper-slider20-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next19",
        prevEl: ".swiper-button-prev19",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

//  quuick order-2
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick1");
  $swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass("swiper-slider21-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    var swiper = new Swiper(".swiper-slider21-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next20",
        prevEl: ".swiper-button-prev20",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

// order 3
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick2");
  $swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass("swiper-slider22-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    var swiper = new Swiper(".swiper-slider22-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next21",
        prevEl: ".swiper-button-prev21",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

// oder 4
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick3");
  $swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass("swiper-slider23-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    var swiper = new Swiper(".swiper-slider23-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next23",
        prevEl: ".swiper-button-prev23",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

// order 5
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick4");
  $swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass("swiper-slider25-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    var swiper = new Swiper(".swiper-slider25-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next27",
        prevEl: ".swiper-button-prev27",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

// order 6
$(document).ready(function () {
  var $swiperSelector = $(".swiper-container_quick5");
  $swiperSelector.each(function (index) {
    var $this = $(this);
    $this.addClass("swiper-slider26-" + index);

    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
    var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
    var loop = $this.data("loop") ? $this.data("loop") : false;
    var slidesDesktop = $this.data("slides-desktop")
      ? $this.data("slides-desktop")
      : 4;
    var slidesTablet = $this.data("slides-tablet")
      ? $this.data("slides-tablet")
      : 3;
    var slidesnewMobile = $this.data("slides-newmobile")
      ? $this.data("slides-newmobile")
      : 2;
    var slidesMobile = $this.data("slides-mobile")
      ? $this.data("slides-mobile")
      : 1;
    var spaceBetween = $this.data("space-between")
      ? $this.data("space-between")
      : 20;
    console.log(slidesDesktop, slidesTablet, slidesMobile, spaceBetween);

    var swiper = new Swiper(".swiper-slider26-" + index, {
      direction: "horizontal",
      loop: loop,
      freeMode: freeMode,
      spaceBetween: spaceBetween,
      breakpoints: {
        1920: {
          slidesPerView: slidesDesktop,
        },
        992: {
          slidesPerView: slidesTablet,
        },
        768: {
          slidesPerView: slidesnewMobile,
        },
        320: {
          slidesPerView: slidesMobile,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next25",
        prevEl: ".swiper-button-prev25",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: dragSize,
      },
      observer: true,
      observeParents: true,
    });
  });
});

//  Product Search
var people = [
  "ActiveLab",
  "Trec Nutrition",
  "Nutrend",
  "Ostrovit",
  "Olimp",
  "OTHER",
];
function matchPeople(input) {
  var reg = new RegExp(input.split("").join("\\w*").replace(/\W/, ""), "i");
  var res = [];
  if (input.trim().length === 0) {
    return res;
  }
  for (var i = 0, len = people.length; i < len; i++) {
    if (people[i].match(reg)) {
      res.push(people[i]);
    }
  }
  return res;
}
function changeInput(val) {
  var autoCompleteResult = matchPeople(val);
  document.getElementById("result").innerHTML = "";
  for (
    var i = 0, limit = 10, len = autoCompleteResult.length;
    i < len && i < limit;
    i++
  ) {
    document.getElementById("result").innerHTML +=
      "<a class='list-group-item list-group-item-action' href='#' onclick='setSearch(\"" +
      autoCompleteResult[i] +
      "\")'>" +
      autoCompleteResult[i] +
      "</a>";
  }
}

function setSearch(value) {
  document.getElementById("search").value = value;
  document.getElementById("result").innerHTML = "";
}
