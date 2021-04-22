/*
Both for..in and for..of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over:

for..in iterates over all enumerable property keys of an object
for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.
*/

let obj ={a:1,b:2,c:3,d:4,e:true,f:function(){}};
let arr = [1,2,3,4,5,6,7,8,9]                       //iterable
arr.foo = "bar"

let set = new Set(['a','b','c','d']);               //Iterable
let map = new Map();                                //Iterable
map['z']=9;
map['y']=8;
map['x']=7;

// for in loop
for(let prop in obj){
    console.log(prop);          //a,b,c,d,e,f
}
for(let prop in arr){
    console.log(prop);          //0,1,2,3,4,5,6,7,8,foo
}
for(let prop in set){
    console.log(prop);              // Nothing as set doesnot have any property  
}
for(let prop in map){
    console.log(prop);          //z,y,x
}

//for of loop

/*
for(let val of obj){        
    console.log(val);               // Error obj is not iterable
}
*/

for(let val of arr){
    console.log(val);               //1,2,3,4,5,6,7,8,9
}
for(let val of set){
    console.log(val);               //a,b,c,d
}
for(let val of map){
    console.log(val);                   // nothing
}