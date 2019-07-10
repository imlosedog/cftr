<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
   <%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
	
    <title>User</title>

  </head>
  <body>
  
    <h1><c:out value="${title}"/></h1>
    <div>
  <iframe src="${content}" style="width:1000px;height:2000px">
  </iframe>
	</div>
	<div>
	<iframe src="../articles/comments " style="width:1000px;height:200px">
	</iframe>
	</div>
 </body>
  
</html>