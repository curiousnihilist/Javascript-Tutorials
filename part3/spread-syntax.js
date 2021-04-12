// There is something called rest parameters which works same as varargs in java

function sum(a,b, ...args){
    let sum = a+b;
    if(args != undefined){
        for(let arg of args){ sum+=arg}
    }
    return sum;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5,6));


// Spread syntax is similar rest, but it does the opposite thing. It opens up an array(iterables) into various variables
// or arguments.

var nums1 = [22,43,25,75,36,85];
var nums2 = [67,43,2,76,49];

console.log(Math.max(5,6,3,7,2,9,0));
console.log(Math.max(...nums1));
console.log(Math.max(...nums2));
console.log(Math.max(100,...nums1));

//Also, the spread syntax can be used to merge arrays or convert iterables into arrays like Array.from()

console.log([0,...nums1,...nums2,100]);
var hello = "Hello!";
console.log([...hello]);
console.log(Array.from(hello));

/*
But there’s a subtle difference between Array.from(obj) and [...obj]:

Array.from operates on both array-likes and iterables.
The spread syntax works only with iterables.
So, for the task of turning something into an array, Array.from tends to be more universal.
*/