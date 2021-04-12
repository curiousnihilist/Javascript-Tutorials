// In javascript function is an object. It has several properties namely
// 1. name
// 2. length


function sayHi(){
    console.log("Hi!");
}

var sayHello = function(){
    console.log("Hello!");
}

var emp = {
    name:"Akash",
    age:24,
    say:function(){
        console.log(`Hi! my name is ${this.name}. I am ${this.age} years old`);
    }
}

console.log(sayHi.name);
console.log(sayHello.name);
console.log(emp.say.name);

// Length property
// it returns the number of argument in the function, excluding rest parameters. 

function f1(a,b,c){}
function f2(a,b, ...handler){}

console.log(f1.length);
console.log(f2.length);

var abc = function abcd(){
    console.log("Hello abcd");
}

abc();
//abcd();           Error, It's function local. can't access from outside
