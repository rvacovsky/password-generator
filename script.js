//password characters - choices
const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const number = "1234567890".split("");
const symbol = "!@#^&*()?".split("");

//declarations needed when user confirms character choice
var passwordLength = "";
var confirmAlpha;
var confirmUpper;
var confirmNumber;
var confirmSymbol;

function generatePassword() {
  //determines password length - if langth inputted does not meet requirements will ask to enter again until an appropatiate number is selected
  var passwordLength = (window.prompt("What's the length of your password? Pick a number between 8 and 128."));
  while (passwordLength <= 7 || passwordLength >= 129) {
    window.alert ("Try again! The number needs to be between 8 and 128.")
    var passwordLength = (window.prompt("What's the length of your password? Pick a number between 8 and 128."));
    }
  //starts prompts for each character type - selecting 'OK' will enable declaration
    var confirmAlpha = window.confirm("Would you like to use lowercase letters?");
    var confirmUpper = window.confirm("Would you like to use uppercase letters?");
    var confirmNumber = window.confirm("Would you like to use numbers?");
    var confirmSymbol = window.confirm("Would you like to use special characters?");
 
    //determines whether at least one character type was used - if not will throw an alert and restart 
      while (confirmAlpha !== true && confirmUpper !== true && confirmNumber !== true && confirmSymbol !== true) {
        window.alert("You must use at least one character type. Try again.");
        var confirmAlpha = window.confirm("Would you like to use lowercase letters?");
        var confirmUpper = window.confirm("Would you like to use uppercase letters?");
        var confirmNumber = window.confirm("Would you like to use numbers?");
        var confirmSymbol = window.confirm("Would you like to use special characters?");
      }
    //array to bring all enabled declarations into password
      var passwordCharacter = []
    //if statements to bring in each enabled declaration using concatenate
    if (confirmAlpha) {
      passwordCharacter = passwordCharacter.concat(alpha)
    } 
    if (confirmUpper) {
      passwordCharacter = passwordCharacter.concat(upper)
    }
    if (confirmNumber) {
      passwordCharacter = passwordCharacter.concat(number)
    }
    if (confirmSymbol) {
      passwordCharacter = passwordCharacter.concat(symbol)
    }
    //so that password can equal whatever passwordLength is chosen
      var password = ""

  //for loop to incorporate password length into confirmed choices
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacter[Math.floor(Math.random() * passwordCharacter.length)] 
  }
  //creates password based on all criteria selected
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