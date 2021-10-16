$(document).ready(function () {
  $(".landing__nav-btn").click(function () {
    $(".landing__list").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 660) {
      $(".landing__list").removeAttr("style");
    }
  });

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            700
          );
          return false;
        }
      }
    });
  });
});
