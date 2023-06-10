function validateForm(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Email validation
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    // Password validation
    if (!validatePassword(password)) {
      alert("Please enter a valid password (minimum 8 characters)");
      return;
    }
}

function validate(){
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var subject=document.getElementById("subject").value;
   var message=document.getElementById("message").value;
   var error_message=document.getElementById("error_message");
   var text;
   error_message.style.padding="10px";

   if(name.length<5){
    text="Please enter valid name"
    error_message.innerHTML=text;
    
   }

   if(email.indexOf("@")==1 || email.length<6){
    text="Please enter correct email"
    error_message.innerHTML=text;
    
   }
   if(subject.length<10){
    text="Please enter correct subject"
    error_message.innerHTML=text;
    
   }
   if(message.length<140){
    text="Please enter correct subject"
    error_message.innerHTML=text;
    
   }
   alert("Submitted successfully");
   return false;
}

function validateForms(event) {
    event.preventDefault(); // Prevent form submission to check validation
  
    // Get form field values
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
  
    // Validate each field
    if (firstName === "") {
      alert("Please enter your First Name.");
      return;
    }
  
    if (lastName === "") {
      alert("Please enter your Last Name.");
      return;
    }
  
    if (email === "") {
      alert("Please enter your Email.");
      return;
    }
  
    if (password === "") {
      alert("Please enter your Password.");
      return;
    }
  
    if (confirmPassword === "") {
      alert("Please confirm your Password.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (gender === "") {
      alert("Please select your Gender.");
      return;
    }
  
    if (address === "") {
      alert("Please enter your Address.");
      return;
    }
  
    if (phoneNumber === "") {
      alert("Please enter your Phone Number.");
      return;
    }
  
    // If all fields are valid, you can proceed with form submission or further processing
    // Here, you can write code to submit the form data to a server or perform additional tasks
    alert("Form submitted successfully!");
  }
  
    