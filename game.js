//Defining the Secret Number
const secNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".sNumber").textContent = secNumber;
let score = 10;
let highscore = 0;
// const sn = document.querySelector(".sNumber").textContent;
// const mess = document.querySelector(".message").textContent;
// const guess2 = document.querySelector(".guess").value;
// const guess = Number(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //No input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    //When a player wins
  } else if (guess === secNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".sNumber").textContent = secNumber;
    document.querySelector(".container").style.backgroundColor =
      "rgb(56, 238, 95)";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is too high
  } else if (guess > secNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over! Play Again";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".container").style.backgroundColor =
        "rgb(225, 0, 0)";
    }
    //When guess is too low
  } else if (guess < secNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over! Play Again";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".container").style.backgroundColor =
        "rgb(225, 0, 0)";
    }

    // document.querySelector(".message").textContent = "Too Low";
    // score--;
    // document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  document.querySelector(".score").textContent = score;
  document.querySelector(".sNumber").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".container").style.backgroundColor =
    "rgb(225, 178, 226)";
});
