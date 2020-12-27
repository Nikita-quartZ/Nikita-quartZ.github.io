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
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
    });

    var mySwiper = new Swiper('.swiper-container3', {
        loop: true,
    
        navigation: {
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
        }
    });
    // Javascript для accordion
    jQuery(document).ready(function($){
        $("#my-accordion").accordionjs();
    });
    $("#my-accordion").accordionjs({
        closeAble   : false,

        closeOther  : false,

        slideSpeed  : 150,

        activeIndex : false,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.758396, 37.601309],
                zoom: 14
            });
            var myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point",
        coordinates: [55.758396, 37.601309]
    }
    });

    var myPlacemark = new ymaps.Placemark([55.758396, 37.601309], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Ellipse12.svg',
        iconImageSize: [30, 42],
        iconImageOffeset: [-3,-42],
    })
    myMap.geoObjects.add(myPlacemark); 
        }
    //Все события
    let fourthSectionButton = document.querySelector('.fourth-section-button')
    let fourthSectionBlockSecond = document.querySelector('.fourth-section-block-second')
    fourthSectionButton.addEventListener('click', function(){
        fourthSectionButton.classList.add('is-active-fourth-button')
        fourthSectionBlockSecond.classList.add('is-active-fourth-block')
    })
});