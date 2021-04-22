/*
Primitives are passed-by-value
Objects are passed-by-reference
*/

var emp = {
    name:"Akash Verma",
    age:24,
}

var empId = "46001179";

function change(id, employee){
    id = "123456";
    employee.name = "Manish Sharma";            // Will change the actual object           
}

function change1(id,employee){
    id = 'sfsdfsdf';
    employee = {name:"AR Rahman",age:40}        // will not change the actual object
}

//change(empId,emp);
change1(empId,emp);

console.log(emp);               
console.log(empId);             
