let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("result").textContent = "Sum of 10 and 20 is: " + sum;
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailPattern.test(email);
}

document.getElementById("validateBtn").addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;
    const validationMessage = validateEmail(email) ? "Valid email address." : "Invalid email address.";
    document.getElementById("emailValidationResult").textContent = validationMessage;
});

let today = new Date();
document.getElementById("date").textContent = today.toLocaleDateString();
