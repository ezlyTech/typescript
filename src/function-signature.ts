// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}


// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}


// example 3
let logs: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logs = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}