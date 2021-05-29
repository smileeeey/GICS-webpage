// https://codepen.io/summin/pen/NWpaegG

$(document).ready(function () {
  $('.multi-button').on('click', 'a', function () {   
    $(this.children).addClass('active');
    $(this).siblings().find('button').removeClass('active');

    tabid = this.id.split('-').slice(0,2).join('-');
    document.getElementById(tabid).checked = true;

    $("body").addClass("not_scroll");
  });
  
  $("#close_btn").click(function(){
    $("body").removeClass("not_scroll");
  });

  $(".tabs input").click(function () {
    btnid = this.id + "-btn"
    active_btn = document.getElementById(btnid);

    sel = '#'+btnid
    $(sel).find('button').toggleClass("active")
    $(sel).siblings().find('button').removeClass('active');
  })

});

