var bills = [100,500,900];

var calcTip = function(bill){
    if(bill<200){
        return bill*0.3;
    } else if (bill>=200 && bill<=800){
        return bill*0.2;
    } else {
        return bill*0.15;
    }
}

var tips = bills.map(bill => calcTip(bill))
console.log(tips);

var total = bills.map(bill => bill)