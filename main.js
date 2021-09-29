function regform(inputText,username,phno){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(validRegex)){}
    else{alert("invalid emailid")}
    if(username.value==""){
        alert("check username");
    }
    if(phno.value.length<10)
    {
        alert("enter corect mobile number");
    }
         if(inputText.value.match(validRegex) && username.value!="" && phno.value.length==10)
          {
          alert("Thanx for filling the form");
          document.myform.emailtext.focus();
          document.myform.username.focus();
          document.myform.phno.focus();
        return true;
      }
    
     else{
         alert("Check your details once again ");
         document.myform.emailtext.focus();
         document.myform.username.focus();
         return false;

     }
 }