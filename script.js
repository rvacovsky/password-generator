// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//window.prompt to start questions
var promptPassword = window.alert("Hello! I'm going to ask you a series of questions to generate your password. Ready? Let's begin!");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Start password generator */
generatePassword();