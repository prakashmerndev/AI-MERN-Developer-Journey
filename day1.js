console.log('good morning guys');
console.warn("This is warning");
console.error("This is error");
console.table([1,4,5]);

// ## Variables — The Heart of Programming

// A **variable** is a named box where you store a value. Later, you can use the name to get the value back, or change it.

// JavaScript has **three keywords** to declare variables: `var`, `let`, and `const`.


var age = 22;
console.log(age);
let userName = "Prakash";
console.log(userName);
const PI = 3.14159;
console.log(PI);

let city;              // declared, value is undefined
console.log(city);     // undefined
city = "Ara";       // initialized now
console.log(city);     // Ara

let marks = 75;

if (marks >= 90) {
    console.log("A grade");
} else if (marks >= 75) {
    console.log("B grade");
} else if (marks >= 50) {
    console.log("C grade");
} else {
    console.log("Fail");
}

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend coming!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek day");
}