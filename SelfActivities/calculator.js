/**
 * Function adds two arguments that contain / return numbers of any type 
 * @param {} x 
 * @param {*} y 
 */

/**
 * Write an addition function for following tests
 * 1. Two numbers
 * 2. Two number arrays
 * 3. Two functions that return numbers
 * 4. Two nested arrays of numbers
 * @param {} x 
 * @param {*} y 
 */

function add(x, y) {
    return x + y;
}

function addTwoArrays([array1], [array2]) {
    return array1 + array2; //add the numbers in two arrays and return the sum
}

function addNumbersFromTwoFunctions(func1, func2) {
    return func1() + func2(); //add the numbers in two arrays and return the sum
}

function substract(z,y)
{
    return z-y;
}