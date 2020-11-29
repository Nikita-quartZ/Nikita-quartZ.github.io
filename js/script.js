window.addEventListener('DOMContentLoaded', function() {
    // Javascript для select
    const element = document.querySelector('select');
        const choices = new Choices(element, {
        searchEnabled: false
    });
    // Javascript для swiper
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
    // Javascript для accordion
    jQuery(document).ready(function($){
        $("#my-accordion").accordionjs();
    });
    $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : false,

        // Close other sections.(data-close-other)
        closeOther  : false,

        // Animation Speed.(data-slide-speed)
        slideSpeed  : 150,

        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : false,

        // Callback when a section is open
        openSection: function( section ){},

        // Callback before a section is open
        beforeOpenSection: function( section ){},
    });
});