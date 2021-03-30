// object is data structure where we can save a values related to their property names.

const akash = {
    firstName: 'Akash',
    lastName: 'Verma',
    birthYear: 1996,
    job: 'software engineer',
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `My names is ${this.firstName} ${this.lastName}. I was born in ${this.birthYear}.
        I am working as a ${this.job}. I ${this.hasDriverLicense ? '':"don't"} have drivers license.
        My age is ${this.calcAge()}`
    }
}

//console.log(akash.getSummary());

/*
There are 2 ways to access poperty of an object
1. using dot(.) notation
2. using square ([]) brackets

The diffeence betwwen two are :
    when we use dot notation we must specify the property name as it is, not inside a variable. It's not computed.
    when we use square brackets, we can put variable which is computed to the propertyname.
*/

const vivek = {
    firstName:'Vivek',
    age: 24
}

var name = 'firstName';

console.log(vivek.name); //undefined
console.log(vivek[name]);

/*
There's "in" operator which checks the existence of key in the object. Also we can loop over all the properties inside
the object.
*/

console.log("firstName" in akash);

for(let key in akash){                          // not necessary to name it as key.. can use prop
    console.log(`${key} -> ${akash[key]}`);
}

/*
Summary
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.
*/