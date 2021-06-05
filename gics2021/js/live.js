$(document).ready(function () {
    $('.multi-button').on('click', 'div', function () {   
      console.log("hihi");
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });
  });
  
  