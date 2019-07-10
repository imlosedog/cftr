 function xy(){
	$("#smor").click( function() {
			$('#cyj').addClass("cyj");
			$('#smor').css("display","none");
			$('#ymor').css("display","block");
	});
	$("#ymor").click( function() {
			$('#cyj').removeClass("cyj");
			$('#smor').css("display","block");
			$('#ymor').css("display","none");
	});
	$("#lm2").mouseover( function() {
		$(".s1").css("display","block");
	}).mouseout( function(){
		$(".s1").css("display","none");
	});
	$(".s1").mouseover( function() {
		$(".s1").css("display","block");
		$("#lm2").addClass("act1");;
	}).mouseout( function(){
		$(".s1").css("display","none");
		$("#lm2").removeClass("act1");;
	});
	$("#lm3").mouseover( function() {
		$(".s2").css("display","block");
	}).mouseout( function(){
		$(".s2").css("display","none");
	});
	$(".s2").mouseover( function() {
		$(".s2").css("display","block");
		$("#lm3").addClass("act1");;
	}).mouseout( function(){
		$(".s2").css("display","none");
		$("#lm3").removeClass("act1");;
	});
	$("#lm4").mouseover( function() {
		$(".s3").css("display","block");
	}).mouseout( function(){
		$(".s3").css("display","none");
	});
	$(".s3").mouseover( function() {
		$(".s3").css("display","block");
		$("#lm4").addClass("act1");;
	}).mouseout( function(){
		$(".s3").css("display","none");
		$("#lm4").removeClass("act1");;
	});
 };
 function xk(){

    tab("tab_t","li","tab_c","span","onmouseover")
    function tab(tab_t,tab_t_tag,tab_c,tag_c_tag,evt){
        var tab_t = document.getElementById(tab_t);
        var tab_t_li = tab_t.getElementsByTagName(tab_t_tag);
        var tab_c = document.getElementById(tab_c);
        var tab_c_li = tab_c.getElementsByTagName(tag_c_tag);
        var len = tab_t_li.length;
        var i=0;
        for(i=0; i<len; i++){
            tab_t_li[i].index = i;
            tab_t_li[i][evt] = function(){
                for(i=0; i<len; i++){
                    tab_t_li[i].className = '';
                    tab_c_li[i].className = 'hide';
                }
                tab_t_li[this.index].className = 'act';
                tab_c_li[this.index].className = '';
            }
        }
    }
    
}

function lb(){
		var next = 0;
		var gs = $(".long_1").children().length;
		var w = 174; //长条图片宽度
		var cs1 = 0;
		var cs2 = gs;
		cd = gs * w;
		$('.long_2').css('left', cd + 'px');
		$('.long_2').css('width', cd + 'px');
		$('.long_1').css('width', cd + 'px');
		$('.long_2').html($('.long_1').html());
		$(".long_box_left").click(function() {
			if (cs1 == gs) cs1 = -gs;
			if (cs2 == gs) cs2 = -gs;
			next += w;
			var img2 = $('.long_2').css('left').split('px', 1);
			if (img2 * 1 == cd) {
				$('.long_2').css('left', (0 - cd) + 'px');
				img2 = $('.long_2').css('left').split('px', 1);
			}
			var img1 = $('.long_1').css('left').split('px', 1);
			if (cs1 == -gs) {
				$('.long_1').css('left', (0 - cd) + 'px');
			}
			cs1 = cs1 + 1;
			cs2 = cs2 + 1;
			$(".long_1").animate({
				left: cs1 * w + 'px'
			}, "fast");
			$(".long_2").animate({
				left: cs2 * w + 'px'
			}, "fast");
			if (img2 == 0) {
				$(".long_1").css('left', (0 - cd) + 'px');
			}
		});
		$(".long_box_right").click(function() {
			if (cs1 == -gs) cs1 = gs;
			if (cs2 == -gs) cs2 = gs;
			next -= w;
			var img2 = $('.long_2').css('left').split('px', 1);
			if (img2 == -cd) {
				$('.long_22').css('left', cd + 'px');
				img2 = $('.long_2').css('left').split('px', 1);
			}
			if (cs1 == gs) {
				$('.long_1').css('left', cd + 'px');
			}
			cs1 = cs1 - 1;
			cs2 = cs2 - 1;
			$(".long_1").animate({
				left: cs1 * w+ 'px'
			}, "fast");
			$(".long_2").animate({
				left: cs2 * w + 'px'
			}, "fast");
			img1 = $('.long_2').css('left').split('px', 1);
			if (img1 == -cd) {
				$(".long_1").css('left', cd + 'px');
			}
		});
}
function move(){
		
	var sc= $(window).scrollTop();
	var a=400;
	var to=a-sc;
 	if(sc>400){
		
	 if(to<400){
		  document.getElementById('top').className="meaut";
		  document.getElementById('top').style.top='0px';
		 }else{
			document.getElementById('top').style.top=400+'px'; 
			 }
	}else{
		document.getElementById('top').className="meau";
		document.getElementById('top').style.top=to+'px'; 
		}
	 };
function funcTest(){
window.setInterval("move()",1);
}


function scrollnumber(element,showm,cssname,offset){
	var a,b,c,d;
	d=$(element).offset().top;
	a=eval(d + offset);
	b=$(window).scrollTop(); 
	c=$(window).height();
	if(b+c>a){
		$((showm)).siblings().removeClass((cssname));
		$((showm)).addClass((cssname));
	}
}

function scrollfun(){
	scrollnumber("#nr1",'#lm1','act',400);
	scrollnumber("#nr2",'#lm2','act',600);
	scrollnumber("#nr3",'#lm3','act',400);
	scrollnumber("#nr4",'#lm4','act',400);
	scrollnumber("#nr5",'#lm5','act',400);
	scrollnumber("#nr6",'#lm6','act',400);
	scrollnumber("#nr7",'#lm7','act',400);
	
}















