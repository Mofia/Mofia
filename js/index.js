$(function(){
	$('.nav_ul>li:not(.oneli)').on('mouseover',function(){
		$('.on').css('display','none');
	});
	$('.nav_ul>li:not(.oneli)').on('mouseleave',function(){
		$('.on').css('display','block');
	});
	var imgs=['img/lb1.jpg','img/lb2.jpg','img/lb3.jpg','img/lb4.jpg'];
	var fg=0;
	function nextLb(){
		++fg;
		if(fg<imgs.length){
			$('.mid>img').attr('src',imgs[fg]);
			$('.rain>button').css('background-color','white');
			$('.rain>button').eq(fg).css('background-color','red');
		}
		else{
			fg=0;
			$('.mid>img').attr('src',imgs[fg]);
			$('.rain>button').css('background-color','white');
			$('.rain>button').eq(fg).css('background-color','red');
		}
	}
	$('.next').on('click',nextLb);
	function prevLb(){
		--fg;
		if(fg<0){
			fg=3;
			$('.mid>img').attr('src',imgs[fg]);
			$('.rain>button').css('background-color','white');
			$('.rain>button').eq(fg).css('background-color','red');
		}
		else{
			$('.mid>img').attr('src',imgs[fg]);
			$('.rain>button').css('background-color','white');
			$('.rain>button').eq(fg).css('background-color','red');
		}
	}
	$('.prve').on('click',prevLb);
	var play=setInterval(nextLb,2500);
	$('.mid').mouseover(function(){
		clearInterval(play);
	});
	$('.mid').mouseleave(function(){
		play=setInterval(nextLb,2500);
	});
	function clickbtn(o){
		$('.rain>button').eq(o).click(function(){
		$('.mid>img').attr('src',imgs[o]);
		$('.rain>button').css('background-color','white');
		$('.rain>button').eq(o).css('background-color','red');
	});
	}
	for(var i =0;i<imgs.length;i++){
		clickbtn(i);
	}
	//公司新闻部分
	$('.mid_top>span').eq(0).mouseover(function(){
		$('.mid_top>span').css({'background-color':'white','color':'black'});
		$('.mid_top>span').eq(0).css({'background-color':'red','color':'white'});
		$('.main_midmain').css('display','none');
		$('.mid_main>div').css('display','block');	
	});
	$('.mid_top>span').eq(1).mouseover(function(){
		$('.mid_top>span').css({'background-color':'white','color':'black'});
		$('.mid_top>span').eq(1).css({'background-color':'red','color':'white'});
		$('.mid_main>div').css('display','none');
		$('.main_midmain').css('display','block');
	});
	$('.mid_top>span').eq(2).mouseover(function(){
		$('.mid_top>span').css({'background-color':'white','color':'black'});
		$('.mid_top>span').eq(2).css({'background-color':'red','color':'white'});
		$('.mid_main>div').css('display','none');
		$('.main_midmain').css('display','block');
	});
	//返回顶部
	var top=document.querySelector('.backTop');
		window.onscroll=function(){
			var dd=pageYOffset;
			if(dd>400){
				top.style.display='block';
			}else{
				top.style.display='none';
			}
		}
	$('.backTop').click(function(){
		location.href='#';
	});
	
});