document.getElementbyId('juicebtn').addEventListener('click', generatePassword)
var lowercaseNow = confirm("Include lowercase letters please.");
var uppercaseNow = confirm("Include a UPPERCASE LETTER!");
var numericNow = confirm("Include numbers ye?");
var specialNow = confirm("Include some special characters please!");

var password = generateRandomPassword(passwordLength, lowercaseNow, uppercaseNow, numericNow, specialNow);
var passwordCriteria = {
    length: passwordLength,
    lowercaseNow: confirm("Include lowercase letters please."),
    uppercaseNow: confirm("Include a UPPERCASE LETTER!"),
    numericNow: confirm("Include numbers ye?"),
    specialNow: confirm("Include some special characters please!"),
};

function generatePassword() {
    var passwordLength = parseInt(prompt("Enter the length you'd like you're password (between 8-128 characters)"));
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("INVALID! RECONSIDER YOUR PASSWORD REMEMBER 8-128 CHARACTERS! THANK YOU :)!"));
    }
};

if (!lowercaseNow && !uppercaseNow && !numericNow && !specialNow) {
    alert("You need to have at least of each character type")
    lowercaseNow = confirm("Include lowercase letters please.");
    uppercaseNow = confirm("Include a UPPERCASE LETTER!");
    numericNow = confirm("Include numbers ye?");
    specialNow = confirm("Include some special characters please!");
};

function generateRandomPassword(passwordCriteria) {
    var charshet = ''; 
    if (passwordCriteria.lowercaseNow) charset += 'abcdefghijklmnaopqrstuvwxyz';
    if (passwordCriteria.uppercaseNow) charset += 'ABCDEFGHIJKLMNAOPQRSTUVWXYZ';
    if (passwordCriteria.numericNow) charset += '0123456789';
    if (passwordCriteria.specialNow) charset += '!@#$%^&*()-_+=?.';

    // New information UNLOCKED charAt to randomly select from string
    var password = '';
    for (var i = 0; i < passwordCriteria.length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
        return password;
}