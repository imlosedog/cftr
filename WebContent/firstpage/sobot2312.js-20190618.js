var zhiManager = (getzhiSDKInstance());
zhiManager.on("load", function() {
    zhiManager.initBtnDOM();
});
function sobot(type,status,phone,yuan) {
    var fiststring;
    if (type == 'xuannaer') {//ѡ�Ķ�ר��
        switch (status) {
            case 'revenue':
                fiststring = '���ã���������ר�����̹��ʣ����������˽�����˰���Ż����ߣ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����!';
                break;
            case 'land_workshop':
                fiststring = '���ã���������ר�����̹��ʣ������������˽����ػ��ǳ����������Ϣ�أ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
            case 'capital':
                fiststring = '���ã���������ר�����ڹ��ʣ���������Ҫ�ķ�����ʽ�֧���أ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
			case 'tax':
				fiststring = '���ã���������ר��˰����ʣ����������˽�����˰���Ż����ߣ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����!';
                break;
			case 'www':
                fiststring = '���ã���������ר��ѡַ���ʣ����������˽���Щ���ݣ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����!';
                break;
			case 'fiscal':
                fiststring = '���ã���������ר����˰���ʣ������˽�����˰���Ż����ߣ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����!';
                break;
            default:
                fiststring = '���ã���������ר�����ʣ�������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
        }
    } else if (type == 'tax') { //˰��ר��ҳ
            fiststring = '���ã���������ר��˰����ʣ�����������ѯ�ķ����˰�������أ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
    } else if(type == 'introduction'){//�ƽ��ר��ҳ
            switch (status){
                case 'investment':
                    fiststring = '���ã���������ר�����ʣ�����Ϊ���ṩһվʽ�����ƽ����������������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                    break;
                case 'one_stop':
                    fiststring = '���ã���������ר�����ʣ�����Ϊ���ṩһվʽ���̽��������������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                    break;
                default:
                    fiststring = '���ã���������ר�����ʣ�����Ϊ���ṩһվʽ���̽��������������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                    break;
            }
    } else if(type == 'train'){//����ʵ����ѵ
        switch (type){
            case 'investment':
                fiststring = '���ã���������ר�����ʣ���������Ҫ�˽��ķ������ѵ�γ������أ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
            case 'customized':
                fiststring = '���ã���������ר�����ʣ���������Ҫʲô���͵Ķ�����ѵ�����أ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
            case 'whole':
                fiststring = '���ã���������ר�����ʣ�����Ϊ���ṩһվʽ���̽��������������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
            default:
                fiststring = '���ã���������ר�����ʣ�����Ϊ���ṩһվʽ���̽��������������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
                break;
        }
    } else if(type == 'finance'){//����
        fiststring = '���ã���������ר�����ڹ��ʣ�������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
    } else if(type == 'law'){ //����
        fiststring = '���ã���������ר�����ɹ��ʣ�������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
    } else if (type == 'tanikawa') {//���й���
        fiststring = '���ã����ǹȴ�������ѯ���ʣ�������ʲô���԰������ģ� �ȴ�����Ϊ���ṩ�������̡�԰�����̡���ҵ�ز�����ҵѡַ���ǻ�԰����Ϣ��������Ʒ��Ӫ����6������������Ҳ����ֱ�Ӳ���' + phone + '��רҵ����ͬ���������ط���';
    } else if (type == 'currency') {//����ͨ��
        fiststring = '���ã���������ר�����ʣ�������ʲô���԰ﵽ����Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����';
    }else if(type == "chujinhui"){ //�ٽ���
        fiststring = "���ã�������������������ʴٽ��ᣬ������ʲô���԰����ģ���Ҳ����ֱ�Ӳ���"+phone+"ֱ����ϵ���ǡ�"
	} else if(type == 'university') {//�ȴ���ѧ
        fiststring = "���ã����ǹȴ���ѧ��ѯ���ʣ�������ʲô���԰������ģ� �ȴ���ѧ������������ѵȨ������ƽ̨����Ҳ����ֱ�Ӳ���"+phone+"��רҵ����ͬ���������ط���"
    } else if(type == '010b') {  //010b
        fiststring = "���ã�������Ǹ������̵� ��������ʲô������Ҫ��ѯ����Ҳ����ѡ��ֱ�Ӳ������ǵ����̵绰"+phone+"������רҵ��ԱΪ������������⣡";
    } else if(type == 'zhaoshang'){
		switch(status){
		case 'binshui':
				fiststring = '���ã���������ר�����̹��ʣ����������˽����������Ż����ߣ�Ҳ��ֱ�Ӳ���' + phone + '����רҵ����Ϊ�����!';
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

