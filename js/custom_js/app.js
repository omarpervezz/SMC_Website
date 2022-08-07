// sticky menu
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("header").addClass("nav_bg_adder");
    } else {
      $("header").removeClass("nav_bg_adder");
    }
  });