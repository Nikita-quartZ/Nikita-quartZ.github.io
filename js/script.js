window.addEventListener('DOMContentLoaded', function() {
    // Аккордион на мобильной версии
    document.querySelector('.acc_head6').addEventListener('click', function() {
        document.querySelector('.publication__div-borders').classList.toggle('div-borders-none');
    });
    document.querySelectorAll('.label-bord').forEach(function(tabs) {
        tabs.addEventListener('click', function(even){
            const check = even.currentTarget.dataset.check

            console.log(document.querySelector(`[data-target="${check}"]`).classList.add('div-border-active'))
        })
    })
    document.querySelectorAll('.publication__check-button').forEach(function(tabs2) {
        tabs2.addEventListener('click', function(even2){
            const chec = even2.currentTarget.dataset.chec
            
            console.log(document.querySelector(`[data-target="${chec}"]`).classList.remove('div-border-active'))
        })
    })
    // Javascript для select
    const element = document.querySelector('select');
        const choices = new Choices(element, {
        searchEnabled: false
    });
    document.querySelector('.choices__inner').addEventListener('click', function() {
        document.querySelector('.choices__inner').classList.toggle('choices__inner-active');
    });
    document.querySelector('.choices__item--selectable').addEventListener('click', function() {
        document.querySelector('.choices__inner').classList.toggle('choices__inner-active');
    });
    // Javascript для swiper
    var mySwiper = new Swiper('.swiper-container1', {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
        navigation: {
        nextEl: '.second-button-swiper1',
        prevEl: '.first-button-swiper1',
        },
        breakpoints: {
            1850: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            740: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            320: {
                slidesPerView: 1
                ,slidesPerGroup: 1
            }
        }
    });
    var mySwiper = new Swiper('.swiper-container2', {
        loop: false,
        spaceBetween: 50,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
        },
    
        navigation: {
        nextEl: '.second-button-swiper2',
        prevEl: '.first-button-swiper2',
        },
        breakpoints: {
            1850: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            740: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            320: {
                slidesPerView: 1
                ,slidesPerGroup: 1
            }
        }
    });
    var mySwiper = new Swiper('.swiper-container3', {
        loop: false,
        spaceBetween: 50,
        navigation: {
        nextEl: '.swiper-right1',
        prevEl: '.swiper-left1',
        },
        breakpoints: {
            1850: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            740: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            320: {
                slidesPerView: 1
                ,slidesPerGroup: 1
            }
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
    function accordionFunc(section){
        $(section).accordionjs({
            closeAble   : false,

            closeOther  : true,

            slideSpeed  : 150,

            activeIndex : 1,

            openSection: function( section ){},

            beforeOpenSection: function( section ){},
        });
    }
    accordionFunc("#my-accordion1")
    accordionFunc("#my-accordion2")
    accordionFunc("#my-accordion3")
    accordionFunc("#my-accordion4")
    accordionFunc("#my-accordion5")
    accordionFunc("#my-accordion6")
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
    let fourthSectionButton = document.querySelector('.events__fourth-section-button')
    let fourthSectionBlockSecond = document.querySelector('.events__fourth-section-block-second')
    fourthSectionButton.addEventListener('click', function(){
        fourthSectionButton.classList.add('is-active-fourth-button')
        fourthSectionBlockSecond.classList.add('is-active-fourth-block')
    })
    //Списки header
    // document.querySelectorAll('.header__list-children-name').forEach(function(tabsBtn1) {
    //     tabsBtn1.addEventListener('click', function(event1){
    //         const path = event1.currentTarget.dataset.path
    //         document.querySelectorAll('.header__list-painters').forEach(function(tabCon1) {
    //             tabCon1.classList.remove('list-painters-active')
    //         })
    //         document.querySelector(`[data-target="${path}"]`).classList.add('list-painters-active')

    //         const painter = event1.currentTarget.dataset.painter
    //         document.querySelectorAll('.header__list-children-name').forEach(function(tabButt) {
    //             tabButt.classList.remove('list-active')
    //         })
    //         document.querySelector(`[data-target="${painter}"]`).classList.add('list-active')
    //     })
    // })
    //Табы на разные языки
    document.querySelectorAll('.catalog__country-block').forEach(function(tabsBtn2) {
        tabsBtn2.addEventListener('click', function(event2){
            const country = event2.currentTarget.dataset.country
            document.querySelectorAll('.country-effect').forEach(function(tabCon2) {
                tabCon2.classList.remove('country-effect-active')
            })
            document.querySelector(`[data-target="${country}"]`).classList.add('country-effect-active')
        })
    })
    //Смена содержания на другой язык
    document.querySelectorAll('.catalog__country-block').forEach(function(tabsBtn4) {
        tabsBtn4.addEventListener('click', function(event4){
            const biog = event4.currentTarget.dataset.biog
            document.querySelectorAll('.catalog__foreign-block').forEach(function(tabCon22) {
                tabCon22.classList.remove('foreign-block-active')
            })
            document.querySelector(`[data-target="${biog}"]`).classList.add('foreign-block-active')

            const activ = event4.currentTarget.dataset.activ
            document.querySelectorAll('.catalog__info-painter').forEach(function(tabCons) {
                tabCons.classList.remove('info-painter-active')
            })
            document.querySelector(`[data-target="${activ}"]`).classList.add('info-painter-active')

            const active = event4.currentTarget.dataset.active
            document.querySelectorAll('.catalog__name-painter-all').forEach(function(tabCons1) {
                tabCons1.classList.remove('name-painter-all-active')
            })
            document.querySelector(`[data-target="${active}"]`).classList.add('name-painter-all-active')
        })
    })

    //Смена художественного деятеля
    document.querySelectorAll('.catalog__name-painter-all').forEach(function(tabsBtn3) {
        tabsBtn3.addEventListener('click', function(event3){
            const painters = event3.currentTarget.dataset.painters
            document.querySelectorAll('.catalog__name-painter-all').forEach(function(tabCon31) {
                tabCon31.classList.remove('name-painter-all-active')
            })
            document.querySelector(`[data-target="${painters}"]`).classList.add('name-painter-all-active')

            const info = event3.currentTarget.dataset.info
            document.querySelectorAll('.catalog__info-painter').forEach(function(tabCon4) {
                tabCon4.classList.remove('info-painter-active')
            })
            console.log(document.querySelector(`[data-target="${info}"]`).classList.add('info-painter-active'))
        })
    })
    //Плавный скролл для кнопок в меню
    function scrollClick(butt, sect){
        $(function (){
                $(butt).on('click', function(e){
                    $('html,body').stop().animate({ scrollTop: $(sect).offset().top }, 1000);
                    e.preventDefault();
                });
        });
    }
    scrollClick('#first-link', '#first-section')
    scrollClick('#second-link', '#second-section')
    scrollClick('#third-link', '#third-section')
    scrollClick('#fourth-link', '#fourth-section')
    scrollClick('#fiveth-link', '#fiveth-section')
    scrollClick('#sixth-link', '#sixth-section')
    scrollClick('#seventh-link', '#seventh-section')
    scrollClick('#eighth-link', '#seventh-section')
    // //burger
    // document.querySelector('.header__burger').addEventListener('click', function() {
    //     document.querySelector('.header__navigation').classList.add('is-active');
    // });
    // document.querySelector('.header__navigation-close').addEventListener('click', function() {
    //     document.querySelector('.header__navigation').classList.remove('is-active');
    // });
    // Аккордион на мобильной версии
    document.querySelector('.acc_head6').addEventListener('click', function() {
        document.querySelector('.publication__div-borders').classList.add('div-borders-none');
    });
    document.querySelectorAll('.label-bord').forEach(function(tabs) {
        tabs.addEventListener('click', function(even){
            const check = even.currentTarget.dataset.check

            console.log(document.querySelector(`[data-target="${check}"]`).classList.add('div-border-active'))
        })
    })
    document.querySelectorAll('.publication__check-button').forEach(function(tabs2) {
        tabs2.addEventListener('click', function(even2){
            const chec = even2.currentTarget.dataset.chec
            
            console.log(document.querySelector(`[data-target="${chec}"]`).classList.remove('div-border-active'))
        })
    })
    // search
    // document.querySelector('.header__search-open').addEventListener('focus', function() {
    //     document.querySelector('.search-div').classList.add('search-div-active');
    //     document.querySelector('.header__search-open').classList.add('search-open-focus');
    // });
    // document.querySelector('.header__search-open').addEventListener('blur', function() {
    //     setTimeout(function blur() {
    //         document.querySelector('.search-div').classList.remove('search-div-active');
    //         document.querySelector('.header__search-open').classList.remove('search-open-focus')
    //     }, 0);
    // });
    // document.querySelector('.search-input').addEventListener('focus', function() {
    //     setTimeout(function blur() {
    //         document.querySelector('.search-div').classList.add('search-div-active');
    //         document.querySelector('.header__search-open').classList.add('search-open-focus');
    //     }, 1);
    // });
    // document.querySelector('.search-submit').addEventListener('focus', function() {
    //     setTimeout(function blur() {
    //         document.querySelector('.search-div').classList.add('search-div-active');
    //         document.querySelector('.header__search-open').classList.add('search-open-focus');
    //     }, 1);
    // });
    // document.querySelector('.search-input').addEventListener('blur',function() {
    //         document.querySelector('.search-div').classList.remove('search-div-active');
    //         document.querySelector('.header__search-open').classList.remove('search-open-focus')
    // });
    // document.querySelector('.header__search-open2').addEventListener('click', function() {
    //     document.querySelector('.header__search-block').classList.add('search-block-active');
    // });
    // document.querySelector('.header__search-close2').addEventListener('click', function() {
    //     document.querySelector('.header__search-block').classList.remove('search-block-active');
    // });
});
