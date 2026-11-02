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
//Rest Parameter
const sumAllNumbers = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumAllNumbers(1, 2, 3, 4, 5));
console.log(sumAllNumbers(10, 20, 30));
const person1 = {
    firstName: "Amir",
    lastName: "Khasru",
    age: 25
};
const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
const animal1 = {
    name: "Buddy",
    species: "Dog",
    age: 5
};
const animal2 = {
    name: "Whiskers",
    species: "Cat",
    age: 3
};
console.log(person1);
console.log(person2);
console.log(animal1);
console.log(animal2);
