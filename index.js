
let encryptionRule = {
  'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
  'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
  'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
  'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
  'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
  'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
  'Y': 'L', 'Z': 'M',
  'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
  'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
  'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
  'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
  'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
  'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
  'y': 'l', 'z': 'm',
  '0': '5', '1': '6', '2': '7', '3': '8',
  '4': '9', '5': '0', '6': '1', '7': '2',
  '8': '3', '9': '4',
  '!': '#', '$': '%', '&': '+', '-': '@',
  '_': '~', '#': '!', '%': '$', '+': '&',
  '@': '-', '~': '_'
}

function encryption(inputstring){
  let encrypted_password=''
  for(char of inputstring){
    encrypted_password=encrypted_password+encryptionRule[char];
  }
  return encrypted_password
}
// console.log(encryption('Rocha'))

function decryption(encrypted_password){
  let decrypted_password=''
  let keys=Object.keys(encryptionRule)
  let values=Object.values(encryptionRule)
  for(char of encrypted_password){
    let index=values.findIndex(values=>values===char)
    decrypted_password = decrypted_password + keys[index];
  }
  return decrypted_password
}
 //console.log(decryption('Rocha'))
 let error=false;
//==============================validation for first name=============================
function check_first_name(){

let first_Name=document.getElementById("first-name").value
    if(first_Name.length<3){
         document.getElementById("first-name-invalid").style.display="block";
         document.getElementById("first-name-valid").style.display="none";
          // error=true;
    }
    else if(first_Name.includes(0)||first_Name.includes(1)||first_Name.includes(2)||first_Name.includes(3)||first_Name.includes(4)||
    first_Name.includes(5)||first_Name.includes(6)||first_Name.includes(7)||first_Name.includes(8)||first_Name.includes(9)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
        //  error=true;
    }
    else if(parseInt(first_Name)){
        document.getElementById("first-name-invalid").style.display="block";
        document.getElementById("first-name-valid").style.display="none";
        //  error=true;
    }
    else{
        document.getElementById("first-name-invalid").style.display="none"; 
        document.getElementById("first-name-valid").style.display="block";  
    }
}

//==================================validation for last name==============================

function check_last_name(){

    let last_Name = document.getElementById("last-name").value

    if(last_Name.length<3){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        // error=true;
    }
    else if(parseInt(last_Name)){
        document.getElementById("last-name-invalid").style.display="block";
        document.getElementById("last-name-valid").style.display="none";
        // error=true;
    }
    else{
        document.getElementById("last-name-invalid").style.display="none"; 
        document.getElementById("last-name-valid").style.display="block";  
    }
}    

//===================================validation for email=====================================
function check_email(){

let email_Input=document.getElementById("email").value
    if(email_Input.includes("@")&&
    email_Input.includes(".")&&
    email_Input.lastIndexOf(".")<email_Input.length-2&&
    email_Input.lastIndexOf("@")!=0){
        document.getElementById("email-invalid").style.display="none";
        document.getElementById("email-valid").style.display="block";
    }
    else{
        document.getElementById("email-invalid").style.display="block"; 
        document.getElementById("email-valid").style.display="none";
        // error=true;  
    }
}

//=====================================validation for phone====================================

function check_phone_number(){

let phone_Number_Input=document.getElementById("phone-number").value

  if(phone_Number_Input.length!=10){
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    // error=true;
}
else if((parseInt(phone_Number_Input)).toString().length==10){
    document.getElementById("invalid-phone-number").style.display="none"; 
    document.getElementById("valid-phone-number").style.display="block";
}
else{
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    // error=true;
}
}

function check_tnc(){
  let tnc_Input=document.getElementById("tnc").checked
  
      if (tnc_Input != true) {
          document.getElementById("tnc-invalid").style.display = "block";
          document.getElementById("tnc-valid").style.display = "none";
          // error = true;
      }
      else {
          document.getElementById("tnc-invalid").style.display = "none";
          document.getElementById("tnc-valid").style.display = "block";
          
      }
}

function check_Confirm_password(){
  let pas_Input=document.getElementById("password").value
  let confirm_Input=document.getElementById("confirm-password").value
      if (pas_Input != confirm_Input) {
          document.getElementById("invalid-confirm").style.display = "block";
          // document.getElementById("tnc-valid").style.display = "none";
          // error = true;
      }
      else {
          document.getElementById("invalid-confirm").style.display = "none";
          // document.getElementById("tnc-valid").style.display = "block";
          
      }
}

const signup=()=>{

  let error=false;

  let first_Name=document.getElementById("first-name").value

  if(first_Name.length<3){
       document.getElementById("first-name-invalid").style.display="block";
       document.getElementById("first-name-valid").style.display="none";
       error=true;
  }
  else if(first_Name.includes(0)||first_Name.includes(1)||first_Name.includes(2)||first_Name.includes(3)||first_Name.includes(4)||
  first_Name.includes(5)||first_Name.includes(6)||first_Name.includes(7)||first_Name.includes(8)||first_Name.includes(9)){
      document.getElementById("first-name-invalid").style.display="block";
      document.getElementById("first-name-valid").style.display="none";
      error=true;
  }
  else if(parseInt(first_Name)){
      document.getElementById("first-name-invalid").style.display="block";
      document.getElementById("first-name-valid").style.display="none";
      error=true;
  }
  else{
      document.getElementById("first-name-invalid").style.display="none"; 
      document.getElementById("first-name-valid").style.display="block";  
  }

  let last_Name = document.getElementById("last-name").value

  if(last_Name.length<3){
      document.getElementById("last-name-invalid").style.display="block";
      document.getElementById("last-name-valid").style.display="none";
      error=true;
  }
  else if(parseInt(last_Name)){
      document.getElementById("last-name-invalid").style.display="block";
      document.getElementById("last-name-valid").style.display="none";
      error=true;
  }
  else{
      document.getElementById("last-name-invalid").style.display="none"; 
      document.getElementById("last-name-valid").style.display="block";  
  }

  let email_Input=document.getElementById("email").value
  if(email_Input.includes("@")&&
  email_Input.includes(".")&&
  email_Input.lastIndexOf(".")<email_Input.length-2&&
  email_Input.lastIndexOf("@")!=0){
      document.getElementById("email-invalid").style.display="none";
      document.getElementById("email-valid").style.display="block";
  }
  else{
      document.getElementById("email-invalid").style.display="block"; 
      document.getElementById("email-valid").style.display="none";
      error=true;  
  }

  let phone_Number_Input=document.getElementById("phone-number").value

  if(phone_Number_Input.length!=10){
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    error=true;
}
else if((parseInt(phone_Number_Input)).toString().length==10){
    document.getElementById("invalid-phone-number").style.display="none"; 
    document.getElementById("valid-phone-number").style.display="block";
}
else{
    document.getElementById("invalid-phone-number").style.display="block";
    document.getElementById("valid-phone-number").style.display="none";
    error=true;
}



      let tnc_Input=document.getElementById("tnc").checked
  
      if (tnc_Input != true) {
          document.getElementById("tnc-invalid").style.display = "block";
          document.getElementById("tnc-valid").style.display = "none";
          error = true;
      }
      else {
          document.getElementById("tnc-invalid").style.display = "none";
          document.getElementById("tnc-valid").style.display = "block";
          
      }
  
      console.log(error);
if(error==false){
document.getElementById("first-name-valid").style.display = "none";
document.getElementById("last-name-valid").style.display = "none";
document.getElementById("email-valid").style.display = "none";
document.getElementById("valid-phone-number").style.display = "none";
document.getElementById("tnc-valid").style.display = "none";

// alert("Your details have been saved successfully")
}



  let firstname=document.getElementById("first-name").value
  let lastname=document.getElementById("last-name").value
  let email=document.getElementById("email").value
  let phone=document.getElementById("phone-number").value
  let password=document.getElementById("password").value

  const userDetails={
    firstname,
    lastname,
    email,
    phone,
    password:encryption(password)
  }

  let user_exist=USER_DB.find(element=>element.email===email)

  if(user_exist||error==true){
    document.getElementById("signup-success").style.display='none'
    document.getElementById("signup-unsuccess").style.display='block'
  }
  else {
    document.getElementById("signup-success").style.display='block'
    document.getElementById("signup-unsuccess").style.display='none'
  }
  USER_DB.push(userDetails)
  reset_signup();
}
const USER_DB=[]
const reset_signup=()=>{
    document.getElementById("first-name").value=''
    document.getElementById("last-name").value=''
    document.getElementById("email").value=''
    document.getElementById("phone-number").value=''
    document.getElementById("password").value=''
    document.getElementById("confirm-password").value=''
}
const login=()=>{
  
    let email=document.getElementById("InputEmail").value
    let password=document.getElementById("InputPassword").value

    if(email.length<1){
      document.getElementById("login-unsuccess").style.display='block'
    }
    else if(password.length<1)
    {
      document.getElementById("login-unsuccess").style.display='block'
    }
    else{

    let current_user_email=USER_DB.find(element=>element.email===email &&  decryption(element.password)===password)
   
    if(current_user_email){
    console.log("Access granted!")
    document.getElementById("login-success").style.display='block'
    }
    else
    {
    console.log("Access denied")
    document.getElementById("login-unsuccess").style.display='block'
    }

    reset_login();
  }
}

function login_show(){

  document.getElementById("Signup-form").style.display='none'
  document.getElementById("login-form").style.display='block'
  }
  function signup_show(){

    document.getElementById("Signup-form").style.display='block'
    document.getElementById("login-form").style.display='none'
    }
const reset_login=()=>{
    document.getElementById("InputEmail").value=''
    document.getElementById("InputPassword").value=''
}



