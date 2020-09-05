// Assignment Code
var generateBtn = document.getElementById("generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.getElementById("password");

  passwordText.innerHTML = password;
  }

 function generatePassword(){
 
 //Collecting length information from user and setting parameters
 let passwordLength = prompt("Choose number of characters in your password between 8 and 128?");
 

 if (passwordLength < 8 || passwordLength > 128) {
 alert("You need to choose a number between 8 and 128");
 password = null;
 return password;
 }


//Collecting user preferences
 let upper = confirm("Any uppercase?");
 let lower = confirm("Any lowercase?");
 let special = confirm("Any special characters?");
 let number = confirm("Any numbers?");


 if (upper === false && lower === false && special === false && number === false) {
  alert("You need to choose at least one type of character.");
  password = NaN;
  return password;
 }

      
 //Creating the array with the selected characters
 const passwordChar = [];

 if (number === true) {
  passwordChar.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  console.log(passwordChar);
 };

 if (special === true) {
   passwordChar.push("!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", ",", "~");
   console.log(passwordChar);
 }

 if (upper === true) {
   passwordChar.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
   console.log(passwordChar);
 }

 if (lower === true) {
   passwordChar.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
   console.log(passwordChar);
 }

 
 //Generating random password from array
   password = "";
   for (var i=0; i <= passwordLength; i++) {       
   password += passwordChar[Math.floor(Math.random()*passwordChar.length)];
   }

   console.log(password);

   return password;
  
  };
 






  