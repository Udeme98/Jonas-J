"use strict";

//destructuring arrays
//old way
const arr = [2, 4, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//modern way
const [x, y, z] = arr;
console.log(x, y, z);

//object
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo 23",
  categories: ["Italian", "Pizzaria", "Vegetarian", "organic"],
  starterMenu: ["Focaccia", "Brushetta", "Garlic Bread", "caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rosotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (startIndex, endIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[endIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//destructuring objects
const { name, openingHours, categories } = restaurant;
// console.log(name);
// console.log(openingHours);
// console.log(categories);

//using different name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu: start } = restaurant;
// console.log(menu, start);

//mutating object values
let d = 12;
let e = 24;
const tens = { d: 10, e: 20 };
({ d, e } = tens);
console.log(d, e);

//des nested obj
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//swaping both elements(without restructuring)
// let temp = main;
// main = secondary;
// secondary =temp ;
// console.log(main, secondary);

//using destruturing

//using funtion to return an array
//console.log(restaurant.order(2, 0));

//destructuring
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter);
//console.log(maincourse);

//destructure nested arrays
let nested = [2, 4, [6, 8]];
//const [p, , q] = nested;
const [p, , [q, r]] = nested;
console.log(p, q, r);

//default values
let even = [2, 4];
let [i = 1, j = 1, k = 1] = even;
console.log(i, j, k);

//spread operator
const arr1 = [7, 8, 9];
const arrNew = [1, 2, ...arr1];
console.log(arrNew);
//joining 2 arrays
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

//rest operator
const [firstDish, secondDish, ...otherDish] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(firstDish, secondDish, otherDish);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//using restparametrs as arguments
const add = function (...numbers) {
  //console.log(numbers);
  let sum = 0;
  for (i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// add(2, 3);
// add(2, 3, 4);
// add(2, 3.7, 8);

restaurant.orderPizza("Mushrooms", "vanilla", "hotdog");
