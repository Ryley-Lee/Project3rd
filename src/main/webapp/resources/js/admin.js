/**
 * admin.js
 */

function notice_check() {
	if($('#noti_name').val() == "") {
		alert('작성자를 입력해주세요.');
		$('#noti_name').val("").focus();
		return false;
	}
	if($('#noti_pwd').val() == "") {
		alert('작성자를 입력해주세요.');
		$('#noti_pwd').val("").focus();
		return false;
	}
	if($('#noti_title').val() == "") {
		alert('작성자를 입력해주세요.');
		$('#noti_title').val("").focus();
		return false;
	}
	if($('#noti_cont').val() == "") {
		alert('작성자를 입력해주세요.');
		$('#noti_cont').val("").focus();
		return false;
	}
}