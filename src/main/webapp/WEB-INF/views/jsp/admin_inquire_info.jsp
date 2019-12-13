<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> </title>
</head>
<%@include file="../include/admin_header.jsp" %>
<div id="adm_inq_title"><h3 class="adm_inq_title">문의내용 열람</h3></div>
<table border="1" class="adm_inq_table">
	<tr>
		<th align="center">처리상태</th>
		<td align="center">
			<c:if test="${i.inq_state == 0}"><font color="blue">미처리</font></c:if>
			<c:if test="${i.inq_state == 1}"><font color="red">처리</font></c:if>			
		</td>
		
		<th align="center">문의분류</th>
		<td align="center">
			<c:if test="${i.inq.item1 == 개선/제안}">개선/제안</c:if>
			<c:if test="${i.inq.item1 == 일반문의}">일반문의</c:if>
			<c:if test="${i.inq.item1 == 제휴/협업 문의}">제휴/협업 문의</c:if>
		</td>
		
		<th align="center">문의날짜</th>
		<td align="center">
			${i.inq_date}
		</td>
	</tr>
	
	<tr>
		<th align="center">PhoneNumber</th>
		<td align="center">
			${i.inq_phone}
		</td>
		
		<th align="center">E-Mail</th>
		<td align="center">
			${i.inq_email}
		</td>	
	</tr>
	
	<tr>
		<th colspan="6" align="center">
			문의하기 내용
		</th>
	</tr>
	<tr>
		<td colspan="6" id="adm_inq_field">
			${i.inq_cont}
		</td>
	</tr>
	
	<div class="adm_inq_file">

	</div>		
</table>

</html>