var zhiManager = (getzhiSDKInstance());
zhiManager.on("load", function() {
    zhiManager.initBtnDOM();
});
function sobot(type,status,phone,yuan) {
    var fiststring;
    if (type == 'xuannaer') {//选哪儿专题
        switch (status) {
            case 'revenue':
                fiststring = '您好，我是您的专属招商顾问，请问您想了解哪类税收优惠政策？也可直接拨打' + phone + '，由专业顾问为您解答!';
                break;
            case 'land_workshop':
                fiststring = '您好，我是您的专属招商顾问，请问您是想了解土地还是厂房的相关信息呢？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
            case 'capital':
                fiststring = '您好，我是您的专属金融顾问，请问您需要哪方面的资金支持呢？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
			case 'tax':
				fiststring = '您好，我是您的专属税务顾问，请问您想了解哪类税收优惠政策？也可直接拨打' + phone + '，由专业顾问为您解答!';
                break;
			case 'www':
                fiststring = '您好，我是您的专属选址顾问，请问您想了解哪些内容？也可直接拨打' + phone + '，由专业顾问为您解答!';
                break;
			case 'fiscal':
                fiststring = '您好，我是您的专属财税顾问，您想了解哪类税收优惠政策？也可直接拨打' + phone + '，由专业顾问为您解答!';
                break;
            default:
                fiststring = '您好，我是您的专属顾问，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
        }
    } else if (type == 'tax') { //税务专题页
            fiststring = '您好，我是您的专属税务顾问，请问您想咨询哪方面的税务问题呢？也可直接拨打' + phone + '，由专业顾问为您解答！';
    } else if(type == 'introduction'){//推介会专题页
            switch (status){
                case 'investment':
                    fiststring = '您好，我是您的专属顾问，可以为您提供一站式招商推介会解决方案，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                    break;
                case 'one_stop':
                    fiststring = '您好，我是您的专属顾问，可以为您提供一站式招商解决方案，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                    break;
                default:
                    fiststring = '您好，我是您的专属顾问，可以为您提供一站式招商解决方案，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                    break;
            }
    } else if(type == 'train'){//招商实务培训
        switch (type){
            case 'investment':
                fiststring = '您好，我是您的专属顾问，请问您需要了解哪方面的培训课程问题呢？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
            case 'customized':
                fiststring = '您好，我是您的专属顾问，请问您需要什么类型的定制培训服务呢？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
            case 'whole':
                fiststring = '您好，我是您的专属顾问，可以为您提供一站式招商解决方案，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
            default:
                fiststring = '您好，我是您的专属顾问，可以为您提供一站式招商解决方案，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
                break;
        }
    } else if(type == 'finance'){//金融
        fiststring = '您好，我是您的专属金融顾问，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
    } else if(type == 'law'){ //法律
        fiststring = '您好，我是您的专属法律顾问，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
    } else if (type == 'tanikawa') {//联行官网
        fiststring = '您好，我是谷川联行咨询顾问，请问有什么可以帮助您的？ 谷川联行为您提供政府招商、园区招商、产业地产、企业选址、智慧园区信息化、招商品牌营销等6大解决方案，您也可以直接拨打' + phone + '，专业顾问同样会给您相关服务。';
    } else if (type == 'currency') {//其他通用
        fiststring = '您好，我是您的专属顾问，请问有什么可以帮到您？也可直接拨打' + phone + '，由专业顾问为您解答！';
    }else if(type == "chujinhui"){ //促进会
        fiststring = "您好，这里是天津市招商引资促进会，请问有什么可以帮您的？您也可以直接拨打"+phone+"直接联系我们。"
	} else if(type == 'university') {//谷川大学
        fiststring = "您好，我是谷川大学咨询顾问，请问有什么可以帮助您的？ 谷川大学是招商引资培训权威服务平台，您也可以直接拨打"+phone+"，专业顾问同样会给您相关服务。"
    } else if(type == '010b') {  //010b
        fiststring = "您好，我这边是负责招商的 请问您有什么事情需要咨询？您也可以选择直接拨打我们的招商电话"+phone+"，会有专业人员为您解答招商问题！";
    } else if(type == 'zhaoshang'){
		switch(status){
		case 'binshui':
				fiststring = '您好，我是您的专属招商顾问，请问您想了解哪类招商优惠政策？也可直接拨打' + phone + '，由专业顾问为您解答!';
                break;
		}
	}
    if (yuan == 1) {
        zhiManager.set('adminHelloWord',fiststring);
    } else {
        var statu = zhiManager.getStatus();
        if (statu == 'collapse') {
			 fiststring=encodeURI(fiststring);
             zhiManager.expand();
            var url =  $("#ZCChatFrame").attr('src');
            var url_first = url.substr(0,url.indexOf('adminHelloWord='));
            if (url_first) {
                var url_end = url.substr(url.indexOf('adminHelloWord='));
                if (url_end.indexOf('&')) {
                    var url_hou = url_end.substr(url_end.indexOf('&'));
                }
                var name = url_first + 'adminHelloWord=' + fiststring + url_hou;
            } else {
                var name = url + '&adminHelloWord=' + fiststring;
            }
            $("#ZCChatFrame").attr('src',name)
        } else {
            zhiManager.collapse();
        }
    }

}

