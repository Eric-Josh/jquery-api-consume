$(function(){

	$('#logout').click(function(){
		sessionStorage.removeItem("access_token");

		var url = "file:///home/swifta/Documents/shades/dev/jquery-consume-api/index.html";
		 $(location).attr('href',url);
	});
	
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
		        	$('#success').text('You have successfully login');
		        	$('#success').css('color','green');
		          	// console.log(result['access_token']);
		          	sessionStorage.setItem("access_token", result['access_token']);
		          	var url = "file:///home/swifta/Documents/shades/dev/jquery-consume-api/project.html";
		          	$(location).attr('href',url);
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
	});

	$('#add').click(function(){
		if($('#name').val() != '' && $('#desc').val() != '' && $('#cost').val() != ''){
			$.ajax({
		        url: "http://localhost:8000/api/projects",
		        method: 'post',
		        data: {
		        	name: $('#name').val(),
		            introduction: $('#desc').val(),
		            location: $('#loc').val(),
		            cost: $('#cost').val(),
		        },
		        headers: {
			        "Content-Type": "application/x-www-form-urlencoded",
			        "Authorization": "Bearer "+sessionStorage.getItem("access_token"),
			    },
		        success: function(result){
		        	var url = "file:///home/swifta/Documents/shades/dev/jquery-consume-api/project.html";
		          	$(location).attr('href',url);

		          	$('#success').text('You have successfully added a new project.');
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