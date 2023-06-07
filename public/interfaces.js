"use strict";
var me = {
    name: 'shaun',
    age: 23,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
