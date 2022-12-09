$(function() {
    $('.owl_carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    var countdown = 30 * 60 * 1000;
    var timerId = setInterval(function(){
        countdown -= 1000;
        var min = Math.floor(countdown / (60 * 1000));
        var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  

        if (countdown <= 0) {
            alert("30 min!");
            clearInterval(timerId);
        } 
        else {
            $(".timer").html(min + " : " + sec);
        }

    }, 1000); //1000ms. = 1sec.
    $("#downBtn").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".orders").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
    $("#down").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".orders").offset().top // класс объекта к которому приезжаем
        }, 1000); // Скорость прокрутки
    });
    $("#num").keypress(function (e){
        var charCode = (e.which) ? e.which : e.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
    });
})