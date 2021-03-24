/*
Undefined - undefined is data type assigned to a variable before any other value is assigned to it.
*/

var name;      // this variable is not assigned any value so it's assigned undefined by default
console.log(name);
console.log(typeof name);


/*
Null - null is a data type which represent that the variable doesn't point to any data. 
*/

var age = null;
console.log(age);
console.log(typeof age);  // typeof null gives us Object

/*
NaN - NaN stands for Not a Number. It means the variable contains value which is not a number. It is a property of global object
      and has global scope. Following are the 3 cases in which a operation can return NaN
      1. Number can'tbe parsed (parseInt("akash"))
      2. Result is not a real Number (Math.sqrt(-1))
      3. Any string operation (-,/,*) except addition ("akv"-"ghv")

      Also NaN is quivalent to Number.NaN
*/

console.log(typeof NaN)
console.log(NaN === NaN);        // false
console.log(Number.NaN === NaN); // false
console.log(isNaN(NaN));         // true
console.log(isNaN(Number.NaN));  // true
console.log(Number.isNaN(NaN));  // true