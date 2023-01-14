//First create various Variables for all the elements presnt in the html
var textbox = document.getElementById('name');
var email = document.getElementById('email');
var number = document.getElementById('phn');
var password = document.getElementById('password');
var confirm = document.getElementById('confirm');
var button = document.getElementById('signupbtn');


//adding addEventListener for the button and adding the function name as check
button.addEventListener('click', check)

//giving various functionalities to the function check
//creating functions as per requirement 
function check(e) {

  // pattern is used to check if the input is present in this pattern or not
  // conditions for Name field
    var pattern1 = /^([A-Za-z\s])+$/;
    var personname = textbox.value;
    var res1 = pattern1.test(personname);
    
    if(personname == "") {
      alert('Please enter Your Name');
    }
    else if(!res1){
      alert('Invalid Name');
    } else{

    }
    
    // conditions for number field
    var pattern2 = /^[0-9]+$/;
    var personNumber = number.value;

    var res2 = pattern2.test(number.value);

    if(personNumber == ""){
      alert('Please enter Number');
    }
    else if(!res2){
      alert('Invalid Number');
    }
    else if(personNumber == '1234567890'){
      alert('Invalid Number');
    }

    // conditions for password field 
    var pass = password.value;
    var pattern3 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var res3 = pattern3.test(pass);

    if(pass == ""){
      alert('please enter password');
    }
    else if(!res3){
      alert('Upper case, Lower case, Special character and Numbers are required in Password filed');
    }
    else if(pass == 'password') {
      alert('password cannot be password');
    }
    else if(pass == textbox.value) {
      alert('password cannot be name of the user');
    }

    //conditions for confirm password field
    var personConfirm = confirm.value;
    if(personConfirm != pass){
      alert('Password and confirm password are not same');
    }
}