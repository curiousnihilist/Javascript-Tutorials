let linkedlist = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};




function arrayToList(arr) {

    let obj = {};
    for (let i=arr.length-1; i>=0; i--) {
        let newObj = {};
        newObj.value = arr[i];
        newObj.rest = (i === arr.length-1) ? null : obj;
        obj = newObj;
    }
    
    return obj;
}

function listToArray(list){

    let arr = []
    let obj = list;

    do {
        arr.push(obj.value);
        obj = obj.rest;
    }
    while(obj.rest !== null)
    
    arr.push(obj.value);
    return arr;

}

function prepend(element, list){
    var obj = {};
    obj.value = element;
    obj.rest = list;

    return obj;
}

function nth(position,list){
    var obj=list;
    if(position === 0) return obj.value;

    for(let i=0; i<position-1; i++){
        if(obj.rest == null) return undefined;
        obj = obj.rest;
        console.log(obj);
    }
    return obj.value;
}

var arr = [1,2];
var list = arrayToList(arr);
var arrAgain = listToArray(list);


var newList = prepend(5,list);
console.log(newList);

console.log(nth(2,newList))


function deepEqual(obj1, obj2){

    if(typeof(obj1) === "object" && typeof(obj2) === 'object'){
        
    }
}