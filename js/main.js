$(document).ready(function() {
    
    // slick
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerPadding: '0',
        adaptiveHeight: true,
        useTransform: false
    });

    $('.products-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerPadding: '0',
        adaptiveHeight: true,
        appendDots:'.products-slider-dots'
    });

    $('.js-menu-sections').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerPadding: '0',
        adaptiveHeight: true,
        focusOnSelect: true,
        asNavFor: '.service-items',
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1009,
              settings: {
                slidesToShow: 4,
                centerMode: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: false,
                arrows: true
              }
            }
        ]
    });


    if ($(window).width() <= 1009) {
        $('.js-menu-sections_lc').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            centerMode: true,
            variableWidth: true
        });
    }

    $('.service-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        centerPadding: '0',
        adaptiveHeight: true,
        asNavFor: '.js-menu-sections',
        draggable: false,
        responsive: [
            {
              breakpoint: 1009,
              settings: {
                draggable:true
              }
            }
        ]
    });

    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1009,
              settings: {
                slidesToShow: 2,
                centerMode: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerMode: true
              }
            }
        ]
    });

    $('.slider-credit-cards').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerPadding: '0',
        adaptiveHeight: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1
    });


    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $('.news-items-side').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots: false,
                adaptiveHeight: true,
                centerMode: true
            });
        }
        else {
            $('.news-items-side').slick('unslick');
            destroy = true;
        }
    }).trigger('resize');

    if ($(window).width() <= 767) {
        $('.js-menu-sections_payments').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            focusOnSelect: true,
            centerMode: true,
            variableWidth: true
        });
    }

    // input placeholder
    $(".mat-input").focus(function(){
      $(this).parent().addClass("is-active");
    });

    $(".mat-input").focusout(function(){
      if($(this).val() === "")
        $(this).parent().removeClass("is-active");
    })

    // windows
    var items = $('.btn-win');
    for(var i=0;i<items.length;i++){
        $(items[i]).click(function () {
            var id = $(this).attr('href');
                $(this).toggleClass("active");
                $(id).toggleClass("active");
            return false;
        });
    }
    $(document).click(function(event) {
        if ($(event.target).closest(".win").length) return;
            $('.win.active').removeClass("active");
            $('.btn-win.active').removeClass("active");
        event.stopPropagation();
    });
    $('.win-close').click(function(event) {
        $('.win.active').removeClass("active");
        $('.btn-win.active').removeClass("active");
    });

    // datepicker
    $('#datepicker').datepicker({
        format: 'dd/mm/yyyy',
        daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авуст', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        autoHide: true,
        weekStart: 1
    });

    $('#datepicker').on('show.datepicker', function (e) {
        var target = $(e.currentTarget);
        var picker = target.data('datepicker');
        if(target.data('class')!=undefined){
            picker.$picker.addClass(target.data('class'));
        }
    });

    // tabs
    $('.tab-link').click(function() {
      $('.tab-link').not(this).each(function() {
        $($(this).attr("href")).removeClass("active");
      });
      $($(this).attr("href")).toggleClass("active");
        $(".tab-link").parent().removeClass('active');
        $(this).parent().addClass('active');
      return false;
    });

    // sections nav
    $('.sections-nav__marker').css('transition','top .5s ease');
    $.easing['easeInOutCubic'] = function(x, t, b, c, d){
        if ((t/=d/2) < 1) return c/2*t*t*t + b;return c/2*((t-=2)*t*t + 2) + b;
    }

    function pad(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
    var changeVerticalState = function($bullet){
        var index = $bullet.index();
        var $container = $('.sections-nav__main')
        var $marker = $('.sections-nav__marker');
        var $target = $bullet;
        sectionNavClasses();
        var offset = ($target.height()-$marker.height())/2
        $marker.css({
            'top':$target.offset().top-$container.offset().top+offset
        })
    }

    var updateCounter = function($dom){
        var $target = $('.sections-nav__num_current');
        var index = $dom.index()+1;
        $target.text(pad(index,2));
    }

    function sectionNavClasses(){
        var li_index = $('.sections-nav__list li.current').index();
        if(li_index==0 || !$('.sections-nav__list li.current').length){
            $('.sections-nav').addClass('sections-nav_theme-white');
        }else{
            $('.sections-nav').removeClass('sections-nav_theme-white');
        }
    }


    $('.sections-nav__list').onePageNav({
        hash:true,
        scrollOffset: 0,
        scrollChange:function($parent){
            changeVerticalState($parent);
            updateCounter($parent);
        },
        end:function(){
            var $dom = $('.sections-nav__list li.current');
            changeVerticalState($dom);
            updateCounter($dom);
        }
    });


    sectionNavClasses();

    $('.menu-sections_sticky').onePageNav({
        currentClass: 'active',
        scrollOffset: 100
    });



    // article
    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $('.article__section .title').click(function() {
                $(this).closest(".article__section").find(".article__main").slideToggle(400, function() { 
                    if($(this).parent().hasClass("active")) 
                        $(this).parent().removeClass("active"); 
                    else $(this).parent().addClass("active");
                });
            });
        }
    }).trigger('resize');

    // date mask
    $(".date-mask").inputmask({"mask": "DOB    99.99.9999"});

    $(".date-mask2").inputmask({"mask": "99.99.9999"});

    // cookies
    $('.cookies .btn_close').click(function(event) {
        $('.cookies').css("transform", "translateY(100%)");
    });


    $(window).resize(function() {
        if ($(window).width() <= 992) {
            $('.menu_with-lvl2').click(function() {
                $(this).find(".menu-lvl2").slideToggle(300, function() { 
                    if($(this).parent().hasClass("active")) 
                        $(this).parent().removeClass("active"); 
                    else $(this).parent().addClass("active");
                });
            });
        }
    }).trigger('resize');

    // btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) $('.btn_to-top').addClass("visible");
        else $('.btn_to-top').removeClass("visible");
    });
    $('.btn_to-top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    if ($(window).width() >= 768) {
    }

    // sticky
    $(".menu-sections_sticky").stick_in_parent({
        offset_top: 0
    });

    // custom select
    $('select').niceSelect();


    // magnificPopup
    $('.image-popup').magnificPopup({type:'image'});


    // form sections
    $('.form-section__title').click(function() {
        $(this).parent().find(".form-section__main").slideToggle(300, function() { 
            if($(this).parent().hasClass("active")) 
                $(this).parent().removeClass("active"); 
            else $(this).parent().addClass("active");
        });
        $('.slider-credit-cards').slick('setPosition');
    });

    // toggle
    $('.btn-toggle').click(function() {
        $(this).closest(".toggle-container").find(".toggle-main").slideToggle(300, function() { 
            if($(this).parent().hasClass("active")) 
                $(this).parent().removeClass("active"); 
            else $(this).parent().addClass("active");
        });
    });

    // select account
    $('.select-account__main').click(function() {
        $(this).closest(".select-account").toggleClass("active");
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".select-account").length){
            return;
        }
            $('.select-account').removeClass("active");
        event.stopPropagation();
    });

    $('.select-account__options a').on('click',function(e){
        e.preventDefault();
        var $target = $(e.currentTarget),
            value = $target.data('value'),
            key =$target.find('.select-account__col1').text(),
            label = $target.find('.select-account__col2').text(),
            $view = $target.closest('.select-account').find('.select-account__main'),
            $input = $target.closest('.select-account').find('input')
        ;
        $('.select-account').removeClass("active");
        console.log($target,value,key,label);
        $view.find('.select-account__col1').text(key);
        $view.find('.select-account__col2').text(label);
        $input.val(value);
    })

    // pass show
    $('.pass-show').click(function() {
        if ($(this).hasClass("active")) {
            $(this).closest('.field').find('input').prop('type', 'password');
            $(this).removeClass('active');
        }
        else {
            $(this).closest('.field').find('input').prop('type', 'text');
            $(this).addClass('active');
        }
    });
});