// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // all of your code goes here
  
  // ask user how long they want their password (use prompt)
  var passwordLength = prompt("how many characters do you want ");

  // ask user if they want to use uppercase (use confirm)
  var confirmUppercase = confirm("Do you wanna use uppercase?");

  // ask user if they want to use lowercase (use confirm)
  var confirmLowercase = confirm("do you want lowercase?");

  // ask user if they want to use numbers (use confirm)
  var confimNumbers = confirm("do you want numbers?");

  // ask user if they want to use special characters
  var confirmSpecial = confirm("do you want special charecters?");

  // create variable to hold empty password (make it an array)
  var password = [];

  // create variable to hold character bank
  var characterBank = [];

  // if user said yes to uppercase, add uppercase alphabet to characterbank
  if (confirmUppercase) {
    characterBank.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  // do the same for lowercase, numbers, and special
  if (confirmLowercase) {
    characterBank.push("abcdefghijklmnopqrstuvwxyz");
  }

  if (confimNumbers) {
    characterBank.push("0123456789");
  }

  if (confirmSpecial) {
    characterBank.push("!@#$%^&?+=");
  }

  // convert passwordlength to number
  passwordLength = parseInt(passwordLength);
  // create a loop to pick a letter for each character in the password, end loop at length amount
  for (
    var i = 0; i < passwordLength; 
    i++ 
  ){
    // get a random index for characterBank
    var randomIndex = Math.floor(Math.random() * characterBank.length);
    var characterType = characterBank[randomIndex];

    var randomCharacterIndex = Math.floor(Math.random() * characterType.length);

    // pick character
    var char = characterType.charAt(randomCharacterIndex);

    password.push(char);

  }
  
  return password.join("");
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER