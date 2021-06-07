
if ($('div.banner li').length > 4) {
  $('div.banner ul').bxSlider({
    slideWidth: 180,
    slideMargin: 50,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    pager: false,
    auto: true,
  });
}