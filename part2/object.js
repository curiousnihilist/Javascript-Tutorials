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

console.log(akash.getSummary());

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