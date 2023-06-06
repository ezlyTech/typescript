// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;


// arrays
let ninjas: string[];
ninjas = ['yoshi', 'mario'];

let push: string[] = [];
push.push('shaun');


// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(12);
mixed.push(false);

console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;


// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 24 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = { name: 'jane', age: 34, beltColor: 'grey' }