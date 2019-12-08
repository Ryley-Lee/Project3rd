/**
 * login2.js
 */

/*정규식*/
var regExpPw = RegExp(/^(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()\-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/);//비번
var getCheck= RegExp(/^[a-zA-Z0-9]{6,12}$/); 			//아이디
var getyear= RegExp(/^[0-9]{4}$/); 						//년
var getmonth_date= RegExp(/^[0-9]{1,2}$/); 				//월,일
var getName= RegExp(/^[가-힣]+$/);						//이름
var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]{5,14}$/);	//이메일

$(document).ready(function(){
$("#member_modify_next_btn").click(function() {
	var member_modify_pass = $("#member_modify_pass").val();
	
	//이전 비밀번호는 못쓰게 유효성 검증 해야함
	if ($.trim($('#member_modify_pass').val())=="") {
		$('#member_modify_error_pass').text('비밀번호를 입력해주세요!');
		$("#member_modify_pass").val("").focus();
		return false;
	}
	if($.trim($('#member_modify_pass').val()).length<8 || $.trim($('#member_modify_pass').val()).length>50){
		$('#member_modify_error_pass').text('8자이상으로 설정해주세요!');
		$("#member_modify_pass_check").val("")
		$("#member_modify_pass").val("").focus();
		return false;
	}
	
	if ($.trim($('#member_modify_pass_check').val())=="") {
		$('#member_modify_error_pass_check').text('비밀번호 확인을 입력해주세요!');
		$("#member_modify_pass_check").val("").focus();
		return false;
	}
	if ($.trim($('#member_modify_pass_check').val())=="") {
		$('#member_modify_error_pass_check').text('비밀번호 확인을 입력해주세요!');
		$("#member_modify_pass_check").val("").focus();
		return false;
	}

	
	//비밀번호 정규식 = 영문,숫자,특수문자의 조합
	if(!regExpPw.test($("#member_modify_pass").val())){ 
		$('#member_modify_error_pass').text('영문,숫자,특수문자의 조합으로 입력해주세요!');
		$("#member_modify_pass_check").val("")
		$("#member_modify_pass").val("").focus();
		return false; 
	}

	//비번 비번확인이 같은지 확인
	if($("#member_modify_pass_check").val() != $('#member_modify_pass').val()){
		$('#member_modify_error_pass_check').text('비밀번호가 같지 않습니다!');
		$("#member_modify_pass_check").val("");
		$("#member_modify_pass").val("").focus();
		return false;
	}

	//아이디와 비밀번호가 같을때 
	if($("#member_modify_id").val() == $("#member_modify_pass").val()){ 
		$('#member_modify_error_pass').text('아이디와 비밀번호가 같습니다');
		$("#member_modify_pass_check").val("");
		$("#member_modify_pass").val("").focus(); 
		return false; 
	}
	if ($.trim($('#member_modify_name').val())=="") {
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		$("#member_modify_name").val("").focus();
		return false;
	}

	if (!getName.test($('#member_modify_name').val())) {//이름 정규식
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		$("#member_modify_name").val("").focus();
		return false;
	}

	//년 공백
	if ($.trim($('#member_modify_birth_year').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		$("#member_modify_birth_year").focus();
		return false;
	}
	
	//년 정규식
	if(!getyear.test($('#member_modify_birth_year').val())){
		$('#member_modify_error_birth').text('년을 입력해주세요!');
		$("#member_modify_birth_year").val("").focus();
		return false;
	}
	
	//년 1900 ~ 2020사이 체크
	if ($.trim($('#member_modify_birth_year').val())>2020 || $.trim($('#member_modify_birth_year').val())<1900) {
		$('#member_modify_error_birth').text('유효한 년도를 입력해 주세요!');
		$("#member_modify_birth_year").val("").focus();
		return false;
	}
	//월 공백
	if ($.trim($('#member_modify_birth_month').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		$("#member_modify_birth_month").focus();
		return false;
	}
	
	//월 정규식
	if(!getmonth_date.test($('#member_modify_birth_month').val())){
		$('#member_modify_error_birth').text('월을 입력해주세요!');
		$("#member_modify_birth_month").val("").focus();
		return false;
	}
	
	//월 1 ~ 12사이 체크
	if ($.trim($('#member_modify_birth_month').val())>12 || $.trim($('#member_modify_birth_month').val())<1) {
		$('#member_modify_error_birth').text('유효한 월을 입력해 주세요!');
		$("#member_modify_birth_month").val("").focus();
		return false;
	}
	
	//일 정규식
	if ($.trim($('#member_modify_birth_date').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		$("#member_modify_birth_date").focus();
		return false;
	}
	
	//일 정규식
	if(!getmonth_date.test($('#member_modify_birth_date').val())){
		$('#member_modify_error_birth').text('일을 입력해주세요!');
		$("#member_modify_birth_date").val("").focus();
		return false;
	}
	
	//일 1 ~ 30사이 체크
	if ($.trim($('#member_modify_birth_date').val())>31 || $.trim($('#member_modify_birth_date').val())<1) {
		$('#member_modify_error_birth').text('유효한 일을 입력해 주세요!');
		$("#member_modify_birth_date").val("").focus();
		return false;
	}
	
	if ($.trim($('#member_modify_select_gender option:selected').val())=='성별') {
		$('#member_modify_error_birth').text('성별을 선택해 주세요!');
		$("#member_modify_select_gender").focus();
		return false;
	}
		
	if ($.trim($('#member_modify_email').val())=="") {
		$('#member_modify_error_email_domain').text('이메일을 입력해주세요!');
		$("#member_modify_email").val("").focus();
		return false;
	}
	
	if ($.trim($('#member_modify_email_datalist').val())=="") {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		$("#member_modify_email_datalist").val("").focus();
		return false;
	}
	
	//이메일 도메인 정규식
	if (!emailCheck.test($('#member_modify_email_datalist').val())) {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		$("#member_modify_email_datalist").val("").focus();
		return false;
	}

	if ($.trim($('#member_modify_tel1').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		$("#member_modify_tel1").focus();
		return false;
	}
	if ($.trim($('#member_modify_tel2').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		$("#member_modify_tel2").focus();
		return false;
	}
	if ($.trim($('#member_modify_tel3').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		$("#member_modify_tel3").focus();
		return false;
	}
	//기본정보 -> 프로필
	if($("#member_modify_page2").css("display") == "none"){
		$("#member_modify_page1").hide();
		$("#member_modify_sequence_list1").hide('membership_step');
		$("#member_modify_page2").show();
		$("#member_modify_sequence_list2").show('membership_step');
		$("#member_modify_sequence_list2").addClass('membership_step');

	}
});


//생년월일,전화번호 숫자만 받도록
$(".number2Only").on("focus", function() {//포커스되었을때
    var x = $(this).val();
    $(this).val(x);
}).on("focusout", function() {//포커스에서 나갔을 때
    var x = $(this).val();		//값을 받아오고
    if(x && x.length > 0) {		//내용물이 입력되었다면
        if(!$.isNumeric(x)) {	//숫자가 아니라면
            x = x.replace(/[^0-9]/g,"");	//숫자가 아닌존재들을 지움
        }
    }
}).on("keyup", function() {//숫자가 눌렸을 때
	$(this).val($(this).val().replace(/[^0-9]/g,""));//숫자가 아닌존재들을 지움
});


//비밀번호 검사
$("#member_modify_pass").on("focusout", function() {
	if ($.trim($('#member_modify_pass').val())=="") {
		$('#member_modify_error_pass').text('비밀번호를 입력해주세요!');
		return false;
	}

	if($.trim($('#member_modify_pass').val()).length<8 || $.trim($('#member_modify_pass').val()).length>50){
		$('#member_modify_error_pass').text('8자이상으로 설정해주세요!');
		return false;
	}
	if(!regExpPw.test($("#member_modify_pass").val())){ 
		$('#member_modify_error_pass').text('영문,숫자,특수문자의 조합으로 입력해주세요!');
		return false; 
	}
	if($("#member_modify_id").val() == $("#member_modify_pass").val()){ 
		$('#member_modify_error_pass').text('아이디와 비밀번호가 같습니다');
		return false; 
	}
	$('#member_modify_error_pass').text('');
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_pass').val())=="") {
		$('#member_modify_error_pass').text('비밀번호를 입력해주세요!');
		return false;
	}

	if($.trim($('#member_modify_pass').val()).length<8 || $.trim($('#member_modify_pass').val()).length>50){
		$('#member_modify_error_pass').text('8자이상으로 설정해주세요!');
		return false;
	}
	if(!regExpPw.test($("#member_modify_pass").val())){ 
		$('#member_modify_error_pass').text('영문,숫자,특수문자의 조합으로 입력해주세요!');
		return false; 
	}
	if($("#member_modify_id").val() == $("#member_modify_pass").val()){ 
		$('#member_modify_error_pass').text('아이디와 비밀번호가 같습니다');
		return false; 
	}
	/*$.ajax({					//이전에 사용한 비밀번호는 재사용 못하게 막는 코드 실험해봐야함
        type:"POST",
        url:"member_modify_ok", 
        data: {"member_modify_pass":member_modify_pass},  			//좌측 id 피라미터 이름에 우측 $mem_id변수값을 저장
        datatype:"int",					//서버의 실행된 결과값을 사용자로 받아오는 방법
        success: function (data) {		//아작스로 받아오는것이 성공했을경우 서버 데이터를 data변수에 저장
      	  if(data==1){	//중복 아이디가 있다면
      		$('#member_modify_error_pass').text('이전에 사용한 비밀번호 입니다!');
          	return false;
      	  }  
        },
    	  error:function(){//비동기식 아작스로 서버디비 데이터를 못가져와서 에러가 발생했을 때 호출되는 함수이다.
    		  alert("data error");
    	  }
      });*/
	$('#member_modify_error_pass').text('');
	
	if (key.keyCode == 13) {
		$("#member_modify_pass_check").focus();
	}
});

//비밀번호 확인 유효성 검증
$("#member_modify_pass_check").on("focusout", function() {
	if ($.trim($('#member_modify_pass_check').val())=="") {
		$('#member_modify_error_pass_check').text('비밀번호 확인을 입력해주세요!');
		return false;
	}
	if($.trim($('#member_modify_pass_check').val()) != $.trim($('#member_modify_pass').val())){
		$('#member_modify_error_pass_check').text('비밀번호가 같지 않습니다!');
		return false;
	}
	$('#member_modify_error_pass_check').text('');
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_pass_check').val())=="") {
		$('#member_modify_error_pass_check').text('비밀번호 확인을 입력해주세요!');
		return false;
	}
	if($.trim($('#member_modify_pass_check').val()) != $.trim($('#member_modify_pass').val())){
		$('#member_modify_error_pass_check').text('비밀번호가 같지 않습니다!');
		return false;
	}
	$('#member_modify_error_pass_check').text('');
	if (key.keyCode == 13) {
		$('#member_modify_name').focus();
	}
});

//이름 유효성 검증
$('#member_modify_name').on("focusout", function() {
	if ($.trim($('#member_modify_name').val())=="") {
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		return false;
	}

	if (!getName.test($('#member_modify_name').val())) {//이름 정규식
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		return false;
	}
	$('#member_modify_error_name').text('');
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_name').val())=="") {
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		return false;
	}

	if (!getName.test($('#member_modify_name').val())) {//이름 정규식
		$('#member_modify_error_name').text('이름을 입력해주세요!');
		return false;
	}
	$('#member_modify_error_name').text('');
	if (key.keyCode == 13) {
		$('#member_modify_birth_year').focus();
	}
});

//생년월일 : 년 유효성 검증
$('#member_modify_birth_year').on("focusout", function() {
	if ($.trim($('#member_modify_birth_year').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getyear.test($('#member_modify_birth_year').val())){
		$('#member_modify_error_birth').text('년을 입력해주세요!');
		return false;
	}
	if ($.trim($('#member_modify_birth_year').val())>2020 || $.trim($('#member_modify_birth_year').val())<1900) {
		$('#member_modify_error_birth').text('유효한 년도를 입력해 주세요!');
		return false;
	}
	
	$('#member_modify_error_birth').text('');
    }).on("keyup", function(key) {
	if ($.trim($('#member_modify_birth_year').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getyear.test($('#member_modify_birth_year').val())){
		$('#member_modify_error_birth').text('년을 입력해주세요!');
		return false;
	}
	if ($.trim($('#member_modify_birth_year').val())>2020 || $.trim($('#member_modify_birth_year').val())<1900) {
		$('#member_modify_error_birth').text('유효한 년도를 입력해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
	if (key.keyCode == 13) {
		$('#member_modify_birth_month').focus();
	}
});

//생년월일 : 월 유효성검증
$('#member_modify_birth_month').on("focusout", function() {
	if ($.trim($('#member_modify_birth_month').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getmonth_date.test($('#member_modify_birth_month').val())){
		$('#member_modify_error_birth').text('월을 입력해주세요!');
		return false;
	}
	
	if ($.trim($('#member_modify_birth_month').val())>12 || $.trim($('#member_modify_birth_month').val())<1) {
		$('#member_modify_error_birth').text('유효한 월을 입력해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_birth_month').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getmonth_date.test($('#member_modify_birth_month').val())){
		$('#member_modify_error_birth').text('월을 입력해주세요!');
		return false;
	}
	
	if ($.trim($('#member_modify_birth_month').val())>12 || $.trim($('#member_modify_birth_month').val())<1) {
		$('#member_modify_error_birth').text('유효한 월을 입력해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
	if (key.keyCode == 13) {
		$('#member_modify_birth_date').focus();
	}
});

//생년월일 : 일 유효성 검증
$('#member_modify_birth_date').on("focusout", function() {
	if ($.trim($('#member_modify_birth_date').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getmonth_date.test($('#member_modify_birth_date').val())){
		$('#member_modify_error_birth').text('일을 입력해주세요!');
		return false;
	}
	
	if ($.trim($('#member_modify_birth_date').val())>31 || $.trim($('#member_modify_birth_date').val())<1) {
		$('#member_modify_error_birth').text('유효한 일을 입력해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_birth_date').val())=="") {
		$('#member_modify_error_birth').text('생년월일을 입력해 주세요!');
		return false;
	}
	
	if(!getmonth_date.test($('#member_modify_birth_date').val())){
		$('#member_modify_error_birth').text('일을 입력해주세요!');
		return false;
	}
	
	if ($.trim($('#member_modify_birth_date').val())>31 || $.trim($('#member_modify_birth_date').val())<1) {
		$('#member_modify_error_birth').text('유효한 일을 입력해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
	if (key.keyCode == 13) {
		$('#member_modify_select_gender').focus();
	}
});

//성별 유효성 검증
$('#member_modify_select_gender').on("focus", function() {
	if ($.trim($('#member_modify_select_gender option:selected').val())=='성별') {
		$('#member_modify_error_birth').text('성별을 선택해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
}).on("focusout", function() {
	if ($.trim($('#member_modify_select_gender option:selected').val())=='성별') {
		$('#member_modify_error_bir qth').text('성별을 선택해 주세요!');
		return false;
	}
	$('#member_modify_error_birth').text('');
}).on("keyup", function(key) {
	if (key.keyCode == 13) {
		$('#member_modify_email').focus();
	}
});

//이메일 id 유효성 검증
$('#member_modify_email').on("focusout", function() {
	if ($.trim($('#member_modify_email').val())=="") {
		$('#member_modify_error_email_domain').text('이메일을 입력해주세요!');
		return false;
	}
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_email').val())=="") {
		$('#member_modify_error_email_domain').text('이메일을 입력해주세요!');
		return false;
	}
	$('#member_modify_error_email_domain').text('');
	if (key.keyCode == 13) {
		$('#member_modify_email_datalist').focus();
	}
});

//이메일 도메인 유효성 검증
$('#member_modify_email_datalist').on("focusout", function() {
	if ($.trim($('#member_modify_email_datalist').val())=="") {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		return false;
	}
	
	if (!emailCheck.test($('#member_modify_email_datalist').val())) {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		return false;
	}
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_email_datalist').val())=="") {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		return false;
	}
	
	if (!emailCheck.test($('#member_modify_email_datalist').val())) {
		$('#member_modify_error_email_domain').text('도메인을 입력해주세요!');
		return false;
	}
	$('#member_modify_error_email_domain').text('');
	if (key.keyCode == 13) {
		$('#member_modify_tel1').focus();
	}
});
//핸드폰 번호1
$('#member_modify_tel1').on("focusout", function() {
	if ($.trim($('#member_modify_tel1').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_tel1').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
	$('#member_modify_error_tel').text('');
	if (key.keyCode == 13) {
		$('#member_modify_tel2').focus();
	}
});

//핸드폰 번호2
$('#member_modify_tel2').on("focusout", function() {
	if ($.trim($('#member_modify_tel2').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_tel2').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
	$('#member_modify_error_tel').text('');
	if (key.keyCode == 13) {
		$('#member_modify_tel3').focus();
	}
});

//핸드폰 번호3
$('#member_modify_tel3').on("focusout", function() {
	if ($.trim($('#member_modify_tel3').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
}).on("keyup", function(key) {
	if ($.trim($('#member_modify_tel3').val())=="") {
		$('#member_modify_error_tel').text('핸드폰번호를 입력해주세요!');
		return false;
	}
	$('#member_modify_error_tel').text('');
	if (key.keyCode == 13) {
		$("#member_modify_next_btn").trigger("click");
	}
});
/*page3 버튼*/
//카테고리 -> 기본정보 : 이전으로
$("#member_modify_before_btn2").click(function() {
	if($("#member_modify_page1").css ("display") == "none"){
		$("#member_modify_page2").hide();
		$("#member_modify_sequence_list2").hide('membership_step');
		$("#member_modify_page1").show();
		$("#member_modify_sequence_list1").addClass('membership_step');
		$("#member_modify_sequence_list1").show('membership_step');

	}
});
});
