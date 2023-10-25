//const loginForm = document.getElementsByClassName('loginForm');
//loginForm.addEventListener('submit', validateLoginForm);

function validateLoginForm(){
   // event.preventDefault();

   var fname = document.getElementById("fname").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var pass = document.getElementById("pass").value;
   var confirmPass = document.getElementById("confirmPass").value;
   const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    //validation
    
    if(fname=="" || /\s/g.test(fname) || /\d/g.test(fname)){
           alert("Invalid name");
           return false;
        
    }else if(!(emailRegex.test(email))){
            alert("Invalid email address");
            return false;
    }else if(phone=="" || /\s/g.test(phone) || !(/\d/g.test(phone)) || length(phone)!=10 || isNan(phone)){
            alert("Invalid phone number");
            return false;
    }else if(pass=="" || /\s/g.test(pass) || length(pass)!=8 || !(/[A-Z]/.test(pass))
        || !(/[a-z]/.test(pass))){
            alert("Invalid Password!Please re-enter");
            return false;
    }else if(pass!=confirmPass){
            alert("Password and Confirm password are not matching!");
            return false;
    }else{
        alert("User registered successful!Please login!");
        return true;
    }

    //if all validation test passed then successful alert on submitting form
   

}


