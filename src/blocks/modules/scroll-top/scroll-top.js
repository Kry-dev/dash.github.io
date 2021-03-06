import $ from "jquery";
// Smooth scrolling using jQuery easing
$(document).on("click", "a.scroll-to-top", function (event) {
    let $anchor = $(this);
    $("html, body").stop().animate({
        scrollTop: ($($anchor.attr("href")).offset().top)
    }, 1000, "easeInOutExpo");
    event.preventDefault();
});

// Scroll to top button appear
$(document).scroll(function () {
    let scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $(".scroll-to-top").fadeIn();
    } else {
        $(".scroll-to-top").fadeOut();
    }
});

