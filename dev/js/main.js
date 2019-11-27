$(function(){
    let height = 0;
    $(window).scroll(function(e){
        if(screen.availWidth < 760){
            height = 50;
        }
        else if( (screen.availWidth >= 760) && (screen.availWidth < 1200) ){
            height = 90;
        }
        else if(screen.availWidth >= 1200){
            height = 200;
        }
        let scrolled = $(this).scrollTop();
        if(scrolled >= height){
            $('#head').addClass('head-scroll');
        }else{
            $('#head').removeClass('head-scroll');
        }
        if(scrolled >= height){
            $('#header').addClass('head-scrolled');
        }else{
            $('#header').removeClass('head-scrolled');
        }
    })
    $('.main-s').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.photo-s').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1165,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.product-color-s').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.serf-s').slick({
        mobileFirst: true,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $("#slider-range" ).slider({
         range: true,
         min: 0,
         max: 1250000,
         values: [48000, 1250000],
         slide: function( event, ui ) {
             $("#amount" ).val(ui.values[ 0 ]);
             $("#amount-1" ).val(ui.values[ 1 ]);
         }
    });
    $("#amount").val( $( "#slider-range" ).slider("values", 0));
    $("#amount-1").val( $( "#slider-range" ).slider("values", 1));
    $('.product-slider-main').slick({
        infinite: true,
        mobileFirst: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-slave',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    arrows: true,
                }
            },
        ]
    });
    $('.product-slider-slave').slick({
        infinite: true,
        mobileFirst: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.product-slider-main',
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

 let prodInput = document.querySelectorAll('.product-input-js');
 prodInput.forEach(function(el) {
     let prodInput = el.querySelector('input'),
         prodMore = el.querySelector('.product-more'),
         prodLess = el.querySelector('.product-less'),
         cnt = parseInt(prodInput.value);
     prodInput.onchange= function(){
         cnt = parseInt(this.value);
     }
     prodMore.onclick= function(){
         cnt+=1;
         if((cnt <= 0)||isNaN(cnt)) cnt = 1;
         prodInput.value = cnt;
     }
     prodLess.onclick= function(){
         cnt-=1;
         if((cnt <= 0)||isNaN(cnt)) cnt = 1;
         prodInput.value = cnt;
     }


 });
