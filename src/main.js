$(document).ready(function(){
    $('.slider__items').owlCarousel({
        loop:true,
        responsiveClass:true,
        items: 1,
        autoHeight:true,
        margin:10,
        nav:true,
        animateOut: 'fadeOut'
        // responsive:{
        //     0:{
        //         items:1,
        //         nav:true
        //     },
        //     600:{
        //         items:3,
        //         nav:false
        //     },
        //     1000:{
        //         items:5,
        //         nav:true,
        //         loop:false
        //     }
        // }
    })

    $(".burger").on('click', function () {
        $(".header__wrap nav").show();
        $(".close-menu").show();
    })
    $(".close-menu").on('click', function () {
        $(".header__wrap nav").hide();
    })
});