"use strict";
// console.log("Hello");

//conditionals
// const age = 13;
// age >= 18 ? console.log("I'm above 18") : console.log("I'm below 18");
// const drink = age >= 18 ? "wine" : "water";
// console.log(`I'd like to drink ${drink}`);

//conditional task solution(first task)
//let tip,
//bill = 40;
// if (bill > 50 && bill < 300) {
//   tip = 0.15 * bill;
// } else {
//   tip = 0.2 * bill;
// }
//tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

//second task solution
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);

function checkWinner(a, b) {
  if (a >= 2 * b) {
    return `Dolphins wins the game (${avgDolphins} vs ${avgKoalas})`;
  } else if (b >= 2 * a) {
    return "Koalas wins the game";
  } else {
    return `No team won`;
  }
}
let winner1 = checkWinner(avgDolphins, avgKoalas);
// console.log(winner1);

function calcTip(bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }
  return tip;
}
calcTip(100);

//creating bills arrays
//let bills = [125, 555, 44];

//calculating each tips
//let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//mini array task
const person = {
  firstName: "Udeme",
  sex: "Male",
  age: 22,
  friends: ["Mijan", "Daniel"],
};
console.log(
  person["firstName"] +
    " has " +
    person.friends.length +
    " friends and his roommate was " +
    person.friends[1]
);

//object task solution
const person1 = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const person2 = {
  fullName: "Jon Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

let compare = function (a, b) {
  if (a > b) {
    return `${person1.fullName} BMI(${person1.calcBMI()}) is higher than ${
      person2.fullName
    } BMI(${person2.calcBMI()})!`;
  } else {
    return `${person2.fullName} BMI(${person2.calcBMI()}) is higher than ${
      person1.fullName
    } BMI(${person1.calcBMI()})!`;
  }
};
//console.log(compare(person1.calcBMI(), person2.calcBMI()));

//looping coding challenge
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
function calcTip(bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }
  return tip;
}
for (let i = 0; i < 10; i++) {
  tips.push(calcTip(bills[i]));
  total.push(calcTip(bills[i]) + bills[i]);
}
// const testScore = [12, 10, 13, 20, 16];
// const avgScore = [];
// for (let i = 0; i < 5; i++) {
//   avgScore.push(1 + testScore[i]);
// }
//console.log(tips);

let calcAvg = function (arr) {
  let sum = 0,
    average;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  console.log(average);
};
//console.log(total);
calcAvg(total);
