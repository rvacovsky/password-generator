// Assignment code here

//password characters
const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const number = "1234567890".split("");
const symbol = "!@#^&*()?".split("");


function generatePassword() {
  var passwordChar = "";
  //beginning of series of prompts
  var passwordLength = window.prompt ("What's the length of your password? Pick a number between 8 and 128.")
  if (passwordLength >= 8 && passwordLength <=128) {
    console.log(passwordLength)
    if (window.confirm ("Would you like to use uppercase letters?") == true) {
      passwordChar = upper
      console.log(upper);
    }
    if (window.confirm ("Would you like to use lowercase letters?") == true) {
      passwordChar = alpha
      console.log(alpha);
    }
    if (window.confirm ("Would you like to use numbers?") == true) {
      passwordChar = number
      console.log(number);
    }
    if (window.confirm ("Would you like to use special characters?") == true) {
      passwordChar = symbol
      console.log(symbol);
    };
  } else {
    window.alert ("Try again! The number needs to be between 8 and 128.")
    generatePassword();
  }
  let password = '' 
  for (let i = 0; i < passwordLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)] 
  }
  return (password);
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
