
//Date Initialization

var date1 = new Date();                                             // current date
var date2 = new Date(365*24*60*60*1000);                            // new Date(millisecond) calculate time from Jan 1, 1970
var date3 = new Date(1996,8,7,0,0,0,0);                           // new Date(year,month,day,hour,min,sec,millisecond)
                                                                   // Note: month starts from zero
var date4 = new Date("01-05-2020");

console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());

console.log(date4.getFullYear());
console.log(date4.get);

/*
Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
Months are counted from zero (yes, January is a zero month).
Days of week in getDay() are also counted from zero (that’s Sunday).
Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.
*/