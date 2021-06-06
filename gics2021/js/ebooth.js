$(document).ready(function () {

  $('.multi-button').on('click', 'div', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    tabid = this.firstChild.id.split('-').slice(0,2).join('-');
    ready_modal(tabid);
  });

  $(".tabs input").click(function () {
    ready_modal(this.id);
  })

});

function ready_modal(tabid){
  var h_title = $('.modal-title').height();
  $('.tab-2').css({"height": h_title});
  console.log($('#'+tabid).parent())
  $('#'+tabid).parent().css({"height": "100%"});

  $('.modal-title').css({"background-color": "#114577"});
  $('.modal-title label').css({"color":"#fff"});

  $('#'+tabid).prev().css({"background-color": "#d2deec"});
  $('#'+tabid).prev().children('label').css({"color":"#114577"});

  $('.button').parent().removeClass('active');
  $('#'+tabid+"-btn").parent().toggleClass("active")

  document.getElementById(tabid).checked = true;
}

function areaClickEvent(type){
  if(type == "company"){
    var tabid = "tab2-1";
  }else if (type.includes("brochure")){
    var tabid = "tab2-2";
  }else{
    alert("Error");
  }
  
  ready_modal(tabid);
  window.open(window.location.pathname+'#brochures-modal', '_self');
}