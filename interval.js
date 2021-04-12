{
    function printNumber(from,to){
        let intervalId = setInterval(() => {
            from <= to ? console.log(from++) :clearInterval(intervalId); 
        }, 1000);
    }

    printNumber(1,10);
}

{
    function printNumber(from,to){
        let timeoutId = setTimeout(function logNum(){
            if(from <= to){
                console.log(from++);
                setTimeout(logNum,1000);
            }
        },1000);
    }

    printNumber(1,10)
}

