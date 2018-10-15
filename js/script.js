$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        dots:false,
        speed:1000,
        fade:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:'.carousel-nav'
    });
    $('.carousel-nav').slick({
        slidesToShow:4,
        slidesToScroll:1,
        dots:true,
        centerMode:true,
        focusOnSelect:true,
        arrows:false,
        asNavFor: '.carousel'
    });
});
