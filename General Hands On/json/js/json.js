// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is "self-describing" and easy to understand
// JSON is language independent *

// Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

// JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects:

// JSON.parse()

// So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.

// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays

const car = {
    brand: 'Merc',
    typeOfCar: 'SUV',
    price: '100,000'
}


console.log(JSON.stringify(car));

/**
 * create a js file
 * create a js object car with properties-> brand, type of car, price,
 * stringify the object to print it on the console
 */