$(window).scroll(function(){

    var ws = $(this).scrollTop();

    $('.logo').css({
        'transform' : 'translate(0px, '+ ws / 3 +"%)"
    });

    $('.back-bird').css({
        'transform' : 'translate(0px, '+ ws / 4 +"%)"
    });

    $('.cow').css({
        'transform' : 'translate(0px, -'+ ws / 20 +"%)"
    });

    if(ws > $('.meat-pics').offset().top - ($(window).height()/1.4)){

        $('.meat-pics figure').each(function(i){

            setTimeout(function () {

                $('.meat-pics figure').eq(i).addClass('is-showing');
            }, 150 * (i+1));

        });
    }
    if(ws > $('.large-window').offset().top - $(window).height()){
        $('.large-window').css({'background-position':'center '+ (ws - $('.large-window').offset().top) +'px'});

        var opacity = (ws - $('.large-window').offset().top + 400) / (ws /7);

        $('.window-tint').css({'opacity': opacity});

    }
});