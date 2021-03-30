/*
String is JS are immutable, which means once a sting is created, it's content can't be changed.
*/

// var pname = "Akash";
// var sName = pname;

// pname[0] = "a";
// console.log(pname);  //pname is not changed

// pname = pname+"Verma";
// console.log(pname);   
// console.log(sName);  // change in one reference doeen't change other one

//String methods and properties

/*
Finding a string in a string

1. String.indexOf(searchString [,fromIndex])  - returns index of first occurrence of specified string, fromIndex is starting index 
                                                from where to search
2. String.lastIndexOf(searchString [,fromIndex]) - returns index of last occurence of specified string, fromIndex is starting index
                                                    from where to search
3. String.search(regexp) - returns first position of match.
*/

var sen = "My name is Akash Verma. My college name is IIEST Shibpur.";
console.log(sen.indexOf("is"));    //8
console.log(sen.indexOf("is",9));  //40
console.log(sen.indexOf("lion"));  //-1
console.log(sen.lastIndexOf("is")); //40
console.log(sen.search(/[0-9]/i)); //-1 

/*
Extracting string from a string

1. String.slice(start, end)  - returns substring from start index to end index, if end index is negative, it will show
                                string from start till end stripping last (end no. of index)

2. String.substring(start,end) - returns substring from start index to end index. end should not be negative

3. String.substr(start,len) - returns substring from start index of length len, -ve start menas it will start from end

*/

var fruits = "Apple, Banana, Litchi";
console.log(fruits.slice(0,5));      //Apple
console.log(fruits.slice(0,-2));     //Apple, Banana, Litc
console.log(fruits.slice(-5));       //itchi

console.log(fruits.substring(0,5));  //Apple
console.log(fruits.substring(0,-2)); //undefined
console.log(fruits.substring(-5));   //Apple, Banana, Litchi

console.log(fruits.substr(5,5));     //, Ban
console.log(fruits.substr(5,-3));    // undefined
console.log(fruits.substr(-5));      //itchi


/* Replacing a substing

1. String.replace(old,new) : replace only first occurence of old string to new string and returns a new sting

*/

console.log(fruits.replace("Banana","Mango"));
console.log(fruits);

/*Extracting Sting characters in 

1. String.charAt(index) : returns string at specified index
2. String.charCodeAt(index) : returns unicode at specified index
3. String[index]
*/

var hello = "HELLO WORLD!";
console.log(hello.charAt(4));
console.log(hello.charCodeAt(hello.length -1));
console.log(hello[4]);

/*
Other useful methods.

1. String.toUpperCase() : returns a new sting by converting everything to lowercase
2. String.toLowerCase() : retuns a new string by converting everything to uppercase
3. String.concat(anotherString) : returns a new string after concatenating
4. String.trim() : returns a new string after removing white space from both sides of the string
5. String.split(string) : returns an array after splitting by given sting
*/

console.log(hello.toLowerCase());
console.log(hello.concat(" JOKER"));
console.log(hello);

var hi = "                Hi, My name is Akash                       ";
console.log(hi.trim());
console.log(hi);


console.log(fruits.split(","));


