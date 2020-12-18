window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active');
        document.querySelector('.line-first').classList.toggle('line-active');
        document.querySelector('.line-second').classList.toggle('line-active');
        document.querySelector('.line-third').classList.toggle('line-active');
    });
    var mySwiper = new Swiper('.swiper-container1', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    
        navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
        },
    });
    var mySwiper = new Swiper('swiper-container2', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    
        navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
        },
    });
    var mySwiper = new Swiper('.swiper-container3', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    
        navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
        },
    });
    $( function() {
        $( "#accordion" ).accordion();
      } );
      
});