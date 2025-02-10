let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let product = num1 * num2;

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else if (num1 < num2) {
    console.log("num1 is less than num2");
} else {
    console.log("num1 is equal to num2");
}

for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration: " + i);
}

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice"));

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

let myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo();
