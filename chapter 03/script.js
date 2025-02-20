//Chapter 03
//Variables for numbers

//Answer 01
// Declare a variable and assign age
let age = 25; // Replace with your actual age

// Display the age in an alert box
alert("I am " + age + " years old.");

//Answer 02
// Declare and initialize a variable for visit count
var visitCount = localStorage.getItem("visitCount");

if (visitCount) {
    // If visitCount exists, increment the count
    visitCount = parseInt(visitCount) + 1;
} else {
    // If it's the first visit, set count to 1
    visitCount = 1;
}

// Store the updated visit count in localStorage
localStorage.setItem("visitCount", visitCount);

// Display the visit count on the web page
document.body.innerHTML = "You have visited this site " + visitCount + " times.";

//Answer 03
// Declare a variable and assign the birth year
var birthYear = 1995; // Replace with your actual birth year

// Display the message in an alert box
alert("I was born in the year " + birthYear);

//Answer 04
// Declare and initialize variables for the visitor's details
let visitorName = "John Doe";  // Visitor's name
let productTitle = "T-shirt";  // Product title
let quantity = 5;             // Quantity of the product

// Display the message in the browser
document.body.innerHTML = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
