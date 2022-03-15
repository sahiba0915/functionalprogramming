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

