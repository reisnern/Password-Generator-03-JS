//Start Gathering Information for Password
//variables for password
var Capitals = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ";", ",","<", ">", ".","?", "/"];
var totalChars = [];

//Functions
function RandomLowerCase() {
  return LowerCase[Math.floor(Math.random() * LowerCase.length)].valueOf();
}

function RandomCaps() {
  return Capitals[Math.floor(Math.random() * Capitals.length)].valueOf();
}

function randomNumber() {
  return Numbers[Math.floor(Math.random() * Numbers.length)].valueOf();
}

function randomSpecial() {
  return Special[Math.floor(Math.random() * Special.length)].valueOf();
}

// Generate password function 
function generatePassword() {
  // Password length 
  var lengthPrompt = prompt('How many characters in your password? Choose between 8 and 128');
  // String to Number 
  var passLength = parseInt(lengthPrompt);
  //  check inputs 
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) { 
    alert('ERROR select a valid option');
    generatePassword();
    return;
  }
  console.log(passLength);
  // password criteria
  var confirmLowerCase = confirm("Any lowercase letters?")
  // Confirm user selection
  if (confirmLowerCase === true) {
    alert("Lowercase letters will be added to your password")
  } else {
    alert("Ok.")
  }
  console.log('lower is' + LowerCase);
  var confirmCapital = confirm("Any Capital Letters?")
  // Confirm selection
  if (confirmCapital === true) {
    alert("Capital Letters will be added to your password")
  } else {
    alert("Ok.")
  }
  console.log('upper is ' + Capitals);
  var confirmNumbers = confirm("Any Numbers?")
  // Confirm selection
  if (confirmNumbers === true) {
    alert("Numbers will be added to your password.")
  } else {
    alert("Ok.")
  }
  console.log('numeric is ' + Numbers);
  var confirmSpecial = confirm("Any Special Characters?")
  // Confirm selection
  if (confirmSpecial === true) {
    alert("Special Characters will be added to your password")
  } else {
    alert('Ok.')
  }
  console.log('special is ' + Special);
  console.log("End of selections");

  //variables for input
var confirmLowerCase;
var confirmCapital;
var confirmNumbers;
var confirmSpecial;

// Execute Functions
if (confirmLowerCase === true) {
  totalChars.push(RandomLowerCase);
}

if (confirmCapital === true) {
  totalChars.push(RandomCaps);
}

if (confirmNumbers === true) {
  totalChars.push(randomNumber);
}

if (confirmSpecial === true) {
  totalChars.push(randomSpecial);
}

//  Generate Password
var i, text;
for (i = 0, text = ''; i < passLength; i++) {
  var charRandom = Math.floor(Math.random() * totalChars.length);
  text += totalChars[charRandom]();
  if (text === undefined) {
    debugger;
  }
}

// return the password 
return text;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
document.getElementById('password').textContent = passwordText;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);