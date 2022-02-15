//index.js

$(function(){
    $(window).on('load',function(){
        $('.cLeft').animate({left : -50 + '%'},2000);
        $('.cRight').animate({right : -50 + '%'},2000);
    });

    var $slideH = $('.hgroup .slide'),
        $slideP = $('.pgroup .slide'),
        $slideB = $('.btngroup .slide');

    $slideH.css({marginTop : -160});
    $slideH.find('h2:last').prependTo($slideH);

    $slideP.css({marginTop : -40});
    $slideP.find('p:last').prependTo($slideP);

    $slideB.css({marginTop : -40});
    $slideB.find('button:last').prependTo($slideB);

    $('.bgWrap li:first').appendTo('.bgWrap');



$('.pageBtn>.prev').on('click',function(){
    $slideH.delay(600).animate({marginTop : 0},{
        complete : function(){
            $slideH.css({marginTop : -160});
            $slideH.find('h2:last').prependTo($slideH);
        }
    });

    $slideP.delay(600).animate({marginTop : 0},{
        complete : function(){
            $slideP.css({marginTop : -40});
            $slideP.find('p:last').prependTo($slideP);
        }
    });

    $slideB.delay(600).animate({marginTop : 0},{
        complete : function(){
            $slideB.css({marginTop : -40});
            $slideB.find('button:last').prependTo($slideB);
        }
    });

    $('.bgArea ul').animate({marginLeft : -380},{
          duration: 600,
          complete:function(){
          $(this).css({marginLeft : 0});
          $(this).find('li:last').prependTo('.bgArea ul');
        }
    });

    $('.bgWrap>li:last').fadeOut(1000,function(){
      $(this).prependTo('.bgWrap').fadeIn(0);
    });

  });

  $('.pageBtn>.next').on('click',function(){

    $slideH.delay(600).animate({marginTop : -320}, {
        complete : function(){
            $slideH.css({marginTop : -160});
            $slideH.find('h2:first').appendTo($slideH);
        }
    });

    $slideP.delay(600).animate({marginTop : -80}, {
        complete : function(){
            $slideP.css({marginTop : -40});
            $slideP.find('p:first').appendTo($slideP);
        }
    });

    $slideB.delay(600).animate({marginTop : -80}, {
        complete : function(){
            $slideB.css({marginTop : -40});
            $slideB.find('button:first').appendTo($slideB);
        }
    });

    $('.bgArea ul').animate({marginLeft : -380},{
        duration: 600,
        complete:function(){
          $(this).css({marginLeft : 0});
          $(this).find('li:first').appendTo('.bgArea ul');
        }
    });

    $('.bgWrap>li:first').fadeOut(0,function(){
        $(this).appendTo('.bgWrap').fadeIn(1000);
    });
  });

});
