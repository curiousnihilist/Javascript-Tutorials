// Module is individual script from which we want to import some functionality (class/function/object).
// Thus in modules system we export functionality to outer world using "export" keyword and import those functionalties
// in other scripts using "import" keyword, just like importing Java package/modules

// Here we will try to import some functionalities from file "user.js"

// Following code will not work as node doesnot support es6 modules

import {months} from "./user.js";

import User from "./user.js";
import {printName as showName, printAge as showAge} from "./user.js";
import {showData} from "./user.js";


var akash = new User("Akash Verma",24);
var vivek = new User("Vivek Singhal",31);

showName(akash);
showAge(akash);

showData(vivek);

// Link: https://javascript.info/import-export
//Important points


/*
1. As modules support special keywords and features, we must tell the browser that a script should be treated as a module, 
by using the attribute <script type="module">.
*/