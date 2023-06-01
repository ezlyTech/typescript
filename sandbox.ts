// Basics
let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi';
age = 40;
isBlackBelt = true;


// Arrow function
const circ = (diameter) => {
    return diameter * Math.PI;
}

console.log(circ(30)); 


// Arrays
let names = ['john', 'rino', 'joseph'];
names.push('new');

let numbers = [10, 32, 34, 43];
numbers.push(45);

let mixed = ['sandy', 43, 'linda', 7, 12];
mixed.push('filo');
mixed.push(34);
mixed[0] = 3;


// Objects
let ninja = {
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
}