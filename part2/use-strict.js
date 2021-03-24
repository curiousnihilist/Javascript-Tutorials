/*
'use scrict' was new in EMCAScript 2015

'use strict' is  literal expression which changes behaviour of code. It enables strict mode and allows to write
more safer code in javascript and convert old 'bad syntax' into rela errors.

To enable strict mode, it must be applied at the first line of the file.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
*/

'use strict'

var name = 'akash';

console.log(names);