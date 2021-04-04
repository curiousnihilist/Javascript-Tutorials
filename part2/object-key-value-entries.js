/*
To get keys, values and entries from an OBject we have following methods.

For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
Object.fromEntries(array) - returns an object after applying methods


// However these will not give symbol properties, if any present
*/

function Employee(name,age,college){
    this.name = name;
    this.age = age;
    this.college = college;
}

var emp1 = new Employee("Akash",24,"IIEST");
var emp2 = new Employee("Harsh",25,"PES");
var emp3 = new Employee("Mrinal",23,'IIT');

var basket = {
    'apple':3,
    'mango':5,
    'orange':2
}


console.log( Object.keys(emp1) );
console.log(Object.values(emp1));
console.log(Object.entries(emp1));

console.log(Object.fromEntries(
    Object.entries(basket).map(([key,value]) => [key,value*2])
));

{
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };

    console.log(Object.values(salaries).reduce((accm,el) => accm +=el))

    console.log(Object.keys(salaries).length)
}