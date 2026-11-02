let myString: string = "Hello, World!";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [string, number] = ["Hello", 42];

const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
}

const ctgLongLat : readonly[number , number] = [40.7128, -74.0060];


const conCatName = (firstName: string, lastName: string): string => {
    return firstName +" "+ lastName;
}



console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myArray);
console.log(myTuple);
console.log(addTwoNumbers(5, 10));
console.log(ctgLongLat);

console.log(conCatName("Amir", "Khasru"));

const greetings = (fullName: string, greeting = "Hello") => {
    console.log(greeting +", "+ fullName);
}
greetings("Amir Khasru");

//Rest Parameter

const sumAllNumbers = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAllNumbers(1, 2, 3, 4, 5));
console.log(sumAllNumbers(10, 20, 30));

//type alias and interface
type Person = {
    firstName: string;
    lastName: string;
    age: number;
}
const person1: Person = {
    firstName: "Amir",
    lastName: "Khasru",
    age: 25
}

const person2: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
}

interface Animal {
    name: string;
    species: string;
    age: number;
}  

const animal1: Animal = {
    name: "Buddy",
    species: "Dog",
    age: 5
}
const animal2: Animal = {
    name: "Whiskers",
    species: "Cat",
    age: 3
}

console.log(person1);
console.log(person2);
console.log(animal1);
console.log(animal2);
