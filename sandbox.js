// Basics
var character = 'mario';
var age = 30;
var isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
// Arrow function
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(30));
// Arrays
var names = ['john', 'rino', 'joseph'];
names.push('new');
var numbers = [10, 32, 34, 43];
numbers.push(45);
var mixed = ['sandy', 43, 'linda', 7, 12];
mixed.push('filo');
mixed.push(34);
mixed[0] = 3;
// Objects
var ninja = {
    name: 'mario',
    belt: 'red',
    age: 32
};
ninja.age = 40;
ninja.name = 'vin';
ninja = {
    name: 'yoshe',
    belt: 'black',
    age: 99
};
