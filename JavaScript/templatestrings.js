fuction addTwoNumber (a, b = 0)
{
    var sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return 'The sum of ${a} and ${b} is ${sum}'
}

var fullNameOld = function (firstName, lastName)
{
    return 'my full name is ' + firstName + ' ' + lastName;
}

const fullName = (firstName, lastName) => {
    return `my full name is ${1>2} ${lastName} `;
}

console.log(fullNameOld ('Zhang Yu ', 'Goh'));
console.log(fullName('Zhang Yu', 'Goh'))