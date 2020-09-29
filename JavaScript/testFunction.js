/**
 * Is to create a full name of a person from first name and last name
 */

 function createFullName(firstName, lastName)
 {
     var firstName = document.getElementById('firstName').value
     var lastName = document.getElementById('lastName').value
     var fullName = firstName + " " + lastName;
     alert(firstName + ' ' + lastName);
 }

 var myFullName = function (firstName, lastName)
 {
     return firstName + " " + lastName;
 }