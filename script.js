// Assignment Code
var generateBtn = document.getElementById("generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
  }

 function generatePassword(){
 
 //Collecting user preference data
 let passwordLength = prompt("How many characters in your password length?");
 let upper = confirm("Any uppercase?");
 let lower = confirm("Any lowercase?");
 let special = confirm("Any special characters?");
 let number = confirm("Any numbers?");

      
 //Creating the array with the selected charaters
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

 if (upper === false && lower === false && special === false && number === false) {
   alert("You need to choose at least one type of character.");
   password = 0;
   console.log(pwrd);
 }

 
 //Generating random password from array
   password = "";
   for (var i=0; i <= passwordChar.length; i++) {       
   password += passwordChar[Math.floor(Math.random()*passwordChar.length)];
   }


   console.log(password);

   return generatePassword(password);
  
  };
 






  