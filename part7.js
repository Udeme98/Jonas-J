const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}c in ${i + 1} days ...`);
  }
};
printForecast([12, 5, -5, 0, 4]);
