// callback functions are used to execute code asynchronously. they are the functions which are
// passed to another function in order to call them again after something is finished

function successPrint(){
    console.log("My name is Akash");
}

function failurePrint(){
    console.log("My name is not Akash");
}

function checkAndPrint(obj,successCallback,failureCallback){
    if(obj.name === "Akash"){
        successCallback();
    }else{
        failureCallback();
    }
}

checkAndPrint({name:"Akash"},successPrint,failurePrint);
checkAndPrint({name:"Vishal"},successPrint,failurePrint);

// callback in callback
/* 
Let's take an example of function loadScript which loads a scripts from server, if it finishes we want to
load another script and then another so on.
*/

function loadScript(src, callback){
    let script = Object.create(null);
    script.src = src;
    console.log(`Loading ${src}.........`)
    let srcLoaded = false;

    if(srcLoaded){
        callback(null);
    }else{
        callback(new Error("script not loaded"));
    }
    
}


// Below is pyramid of doom
// The code is hard to understand and readbility of code is decreased
loadScript("1.js",function(err){
    if(err){
        console.log("Error!!!")
    }else{
        loadScript("2.js",function(err){
            if(err){
                console.log("Error!!!")
            }else{
                loadScript("3.js",function(err){
                    if(err){
                        console.log("Error!!!")
                    }
                })
            }
        })
    }
})