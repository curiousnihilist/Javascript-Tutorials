/*
We can make object using constructo functions like new F(). While creating a new object in this way,
we can assign the prototype of the object using prototype property of function.

F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.

If, after the creation, F.prototype property changes (F.prototype = <another object>), 
then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.
*/

function User(name,age,isAdmin=false){
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
}

var emp = {
    company:'Capgemini',
    location:'Mumbai'
}

//Setting User.prototype = emp literally states the following: "When a new User is created, assign its [[Prototype]] to emp".
User.prototype = emp;           // Imp

var akash = new User("Akash Verma",24);
var vivek = new User("Vivek Kumar",26,true);

console.log(akash.company);
console.log(vivek.location);

/*
Note:
F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.

If, after the creation, F.prototype property changes (F.prototype = <another object>), 
then new objects created by new F will have another object as [[Prototype]], but already existing objects keep the old one.
*/

/*
Every function has a prototype property. The defualt prototype property is an object which contains only one 
property "constructor" which points back to the function.
Imp. There is one exception that arrow function doesn't have a default prototype property
*/

function func(){}

console.log(func.prototype.constructor == func);        //true

/*
Summary
In this chapter we briefly described the way of setting a [[Prototype]] for objects created via a constructor function. Later we’ll see more advanced programming patterns that rely on it.

Everything is quite simple, just a few notes to make things clear:

The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects when new F() is called.
The value of F.prototype should be either an object or null: other values won’t work.
The "prototype" property only has such a special effect when set on a constructor function, and invoked with new.
*/


/*
It is important to understand the distinction between the way a prototype
is associated with a constructor (through its prototype property) and the way
objects have a prototype (which can be found with Object.getPrototypeOf).

The actual prototype of a function (be it constructor function or normal one) is
Function.ptototype.
However, the prototype property of Function holds the prototype used for creating 
object instances.
*/

function Rabbit(type){this.type = type}     // Constructor function
                                            // It has a prortotype which is Function.prortotype because it's a function which we get from Object.getPrortotypeOf(Function)
                                            // It's prortotype property is prototype for all objects made by it

var killerRabbit = new Rabbit("killer");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);       //true
console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);   //true