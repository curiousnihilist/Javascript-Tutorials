/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically. 
It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is 
the “singer”.

Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.
So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
*/

/*
Inside the constructor of promise, the executor function (which performs the task), takes two callback functions
as argument
1. resolve - It is the callback function which is called when the promise is in resolved state ie. fulfilled
             It can take only one parameter, and other parameters are ignored.
             This argument is passed to first callback function defined in ".then" clause

2. reject - It is the callback function which is called when the promise is in reject state ie. rejected. 
            It can take only one parameter, and other parameters are ignored.
            This argument is passed to second function defined in ".then" clause or function defined in ".catch" clause.

Note: The executor should call only one resolve or one reject. Any state change is final.
      All further calls of resolve and reject are ignored

Consumers:

1. Then

The first argument of .then is a function that runs when the promise is resolved, and receives the result.
The second argument of .then is a function that runs when the promise is rejected, and receives the error.

2. Catch

If we’re interested only in errors, then we can use null as the first argument: 
.then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

3. finally

The call .finally(f) is similar to .then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.
finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

That said, finally(f) isn’t exactly an alias of then(f,f) though. There are few subtle differences:
    1. A finally handler has no arguments. In finally we don’t know whether the promise is successful or not. 
       That’s all right, as our task is usually to perform “general” finalizing procedures.
    2. A finally handler passes through results and errors to the next handler.
*/

let promise = new Promise(function(resolve,reject){

    let isDataFetched = true;
    if(isDataFetched){
        setTimeout(() => resolve("data fetched"),1000);
    }else{
        setTimeout(() => reject(new Error("Something's wrong!!")),1000);
    }
});

//promise.then((data) => console.log(data),(err) => console.log(err.message));

promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("Cleaning resources");
})