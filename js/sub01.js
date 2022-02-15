//sub01.js

    $(function(){
        $(window).on('load', function(){
            $('.ttl').animate({opacity : 1 },1000);
        });

        $(window).on('scroll', function(){
            var htmlScrTop = parseInt($('html').scrollTop());
            // console.log(htmlScrTop);
            if(htmlScrTop > 450){
                $('.filterWrap').fadeIn().addClass('scr');
            }else{
                $('.filterWrap').removeClass('scr');
            }
        });
        //div.content .prdt 에 mouseenter 했을 때 .c01 이 .b01로 바뀐다.
        $('div.content .prdt').on('mouseenter',function(evt){
            $(this).find('.card').removeClass('prdImg').addClass('bckImg');
        });
        $('div.content .prdt').on('mouseleave',function(evt){
            $(this).find('.card').removeClass('bckImg').addClass('prdImg');
        });


    });
