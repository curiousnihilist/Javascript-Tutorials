/*
Promisification is transformation of callbacks intp promises. It convers function taking callback function arguments
and convert them to function returning promises
*/

function sum(num1,num2, callback){

    if(!num1 || !num2){
        callback(new Error("please give proper arguments!"), undefined);
    } else{
        return callback(null, num1+num2);
    }
}

sum(1,2,(err, result) => {
    if(err){
        console.log(err.message);
    } else {
        console.log(result);
    }
})

var promisify = function( func){            // creating a function which accepts a function to promisify
    // promisify should return a function on which .ten and .catch will be called
    // we don't know how many arguments it can take thus we take ...args as parameter
    return (...args) =>{
        // returning function shoud return a promise
        return new Promise((resolve,reject) => {
            // defining a customcallback for checking when to call resolve or reject which depends on implementation
            // of original function
            function customCallback(err,result){
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            }
            // Our args[] only consists of arguments passed by getSumPromise(1, 1) except the callback function.
            // So you need to add customCallback(err, result) to the args[]
            //which the original function getSumAsync will call accordingly as we are tracking the result in customCallback.
            args.push(customCallback);
            func.call(this, ...args);
        })

        }
    }
