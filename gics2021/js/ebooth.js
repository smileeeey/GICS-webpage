$(document).ready(function () {

  $('.multi-button').on('click', 'div', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    tabid = this.firstChild.id.split('-').slice(0,2).join('-');
    console.log(tabid)

    $('.modal-title').css({"background-color": "#114577"});
    $('.modal-title label').css({"color":"#fff"});
    $('#'+tabid).prev().css({"background-color": "#d2deec"});
    $('#'+tabid).prev().children('label').css({"color":"#114577"});

    document.getElementById(tabid).checked = true;
  });

  $("#close_btn").click(function(){
    // $("body").removeClass("not_scroll");
  });

  $(".tabs input").click(function () {
    btnid = this.id + "-btn"
    active_btn = document.getElementById(btnid);

    $('.modal-title').css({"background-color": "#114577"});
    $('.modal-title label').css({"color":"#fff"});
    $(this).prev().css({"background-color": "#d2deec"});
    $(this).prev().children('label').css({"color":"#114577"});

    sel = '#'+btnid
    $('.button').parent().removeClass('active');
    $(sel).parent().toggleClass("active")
  })

});

