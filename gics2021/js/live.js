$(document).ready(function () {
    $('.multi-button').on('click', 'a', function () {   
      $(this.children).addClass('active');
      $(this).siblings().find('button').removeClass('active');
  
    });
  });
  
  