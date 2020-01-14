function request () {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var address = document.getElementById("address").value;
var city = document.getElementById("city").value;
var zipcd = document.getElementById("zipcd").value;
	var comment = document.getElementById("comment")
	var text;


		if  (name.length < 4) {
		text = "Please Enter Your Name";
		comment.innerHTML = text;
		return false;	
		}

		if (email.indexOf("@") == -1 || email.length < 10) {
		text = " Email is Not Valid ";
		comment.innerHTML = text;
		return false;
}

		if  (isNaN(phone) || phone.length < 10) {    
		text = "Please Enter Your Phone";
		comment.innerHTML = text;
		return false;	
		}

		if  (address.length < 10) {    
		text = "Please Enter Your Address";
		comment.innerHTML = text;
		return false;	
		}

		if  (city.length < 4) {    
		text = "Please Enter Your City";
		comment.innerHTML = text;
		return false;	
		}

		if  (isNaN(zipcd) || zipcd.length < 6) {    
		text = "Please Enter Your Postecode";
		comment.innerHTML = text;
		return false;	
		}

		{
			comment.style.color ="green";
			text = "Request is Valid";
			comment.innerHTML = text;
			alert("Welcome To Clean Crew")
			return true;		
		}	
}

	