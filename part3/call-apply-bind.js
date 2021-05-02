// call, apply and bind are default methods available to every function in javascript

// call and apply are mainly used for method borrowing. The first parameter points to "this" object on which we want to call
// the function. The other parameters are actual argument of the function.

// The only difference between call and apply is that how they take actual function arguments. Bind method requires and array

var emp1 = {
    firstName:"Akash",
    lastName:"Verma"
}

var emp2 = {
    firstName:"Sachin",
    lastName:"Tendulkar"
}

// Here this is undefined by default under "strict mode" 


function print(location,state){   
    console.log(`Name: ${this.firstName} ${this.lastName}  Location: ${location}  State: ${state}`);
}

print.call(emp1,"Jamshedpur","Jharkhand");
print.apply(emp1,["Jamshedpur","Jharkhand"]);

print.call(emp2,"Mumbai","Maharashtra");
print.apply(emp2,["Mumbai","Maharashtra"]);



//for example we can borrow methods of other object 

function printArgs(){
    console.log(arguments);         //arguments is iterable object but not array, if we ant to use array methods on it
    console.log([].slice.call(arguments));
}

printArgs(1,2,3,4);

//using different constructor

function Mammal(legs){
    this.legs = legs;
}

function Cat(legs, isDomesticated){
    Mammal.call(this,legs);
    this.isDomesticated = isDomesticated;
}

var lion = new Cat(4,false);
console.log(lion);
console.log(lion instanceof Cat);
console.log(lion instanceof Mammal);


// bind actually binds the functionality to an object, and return that function binding for use. 
// It doesn't actually calls the function like call and apply

var akashDetails = print.bind(emp1, "Pune", "Maharashtra");
console.log(akashDetails);          // function boud to emp1 object
akashDetails();                     // calling the function