/*
There are 2 types of equals comparison in javascript.
1. ==  loose comparison, type coercion takes place before comparison
2. === strict comparison, tkaes value and type into consideration
*/

var a = 18;
var b = '18';

console.log(a == b);
console.log(a === b);

var myName = "akash";
var sName = new String("akash")

console.log(myName == sName); // true - value checking
console.log(myName === sName); //false - value and type checking (since object and primitive are not of same type )