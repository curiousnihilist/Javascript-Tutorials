/*
Destructuring assignment is a special syntax that allows us to “unpack” arrays 
or objects into a bunch of variables, as sometimes that’s more convenient.
*/

// Examples of destructuring arrays

var fruits = ['apple','orange','guava','litchi'];

var [fruit1,fruit2,fruit3,fruit4] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

var [year1, ,year3] = [1991,1992,1993];
console.log(year1);
console.log(year3);

var [a,b,c] = "abc";
var [one,two,three] = new Set([1,2,3]);
console.log(`a -> ${a}, b -> ${b}, c -> ${c} `);
console.log(`one -> ${one}, two -> ${two}, three -> ${three} `);

//swapping variable

var guest = 'akash';
var admin = 'verma';

[guest, admin] = [admin, guest];
console.log(`guest -> ${guest}, admin -> ${admin}`);

// rest "..."
var [emp1,emp2, ...emps] = ["Sohan","Mohan","Rohan","Shyam","Rakesh"];

console.log(emp1);
console.log(emp2);
console.log(emps);

//-----------------------------------------------------------
//Destructuring objects

var emp = {
    firstName: 'Rakesh',
    lastName: 'Sharma',
    age:25,
    designation:"Senior Analyst",
    isManager:false
}

//var {firstName,lastName,designation} = emp;


var {firstName, lastName: surName, address: address = "Mumbai", ...rest} = emp;
console.log(`firstName -> ${firstName}, surName -> ${surName}, address -> ${address}`);
console.log(rest);



// https://javascript.info/destructuring-assignment