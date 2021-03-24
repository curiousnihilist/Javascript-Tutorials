// Functions in Javascript are first class object i.e. they can have properties and methods just like other objects.
// Every function is a Function Object


const currentYear = 2021;

// Function declaration
// ----------------------

var age = calculateAge(1996);

function calculateAge(birthYear){
    return currentYear - birthYear;
}
console.log(age);


// Function expression (Anonymous function)
// --------------------------
var canGetLicense = function (birthYear){
    var age = currentYear - birthYear;
    if(age>18)  return 'Eligible for Driving License!';
    return 'Not Eligible for Driving license';
}

console.log(canGetLicense(1996));


