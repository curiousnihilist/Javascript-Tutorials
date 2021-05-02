/*
Promises can be chained in the following ways:
*/

new Promise(function(resolve,reject){
    setTimeout(() => resolve(1),2000);
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2
}).then(function(result){
    console.log(result);
});

//Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler.

new Promise(function(resolve,reject){
    setTimeout(() => resolve(1),2000);
}).then(function(result){
    console.lg(result);
    return result*2;
}).then(function(result){
    console.log(result);
    return result*2;
}).then(function(result){
    console.log(result);
}).catch((err) => console.log(err.message));

function loadScript(src){
    console.log(`Loading ${src}.....`);
    return new Promise(function(resolve){
        resolve(src + " loaded!");
    })
}

loadScript("first-script.js").then(script => {
    console.log(script); 
    return loadScript("second-script.js");
    }).then(script => {
        console.log(script);
        return loadScript("third-script.js");
        }).then(script => {
            console.log(script);
        })