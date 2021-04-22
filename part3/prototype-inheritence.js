/*
Every object in javascript has a hidden property called [[Prototype]]. This prototype property can either be null or an object.
This prototpe property of an object is used for inheritance, extending the behaviour of proto object.
When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, such thing is called “prototypal inheritance”

Prototype object can be set using __proto__.
*/

{
    let animal = {
        ear:2,
        leg:4,
        walk:function(){ console.log("walk walk!");}
    }

    let rabbit = {
        leg:2,
        walk:function(){ console.log("hop! hop!");},
        __proto__:animal
    }

    console.log(rabbit.leg);
    console.log(rabbit.ear);

    console.log(animal.walk());
    console.log(rabbit.walk());
}

/*
There are only two limitations:

The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
The value of __proto__ can be either an object or null. Other types are ignored.
*/

/*
Summary
In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
The object referenced by [[Prototype]] is called a “prototype”.
If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.
*/

//[[Prototype]] of function, constructor function and object

function func(){}
console.log(func.prototype);            // {constructor: f func(), __proto__:Object}

function Func(){}
let funcObj = new Func();
console.log(Func.prototype);                    // {constructor: f Func(), __proto__:Object}
console.log(Object.getPrototypeOf(funcObj));    // {constructor: f Func(), __proto__:Object}


var object = {a:1,b:2}
console.log(Object.getPrototypeOf(object));     // {__proto__:Object }