// https://codepen.io/summin/pen/NWpaegG

$(document).ready(function () {
  $('.multi-button').on('click', 'a', function () {
    // $(this).addClass('active').siblings().removeClass('active');
    $(this.children).addClass('active');
    $(this).siblings().find('button').removeClass('active');
  });
});