let student1 = {
    id: 1,
    name: "zhang yu",
    age: 34
}

let student2 = {
    id: 2,
    name: "charles",
    age: 36
}

//object notation
// 1. curly braces
// 2. key value pairs
// 3. value has a type

{
    id: 3,
    name: "owen",
    age: 37
}

console.log(JSON.stringify(student));

// create a js file
// create a js object car with properties -> brand, type of car, price
//stringify the object to print it on the console

let car = {
    brandOfCar: "BMW",
    typeOfCar: "7 series",
    priceOfCar: "$300,000"

}

console.log(JSON.stringify(car));