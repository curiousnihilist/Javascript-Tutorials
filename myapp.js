function Button(value) {
    this.value = value;
    this.onClick_1 = function () {
        console.log(this.value);
    };
    this.onClick_2 = () => {
        console.log(this.value);
    };
};
    
let button_1 = new Button("OK");
let button_2 = { value: 'Cancel' };


// console.log(button_1);
// console.log(button_2);
    
button_2.onClick_1 = button_1.onClick_1;
button_2.onClick_2 = button_1.onClick_2;

// console.log(button_1);
// console.log(button_2);

button_1.onClick_1(); // console >> "OK"- it's clear for me
button_1.onClick_2(); // console >> "OK" - Why "OK" not "undefined"

button_2.onClick_1(); // console >> "Cancel"- it's clear for me
button_2.onClick_2(); // console >> "OK" - Why "OK" not "undefined" or "Cancel"