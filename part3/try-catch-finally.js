const accounts = new Map();
accounts.set("Akash",1000);
accounts.set("Rohan",500);
accounts.set("Shalini",1500);

class NoAccountError extends Error{};


function getBalance(name){
    if(accounts.has(name)){
        return accounts.get(name);
    }
    throw new NoAccountError("Account with name "+ name + " doesn't exist!");
}

function transfer(from, to, amount){
    let progress = 0;
    try{
        accounts.set(from,getBlance(from)-amount);
        progress = 1;
        accounts.set(to,getBalance(to)+amount);
        progress = 2;
    }catch(er){
        if(er instanceof NoAccountError){
            console.log(er.message)
        } else{
            console.log(er.message);
        }
    }finally{
        if(progress === 1){
            accounts.set(from,getBalance(from)+amount);
        }
    }
}

transfer("Akash","Bob",200);
console.log(accounts);

// rules for error-handling is same as Java