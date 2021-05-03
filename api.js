$(function(){
	
	$('#login').click(function(){
		if($('#email').val() != '' && $('#email').val() != ''){
			$.ajax({
		        url: "http://localhost:8000/api/login",
		        method: 'post',
		        data: {
		            email: $('#email').val(),
		            password: $('#pwd').val(),
		        },
		        success: function(result){
		        	var url = "file:///home/swifta/Documents/shades/dev/jquery-consume-api/project.html";
		          	$(location).attr('href',url);
		          	console.log(result);
		        },
		        error: function(result){
		        	$('#error').text('Something went wrong. Please try again!');
		        	$('#error').css('color','red');
		        }
	    	});
		}
	});

	$('#register').click(function(){
		if($('#name').val() != '' && $('#email').val() != '' && $('#pwd').val() != '' && $('#confirm-pwd').val() != ''){
			$.ajax({
		        url: "http://localhost:8000/api/register",
		        method: 'post',
		        data: {
		        	name: $('#name').val(),
		            email: $('#email').val(),
		            password: $('#pwd').val(),
		            password_confirmation: $('#confirm-pwd').val(),
		        },
		        success: function(result){
		        	var url = "file:///home/swifta/Documents/shades/dev/jquery-consume-api/index.html";
		          	$(location).attr('href',url);

		          	$('#success').text('You have successfully registered. Kindly login');
		        	$('#success').css('color','green');
		        },
		        error: function(result){
		        	$('#error').text('Something went wrong. Please try again!');
		        	$('#error').css('color','red');
		        }
	    	});
		}
	})
	
	

})