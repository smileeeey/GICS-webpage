
if ($("div.introBnr li").length > 4) {
    $("div.introBnr ul").bxSlider({
        slideWidth: 200,
        slideMargin: 50,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        pager: false,
        auto: true
    });
}
