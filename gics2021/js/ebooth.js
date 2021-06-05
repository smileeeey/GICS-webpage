// https://codepen.io/summin/pen/NWpaegG

$(document).ready(function () {

  $('.multi-button').on('click', 'div', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    tabid = this.firstChild.id.split('-').slice(0,2).join('-');
    console.log(tabid)
    document.getElementById(tabid).checked = true;

    // let label = $(`label[for=${tabid}]`);
    // $(`label[for=${tabid}]`).css({"background-color": "#d2deec"});
    // $(`label[for=${tabid}]`).css({"color": "114577"});


  });

  // $('.multi-button').on('click', 'a', function () {   
  //   console.log(window.scrollY)
  //   $(this.children).addClass('active');
  //   $(this).siblings().find('button').removeClass('active');

  //   tabid = this.id.split('-').slice(0,2).join('-');
  //   document.getElementById(tabid).checked = true;

  // });
  

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
    // $(sel).parent().siblings().firstChild.removeClass('active');
  })

});

