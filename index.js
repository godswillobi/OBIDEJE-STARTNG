
function validateForm(){
	var x = document.forms
	["myForm"]["Name"].value;
	if (x== ""){
		alart("Name must be filled out");
	}else if(name.length <4) {
		alert("Name must be at least 4 characters long.");
	return fasle;
		}
}
	
function validateForm(){
	var x = document.forms
	["myForm"]["Message"].value;
	if (x== ""){
		alart("please include your message");
	}else if(Message.length <20) {
		alert("Message must be at least 20 characters long.");
	return fasle;
	}
}
