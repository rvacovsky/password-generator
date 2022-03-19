// Assignment code here
function generatePassword() {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphaUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const number = "1234567890".split("");
  const symbol = "!@#^&*()?".split("");
  var passwordLength = window.prompt ("What's the length of your password?")
  if (passwordLength >= 8 && passwordLength <=128) {
    window.confirm ("would you like to use uppercase letters?")
    window.confirm ("would you like to use lowercase letters?")
    window.confirm ("would you like to use numbers?")
    window.confirm ("would you like to use special characters?")
  } else {
    window.alert("try again")
    generatePassword();
  }
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

