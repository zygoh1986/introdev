let sum = (...args) =>
{
    return args.reduce((start, value)=>{
        return start +=value;
    },0);
};

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));

sum = (num1, num2, num3=0) => num1+num2+num3;

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));

let arrayOfNumbers = [1,2,3,4,5,6,7,8,9]

/**
 * first and second element and rest of this arrayOfNumbers
 */

 let [first, second, ...rest] = arrayOfNumbers;