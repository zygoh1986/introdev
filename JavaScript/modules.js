// Module are basic behavior exposed as functions
// step 3
function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

/**
 * Create more function for mutliply and divide and export them
 */
// step 4

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a /= b;
}

// export default add; 
export
{
    add as add,
    subtract as minus,
    multiply as multiply,
    divide as divide
};

/**
 * 1. Create a js file to create a module
 * 
 *2. Create another js file to use it
 3. create a module
 4. Export the module so i can use it
 5. Import the moudle in the second js file
 6. Use the module 
 */
