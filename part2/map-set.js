// Map – is a collection of keyed values.

// Methods and properties:

// new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
// map.set(key, value) – stores the value by the key, returns the map itself.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, otherwise false.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
// The differences from a regular Object:

// Any keys, objects can be keys.
// Additional convenient methods, the size property.
// Set – is a collection of unique values.
// For looping over a map, there are 3 methods:
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// Methods and properties:

// new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
// set.add(value) – adds a value (does nothing if value exists), returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
// The same methods Map has for iterators are also supported:
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

var map = new Map();
map.set(1,'akash').set(true,23).set({name:"Akash",age:25}, "employee1");
console.log(map);

var map1 = new Map([['name',"akash"],['age',25],['college','IIEST']])
console.log(map1)

console.log(map.keys())
console.log(map.values());
console.log(map.entries());

var set = new Set([1,2,3,1,5,7,3,5])
console.log(set);
console.log(Array.from(set));
