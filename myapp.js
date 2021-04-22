// // // function Button(value) {
// // //     this.value = value;
// // //     this.onClick_1 = function () {
// // //         console.log(this.value);
// // //     };
// // //     this.onClick_2 = () => {
// // //         console.log(this.value);
// // //     };
// // // };
    
// // // let button_1 = new Button("OK");
// // // let button_2 = { value: 'Cancel' };


// // // // console.log(button_1);
// // // // console.log(button_2);
    
// // // button_2.onClick_1 = button_1.onClick_1;
// // // button_2.onClick_2 = button_1.onClick_2;

// // // // console.log(button_1);
// // // // console.log(button_2);

// // // button_1.onClick_1(); // console >> "OK"- it's clear for me
// // // button_1.onClick_2(); // console >> "OK" - Why "OK" not "undefined"

// // // button_2.onClick_1(); // console >> "Cancel"- it's clear for me
// // // button_2.onClick_2(); // console >> "OK" - Why "OK" not "undefined" or "Cancel"



// // // console.log(Array.from("foo"));
// // // console.log(Array.from([1,2,3,4,5]));
// // // console.log(Array.from({
// // //     name:"Akash", age:25
// // // }));

// // // let user = {
// // //     name: "John",
// // //     years: 30
// // // };

// // // var {name, years:age, isAdmin: isAdmin=false} = user;
// // // console.log(`${name}, ${age}, ${isAdmin}`);

// // // let salaries = {
// // //     "John": 100,
// // //     "Pete": 300,
// // //     "Mary": 250
// // // };

// // // function topSalary(salaries){

// // //     Object.entries(salaries).map(
// // //         ([key,value]) => {
// // //             highest = Number.MIN_SAFE_INTEGER
// // //         }
// // //     );

// // //     // salaries.entries(([key,value]) => {
// // //     //     console.log(`${key}:${value}`)
// // //     // })
// // // }

// // // topSalary(salaries);


// // // let arr = [1, 2, 3, 4, 5, 6, 7];

// // // function inBetween(a, b) {
    
// // //     return function(x) {
// // //         console.log(x);
// // //       return x >= a && x <= b;
// // //     };
// // //   }

// // // console.log(arr.filter(inBetween(3,6)));

// // // console.log(globalThis);


// // // var addTo = function(passed){

// // //     var add = function(inner){
// // //         return passed+inner;
// // //     }

// // //     return add;
// // // }

// // // var addThree = addTo(3);
// // // var addFour = addTo(4);

// // // console.log(addThree(3));
// // // console.log(addFour(4));


// // let movie = {
// //     name:"Dunkirk",
// //     director:"Christopher Nolan",
// //     print:function(){
// //         console.log(this);
// //         console.log(`movie-> ${this.name}   director->${this.director}`);
// //     }
// // }

// // var year ={
// //     year:2020
// // }

// // function abc(){
// //     console.log(this);
// // }

// // abc.call(movie);
// // movie.print()
// // movie.print.call(year)

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }

// var akash = new User("akash",24);
// var vivek = {
//     name:"vivek",
//     age:24
// }

// console.log(User.prototype);
// console.log(Object.getPrototypeOf(akash) == Object.getPrototypeOf(vivek));
// console.log(Object.getPrototypeOf(akash));
// console.log(Object.getPrototypeOf(vivek));


function reverseArray(arr){
    let newArr = [];
    for(let el of arr){
        newArr.unshift(el);
    }
    return newArr;
}

function reverseArrayInPlace(arr){
    for(let i=0; i<arr.length/2; i++){
        console.log(arr);
        [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]];
        console.log(arr);
    }
}

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(arr));
reverseArrayInPlace(numbers)
console.log(numbers);