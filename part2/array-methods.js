var fruits = ['apple','mango','orange','litchi','watermelon'];
var years = new Array(1991,1992,1996,1884,1887,1850,2001);


// print array
console.log(`fruits -> ${fruits}`);
console.log(`years -> ${years}`);

// Array Properties
/*
    Array.length - returns no of element in the array
*/
console.log(`array.length -> ${fruits.length}`);


//Array Methods
/*
    Adding elements
    Array.push(element) - adds element at the end of an array
                          returns: new length of array

    Array.unshift(element) - adds element at the start of the aray
                            returns: new length of array

    Array.concat(array) - merge two arrays
                          returns: merged array
    --------------------------------

    Removing elements
    Array.pop() - removes element from the end of the array 
                  returns: removed element

    Array.shift() - removes first element of the array
                    returns: removed element 
    
    Array.splice(start, deleteCOunt, item1, item2) - deletes element from start index until deleteCount index
                                                     return: new array
    ------------------------------------

    Finding Element and Index
    Array.indexOf(element) - returns first(least) index of element or return -1 if not found
    Array.lastIndexOf(element) - returns last(geatest) index of elemnt or return -1 if not found
    Array.find(predicate) - finds element on the basis of predicate
    Array.findIndex(pedicate) - finds element on the basis of predicate

    Returns Boolean
    Array.includes(element, fromIndec) - returns true or false whether the elment is present in array or not (starting fromIndex)
    Array.every(predicate) - returns true if every element satisfies the predicate
    Array.some(pedicate) - returns true if at leat one element satisfies the predicate


    // Other methods
    Array.fill(element,start,end) - returns arrays with given element filled from start to end index
    Array.filter(predicate) - returns new array containing elements for which predicate is true
    Array.forEach(function) - Apply function to each element, doesn't return anything
    Array.map(function) - creates a new array with the results of calling a provided function on every element in this array
    Array.sort(comparefunction) - returns array after sorting array on basis of compare function in ascending order
    Array.reverse() - returns array in reverse order
    Array.slice(start,end) - returns a shallow copy of a portion of an array into a new array object selected from start to end

    Array.reduce(reducerFunction) - reduces whole array to one value moving from left to right
    Array.reduceRight(reducerFucntion) - reduces whole array to one value moving from right to left

    Array.keys() - returns a new Array Iterator object that contains the keys for each index in the array.
    Array.values() - returns a new Array Iterator object that contains the values for each index in the array.
    Array.toString()
    Array.toLocaleString()

    Array.join(separator) - joins each elements to string with given seaparator

*/
console.log(`array.concat(array) -> ${fruits.concat(years)} `);
console.log(fruits.fill("--"));
console.log(fruits.join('*'));
console.log(fruits.keys());
console.log(fruits.values());
console.log(years.forEach(val => val+2));
console.log(years.map(val => val+2));
console.log(years.reduce((acc,val) => acc-val));
console.log(years.reduceRight((acc,val) => acc-val));