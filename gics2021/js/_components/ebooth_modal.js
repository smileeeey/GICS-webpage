
// $(document).ready(function() {
  

	  
//     var numItems = $('li.fancyTab').length;
		
// 			  if (numItems == 5){
// 					$("li.fancyTab").width('20%');
// 				}
// 			  if (numItems == 4){
// 					$("li.fancyTab").width('15%');
// 				}
// 			  if (numItems == 3){
// 					$("li.fancyTab").width('33.3%');
// 				}
// 			  if (numItems == 2){
// 					$("li.fancyTab").width('50%');
// 				}
		  
	 

	
// 		});

// $(window).load(function() {

//   $('.fancyTabs').each(function() {

//     var highestBox = 0;
//     $('.fancyTab a', this).each(function() {

//       if ($(this).height() > highestBox)
//         highestBox = $(this).height();
//     });

//     $('.fancyTab a', this).height(highestBox);

//   });
// });

// $(function() {

//     var toolbox = $('.tabs'),
//         height = toolbox.height(),
//         scrollHeight = toolbox.get(0).scrollHeight;
  
//     toolbox.bind('mousewheel', function(e, d) {
//       if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
//         e.preventDefault();
//       }
//     });
  
// });

// var posY;

// $(".bnt_open").on("click", function(e){
//     posY = $(window).scrollTop();
    
//     $("html, body").addClass("not_scroll");
//     $(".brochures-modal").css("display","block");
//     $(".modal-body").css("top",-posY);
// });

// $(".bnt_close").on("click", function(){
//     $("html, body").removeClass("not_scroll");
//     $(".brochures-modal").css("display","none");
//     posY = $(window).scrollTop(posY);
// });

// $("html, body").addClass("not_scroll");


// var rtime;
// var delta = 400;

// $(".tabs input").click(function () {
//     id = this.id + "-context"
//     document.getElementById(id).style.display = "block";
//     // $('input:radio[name="tabs-two"]').each(function () {
//     // });

//     setTimeout(clickend, delta);
// })

// function clickend() {
//     $('input:radio[name="tabs-two"]').each(function () {
//         if (this.checked) {
//             id = this.id+"-context"
//             console.log(id);
//             document.getElementById(id).style.display = "block";
//             console.log($(id));
//         } else {
//             id = this.id+"-context"
//             document.getElementById(id).style.display = "none";
//             console.log("hide");
//         }
//     });
// }