document.getElementbyId('juicebtn').addEventListener('click', generatePassword)
var lowercase

function generatePassword() {
    var passwordLength = parseInt(prompt("Enter the length you'd like you're password (between 8-128 characters)"));
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("INVALID! RECONSIDER YOUR PASSWORD REMEMBER 8-128 CHARACTERS! THANK YOU :)!"));
    }
}