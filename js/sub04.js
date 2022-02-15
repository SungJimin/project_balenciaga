//sub04.js
$(function(){
    $(window).on('load', function(){
        $('.ttl').animate({opacity : 1 },1000);
        $('.ttlWrap h5').delay(300).animate({
            width : 480, height : 40,
            color : '#fff', borderColor : 'white'
        },1000);
    });

    // $('.prdtWrap div').on('click',function(){
    //     var bgi = $(this).css('backgroundImage');
    //     $(this).addClass('selected').siblings().removeClass('selected');
    //     $('section div.prdt').css({backgroundImage:bgi});
    // });
    var i;
    $('dt .locate').first().css({opacity : 1});
    $('.shopList .shop').on('click',function(){
        $(this).addClass('clicked').siblings().removeClass('clicked');
        $('dt .locate').css({opacity : 0.2});
        $(this).find('dt .locate').css({opacity : 1});

        i = $(this).index();
        $('.mapList>div').css({display:'none'});
        $('.mapList>div').eq(i).fadeIn();
    });
});
