//navFooter.js
//.gnbWrap>nav>div.menu 버튼을 누르면 .lnbWrap이 css(marginTop : -40) -> .animate(marginTop : 0)이 되고 동시에  .gnbWrap>nav>div.menu가 x자로 바뀐다.  바뀐 x를 다시 누르면 animate(marginTop : -40)
//https://codepen.io/Lewitje/pen/HesnF 참고
$(function(){

    var $input = $('header input'),
        $search = $('header .search'),
        $lnbWrap = $('div.lnbWrap'),
        click = true,
        offset = $('body').offset();

    $input.on('mouseenter',function(){
        $input.css({borderColor: '#ccc'});
    });
    $input.on('click',function(){
        $search.animate({width : 160}, 1000, 'easeOutBounce');
        $input.animate({width : 130});
        $('.search button').css({right : 0});
    });
    $('.hdrWrap').on('mouseleave',function(){
        $search.animate({width : 20});
        $input.animate({width : 20, borderColor: 'transparent'}).hide();
    });
    $('.hdrWrap').on('mouseenter',function(){
        $input.show();
    });/////////////////(nav.search) End/////////////////

    $('div.menu').on('click', function(evt){
        $lnbWrap.slideToggle();
        if(click){
            $('div.menu').addClass('clicked');
            click = false;
        }else{
            $('div.menu').removeClass('clicked');
            click = true;
        }
    });/////////////////(nav.menu) sliding End/////////////////

    $('.top').on('click',function(){
         $('html, body').animate({scrollTop : offset.top});
    });


});
