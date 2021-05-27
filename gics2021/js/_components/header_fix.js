$(document).ready(function () {
    $(".header-menu").show();
});

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});

// var rtime;
// var timeout = false;
// var delta = 10;
// $(window).resize(function() {
//     rtime = new Date();
//     if (timeout === false) {
//         timeout = true;
//         setTimeout(resizeend, delta);
//         if ($(window).width() <= 831)
//             $(".header-menu").hide();
//         else
//             $(".header-menu").show();
//     }
// });

// function resizeend() {
//     if (new Date() - rtime < delta) {
//         setTimeout(resizeend, delta);
//     } else {
//         timeout = false;
//         $(".header-menu").show();
//     }               
// }