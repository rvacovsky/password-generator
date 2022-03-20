// Assignment code here

//password characters
const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const number = "1234567890".split("");
const symbol = "!@#^&*()?".split("");
const arr = [...number, ...upper, ...alpha, ...symbol];

function generatePassword() {
  let password = ""
  let passwordCharacter = "";
  //beginning of series of prompts
  var passwordLength = window.prompt ("What's the length of your password? Pick a number between 8 and 128.")
  if (passwordLength >= 8 && passwordLength <=128) {
    console.log(passwordLength)
    if (window.confirm ("Would you like to use uppercase letters?") == true) {
      passwordCharacter = upper
      console.log(upper);
      } else {
        passwordCharacter != upper
    }
    if (window.confirm ("Would you like to use lowercase letters?") == true) {
      passwordCharacter = alpha
      console.log(alpha);
      } else {
        passwordCharacter != alpha
    }
    if (window.confirm ("Would you like to use numbers?") == true) {
      passwordCharacter = number
      console.log(number);  
      } else {
        passwordCharacter != number
    }
    if (window.confirm ("Would you like to use special characters?") == true) {
      passwordCharacter = symbol
      console.log(symbol);
      } else {
        passwordCharacter != symbol
    };
  } else {
    window.alert ("Try again! The number needs to be between 8 and 128.")
    generatePassword();
  }
  //for loop to incorporate password length
  for (var i = 0; i < passwordLength; i++) {
    password += arr[Math.floor(Math.random() * passwordCharacter.length)] 
  }

  return password;
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
