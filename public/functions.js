"use strict";
// let greet: Function;
// // greet = 'hello'
// greet = () => {
//     console.log('hello');
// }
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
// this function will return a number
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
