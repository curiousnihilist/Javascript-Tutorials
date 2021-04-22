/*
Just like, Java a constructor is a function which is used to create object. In javascript, we can make
object in many ways such as
1. using Object.create(proto)
2. using {} literal
3. using contuctor function.

Each and every object has a property named "constructor" which points to the Function() which is 
used to create the specified object. 
*/


{
    let company = {
        companyName:'Amazon',
        location:'Bangalore'
    };

    let emp = Object.create(company) ;

    console.log(emp.constructor);            // will point to Object()
}

{
    let Employee = function MakeEmployee(name,role){
        this.name = name;
        this.role = role;
    }

    let akash = new Employee('Akash','Analyst');

    console.log(akash.constructor);         // will point to MakeEmployee()
}

{
    var obj = {a:1,b:2};

    console.log(obj.constructor);           // will point to Object()
}

/*
Since contructor points to Function(), we can call it many times.
var obj = new (Emp.constuctor)();
*/

//Other constructor

console.log([].constructor);            // points to Array constructor
console.log((20).constructor);          // points to Number constructor
