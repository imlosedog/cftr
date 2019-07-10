
	


<!DOCTYPE unspecified PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
	 <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
	 <%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
	<% 
    String path = request.getContextPath(); 
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/"; 
	%> 

    
	
	
	<script type="text/javascript" charset="utf-8" src="<%=basePath %>/ueditor/ueditor.config.js"></script>
	<!-- 编辑器源码文件 -->
	<script type="text/javascript" charset="utf-8" src="<%=basePath %>/ueditor/ueditor.all.js"> </script>
	 <script type="text/javascript" charset="utf-8" src="<%=basePath %>/ueditor/lang/zh-cn/zh-cn.js"></script>
	  <script type="text/javascript" charset="utf-8" src="<%=basePath %>/ueditor/test.js"></script>
	  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
	<script>var ue = UE.getEditor('editor');</script>

	</head>
	<body>
		<div>
		  <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
		</div>
		<script type="text/javascript">
		$(document).ready(function(){
			$('#sub').click(function(){alert("aa");
			var jdata={};
			var t=$('form').serializeArray();
			$.each(t,function(){
				jdata[this.name]=this.value;
			
			});
			
			$.ajax({
				type:"post",
				async:"true",
				contentType:"application/json;charset=UTF-8",
				url:"http://localhost:8080/Summer/mytest",
				data:JSON.stringify(jdata),
				dataType:"json",
				//data:{mycontent:"百度"},
				success:function(result){alert("true");
				alert(result)},
				error:function(XMLHttpRequest,textStatus,errorThrown){
					console.log(XMLHttpRequest.status);
					console.log(XMLHttpRequest.readyState);
					console.log(textStatus);
				}
			});
			alert("ss");
		});
	
		
		});
		</script>

    <form action='http://localhost:8080/Summer/mytest' method='POST' accept-charset="utf-8" id="test-form"
    		onsubmit='return test()'>
    <input id='mm' type='text' name='mycontent' maxlength=1024/>
    <button type="submit">Submit</button>
    </form>
     <button id="sub">整个html的内容</button>
		
		
	</body>	
<script>
	function test(){
	var form=document.getElementById('test-form');
	var cont=document.getElementById('mm');
	cont.value=ue.getContent();
	return true;}
</script>

</html>
	