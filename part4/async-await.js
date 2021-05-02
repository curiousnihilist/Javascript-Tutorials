// keyword "async" is used before function so that it will always return promise.
// Other values are wrapped in a resolved promise automatically.

async function sum(num1,num2){
        if(num1 == null || num2 == null){
            throw new Error("Please provide correct numbers!");
        }
        return num1+num2;
}

//sum(2,null).then(console.log).catch((err)=>{console.log(err.message);});

//The keyword await makes JavaScript wait until that promise settles and returns its result.
// It works only inside async functions


async function example(){

    let promise = new Promise((resolve,reject) =>{
        setTimeout(() => resolve("Promise id resolved!"),2000);
    })

    console.log("Before Await!");

    try{
        var result1 = await promise;
        var result2 = await sum(2,null);
    }catch(err){
        console.log(err.message);
    }
    
    console.log("After Await!");

    console.log("result1 : "+result1);
    console.log("resul2 : "+result2);
}

example();