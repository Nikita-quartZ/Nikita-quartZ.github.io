window.addEventListener('DOMContentLoaded', function () {
  // Аккордион на мобильной версии
  document.querySelector('.acc_head6').addEventListener('click', function () {
    document.querySelector('.publication__div-borders').classList.toggle('div-borders-none');
  });
  // Javascript для select
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false
  });
  document.querySelector('.choices__inner').addEventListener('click', function () {
    document.querySelector('.choices__inner').classList.toggle('choices__inner-active');
  });
  document.querySelector('.choices__item--selectable').addEventListener('click', function () {
    document.querySelector('.choices__inner').classList.toggle('choices__inner-active');
  });
  // Javascript для swiper
  var mySwiper = new Swiper('.swiper-container1', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 54,
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.second-button-swiper1',
      prevEl: '.first-button-swiper1',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      740: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1
        , slidesPerGroup: 1
      }
    }
  });
  var mySwiper = new Swiper('.swiper-container2', {
    loop: false,
    spaceBetween: 55,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },

    navigation: {
      nextEl: '.second-button-swiper2',
      prevEl: '.first-button-swiper2',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 47
      },
      740: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 35
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
      1500: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 45
      },
      740: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1

      }
    }
  });
  var mySwiper = new Swiper('.swiper-container4', {
    loop: true,
    spaceBetween: 30,
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
  var mySwiper = new Swiper('.swiper-container6', {
    loop: true,

    pagination: {
      el: '.gallery__swiper-pagination6',
      type: 'fraction'
    },

    navigation: {
      nextEl: '.second-button-swiper6',
      prevEl: '.first-button-swiper6',
    }
  });
  // Javascript для accordion
  function accordionFunc(section) {
    $(section).accordionjs({
      closeAble: false,

      closeOther: true,

      slideSpeed: 150,

      activeIndex: 1,

      openSection: function (section) { },

      beforeOpenSection: function (section) { },
    });
  }
  accordionFunc("#my-accordion1")
  accordionFunc("#my-accordion2")
  accordionFunc("#my-accordion3")
  accordionFunc("#my-accordion4")
  accordionFunc("#my-accordion5")
  $("#my-accordion6").accordionjs({
    closeAble: true,

    closeOther: true,

    slideSpeed: 150,

    activeIndex: false,

    openSection: function (section) { },

    beforeOpenSection: function (section) { },
  });
  //Javascript для Яндекс.Карт
  ymaps.ready(init);
  function init() {
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
      iconImageOffeset: [-3, -42],
    })
    myMap.geoObjects.add(myPlacemark);
  }
  //Все события
  let fourthSectionButton = document.querySelector('.events__focus-button')
  let fourthSectionBlockSecond = document.querySelector('.events__fourth-section-block-second')
  fourthSectionButton.addEventListener('click', function () {
    fourthSectionButton.classList.add('is-active-fourth-button')
    fourthSectionBlockSecond.classList.add('is-active-fourth-block')
  })
  //Табы на разные языки
  document.querySelectorAll('.catalog__country-block').forEach(function (tabsBtn2) {
    tabsBtn2.addEventListener('click', function (event2) {
      const country = event2.currentTarget.dataset.country
      document.querySelectorAll('.country-effect').forEach(function (tabCon2) {
        tabCon2.classList.remove('country-effect-active')
      })
      document.querySelector(`[data-target="${country}"]`).classList.add('country-effect-active')
    })
  })
  //Смена содержания на другой язык
  document.querySelectorAll('.catalog__country-block').forEach(function (tabsBtn4) {
    tabsBtn4.addEventListener('click', function (event4) {
      const biog = event4.currentTarget.dataset.biog
      document.querySelectorAll('.catalog__foreign-block').forEach(function (tabCon22) {
        tabCon22.classList.remove('foreign-block-active')
      })
      document.querySelector(`[data-target="${biog}"]`).classList.add('foreign-block-active')

      const activ = event4.currentTarget.dataset.activ
      document.querySelectorAll('.catalog__info-painter').forEach(function (tabCons) {
        tabCons.classList.remove('info-painter-active')
      })
      document.querySelector(`[data-target="${activ}"]`).classList.add('info-painter-active')

      const active = event4.currentTarget.dataset.active
      document.querySelectorAll('.catalog__name-painter-all').forEach(function (tabCons1) {
        tabCons1.classList.remove('name-painter-all-active')
      })
      document.querySelector(`[data-target="${active}"]`).classList.add('name-painter-all-active')
    })
  })

  //Смена художественного деятеля
  document.querySelectorAll('.catalog__name-painter-all').forEach(function (tabsBtn3) {
    tabsBtn3.addEventListener('click', function (event3) {
      const painters = event3.currentTarget.dataset.painters
      document.querySelectorAll('.catalog__name-painter-all').forEach(function (tabCon31) {
        tabCon31.classList.remove('name-painter-all-active')
      })
      document.querySelector(`[data-target="${painters}"]`).classList.add('name-painter-all-active')

      const info = event3.currentTarget.dataset.info
      document.querySelectorAll('.catalog__info-painter').forEach(function (tabCon4) {
        tabCon4.classList.remove('info-painter-active')
      })
      console.log(document.querySelector(`[data-target="${info}"]`).classList.add('info-painter-active'))
    })
  })
  //Плавный скролл для кнопок в меню
  function scrollClick(butt, sect) {
    $(function () {
      $(butt).on('click', function (e) {
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
  scrollClick('.catalog__link', '#second-section')
  // Табы в header
  document.querySelectorAll('.header__painters-children-name').forEach(function (tabsBtn3) {
    tabsBtn3.addEventListener('click', function (event3) {
      const painter = event3.currentTarget.dataset.painter
      let booll = 0
      if (document.querySelector(`[data-target="${painter}"]`).classList.contains('list-painters-active')) {
        booll = 1
      } else {
        booll = 0
      }
      document.querySelectorAll('.header__list-painters').forEach(function (tabCon31) {
        tabCon31.classList.remove('list-painters-active')
      })
      if (booll == 0) {
        document.querySelector(`[data-target="${painter}"]`).classList.add('list-painters-active')
      }
    })
  })
  document.querySelectorAll('.header__painters-children-name').forEach(function (tabsBtn6) {
    tabsBtn6.addEventListener('click', function (event6) {
      const paint = event6.currentTarget.dataset.paint
      let booll = 0
      if (document.querySelector(`[data-target="${paint}"]`).classList.contains('header__painters-active')) {
        booll = 1
      } else {
        booll = 0
      }
      document.querySelectorAll('.header__painters-children-name').forEach(function (tabCon31) {
        tabCon31.classList.remove('header__painters-active')
      })
      if (booll == 0) {
        document.querySelector(`[data-target="${paint}"]`).classList.add('header__painters-active')
      }
    })
  })
  document.querySelectorAll('.header__painters-children-name').forEach(function (tabsBtn7) {
    tabsBtn7.addEventListener('click', function (event7) {
      const focu = event7.currentTarget.dataset.focu
      let booll = 0
      if (document.querySelector(`[data-target="${focu}"]`).classList.contains('header__painters-focus-block-active')) {
        booll = 1
      } else {
        booll = 0
      }
      document.querySelectorAll('.header__painters-focus-block').forEach(function (tabCon31) {
        tabCon31.classList.remove('header__painters-focus-block-active')
      })
      if (booll == 0) {
        document.querySelector(`[data-target="${focu}"]`).classList.add('header__painters-focus-block-active')
      }
    })
  })
  document.querySelector("#checks1").focus();
  //burger
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__navigation').classList.add('is-active');
  });
  document.querySelector('.header__navigation-close').addEventListener('click', function () {
    document.querySelector('.header__navigation').classList.remove('is-active');
  });
  // Аккордион на мобильной версии
  document.querySelectorAll('.label-bord').forEach(function (tabs) {
    let k = 0
    tabs.addEventListener('click', function (even) {
      if (k % 2 == 0) {
        const check = even.currentTarget.dataset.check
        console.log(document.querySelector(`[data-target="${check}"]`).classList)
        document.querySelector(`[data-target="${check}"]`).classList.toggle('div-border-active')
      }
      k += 1
    })
  })
  document.querySelectorAll('.publication__check-button').forEach(function (tabs2) {
    tabs2.addEventListener('click', function (even2) {
      const chec = even2.currentTarget.dataset.chec

      document.querySelector(`[data-target="${chec}"]`).classList.remove('div-border-active')
    })
  })
  // search
  function OpenCloseSearch() {
    setTimeout (() => {
      if ((document.querySelector('.header__search-submit') === document.activeElement || document.querySelector('.header__search-input') === document.activeElement) && (window.screen.width > 985)) {
        document.querySelector('.header__search-open').classList.add('search-open-focus');
        document.querySelector('.header__search-input').classList.add('search-input-focus');
        document.querySelector('.header__search-submit').classList.add('header__search-submit-active');
        console.log(document.querySelector('.header__search-submit') === document.activeElement, document.querySelector('.header__search-input') === document.activeElement)
      } else if (window.screen.width > 985) {
        document.querySelector('.header__search-open').classList.remove('search-open-focus');
        document.querySelector('.header__search-input').classList.remove('search-input-focus');
        document.querySelector('.header__search-submit').classList.remove('header__search-submit-active');
        console.log(document.querySelector('.header__search-submit') === document.activeElement, document.querySelector('.header__search-input') === document.activeElement)
      }
    }, 100)
  }
  document.querySelector('.header__search-submit').addEventListener('focus', () => {
    OpenCloseSearch()
  });
  document.querySelector('.header__search-submit').addEventListener('blur', () => {
    OpenCloseSearch()
  });
  document.querySelector('.header__search-input').addEventListener('blur', () => {
    OpenCloseSearch()
  });
  document.querySelector('.header__search-submit').addEventListener('click', () => {
    if (window.screen.width < 985) {
      document.querySelector('.header__search-open').classList.add('search-open-focus');
      document.querySelector('.header__search-input').classList.add('search-input-focus');
      document.querySelector('.header__search-submit').classList.add('header__search-submit-active');
      document.querySelector('.header__btn-close').classList.add('header__btn-close-active');
    }
  });
  document.querySelector('.header__btn-close').addEventListener('click', () => {
    if (window.screen.width < 985) {
      document.querySelector('.header__search-open').classList.remove('search-open-focus');
      document.querySelector('.header__search-input').classList.remove('search-input-focus');
      document.querySelector('.header__search-submit').classList.remove('header__search-submit-active');
      document.querySelector('.header__btn-close').classList.remove('header__btn-close-active');
    }
  });
  // document.querySelector('.header__search-input').addEventListener('blur', () => {
  //     setTimeout(() => {
  //         document.querySelector('.header__search-open').classList.remove('search-open-focus');
  //         document.querySelector('.header__search-input').classList.remove('search-input-focus');
  //         document.querySelector('.header__search-submit').classList.remove('header__search-submit-active')}, 500);
  // });
  document.querySelector('.events__fourth-section-button').addEventListener("focus", () => {
    document.querySelector(".events__focus-button").classList.add("contact__focus-button-active")
  })
  document.querySelector('.events__fourth-section-button').addEventListener("blur", () => {
    document.querySelector(".events__focus-button").classList.remove("contact__focus-button-active")
  })

  const form = document.querySelector('#frmContact');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // fetch
    
      let formData = new FormData(form);
    
      fetch('../php/mail.php', { method: 'POST', body: formData })
        .then(() => console.log('отправлено'))
        .catch(() => console.log('some error'));
      form.reset();
    
    });
    tippy('#i-block1', {
      trigger: 'focus',
      content: '<span class="tooltip-all">Пример современных тенденций - современная методология разработки</span>',
      allowHTML: true,
      theme: 'main',
    });
    tippy('#i-block2', {
      trigger: 'focus',
      content: '<span class="tooltip-all">Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции</span>',
      allowHTML: true,
      theme: 'main',
    });
    tippy('#i-block3', {
      trigger: 'focus',
      content: '<span class="tooltip-all">В стремлении повысить качество</span>',
      allowHTML: true,
      theme: 'main',
    });
});
