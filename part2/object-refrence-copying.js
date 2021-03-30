/*
One of the fundamental difference between objects and primitives is that

Objects are stored and copied by reference.
whereas
Primitives are stored and copied as a whole value

It means that whenever we create and object and assign it to a variable, the actual data is stored in the memory
and variable simply points to it's memory address.
No new object is created in memory when we assign one object to another. The new variable will just point to the same
object in memory 

*/

var a = {name:'akash'};
var b = a;

console.log(a == b); // true
console.log(a === b);// true
// Both a nd b points to the same object that's why they are equal . == is comparison by reference

var c = {num:1};
var d = {num:1};


console.log(c == d); // false 
console.log(c === d); //false
// Both c and d are different even after having same content because both of them are stored in memory as different entity


/*
However if really want to copy an object to another object not by reference, we can use Object.assign(target, source1, source2)
*/

var target = {}

var source1 = {name:'Akash',lastName:'Verma'};
var source2 = {birthYear:1996,age:24};

Object.assign(target,source1,source2);

console.log(target);

/*
Summary:
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.
All operations via copied references (like adding/removing properties) are performed on the same single object.
To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function, such as _.cloneDeep(obj).
*/