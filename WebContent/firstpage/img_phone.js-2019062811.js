
function HMthePhone( position , ac , p , c ){
	if(p == 'jjj') {
		p = '2';
	}
	console.log(23123)
	//如果p是disarr[]内元素，则将p置为0
	//想要隐藏城市，则将该城市的id加入到disarr数组内
	Array.prototype.S=String.fromCharCode(2);
    Array.prototype.in_array=function(e){
    var r=new RegExp(this.S+e+this.S);
        return (r.test(this.S+this.join(this.S)+this.S));
    };
	var disarr = ['1','2','13','14','15','19','23','9','11','10']; 
	if(disarr.in_array(p))
	{
		p = '0';
	}

	//position：模块、ac：详细页面、p：一级地区、c：二级地区(园区内页c：园区分类)
	if( position == "yuanqu" && ac == "detail" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( c ){
			case '999':
			    phone = "400-053-5898";
				img = "numwuliu.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numwuliu.gif*/;
				break;
			default:
			    switch( p ){
					case '1':
						phone = "400-061-1263";
						img = "numbj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numbj.gif*/;
						break;
					case '2':
						phone = "022-23299923";
						img = "num.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/num.gif*/;
						break;
					case '9':
						phone = "400-886-3132";
						img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
						break;
					case '10':
						phone = "400-886-3132";
						img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
						break;
					case '11':
						phone = "400-886-3132";
						img = "numzj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numzj.gif*/;
						break;
					case '13':
						phone = "400-053-6402";
						img = "numfj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numfj.gif*/;
						break;
					case '15':
						phone = "400-031-6904";
						img = "numsd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsd.gif*/;
						break;
					case '19':
						phone = "400-074-5101";
						img = "numgd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numgd.gif*/;
						break;
					case '23':
						phone = "400-080-4301";
						img = "numsc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsc.gif*/;
						break;
					default:
						phone = "400-168-6016";
						img = "numother.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numother.gif*/;
						break;
				}
		}
		console.log(123123)
		//360推广电话
		if( p == "360"){
			phone = "400-106-9806"
		}
		//百度推广
		if( p == "baidu"){
			phone = "400-168-9016"
		}
		if( p == "mbaidu"){
			phone = "400-116-1900"
		}
		HMmakeToHtml( phone , "yuanqu_detail_text" , "text" );
		HMmakeToHtml( phone , "yuanqu_detail_text1" , "text" );
		HMmakeToHtml( img , "yuanqu_detail_img" , "img" );
		HMmakeToHtml( img , "quxian_index_text3" , "text" );
		
		
	}else if( position == "yuanqu" && ac == "list" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				img = "telephone_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_bj.jpg*/;
				break;
			case '2':
				img = "telephone_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_tj.jpg*/;
				break;
			case '9':
				img = "telephone_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_js.jpg*/;
				break;
			case '10':
				img = "telephone_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_js.jpg*/;
				break;
			case '11':
				img = "telephone_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_zj.jpg*/;
				break;
			case '13':
				img = "telephone_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_fj.jpg*/;
				break;
			case '15':
				img = "telephone_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_sd.jpg*/;
				break;
			case '19':
				img = "telephone_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_gd.jpg*/;
				break;
			case '23':
				img = "telephone_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_sc.jpg*/;
				break;
			default:
				img = "telephone_qg.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_qg.jpg*/;
				break;
		}
		
		HMmakeToHtml( img , "yuanqu_list_img" , "img" );
		
	}else if( position == "carry" && ac == "list" ){
		
		var img = "";
		var ztimg = "";
		var cfimg = "";
		var phone = "";
		
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "telephone_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_bj.jpg*/;
				ztimg = "zt_rightshow_bj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_bj.gif*/;
				cfimg = "cf_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_bj.jpg*/;
				break;
			case '2':
				phone = "400-693-1227";
				img = "telephone_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_tj.jpg*/;
				ztimg = "zt_rightshow.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow.gif*/;
				cfimg = "cf_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_tj.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "telephone_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_js.jpg*/;
				ztimg = "zt_rightshow_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_js.gif*/;
				cfimg = "cf_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_js.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "telephone_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_js.jpg*/;
				ztimg = "zt_rightshow_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_js.gif*/;
				cfimg = "cf_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_js.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "telephone_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_zj.jpg*/;
				ztimg = "zt_rightshow_zj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_zj.gif*/;
				cfimg = "cf_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_zj.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "telephone_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_fj.jpg*/;
				ztimg = "zt_rightshow_fj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_fj.gif*/;
				cfimg = "cf_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_fj.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "telephone_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_sd.jpg*/;
				ztimg = "zt_rightshow_sd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_sd.gif*/;
				cfimg = "cf_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_sd.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "telephone_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_gd.jpg*/;
				ztimg = "zt_rightshow_gd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_gd.gif*/;
				cfimg = "cf_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_gd.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "telephone_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_sc.jpg*/;
				ztimg = "zt_rightshow_sc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_sc.gif*/;
				cfimg = "cf_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_sc.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "telephone_qg.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/telephone_qg.jpg*/;
				ztimg = "zt_rightshow_new.gif"/*tpa=http://img.zhaoshang.net/data/telephone/carry/loupan/zt_rightshow_new.gif*/;
				cfimg = "cf_other.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/carry/changfang/cf_other.jpg*/;
				break;
		}
			
		HMmakeToHtml( phone , "carry_list_text1" , "text" );
		HMmakeToHtml( phone , "carry_list_text2" , "text" );
		HMmakeToHtml( img , "carry_list_img" , "img" );
		HMmakeToHtml( ztimg , "carry_list_ztimg" , "img" );
		HMmakeToHtml( cfimg , "carry_list_cfimg" , "img" );
		
	}else if( position == "quxian" && ac == "index" ){
		//111
		var img = "";
		var aimg = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "numbj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numbj.gif*/;
				aimg = "bj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/bj02.jpg*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "num.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/num.gif*/;
				aimg = "tj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/tj02.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				aimg = "js02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js02.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				aimg = "js02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js02.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "numzj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numzj.gif*/;
				aimg = "zj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zj02.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "numfj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numfj.gif*/;
				aimg = "fj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/fj02.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "numsd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsd.gif*/;
				aimg = "sd02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sd02.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "numgd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numgd.gif*/;
				aimg = "gd02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/gd02.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "numsc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsc.gif*/;
				aimg = "sc02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sc02.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "numother.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numother.gif*/;
				aimg = "qg02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/qg02.jpg*/;
				break;
		}
		if(c == "360"){
			phone = "400-106-9806";
		}	
		//百度推广
		if( c == "baidu"){
			phone = "400-168-9016"
		}
		if( c == "mbaidu"){
			phone = "400-116-1900"
		}
	
		HMmakeToHtml( phone , "quxian_index_text" , "text" );
		HMmakeToHtml( phone , "quxian_index_text2" , "text" );
		HMmakeToHtml( phone , "quxian_index_text3" , "text" );
		HMmakeToHtml( img , "quxian_index_img" , "img" );
		HMmakeToHtml( aimg , "quxian_index_aimg" , "img" );
		
	}else if( position == "quxian" && ac == "citypage" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other.jpg*/;
				break;
		}
		
		HMmakeToHtml( phone , "quxian_citypage_text" , "text" );
		HMmakeToHtml( img , "quxian_citypage_img" , "img" );
		
	}else if( position == "quxian" && ac == "citylist" ){
		
		var img = "";
		var rimg = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				rimg = "numbj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numbj.gif*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				rimg = "num.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/num.gif*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				rimg = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				rimg = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				rimg = "numzj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numzj.gif*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				rimg = "numfj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numfj.gif*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				rimg = "numsd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsd.gif*/;
				break;
			case '19':
				phone = "400-074-5101";
				rimg = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				img = "numgd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numgd.gif*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				rimg = "numsc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsc.gif*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other_6931227.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other_6931227.jpg*/;
				rimg = "numcm.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numcm.gif*/;
				break;
		}
		
		HMmakeToHtml( phone , "quxian_citylist_text" , "text" );
		HMmakeToHtml( img , "quxian_citylist_img" , "img" );
		HMmakeToHtml( rimg , "quxian_citylist_rimg" , "img" );
		
	}else if( position == "quxian" && ac == "town" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "numbj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numbj.gif*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "num.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/num.gif*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "numjs.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numjs.gif*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "numzj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numzj.gif*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "numfj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numfj.gif*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "numsd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsd.gif*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "numgd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numgd.gif*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "numsc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numsc.gif*/;
				break;
			default:
				phone = "400-168-6016";
				img = "numother.gif"/*tpa=http://img.zhaoshang.net/data/telephone/park/numother.gif*/;
				break;
		}
		
		HMmakeToHtml( phone , "quxian_town_text" , "text" );
		HMmakeToHtml( img , "quxian_town_img" , "img" );
		
	}else if( position == "quxian" && ac == "industry" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				break;
			case '2':
				phone = "400-693-1227";
				break;
			case '9':
				phone = "400-886-3132";
				break;
			case '10':
				phone = "400-886-3132";
				break;
			case '11':
				phone = "400-886-3132";
				break;
			case '13':
				phone = "400-053-6402";
				break;
			case '15':
				phone = "400-031-6904";
				break;
			case '19':
				phone = "400-074-5101";
				break;
			case '23':
				phone = "400-080-4301";
				break;
			default:
				phone = "400-168-6016";
				break;
		}
		
		HMmakeToHtml( phone , "quxian_industry_text1" , "text" );
		HMmakeToHtml( phone , "quxian_industry_text2" , "text" );
		
	}else if( position == "news" && ac == "" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other_6931227.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other_6931227.jpg*/;
				break;
		}
		
		HMmakeToHtml( phone , "news_none_text" , "text" );
		HMmakeToHtml( img , "news_none_img" , "img" );
		
	}else if( position == "news" && ac == "newslist" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other_6931227.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other_6931227.jpg*/;
				break;
		}
		
		HMmakeToHtml( phone , "news_policylist_text" , "text" );
		HMmakeToHtml( img , "news_policylist_img" , "img" );
		
	}else if( position == "news" && ac == "newspage" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				zimg = "zx_bj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_bj.gif*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				zimg = "zx_qg_1227.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_qg_1227.gif*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				zimg = "zx_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_js.gif*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				zimg = "zx_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_js.gif*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				zimg = "zx_zj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_zj.gif*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				zimg = "zx_fj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_fj.gif*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				zimg = "zx_sd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_sd.gif*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				zimg = "zx_gd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_gd.gif*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				zimg = "zx_sc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_sc.gif*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other_6931227.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other_6931227.jpg*/;
				zimg = "zx_qg_1227.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_qg_1227.gif*/;
				break;
		}
		
		HMmakeToHtml( phone , "news_policypage_text" , "text" );
		HMmakeToHtml( img , "news_policypage_img" , "img" );
		HMmakeToHtml( zimg , "news_newspage_zimg" , "img" );
		
	}else if( position == "news" && ac == "policylist" ){
		
		var img = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				aimg = "bj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/bj02.jpg*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				aimg = "tj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/tj02.jpg*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				aimg = "js02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js02.jpg*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				aimg = "js02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js02.jpg*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				aimg = "zj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zj02.jpg*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				aimg = "fj02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/fj02.jpg*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				aimg = "sd02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sd02.jpg*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				aimg = "gd02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/gd02.jpg*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				aimg = "sc02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sc02.jpg*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other.jpg*/;
				aimg = "qg02.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/qg02.jpg*/;
				break;
		}
		
		HMmakeToHtml( phone , "news_policylist_text" , "text" );
		HMmakeToHtml( img , "news_policylist_img" , "img" );
		HMmakeToHtml( aimg , "news_policylist_aimg" , "img" );
		
	}else if( position == "news" && ac == "policypage" ){
		
		var img = "";
		var aimg = "";
		var zimg = "";
		var phone = "";
		//判断一级城市
		switch( p ){
			case '1':
				phone = "400-061-1263";
				img = "at_rtnum_bj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_bj.jpg*/;
				aimg = "bj01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/bj01.jpg*/;
				zimg = "zx_bj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_bj.gif*/;
				break;
			case '2':
				phone = "022-23299923";
				img = "at_rtnum_tj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_tj.jpg*/;
				aimg = "tj01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/tj01.jpg*/;
				zimg = "zx_tj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_tj.gif*/;
				break;
			case '9':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				aimg = "js01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js01.jpg*/;
				zimg = "zx_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_js.gif*/;
				break;
			case '10':
				phone = "400-886-3132";
				img = "at_rtnum_js.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_js.jpg*/;
				aimg = "js01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/js01.jpg*/;
				zimg = "zx_js.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_js.gif*/;
				break;
			case '11':
				phone = "400-886-3132";
				img = "at_rtnum_zj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_zj.jpg*/;
				aimg = "zj01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zj01.jpg*/;
				zimg = "zx_zj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_zj.gif*/;
				break;
			case '13':
				phone = "400-053-6402";
				img = "at_rtnum_fj.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_fj.jpg*/;
				aimg = "fj01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/fj01.jpg*/;
				zimg = "zx_fj.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_fj.gif*/;
				break;
			case '15':
				phone = "400-031-6904";
				img = "at_rtnum_sd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sd.jpg*/;
				aimg = "sd01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sd01.jpg*/;
				zimg = "zx_sd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_sd.gif*/;
				break;
			case '19':
				phone = "400-074-5101";
				img = "at_rtnum_gd.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_gd.jpg*/;
				aimg = "gd01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/gd01.jpg*/;
				zimg = "zx_gd.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_gd.gif*/;
				break;
			case '23':
				phone = "400-080-4301";
				img = "at_rtnum_sc.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_sc.jpg*/;
				aimg = "sc01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/sc01.jpg*/;
				zimg = "zx_sc.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_sc.gif*/;
				break;
			default:
				phone = "400-168-6016";
				img = "at_rtnum_other_6931227.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/at_rtnum_other_6931227.jpg*/;
				aimg = "cm01.jpg"/*tpa=http://img.zhaoshang.net/data/telephone/policy/cm01.jpg*/;
				zimg = "zx_qg_1227.gif"/*tpa=http://img.zhaoshang.net/data/telephone/policy/zx_qg_1227.gif*/;
				break;
		}
		
		HMmakeToHtml( phone , "news_policypage_text" , "text" );
		HMmakeToHtml( img , "news_policypage_img" , "img" );
		HMmakeToHtml( aimg , "news_policypage_aimg" , "img" );
		HMmakeToHtml( zimg , "news_policypage_zimg" , "img" );
		
	}
}

//转换成html，data是数据，id是html元素id，type是图片还是文字
function HMmakeToHtml( data , id , type ){
	if(document.getElementById(id)){
		var obj = document.getElementById(id);

		if( type == "img" ){

			var imgId = "#"+id;
			$(imgId).attr("src",data);

		}else if( type == "text" ){

			obj.innerHTML=data;

		}
	}
}