
function Validate(){
	
	 var valid = false;
	 
	 var name = document.getElementById("custname").value;
	  
	 if(name ===" "){
		valid =  false;
		alert("There was no name Entry");
	 } else if(name.search(" ")<1) {
		valid = false;
		alert("This is not a full name");
	 } else if(name.length<=5) {
		valid = false;
		alert("This name isn't long enough");
	 }else {
		valid = true;
	 }	
	 
	 
	 var email = document.getElementById("email").value; 
	 
	 
	 if(email.indexOf('.') == -1) {
		 valid = false;
		 alert("This is not a valid email address! Period");
	 } else if(email.search("@")<1) {
		 valid = false;
		 alert("This is not a valid email address!");
	 }
	 else {
		 valid = true;
	 }
	
	 var sub = document.getElementById("subject").value;
	 
	 if(sub==="default") {
		 valid = false;
		 alert("Please select a Subject!");
	 }
	 
	 
	 if(valid == false) {
		alert("Please fix the form and re-submit it!");  
	 }
	 else {
		 alert("We have recieved your message!");
	 }

	 
	 return valid;



}