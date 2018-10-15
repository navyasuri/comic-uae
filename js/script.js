$(document).ready(function(){
    $('.carousel').slick({
        arrows: true,
        dots:true,
        speed:1000,
        fade:false,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:'.carousel-nav'
    });
    $('.carousel-nav').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow:3,
        slidesToScroll:1,
        dots:false,
        focusOnSelect:true,
        arrows:false,
        asNavFor: '.carousel', 
    });
});
