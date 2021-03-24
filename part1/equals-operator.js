/*
There are 2 types of equals comparison in javascript.
1. ==  loose comparison, type coercion takes place before comparison
2. === strict comparison, tkaes value and type into consideration
*/

var a = 18;
var b = '18';

console.log(a == b);
console.log(a === b);