function myfunc(){
  var user=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var Phonenumber=document.getElementById("Phonenumber").value;
  var ZipCode=document.getElementById("ZipCode").value;

  //regularexprestion
  var nameReg=/^[A-Za-z.]{2,23}$/;
    var emailReg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneReg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var zipReg =/^[5-9][0-9]{3}[0-9]{0,5}$/;
    

    //function name
    if(nameReg.test(user)){
      document.getElementById("NameError").innerHTML="valid name";
  }else{
      document.getElementById("NameError").innerHTML="Name must be between 2 to 23 charecters";
      
  }
   //function email
   if(emailReg.test(email)){
    document.getElementById("EmailError").innerHTML="vaild email";

   }else{
    document.getElementById("EmailError").innerHTML="Email is invaild";
   }

   //function phonenumber
   if(phoneReg.test(Phonenumber)){
    document.getElementById("PhonenumberError").innerHTML="valid phone";
   }
   else{
    document.getElementById("PhonenumberError").innerHTML="phone number is invalid";
   }

   //function zipcode
   if(zipReg.test(ZipCode)){
    document.getElementById("ZipCodeError").innerHTML="";
    
   }
   else{
    document.getElementById("ZipCodeError").innerHTML="zipcode is invalid";
    return false;
   }
     
}