
var videos = [];

videos[0] = 'https://www.youtube.com/embed/pEuwMEeh2ac?autoplay=1&controls=1';
videos[1] = 'https://www.youtube.com/embed/GA9GigGuf24?autoplay=1&controls=1';
videos[2] = 'https://www.youtube.com/embed/sfNfEDYj2Ew?autoplay=1&controls=1';
videos[3] = 'https://www.youtube.com/embed/Qni9o9AHqEw?autoplay=1&controls=1';
videos[4] = 'https://www.youtube.com/embed/FjHGZj2IjBk?autoplay=1&controls=1';

$(document).ready(function () {
  $('.multi-button').on('click', 'div', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    let idx = this.firstChild.id.substr(5, 1);

    document.getElementById("video").setAttribute("src", videos[idx]);
    // document.getElementById("video").remove();
    // var iframe = document.createElement('iframe');
    // iframe.setAttribute('id', "video");
    // iframe.setAttribute('src', videos[idx]);
    // iframe.setAttribute('title',"YouTube video player");
    // iframe.setAttribute('frameborder','0');
    // iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');      

    // document.getElementById("video-wrapper").appendChild(iframe);
  });
});

