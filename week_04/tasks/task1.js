try {
    let result = num1 / 0;
    if (isNaN(result)) throw "Result is not a number!";
} catch (error) {
    console.log("Error: " + error);
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(email)) {
        console.log("Valid email address.");
    } else {
        console.log("Invalid email address.");
    }
}
validateEmail("test@example.com");
validateEmail("invalid-email");

let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Grapes");
console.log(fruits);

let greeting = "Hello, world!";
let upperGreeting = greeting.toUpperCase();
let substring = greeting.substring(0, 5);
console.log(upperGreeting);
console.log(substring);

let today = new Date();
console.log("Current Date: " + today.toLocaleDateString());
console.log("Current Time: " + today.toLocaleTimeString());

today.setDate(today.getDate() + 1);
console.log("Tomorrow's Date: " + today.toLocaleDateString());
