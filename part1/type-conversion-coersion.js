// Type conversion is explicit conversion of a data type to another.

var inputYear = '1991'
var inputName = "Akash"
var year = Number(inputYear)
var name = Number(inputName)


console.log(`Type of inputYear: ${typeof inputYear}`);
console.log(`Type of year: ${typeof year}`);
console.log(`Type of inputName: ${typeof inputName}`);
console.log(`Type of name: ${typeof name}`);
console.log(name);


console.log(String(45678));




// Type coercion is implicit conversion of a data type to another

console.log("I am " + 24 + " years old.");  // number is converted to string to concat 
console.log('23'-'10');                     // string is converted to number 
console.log('12' / '2');                    // string is converted to number
console.log('14' > '10');
console.log('zbc' > 'cba');                 // lexicographic comparison between strings


// Guess this
var n = '1'+1; // output -> '11'
n = n - 1;      // output -> 10
console.log(n);
console.log(typeof n); // number


var p = 1+2+3+'5'
console.log(p);
console.log(typeof p);