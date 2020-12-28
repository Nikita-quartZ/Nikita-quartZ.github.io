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
    //Javascript для Яндекс.Карт
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
    //Списки header
    document.querySelectorAll('.selects-children-name').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event1){
            const path = event1.currentTarget.dataset.path
            document.querySelectorAll('.select-painters').forEach(function(tabCon) {
                tabCon.classList.remove('select-painters-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('select-painters-active')

            const painter = event1.currentTarget.dataset.painter
            document.querySelectorAll('.selects-children-name').forEach(function(tabButt) {
                tabButt.classList.remove('selects-active')
            })
            document.querySelector(`[data-target="${painter}"]`).classList.add('selects-active')
        })
    })
    //Табы на разные языки
    document.querySelectorAll('.country-block').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event2){
            const country = event2.currentTarget.dataset.country
            document.querySelectorAll('.country-effect').forEach(function(tabCon) {
                tabCon.classList.remove('country-effect-active')
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('country-effect-active')
        })
    })
});