// Assignment Code
var generateBtn = document.querySelector("#generate");

//Capturing the input for the parameters to generate the password
const passwordLength = prompt("How many characters do you want in your password?",);
 

//Array for characters to be input to the password generator function

const passwordCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
                          //Numbers are 0-9 of the array
                          "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                          //Uppercase letters are 10-35 of the array
                          "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                          //Lowercase letters are 36-62
                          "!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", ",", "~",],
                          //Special characters are 63-78



//Function to loop through the array the numbers of times set by the  generate random characters from the array
//function getChar() {
  //for (var i = (Math.floor(Math.random() * 78); i < passwordLength; i++) {
  //        result = passwordCharacter[];
 // }
  // }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
