//sub01-1.js
$(function(){

    //i02 i03 i04 i05를 각각 클릭하면 한칸씩 사진이 옮겨지며 i01에 보여진다

    //사이즈버튼 및 컬러버튼 선택 효과
    var $size = $('.detailWrap .size button'),
        $color = $('.detailWrap .colorWrap li'),
        i = 0;

    $(window).on('load',function(){
        $(".rsvShop").mCustomScrollbar('inset-2');
    });
    $size.on('click',function(){
        i = $(this).index();
        if(i==1){
            $(this).addClass('clicked').next().removeClass('clicked');
        }else{
            $(this).addClass('clicked').prev().removeClass('clicked');
        }
    });

    $color.on('click',function(){
        i=$(this).index();
        if(i==1){
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }else if(i==2){
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }else{
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }
    });

    $('.shop .bag').on('click', function(){
        $('*').removeClass('clicked');
        $(this).addClass('clicked');
    });    //장바구니 담기시 사이즈버튼 및 컬러버튼 선택 효과 사라짐


    $('.shop .btq').on('click',function(){ //구매가능한 부티크찾기 버튼 클릭시 모달 활성화
        $('div.modalBg').show();
    });
    $('.modal>header>.close').on('click',function(){ //닫기 버튼 클릭시 모달 비활성화
        $('div.modalBg').hide();
    });

    $('.rsvSiz button').on('click',function(){ //사이즈버튼 클릭 효과
        i=$(this).index();
        if(i==0){
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }else if(i==1){
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }else{
            $(this).addClass('clicked').siblings().removeClass('clicked');
        }
        $('.rsvShop').slideUp(500); //다른사이즈선택시 슬라이드업
    });

    $('.rsvChck').on('click',function(){
        $('.rsvShop').slideDown(1000); //매장재고 확인 시 슬라이드 다운
    });

    $('.shop dt button').on('click',function(){ //스토어예약버튼 클릭시
        $('.shop dd').slideUp();
        $(this).parent().next().slideDown();
    });
    $('.send .close').on('click',function(){
        $('.shop dd').slideUp();
    });

    $('.prdtWrap div').on('click',function(){
        var bgi = $(this).css('backgroundImage');
        $(this).addClass('selected').siblings().removeClass('selected');
        $('section div.prdt').css({backgroundImage:bgi});
    });




});
