// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added numbers, symbols, lowcase and uppercase alphabets in var chars to create random passwords.
function generatePassword () {
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordLength = 8;
var password = '';

// password requirements
passwordLength = prompt("Choose between 8-128 characters for password.");
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter between 8 to 128 characters for your password.";
  } else if (isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a valid password.");
  }
  else {
    alert("Your password will be " + passwordLength + " characters.");
    
  }

  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUppercase = confirm("Do you want uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  hasNumbers = confirm("Do you want to use numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

 
  // Math.random () helps create random passwords
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
  return finalPassword;
};


// password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
