// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = prompt ("How many characters in your password?");

var numChar = confirm("Do you want numbers in your password?");

var upperCase = confirm("Do You want Uppercase letters in your password?");

var lowerCase = confirm("Do you want lowercase letters in your password?");

var special = confirm("Do you want special characters in your password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }




//Array for characters to be input to the password generator function
const passwordCharacter =  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                            //Numbers are 63-78 of the array
                          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                          //Uppercase letters are 0-9 of the array
                          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          //Lowercase letters are 10-35
                          "!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", ",", "~",],
                          //Special characters are 36-62



//function to exclude number and special character index numbers if ot selected

//function generatePassword() {

  for(let i = 0; i <= 8; i++) {
          console.log(passwordCharacter[i]);
            }
        //Math.floor(Math.random() * 79)
          //return passwordString;
  };
 //if (numchar === true && upperCase=== true && === true){
   // var prefNumber = ""
    //} 
 
  //else if (passwordUppercase === false && passwordLowercase === true && passwordSpecial === true)
    //{var prefNumber = 10}
 
  //else if (passwordUppercase === false && passwordLowercase === false && passwordSpecial === true)
    //{var prefNumber = 20}

  //else ()
//}







  //return writePassword(){
  //};