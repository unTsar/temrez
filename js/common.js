$(document).ready(function(){

    $(".carousel").onepage_scroll({
        sectionContainer: ".block",
        easing: "ease", 
        animationTime: 1000,            
        direction: "vertical",
        pagination: false            
    });
    $('#btn-req').click(function(){
        $(".carousel").moveTo(6);
    });


    $('select').wSelect();
    $('.sel1').append('<option value="Поставить новый кран1">Поставить новый кран1</option>').wSelect('reset');
    $('.sel1').append('<option value="Поставить новый кран2">Поставить новый кран2</option>').wSelect('reset');
    $('.sel2').append('<option value="Подвесная кран-балка1">Подвесная кран-балка1</option>').wSelect('reset');
    $('.sel2').append('<option value="Подвесная кран-балка2">Подвесная кран-балка2</option>').wSelect('reset');

    $('input[type="text"], input[type="name"], input[type="email"]').wInput();


    // Owl

    $(".owl-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        touchDrag: false,
        mouseDrag: false,
        pullDrag: false
    });

    $("#btn-csl1").mouseenter(function() {
        $(this).find(".underline").css({"opacity":"1", "right":"-10px"})
    })
    $("#btn-csl1").mouseleave(function() {
        $(this).find(".underline").css("opacity", "0")
    }) 
    $("#btn-csl2").mouseenter(function() {
        $(this).find(".underline").css({"opacity":"1", "right":"-10px"})
    })
    $("#btn-csl2").mouseleave(function() {
        $(this).find(".underline").css("opacity", "0")
    }) 
    $("#btn-csl3").mouseenter(function() {
        $(this).find(".underline").css({"opacity":"1", "right":"-10px"})
    })
    $("#btn-csl3").mouseleave(function() {
        $(this).find(".underline").css("opacity", "0")
    })

    $("#btn-csl1").click(function() {
        $(".owl-carousel").trigger('to.owl.carousel', [0, 500])
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item1").css("position", "relative")
    })
    $("#btn-csl2").click(function() {
        $(".owl-carousel").trigger('to.owl.carousel', [1, 500])
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item1").css("position", "relative")
    })
    $("#btn-csl3").click(function() {
        $(".owl-carousel").trigger('to.owl.carousel', [2, 500])
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item1").css("position", "relative")

    })

    
    $(".slide-item1").mouseenter(function() {
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item1").css("position", "relative")
        $(".box-item1").css("opacity", "1")
    })
    $(".slide-item2").mouseenter(function() {
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item2").css("position", "relative")
        $(".box-item2").css("opacity", "1")
    })
    $(".slide-item3").mouseenter(function() {
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item3").css("position", "relative")
        $(".box-item3").css("opacity", "1")
    })
    $(".slide-item4").mouseenter(function() {
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item4").css("position", "relative")
        $(".box-item4").css("opacity", "1")
    })
    $(".slide-item5").mouseenter(function() {
        $(".box-item").css({"opacity":"0", "position": "absolute"})
        $(".box-item5").css("position", "relative")
        $(".box-item5").css("opacity", "1")
    })

});
