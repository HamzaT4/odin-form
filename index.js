
var pw1 = document.getElementById("pass");  
var pw2 = document.getElementById("pass-conf");  
function validatePassword() {  
   
    if(pw1.value != pw2.value)  
    {   
      pw2.setCustomValidity("Passwords Don't Match");
    } else {  
      pw2.setCustomValidity('');
    } 
 }
    
    pw1.onchange = validatePassword;
    pw2.onkeyup = validatePassword;