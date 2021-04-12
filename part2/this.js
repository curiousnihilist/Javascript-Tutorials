/*
We can define methods inside an object in JS. methods are like actions which an object can peform.
In order to peform actions/access those methods, object can require some of it's own data.

This issue is resolved by this operator, which holds the current object context from which the method was called.
The “this” keyword refers to the object that the function is a property of.
The value of “this” keyword will always depend on the object that is invoking the function.
*/

var user ={
    name:"Akash",
    sayHi:function(){ 
        console.log(this);
        console.log(`Hi, My name is ${this.name}`);
    }
}

function globalFunc(){
    console.log(this);              //Here this is a global object
}

user.sayHi();
globalFunc();

/*
So here, since user object calls the method, this points to the user object.
*/

/*
In most programming language, this is only used in object context. But in JS we can use this inside a method also.
However if we call that function from object context, this will point to object.
But if only method is called then,
1. then it will point to global window object (without 'use scrict')
2. this will be undefined (with 'use sctrict').

Now let's see an example
*/


function sayHello(){
    return `Hello, My name is ${this.name}`
}

console.log(sayHello()); // undefined

user.f = sayHello;

console.log(user.f()); // Hello my name is Akash

/*
From above example we can conslude that 'this' in javascript is free and not bound like other programming languages.
It's value its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.
The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.
*/


/*
** Note: Please note that arrow functions are special: they have no this. 
When this is accessed inside an arrow function, it is taken from outside.
*/

var obj = {
    value:'OK',
    click: () => {console.log(`Inside obj... ${this.value}`)}
}
obj.click()