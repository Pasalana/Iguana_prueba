$(document).ready(function () {
    $("p").click(function () {
        $(this).css({
            "color": "purple",
        })
    })

    $("p").dblclick(function () {
        $(this).html("<h1>Ahora soy un H1!!!</h1>");
    })

    $("h3").hover(function () {
        $(this).hide("slow");
    })


    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    //Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Toogle de la card
    $(".card-title").click(function(){
        $('.card-text').toggle();
    });

    $("#enviarCorreo").click(function(){
        alert('Ir a alguna parte');
    });


})


// funcionn de Modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

