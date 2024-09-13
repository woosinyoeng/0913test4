
$(".btns>li").click(function(){
 $(this).addClass("on");
 $(this).siblings().removeClass("on");

let a=$(this).attr('data-filter');
$(".contents").isotope({filter:a});

})
/* $(선택자).attr('속성명''속성값') 속성변경시 사용
   a=$(선택자).attr('속성명') 속성호출시 사용(변수 안에 넣어줌) */

$(".contents").isotope();

$(".fancybox").fancybox();