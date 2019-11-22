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
});