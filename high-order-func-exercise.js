let arr = [['akash','verma'],['ranjay','kumar','verma'],['madhu','verma']];

var nums = [1,2,3,4,5];

var newArr = arr.reduce((acc,curr) => acc.concat(curr));

function loop(value,testFunc,updateFunc,bodyFunc){

    for(value; testFunc(value); value = updateFunc(value)){
        bodyFunc(value);
    }

}

function loopArray(value,testFunc,updateFunc,bodyFunc){

    for(let i = 0; testFunc(i,value); i = updateFunc(i)){
        bodyFunc(value[i])
    }

}



//loop(3, n => n > 0, n => n - 1, console.log);
loopArray([1,2,3,4], (i,m) => i < m.length, i => i+1, (el) => console.log(el));

function every(arr,predicate){

    for(let i=0; i<arr.length; i++){
        if(!predicate(i)) {
            return false;
        }
    }
    return true;
}

function everySome(arr,predicate){

    arr.some(predicate);
    
}