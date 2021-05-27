$(function () {
  /*스크롤바 위치에 따른 헤더 고정*/
  $(window).scroll(function () {
    var scrPos = $(this).scrollTop();

    if ($(this).scrollTop() >= 100) {
      $('.header, .hd-blank').addClass('active');
    } else {
      $('.header, .hd-blank').removeClass('active');
    }
  });
});
