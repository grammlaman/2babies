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
});