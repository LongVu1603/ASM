$(".btn-showsub").click(function () {
  $(this).parent().find(".sub-menu").addClass("open-sub");
  $(this).parent().find(".btn-closesub").show();
  $(this).hide();
});
$(".btn-closesub").click(function () {
  $(this).parent().find(".sub-menu").removeClass("open-sub");
  $(this).parent().find(".btn-showsub").show();
  $(this).hide();
});

$(".btn-showmenu").click(function () {
  $(".main-header").addClass("open-menu");
  $("body").addClass("popup-body");
});
$(".main-header-top .close").click(function () {
  $(".main-header").removeClass("open-menu");
  $("body").removeClass("popup-body");
});

$(".search-mobi").click(function () {
  if ($(".search-wrap-mobi").hasClass("open-search")) {
    //console.log(1);
    $(".search-wrap-mobi").removeClass("open-search");
  } else {
    //console.log(2);
    $(".search-wrap-mobi").addClass("open-search");
  }
});
$(document).ready(function () {
  if ($(window).width() > 991) {
    scroolHeader();
  }
});
$(window).resize(function () {
  if ($(window).width() > 991) {
    scroolHeader();
  }
});
function scroolHeader() {
  /*Header Scroll*/
  /*Fixed Navbar When Scroll*/
  var navbarFix = $(".main-header");
  var headerOffset = navbarFix.offset().top + 200;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > headerOffset) {
      navbarFix.addClass("fixed");
      navbarFix.addClass("animated slideInDown").removeClass("unfixed");
    } else {
      navbarFix.addClass("unfixed").removeClass("fixed animated slideInDown");
    }
  });
  /*End Header Scroll*/

  /*Fixed Navbar When Scroll*/
  // var mbnavbarFix = $(".main-header");
  // var headerOffsetmb = mbnavbarFix.offset().top + 180;
  // $(window).on('scroll',function () {
  //     if ($(window).scrollTop() > headerOffsetmb) {
  //         navbarFix.addClass('fixed');
  //         navbarFix.addClass('animated slideInDown').removeClass("unfixed");
  //     } else {
  //         mbnavbarFix.addClass('unfixed').removeClass("fixed animated slideInDown");
  //     }
  // });
  /*End Header Scroll*/
}
/////////Lazy Load////////////////
$(document).ready(function () {
  $(".lazyload").lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
    afterLoad: function (element) {
      //console.log('12312313');
    },
  });
});

$.scrollUp({
  scrollName: "scrollUp", // Element ID
  topDistance: "300", // Distance from top before showing element (px)
  topSpeed: 300, // Speed back to top (ms)
  animation: "fade", // Fade, slide, none
  animationInSpeed: 200, // Animation in speed (ms)
  animationOutSpeed: 200, // Animation out speed (ms)
  scrollText: "", // Text for element
  activeOverlay: false,
});

/////////////Popup change Location
$(".popup-loca .close").click(function () {
  $(".popup-loca").removeClass("show-popup");
});
$(".change-area").click(function () {
  $(".popup-loca").addClass("show-popup");
});
$(".change-area-mobi").click(function () {
  $(".popup-loca").addClass("show-popup");
});
///////////
$(".popup-loca-sale .close").click(function () {
  $(".popup-loca-sale").removeClass("show-popup");
});
$(".change-area-sale").click(function () {
  $(".popup-loca-sale").addClass("show-popup");
});
///////////
$(".popup-run-luckydraw .close").click(function () {
  $(".popup-run-luckydraw").removeClass("show-popup");
});
//////////
$(".slide-alert").owlCarousel({
  items: 1,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  nav: true,
  dots: true,
  navText: ["", ""],
  stagePadding: 0,
  animateOut: "fadeOutUp",
  animateIn: "fadeInUp",
});

setTimeout(function () {
  $("body").css("opacity", 1);
}, 500);
