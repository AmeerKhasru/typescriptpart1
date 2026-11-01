"use strict";
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myArray = [1, 2, 3, 4, 5];
let myTuple = ["Hello", 42];
const addTwoNumbers = (a, b) => {
    return a + b;
};
const ctgLongLat = [40.7128, -74.0060];
const conCatName = (firstName, lastName) => {
    return firstName + " " + lastName;
};
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);
console.log(myTuple);
console.log(addTwoNumbers(5, 10));
console.log(ctgLongLat);
console.log(conCatName("Amir", "Khasru"));
const greetings = (fullName, greeting = "Hello") => {
    console.log(greeting + ", " + fullName);
};
greetings("Amir Khasru");
