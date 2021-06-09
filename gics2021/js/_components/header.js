$(document).ready(function () {
    var curUrl = window.location.pathname;
    var parsed_url = curUrl.split('/');

    if (parsed_url[3] === undefined) {
        document.querySelector(".header-item").classList.add('active-header');
    }else{
        var dir = parsed_url[2];
        switch(dir){
            case "live":
                document.querySelectorAll(".header-item")[1].classList.add('active-header');
                break;
            case "faculty":
                document.querySelectorAll(".header-item")[2].classList.add('active-header');
                break;
            case "vod":
                document.querySelectorAll(".header-item")[3].classList.add('active-header');
                break;
            case "eposter":
                document.querySelectorAll(".header-item")[4].classList.add('active-header');
                break;
            case "exhibition":
            case "ebooth":
                document.querySelectorAll(".header-item")[5].classList.add('active-header');
                break;
            case "awards":
                document.querySelectorAll(".header-item")[6].classList.add('active-header');
                break;
            case "history":
                document.querySelectorAll(".header-item")[7].classList.add('active-header');
                break;
        }        
    }
    
    
    $(".header-menu").show();
});

$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
    $("body").toggleClass("not_scroll");
});
