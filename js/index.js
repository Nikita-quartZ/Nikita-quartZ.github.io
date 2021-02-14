window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.program__button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event){
            const week = event.currentTarget.dataset.week
            document.querySelectorAll('.program__button').forEach(function(tabCon) {
                tabCon.classList.remove('program__button-active')
            })
            document.querySelector(`[data-target="${week}"]`).classList.add('program__button-active')
        })
    })
    document.querySelectorAll('.program__button').forEach(function(tabsBtn2) {
        tabsBtn2.addEventListener('click', function(event2){
            const content = event2.currentTarget.dataset.content
            document.querySelectorAll('.program-content').forEach(function(tabCon2) {
                tabCon2.classList.remove('display-block')
            })
            document.querySelector(`[data-target="${content}"]`).classList.add('display-block')
        })
    })
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
        $('#button-link').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#third-section').offset().top }, 1000);
            e.preventDefault();
        });
    });
    document.querySelector('.cost__button1').addEventListener('click', function() {
        document.querySelector('.cost__button1').classList.add('is-none')
        document.querySelector('.cost__button-paragraph1').classList.add('is-active')
    })
    document.querySelector('.cost__button2').addEventListener('click', function() {
        document.querySelector('.cost__button2').classList.add('is-none')
        document.querySelector('.cost__button-paragraph2').classList.add('is-active')
    })
    document.querySelector('.cost__button3').addEventListener('click', function() {
        document.querySelector('.cost__button3').classList.add('is-none')
        document.querySelector('.cost__button-paragraph3').classList.add('is-active')
    })
})
