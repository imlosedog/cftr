function NewSection()
{
						var datas;
             			var formdata=new FormData();
             			console.log($("#sName").val());
             			$.ajax({
             				url:"http://localhost:8080/Summer/section/add",
             				type:"post",
             				contentType:"application/x-www-form-urlencoded;charset=UTF-8",
             				data:$("#section-form").serialize(),
             				dataType:"json",
             				success:function(result){
             					location.reload();}
             			});
             			
 };
 $("#deleteSection").click(function(){
		var id=$(this).parents('.row').children('.col-xs-1');
		console.log(id.text());
		$.ajax({
				url:"http://localhost:8080/Summer/section/delete",
				type:"get",
				data:"id="+id.text(),
				dataType:"json",
				success:function(result){
					location.assign("http://localhost:8080/Summer");}
			});
	});
