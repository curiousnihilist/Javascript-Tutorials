/*
The method JSON.stringify(student) takes the object and converts it into a string.

The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object.
 We are ready to send it over the wire or put into a plain data store.

JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
Namely:
Function properties (methods).
Symbolic keys and values.
Properties that store undefined.
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    father:undefined                            //ignored
};
  
let json = JSON.stringify(student);

console.log(json);

/*Important limitation is that it does not support circular references
It means, if a property reference itself somehow, it will throw error
*/

let room = {
    roomNo:23,
}

let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};
  
meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup
  
//JSON.stringify(meetup)      // will throw error