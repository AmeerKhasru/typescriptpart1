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