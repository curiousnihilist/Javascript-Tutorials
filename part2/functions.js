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

//Arrow Function (like lambda function)
// -------------------------
var calcSum = (a,b) => a+b
console.log(calcSum(2,5));


/*
As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.
…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/

/*
A Function Expression is created when the execution reaches it and is usable only from that moment.
Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.
A Function Declaration can be called earlier than it is defined.
For example, a global Function Declaration is visible in the whole script, no matter where it is.
That’s due to internal algorithms (Hoisting). When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
And after all Function Declarations are processed, the code is executed. So it has access to these functions.
*/


