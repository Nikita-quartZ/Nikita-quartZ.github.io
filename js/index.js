window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active');
        document.querySelector('.line-first').classList.toggle('line-active');
        document.querySelector('.line-second').classList.toggle('line-active');
        document.querySelector('.line-third').classList.toggle('line-active');
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
      } );
});