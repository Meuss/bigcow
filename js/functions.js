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
});