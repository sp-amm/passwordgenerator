// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Capturing the input for the parameters to generate the password
var passwordLength = prompt("How many characters do you want in your password?");
console.log(passwordLength);

var passwordUppercase = confirm("Do You want Uppercase letters in your password?");

var passwordLowercase = confirm("Do you want lowercase letters in your password?");

var passwordSpecial = confirm("Do you want special characters in your password?"); 

//Array for characters to be input to the password generator function

const passwordCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                          //Uppercase letters are 0-9 of the array
                          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          //Lowercase letters are 10-35
                          "!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", ",", "~",
                          //Special characters are 36-62
                          "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",],
                          //Numbers are 63-78 of the array

//function to exclude index numbers that are excluded by preferences
function indexNumber(){
 if (passwordUppercase === true && passwordLowercase === true && passwordSpecial === true);
    var prefNumber = false; 
 
  else if (passwordUppercase === false && passwordLowercase === true && passwordSpecial === true);
    var prefNumber = 10;
 
  else if (passwordUppercase === false && passwordLowercase === false && passwordSpecial === true);
    var prefNumber = 

  else ()
}

//Function to loop through the array the numbers of times set by the  generate random characters from the array
function generatePassword() {
  for (var i = (Math.floor(Math.random() * 77) + prefNumber); i < password.Length; i++) {
          result = passwordCharacter[];
 // }
  // }