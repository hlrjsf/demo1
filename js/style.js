$(document).ready(function(){
	/*--------------------菜单向下向上滑动--------------------*/
	$(".ul_list1>li>a").each(function(index, el) {//获取当前ul下的所有的a
	 		if (index > 0) {//当a大于0时执行向下滑动函数
	 			$(this).bind("mouseover",function(){
	 				console.log(index);	
	 				$(".ul_list1>li>a").next(".ul_list2").eq(index-1).slideDown("slow");
	 			});//因为第一个a没有子菜单，所以从a-1开始执行向下滑动函数
	 		};

	});
	 $(".ul_list1 > li").bind("mouseleave",function(){//鼠标离开执行向上滑动函数
	 	$(".ul_list2").slideUp("slow");
	});
	/*--------------------------------------------------------*/

 	/*-------------------通知公告水平滚动---------------------*/
 	var speed=50;//速度
    var demo = $(".ul_right");
    function Marquee(){ 
        if(demo.scrollLeft()>=demo.width())
            demo.scrollLeft(0); 
        else{
            demo.scrollLeft(demo.scrollLeft()+1);
        }
    } 
    var MyMar=setInterval(Marquee,speed) 
    demo.mouseover(function() {
        clearInterval(MyMar);
    } )
    demo.mouseout(function() {
        MyMar=setInterval(Marquee,speed);
    } )
    /*--------------------------------------------------------*/
});
