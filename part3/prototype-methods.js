/*
Setting prototype of an object using "__proto__" is deprecated. We can set prototype using following methods

1. Object.create(proto,[descriptors])   - creates an empty object with a given proto as [[Prototype]] (can be null) and optional property descriptors.
2. Object.getPrototypeOf(obj)           - returns [[Prototype]] of the obj
3. Object.setPrototypeOf(obj,proto)     - sets proto as [[Prototype]] of the obj

Other methods:

Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of enumerable own string property names/values/key-value pairs.
Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic keys.
Object.getOwnPropertyNames(obj) – returns an array of all own string keys.
Reflect.ownKeys(obj) – returns an array of all own keys.
obj.hasOwnProperty(key): returns true if obj has its own (not inherited) key named key.

*/

/*
Following the ECMAScript standard, the notation someObject.[[Prototype]] is used to designate the prototype of someObject. 
Since ECMAScript 2015, the [[Prototype]] is accessed using the accessors Object.getPrototypeOf() and 
Object.setPrototypeOf(). This is equivalent to the JavaScript property __proto__ which is non-standard but de-facto implemented by many browsers.

It should not be confused with the func.prototype property of functions, which instead specifies the [[Prototype]] to 
be assigned to all instances of objects created by the given function when used as a constructor.
The Object.prototype property represents the Object prototype object.
*/