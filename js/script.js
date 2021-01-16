window.addEventListener('DOMContentLoaded', function() {
    // Javascript для select
    const element = document.querySelector('select');
        const choices = new Choices(element, {
        searchEnabled: false
    });
    // Javascript для swiper
    
    var mySwiper = new Swiper('.swiper-container1', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper1',
        prevEl: '.first-button-swiper1',
        }
    });
    var mySwiper = new Swiper('.swiper-container11', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper2',
        prevEl: '.first-button-swiper2',
        }
    });
    var mySwiper = new Swiper('.swiper-container13', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination13',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper13',
        prevEl: '.first-button-swiper13',
        }
    });
    var mySwiper = new Swiper('.swiper-container2', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper2',
        prevEl: '.first-button-swiper2',
        }
    });
    var mySwiper = new Swiper('.swiper-container12', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper2',
        prevEl: '.first-button-swiper2',
        }
    });
    var mySwiper = new Swiper('.swiper-container22', {
        loop: true,
    
        pagination: {
        el: '.swiper-pagination2',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper21',
        prevEl: '.first-button-swiper21',
        }
    });
    var mySwiper = new Swiper('.swiper-container3', {
        loop: true,
    
        navigation: {
        nextEl: '.swiper-right1',
        prevEl: '.swiper-left1',
        }
    });
    var mySwiper = new Swiper('.swiper-container31', {
        loop: true,
    
        navigation: {
        nextEl: '.swiper-right2',
        prevEl: '.swiper-left2',
        }
    });
    var mySwiper = new Swiper('.swiper-container33', {
        loop: true,
    
        navigation: {
        nextEl: '.swiper-right3',
        prevEl: '.swiper-left3',
        }
    });
    var mySwiper = new Swiper('.swiper-container4', {
        loop: true,

        pagination: {
            el: '.swiper-pagination4',
            type: 'bullets',
            clickable: 'true'
            },
    
        navigation: {
        nextEl: '.swiper-right2',
        prevEl: '.swiper-left2',
        }
    });
    // Javascript для accordion
    $("#my-accordion1").accordionjs({
        closeAble   : false,

        closeOther  : true,

        slideSpeed  : 150,

        activeIndex : 1,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    $("#my-accordion2").accordionjs({
        closeAble   : false,

        closeOther  : false,

        slideSpeed  : 150,

        activeIndex : false,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    $("#my-accordion3").accordionjs({
        closeAble   : false,

        closeOther  : false,

        slideSpeed  : 150,

        activeIndex : false,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    $("#my-accordion4").accordionjs({
        closeAble   : false,

        closeOther  : true,

        slideSpeed  : 150,

        activeIndex : [1 , 8],

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    $("#my-accordion5").accordionjs({
        closeAble   : false,

        closeOther  : false,

        slideSpeed  : 150,

        activeIndex : false,

        openSection: function( section ){},

        beforeOpenSection: function( section ){},
    });
    $("#my-accordion6").accordionjs({
        closeAble   : false,
        closeOther  : true,
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
    document.querySelectorAll('.selects-children-name').forEach(function(tabsBtn1) {
        tabsBtn1.addEventListener('click', function(event1){
            const path = event1.currentTarget.dataset.path
            document.querySelectorAll('.select-painters').forEach(function(tabCon1) {
                tabCon1.classList.remove('select-painters-active')
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
    document.querySelectorAll('.country-block').forEach(function(tabsBtn2) {
        tabsBtn2.addEventListener('click', function(event2){
            const country = event2.currentTarget.dataset.country
            document.querySelectorAll('.country-effect').forEach(function(tabCon2) {
                tabCon2.classList.remove('country-effect-active')
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('country-effect-active')
        })
    })
    //Смена содержания на другой язык
    document.querySelectorAll('.country-block').forEach(function(tabsBtn4) {
        tabsBtn4.addEventListener('click', function(event4){
            const biog = event4.currentTarget.dataset.biog
            document.querySelectorAll('.foreign-block').forEach(function(tabCon22) {
                tabCon22.classList.remove('foreign-block-active')
            })
            document.querySelector(`[data-target="${biog}"]`).classList.add('foreign-block-active')

            const activ = event4.currentTarget.dataset.activ
            document.querySelectorAll('.info-painter').forEach(function(tabCons) {
                tabCons.classList.remove('info-painter-active')
            })
            document.querySelector(`[data-target="${activ}"]`).classList.add('info-painter-active')

            const active = event4.currentTarget.dataset.active
            document.querySelectorAll('.name-painter-all').forEach(function(tabCons1) {
                tabCons1.classList.remove('name-painter-all-active')
            })
            document.querySelector(`[data-target="${active}"]`).classList.add('name-painter-all-active')
        })
    })

    //Смена художественного деятеля
    document.querySelectorAll('.name-painter-all').forEach(function(tabsBtn3) {
        tabsBtn3.addEventListener('click', function(event3){
            const painters = event3.currentTarget.dataset.painters
            document.querySelectorAll('.name-painter-all').forEach(function(tabCon31) {
                tabCon31.classList.remove('name-painter-all-active')
            })
            document.querySelector(`[data-target="${painters}"]`).classList.add('name-painter-all-active')

            const info = event3.currentTarget.dataset.info
            document.querySelectorAll('.info-painter').forEach(function(tabCon4) {
                tabCon4.classList.remove('info-painter-active')
            })
            console.log(document.querySelector(`[data-target="${info}"]`).classList.add('info-painter-active'))
        })
    })
    //Плавный скролл для кнопок в меню
    $(function(){
        $('#first-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#first-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#second-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#second-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#third-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#third-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#fourth-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#fourth-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#fiveth-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#fiveth-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#sixth-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#sixth-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#seventh-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#seventh-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    $(function(){
        $('#eighth-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#seventh-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    //Валидация формы
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);
    new JustValidate('.form-for-call', {
        rules: {
          name: {
            required: true,
            minLength: 2,
            maxLength: 50
          },
          tel: {
            required: true,
            function (name, value) {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
          },
          mail: {
            required: true,
            email: true
          }
        },
        messages: {
            email: {
            required: 'Поле обязательно для ввода'
            }
        }
    });
    //burger
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.menu').classList.add('is-active');
    });
    document.querySelector('.menu-close').addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('is-active');
    });
    // Аккордион на мобильной версии
    document.querySelector('.acc_head6').addEventListener('click', function() {
        document.querySelector('.div-borders').classList.toggle('div-borders-none');
    });
    document.querySelectorAll('.label-bord').forEach(function(tabs) {
        tabs.addEventListener('click', function(even){
            const check = even.currentTarget.dataset.check

            console.log(document.querySelector(`[data-target="${check}"]`).classList.add('div-border-active'))
        })
    })
    document.querySelectorAll('.check-button').forEach(function(tabs2) {
        tabs2.addEventListener('click', function(even2){
            const chec = even2.currentTarget.dataset.chec
            
            console.log(document.querySelector(`[data-target="${chec}"]`).classList.remove('div-border-active'))
        })
    })
    // search
    document.querySelector('.search-open').addEventListener('focus', function() {
        document.querySelector('.search-div').classList.add('search-div-active');
        document.querySelector('.search-open').classList.add('search-open-focus');
    });
    document.querySelector('.search-open').addEventListener('blur', function() {
        setTimeout(function blur() {
            document.querySelector('.search-div').classList.remove('search-div-active');
            document.querySelector('.search-open').classList.remove('search-open-focus')
        }, 0);
    });
    document.querySelector('.search-input').addEventListener('focus', function() {
        setTimeout(function blur() {
            document.querySelector('.search-div').classList.add('search-div-active');
            document.querySelector('.search-open').classList.add('search-open-focus');
        }, 1);
    });
    document.querySelector('.search-submit').addEventListener('focus', function() {
        setTimeout(function blur() {
            document.querySelector('.search-div').classList.add('search-div-active');
            document.querySelector('.search-open').classList.add('search-open-focus');
        }, 1);
    });
    document.querySelector('.search-input').addEventListener('blur',function() {
            document.querySelector('.search-div').classList.remove('search-div-active');
            document.querySelector('.search-open').classList.remove('search-open-focus')
    });
    document.querySelector('.search-open2').addEventListener('click', function() {
        document.querySelector('.search-block').classList.add('search-block-active');
    });
    document.querySelector('.search-close2').addEventListener('click', function() {
        document.querySelector('.search-block').classList.remove('search-block-active');
    });
    document.querySelector('.search-open3').addEventListener('click', function() {
        document.querySelector('.search-block3').classList.add('search-block-active');
        document.querySelector('.search-mobile').classList.add('search-block-active');
        document.querySelector('.search-close3').classList.add('search-block-active');
        document.querySelector('.search-open3').classList.add('search-blocks-disable');
    });
    document.querySelector('.search-close3').addEventListener('click', function() {
        document.querySelector('.search-block3').classList.remove('search-block-active');
        document.querySelector('.search-mobile').classList.remove('search-block-active');
        document.querySelector('.search-close3').classList.remove('search-block-active');
        document.querySelector('.search-open3').classList.remove('search-blocks-disable');
    });
});
