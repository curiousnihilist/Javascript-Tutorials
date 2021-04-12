/*
A closure is a function in javascript that has access to it's out function scope
even after the function has returned(i.e. finished). It means closure function can remember
and access variables and arguments of outer function, even after it's finsihed.

In some languages, that’s not possible, or a function should be written in a special way to make it happen.
But as explained above, in JavaScript, all functions are naturally closures

*/

// Example 1

function getName(){
    let name = "Akash";

    return function displayName(){
        console.log(name);
    };
}

var akash = getName()
akash();

// Example 2

function getCounter(){
    let counter = 0;

    return function(){
        return ++counter;
    };
}

var count = getCounter();
console.log(count());
console.log(count());
console.log(count());

/*
In both examples , you can see the inner returning function access the variables
present in it's outer function scope, even when it's finished. THis is called closure function.
This happens due to inner functioning of Javascript.
*/


/*
There are 2 main concepts which revolves around the execution of code in JAvascript
1. Execution Context
2. Lexical Environment
*/

// https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c
// https://stackoverflow.com/questions/35759544/what-is-the-difference-and-relationship-between-execution-context-and-lexical-en#:~:text=In%20JavaScript%3A%20Understanding%20the%20Weird,stuff%20beyond%20your%20written%20code.
// https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda

// Example

var addTo = function(passed){

    var add = function(inner){
        return passed+inner;
    }

    return add;
}

var addThree = addTo(3);
var addFour = addTo(4);

console.log(addThree(3));
console.log(addFour(4));