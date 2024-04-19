var modal = document.getElementById("juiceModal");
var generateBtn = document.getElementById("juicebtn");
var span = document.getElementsByClassName("close")[0];

generateBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("allDone").addEventListener("click", function() {
    var lowercaseNow = document.getElementById("lowercaseNowBox").checked;
    var uppercaseNow = document.getElementById("uppercaseNowBox").checked;
    var numericNow = document.getElementById("numericNowBox").checked;
    var specialNow = document.getElementById("specialNowBox").checked;

    if (!lowercaseNow && !uppercaseNow && !numericNow && !specialNow) {
        alert("You need to select at least one criteria!");
        return;
    }

    var passwordLength = parseInt(prompt("Enter the length you'd like your password (between 8-128 characters)"));
    
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("INVALID! Please enter a number between 8 and 128 characters.");
        return;
    }

    var passwordCriteria = {
        length: passwordLength,
        lowercaseNow: lowercaseNow,
        uppercaseNow: uppercaseNow,
        numericNow: numericNow,
        specialNow: specialNow
    };

    var generatedPassword = generateRandomPassword(passwordCriteria);
    document.getElementById("passwordLabel").innerText = "Your Password:";
    document.getElementById("password").innerText = generatedPassword;

    modal.style.display = "none";
});

function generateRandomPassword(passwordCriteria) {
    var charset = ''; 
    if (passwordCriteria.lowercaseNow) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (passwordCriteria.uppercaseNow) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (passwordCriteria.numericNow) charset += '0123456789';
    if (passwordCriteria.specialNow) charset += '!@#$%^&*()-_+=?.';

    var password = '';
    for (var i = 0; i < passwordCriteria.length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
}