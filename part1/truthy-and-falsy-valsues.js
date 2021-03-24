// Falsy values are values which are not false , but it will become false when we conver them to boolean.
/*
There are 5 falsy values in Javascript
1. 0
2. ""
3. NaN
4. undefined
5. null
*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));


console.log(Boolean({}));
console.log(Boolean('akash'));
console.log(Boolean(123));


const money = 0;
if(money){
    console.log("Dont spend all money!");
} else {
    console.log("You're broke!");
}