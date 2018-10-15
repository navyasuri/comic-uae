$(document).ready(function(){
    
    // we use slickjs to create sliders. the source file is included. originally by Ken Wheeler.
    // Create the main slider with this function - link it to the other slider so they sync nicely
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
    
    // Create the bottom slider that is used to naviagte the main slider - link and sync too
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
