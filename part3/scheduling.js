/*
We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

setTimeout  - allows us to run a function once after the interval of time.
setInterval - allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
*/

/*
setTimeout(callbackFunc, delay (in ms), arg1,arg2...)

callBackFunc -> function or string of code
delay -> It is run in milliseconds
arg1,arg2 -> argument of callbackFunc
*/

function sayHi(name, age){
    console.log(`Hi! my name is ${name}. I am ${age} years old`);
}

//setTimeout(sayHi,1000,"Akash",24);              // Note: don't pass sayHi(). Always pass reference of the function

/*
A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
*/
let timerId = setTimeout(() => console.log('Hello'),2000);
clearTimeout(timerId);

/*
setInterval - It is as same as setTimeout, but it runs the function repeatedly after given time
clearInterval - It clears the setInterval
*/
// let intervalId = setInterval(() => {
//     console.log("Hi!");
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 10001);

// let interId = setInterval(() => {
//     console.log("interval started!");
//     setTimeout(() => {
//         console.log("inside timeout!");
//     }, 1000);
//     console.log("interval stopped!");
// }, 3000);


// setTimeout(() => {
//     clearInterval(interId)
// }, 20000);

/*
For performing a task regulaly, at given interval of time, we can use below methods
1. using setInterval
2. using nested setTimeout

nested setTimeout gives more flexibility than setInterval. Here's why
The setTimeout above schedules the next call right at the end of the current one (*).

The nested setTimeout is a more flexible method than setInterval.
 This way the next call may be scheduled differently, depending on the results of the current one.

For instance, we need to write a service that sends a request to the server every 5 seconds asking for data,
 but in case the server is overloaded, it should increase the interval to 10, 20, 40 seconds…
*/

{
    setInterval(() => {
        console.log("Hi");
    }, 100)

}

{
    setTimeout(function func(){
        console.log("abc");
        setTimeout(func,200)
    },100)
}


//link: https://javascript.info/settimeout-setinterval