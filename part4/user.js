// Exporting can be done in 2 ways
// 1. using export keyword nefore class/object/functions
// 2. using export at the end of file naming all functionalities to be exported

export const months = ['Jan','Feb','Mar','Apr','May'];

export default class User{  //There may be only one export default per file.

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

function printName(user){
    console.log(`Hi! My name is ${user.name}`);
}

function printAge(user){
    console.log(`I am ${user.age} years old`);
}

function printData(user){
    console.log("name : " + user.name + " age : " + user.age);
}

export {printAge, printName};

export {printData as showData};