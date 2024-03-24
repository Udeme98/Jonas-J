"use strict";
// console.log("Welcome");
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = "Udeme";
calcAge(1991);
