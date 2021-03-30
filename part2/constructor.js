/*
There are two ways to declare an object
1. declare object and it's properties inside {}
2. declare constructor function and make objects using new operator
*/

// constructor function
function User(name, age){
    this.name = name;
    this.age = age;
}

var akash = new User('akash',24);
var vivek = new User('Vivek',25);

console.log(akash);
console.log(vivek);