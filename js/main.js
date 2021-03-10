$(function () {
    'use strict';
    var wind = $(window);
    // scrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -80, // offste (in px) for fixed top navigation
    });

    // navbar scrolling background
    wind.on('scroll', function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $('.navbar'),
            navbloglogo = $('.blog-nav .logo> img'),
            logo = $('.navbar .logo> img');

        if (bodyScroll > 100) {
            navbar.addClass('nav-scroll');
            // logo.attr('src', 'img/logo-dark.png');
        } else {
            navbar.removeClass('nav-scroll');
            logo.attr('src', 'img/logo.svg');
            // navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });

    // close navbar-collapse when a  clicked
    $('.navbar-nav a').on('click', function () {
        $('.navbar-collapse').removeClass('show');
    });

    // sections background image from data background
    var pageSection = $('.bg-img, section');
    pageSection.each(function (indx) {
        if ($(this).attr('data-background')) {
            $(this).css(
                'background-image',
                'url(' + $(this).data('background') + ')'
            );
        }
    });

    // === owl-carousel === //

    // Team owlCarousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: false,
        autoplay: true,

        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });

    // clients owlCarousel
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1500,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 4,
            },
        },
    });

    $('.portfolio-container .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        // margin: 30,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
    });

    // video owl

    $('.owl-videos .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 5000, //Время смены слайда
        autoplayHoverPause: true, //Остановка при ховере
        dragEndSpeed: 5000, //Время притягивания к краю
        responsive: {
            //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 3,
                margin: 10,
            },
            376: {
                items: 3,
                margin: 10,
                stagePadding: 50,
            },
            580: {
                items: 3,
                margin: 10,
            },
            600: {
                items: 3,
                margin: 20,
            },
            1000: {
                items: 3,
                margin: 30,
            },
        },
    });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true,
        },
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            },
        },
    });
    // YouTubePopUp
    $('a.vid, .gallery__item__video').YouTubePopUp();
});

// === window When Loading === //

$(window).on('load', function () {
    var wind = $(window);

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.gallery__item',
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });
    });

    $('.filtering').on('click', 'span', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // ----Team Region Change-------------------------------------------------------------
    $('.filtering_ourteam').on('click', 'span', function () {
        var filterValue = $(this).attr('data-filter_ourteam');
        hideAndVisible(filterValue);
    });

    $('.filtering_ourteam').on('click', 'span', function () {
        $(this).addClass('activenow').siblings().removeClass('activenow');
    });

    // ---Instagram Feed --------------------------------------------------------------
    $.instagramFeed({
        username: 'beemloop',
        container: '#instagram-feed-demo',
        items: 3,
        display_profile: false,
        display_biography: false,
        display_igtv: false,
        styling: false,
    });
});

function hideAndVisible(blockName) {
    let html;
    switch (blockName) {
        case 'odessa':
            if (window.location.hash === '#ua') {
                html =
                    '<div class="titem text-center"> <div class="team-img"> <img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Anastasia"> </div> <div class="info"><div class="h6">Єлизавета</div><span>Motion Designer</span></div> </div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Elizaveta1"></div><div class="info"><div class="h6">Єлизавета</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Олена</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Степан</div><span>Sound Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Олександр</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna_illustrator_odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Анна</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Вероніка</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Viktoriia"></div><div class="info"><div class="h6">Вікторія</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src ="img/team/elizaveta-motion-designer-odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Єлизавета</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Ilia"></div><div class="info"><div class="h6">Єлизавета</div><span>Team Leader / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Veronika"></div><div class="info"><div class="h6">Олена</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg"  alt="Viktoriia"></div><div class="info"><div class="h6">Степан</div><span>Sound Designer</span></div></div>';
                break;
            } else {
                html =
                    '<div class="titem text-center"> <div class="team-img"> <img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Anastasia"> </div> <div class="info"><div class="h6">Elizaveta</div><span>Motion Designer</span></div> </div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Elizaveta1"></div><div class="info"><div class="h6">Elizaveta</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Elena</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Aleksandr</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna_illustrator_odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Anna</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Veronika</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Viktoriia"></div><div class="info"><div class="h6">Viktoriia</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src ="img/team/elizaveta-motion-designer-odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Ilia"></div><div class="info"><div class="h6">Elizaveta</div><span>Team Leader / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Veronika"></div><div class="info"><div class="h6">Elena</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg"  alt="Viktoriia"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div>';
                break;
            }

        case 'sumy':
            if (window.location.hash === '#ua') {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Назар</div><span>Human Resources Developer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Лілія</div><span>Senior Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Влад</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Денис</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Володимир</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Анна</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Taras"></div><div class="info"><div class="h6">Лілія</div><span>Senior Illustrator</span></div></div>';
                break;
            } else {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Nazar</div><span>Human Resources Developer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Senior Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Vlad"></div><div class="info"><div class="h6">Vlad</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Denis"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Anna"></div><div class="info"><div class="h6">Anna</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Taras"></div><div class="info"><div class="h6">Lilia</div><span>Senior Illustrator</span></div></div>';
                break;
            }
        case 'zhytomyr':
            if (window.location.hash === '#ua') {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Діма</div><span>Founder</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Таллі</div><span>CEO</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Сергій</div><span>Project Manager</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Наталія</div><span>Art Director / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Дарина</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Артур</div><span>Motion Designer</span></div></div>';
                break;
            } else {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>CEO</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>Project Manager</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Art Director / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Designer</span></div></div>';
            }
        default:
            html = '';
            if (window.location.hash === '#ua') {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Діма</div><span>Founder</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Таллі</div><span>CЕО</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Сергій</div><span>Project Manager</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Наталія</div><span>Art Director / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Дарина</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Артур</div><span>Motion Desinger</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Назар</div><span>Human Resources Developer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Лілія</div><span>Senior Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Влад</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Vlad"></div><div class="info"><div class="h6">Денис</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Denis"></div><div class="info"><div class="h6">Володимир</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Анна</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/taras.jpg" alt="Anna"></div><div class="info"><div class="h6">Тарас</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Taras"></div><div class="info"><div class="h6">Єлизавета</div><span>Motion Desinger</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Anastasiia"></div><div class="info"><div class="h6">Єлизавета</div><span>Team Lead / Motion Designer </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Олена</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg"alt="Elizaveta"></div><div class="info"><div class="h6">Степан</div><span>Sound Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Elena"></div><div class="info"><div class="h6">Aleksandr</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Анна</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Вероніка</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Вікторія</div><span>Illustrator</span></div></div>';
            } else {
                html =
                    '<div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/dima.jpg" alt="Dima Buriachenko"></div><div class="info"><div class="h6">Dima</div><span>Founder</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/talli.jpg" alt="Talli"></div><div class="info"><div class="h6">Talli</div><span>CЕО</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/sergey.jpg" alt="Sergey"></div><div class="info"><div class="h6">Sergey</div><span>Project Manager</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nataliia.jpg" alt="Nataliia"></div><div class="info"><div class="h6">Nataliia</div><span>Art Director / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/darina.jpg" alt="Darina"></div><div class="info"><div class="h6">Darina</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/artur.jpg" alt="Artur"></div><div class="info"><div class="h6">Artur</div><span>Motion Desinger</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/nazar.jpg" alt="Nazar"></div><div class="info"><div class="h6">Nazar</div><span>Human Resources Developer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/lilia.jpg" alt="Lilia"></div><div class="info"><div class="h6">Lilia</div><span>Senior Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vlad.jpg" alt="Dmitrii"></div><div class="info"><div class="h6">Vlad</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/denis.jpg" alt="Vlad"></div><div class="info"><div class="h6">Denis</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vladimir.jpg" alt="Denis"></div><div class="info"><div class="h6">Vladimir</div><span>Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/anna.jpg" alt="Vladimir"></div><div class="info"><div class="h6">Anna</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/taras.jpg" alt="Anna"></div><div class="info"><div class="h6">Taras</div><span>Team Lead / Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa.jpg" alt="Taras"></div><div class="info"><div class="h6">Elizaveta</div><span>Motion Desinger</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elizaveta-motion-designer-odessa-.jpg" alt="Anastasiia"></div><div class="info"><div class="h6">Elizaveta</div><span>Team Lead / Motion Designer </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/elena_illustrator_odessa.jpg" alt="Elizaveta"></div><div class="info"><div class="h6">Elena</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg"alt="Elizaveta"></div><div class="info"><div class="h6">Stepan</div><span>Sound Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/aleksandr-motion-desinger-odessa.jpg" alt="Elena"></div><div class="info"><div class="h6">Aleksandr</div><span>Team Lead / Motion Designer</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/stepan-sound-designer-odessa.jpg" alt="Stepan"></div><div class="info"><div class="h6">Anna</div><span>Illustrator</span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/veronika-illustrator-odessa.jpg" alt="Aleksandr"></div><div class="info"><div class="h6">Veronika</div><span>Team Lead / Illustrator </span></div></div> <div class="titem text-center"><div class="team-img"><img class="lazyOwl" src="img/team/vika-llustrator-odessa.jpg" alt="Anna"></div><div class="info"><div class="h6">Viktoriia</div><span>Illustrator</span></div></div>';
            }
            break;
    }
    $('.team .owl-carousel')
        .trigger('replace.owl.carousel', html)
        .trigger('refresh.owl.carousel');
}

// Google Maps
if ($('.map-canvas').length > 0) {
    setTimeout(function () {
        initializeMap();
    }, 500);
}

// Google Map
function initializeMap() {
    var myCenter = new google.maps.LatLng(50.255656, 28.658959);
    var image = 'img/location-marker.png';
    var marker = new google.maps.Marker({
        position: myCenter,
        title: 'Beemloop office',
        icon: image,
    });
    var mySumy = new google.maps.LatLng(50.9138881, 34.8134126);
    var marker2 = new google.maps.Marker({
        position: mySumy,
        title: 'Beemloop office',
        icon: image,
        map: map,
    });
    var myOdessa = new google.maps.LatLng(46.460123, 30.5717051);
    var marker3 = new google.maps.Marker({
        position: myOdessa,
        title: 'Beemloop office',
        icon: image,
        map: map,
    });
    var myLviv = new google.maps.LatLng(49.8327787, 23.9421961);
    var marker4 = new google.maps.Marker({
        position: myLviv,
        title: 'Beemloop office',
        icon: image,
        map: map,
    });
    var myKhmelnytskyi = new google.maps.LatLng(49.4104673, 26.8551758);
    var marker5 = new google.maps.Marker({
        position: myKhmelnytskyi,
        title: 'Beemloop office',
        icon: image,
        map: map,
    });

    var mapProp = {
        center: myCenter,
        zoom: 5,
        draggable: true,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    var contentString =
        '<div><b>Beemloop office</b><br> Zhytomyr, Ukraine</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    var contentString2 = '<div><b>Beemloop office</b><br> Sumy, Ukraine</div>';
    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
    });
    var contentString3 =
        '<div><b>Beemloop office</b><br> Odessa, Ukraine</div>';
    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
    });
    var contentString4 = '<div><b>Beemloop office</b><br> Lviv, Ukraine</div>';
    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
    });
    var contentString5 =
        '<div><b>Beemloop office</b><br> Khmelnytskyi, Ukraine</div>';
    var infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
    });

    var map = new google.maps.Map(
        document.getElementById('map-canvas'),
        mapProp
    );
    map.panBy(20, 20); // (x,y)
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);
    marker4.setMap(map);
    marker5.setMap(map);

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
    });
    google.maps.event.addListener(marker2, 'click', function () {
        infowindow2.setContent(contentString2);
        infowindow2.open(map, marker2);
    });
    google.maps.event.addListener(marker3, 'click', function () {
        infowindow3.setContent(contentString3);
        infowindow3.open(map, marker3);
    });
    google.maps.event.addListener(marker4, 'click', function () {
        infowindow4.setContent(contentString4);
        infowindow4.open(map, marker4);
    });

    google.maps.event.addListener(marker5, 'click', function () {
        infowindow5.setContent(contentString5);
        infowindow5.open(map, marker5);
    });
}

$(function () {
    $('.lazy').lazy();
});

let design = document.getElementById('label-add');
design.addEventListener('click', designPopap);
function designPopap() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var uploaded1 = document.getElementById('name-file-attach1');

        var label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (
                    this.getAttribute('data-multiple-caption') || ''
                ).replace('{count}', this.files.length);
            else fileName = e.target.value.split('\\').pop();

            if (fileName) uploaded1.innerHTML = fileName;
            else uploaded1.innerHTML = labelVal;
        });
    });
}

let design2 = document.getElementById('label-add2');
design2.addEventListener('click', designPopap2);
function designPopap2() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var uploaded2 = document.getElementById('name-file-attach2');

        var label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (
                    this.getAttribute('data-multiple-caption') || ''
                ).replace('{count}', this.files.length);
            else fileName = e.target.value.split('\\').pop();

            if (fileName) uploaded2.innerHTML = fileName;
            else uploaded2.innerHTML = labelVal;
        });
    });
}

let design3 = document.getElementById('label-add3');
design3.addEventListener('click', designPopap3);
function designPopap3() {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var uploaded3 = document.getElementById('name-file-attach3');

        var label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (
                    this.getAttribute('data-multiple-caption') || ''
                ).replace('{count}', this.files.length);
            else fileName = e.target.value.split('\\').pop();

            if (fileName) uploaded3.innerHTML = fileName;
            else uploaded3.innerHTML = labelVal;
        });
    });
}

design3.addEventListener('click', designPopap3),
    $(function () {
        $('.loading-circle, .click-for-circle').click(function () {
            $('.wrapper-social__icon').stop().fadeToggle();
        });
    });

$(window).on('focus', function () {
    $('.owl-next').trigger('click');
});
