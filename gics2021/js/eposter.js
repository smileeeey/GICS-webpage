$(document).ready(function(){
    var like_count = 9;
    $("#like-count").html(like_count);
});
const like = document.querySelector('.like-button')

like.addEventListener('click', () => {
    var like_count = parseInt(document.getElementById("like-count").innerHTML, 10);
    if (like.classList.contains('liked')){
        document.getElementById("like-count").innerHTML = like_count-1;
        console.log("sub");
    }else{
        document.getElementById("like-count").innerHTML = like_count+1;
        console.log("add");
    }
    like.classList.toggle('liked');
})
