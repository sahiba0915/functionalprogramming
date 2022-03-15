//Q1. Take an object with your mother's name and your age.Now, create an object for your siblings by age difference.

const shubham = {mother: "Anju", age: 24};
const sahiba = {...shubham, age: shubham.age-2 };

console.log(sahiba.age);
console.log(shubham.age);
console.log(sahiba);
console.log(shubham);

//Q2. Take an array with 5 colors. Create another array by adding two more colors to it.

const colorsArr = ["red", "blue", "green", "yellow", "white"];
const newColorsArr = [...colorsArr, "voilet", "pink"];

console.log(colorsArr);
console.log(newColorsArr);

// Pure functions
//Q3.Write a function birthday() to take a person's name and age in an object & increase age.

const birthday = (person) => ({...person, age: person.age+1});
const sahibaAfterbirthday = birthday(sahiba);

console.log(sahibaAfterbirthday);

//Q4.Write a function which can tell whether a number is less than 10 or not. Suplly this function to array.filter() to get an array with nos.more than 10 in it.

const numbers = [10, 2, 40, 20, 50, 6];
const isMoreThan10 = num => num > 10;
const res = numbers.filter(isMoreThan10);

console.log(res);

//Q5.Given an array of numbers, return an array with all numbers incremented by 2.

const incrementedByTwo = numbers.map(num => num + 2);
console.log(incrementedByTwo);

//Q6. Find the sum of odd numbers in an array.

const numArr = [2,5,7,6,99,22];
const reducer = (p,c) => c%2 == 0 ? p : p+c;
const sumOfOdd = numArr.reduce(reducer);
console.log(sumOfOdd);

//Q7. Return an object with the sum of odd numbers and sum of even numbers.

const oddEvenObj = {even: 0, odd: 0};
const objReducer = (oddEvenObj, num) => num % 2 == 0 ? {...oddEvenObj, even:oddEvenObj.even + num} :{...oddEvenObj, odd:oddEvenObj.odd + num};
const objReducerResult = numArr.reduce(objReducer, oddEvenObj);
console.log(objReducerResult);

// Currying 
//Q8. Create a function which takes your name and returns a function which would add that function with any text.

const nameLogger = personName => msg =>console.log(`${personName} says, ${msg}`);
const sahibaLogger = nameLogger("sahiba");

sahibaLogger("I will complete neog by June'22");

//Q9. Write a function which can log any text with your username. Another function which can write any text with userId. Now, Compose both the functions to give one function which can log any text with both username and userId.

const logWithMyName =  msg =>`Sahiba says, ${msg}`;
const logWithMyID = msg =>`ID: 143 :: ${msg}`;

const userNameAndUserId = msg => logWithMyID(logWithMyName(msg));
userNameAndUserId("how are u");







