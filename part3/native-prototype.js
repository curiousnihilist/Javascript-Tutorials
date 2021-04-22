/*
When we declare an object using literal {}, it is equivalent to new Object() which is built in constructor function.
obj = {}  ===  obj = new Object().
This Object has a prototypes of it's own referencing a huge object with toString and other methods.
*/

let obj = {};

console.log(obj.__proto__ == Object.prototype);     // true
console.log(obj.__proto__.toString == obj.toString); // true
console.log(obj.toString == Object.prototype.toString);    //true
