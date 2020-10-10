const user = {
    id: 42,
    name: "zhangyu"
};

const {id, name} = user; //user.id. user.name

//let id = user.id;
//let name = user.name;

console.log(id);
console.log(name);

const numbers = [1,2,3,4]
const [number1, number2] = numbers;
console.log(number1);
console.log(number2);

// A person with firstName, age and lastName

/**
 * Store firstname and age of the person to new variables using object destruction
 * 
 */

 const user = {
     firstName: "zy",
     age: 34,
     lastName: "goh"
 };

 const {firstName, age, lastName} = user;