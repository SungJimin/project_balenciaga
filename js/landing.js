//landing.js
$(function(){
    var $i2 = $('.open .i2');

    $(window).on('load',function(){
        $i2.delay(500).animate({marginLeft : 950, width : 930},3000);
        $('.i2 .video').delay(4000).fadeIn(2000);
    });


});
