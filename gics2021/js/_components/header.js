$(document).ready(function () {
    $(".header-menu").show();
});

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});