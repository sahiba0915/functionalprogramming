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

//




