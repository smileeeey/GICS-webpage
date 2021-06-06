$(document).ready(function () {
    $(".tabs input").click(function () {
        ready_modal(this.id);
    })

});

function ready_modal(tabid) {
    var h_title = $('.modal-title').height();
    $('.tab-2').css({ "height": h_title });
    console.log($('#' + tabid).parent())
    $('#' + tabid).parent().css({ "height": "100%" });

    $('.modal-title').css({ "background-color": "#114577" });
    $('.modal-title label').css({ "color": "#fff" });

    $('#' + tabid).prev().css({ "background-color": "#d2deec" });
    $('#' + tabid).prev().children('label').css({ "color": "#114577" });

    document.getElementById(tabid).checked = true;
}

function areaClickEvent(type) {
    ready_modal("tab2-1");
    window.open(window.location.pathname + '#brochures-modal', '_self');
}