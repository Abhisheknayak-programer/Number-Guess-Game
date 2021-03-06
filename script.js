let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Numberβ οΈ";
  } else if (guess === secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Correct Guess π₯";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".box").textContent = secretNumber;
    } else {
      document.querySelector(".message").textContent =
        "π You Lose Try Again π£";
      document.querySelector(".score").textContent = "πππππ";
    }
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      guess > secretNumber
        ? (document.querySelector(".message").textContent = "Too high π")
        : (document.querySelector(".message").textContent = "Too Low π");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "π You Lose Try Again π£";
      document.querySelector(".score").textContent = "πππππ";
    }
  }
});

document.querySelector(".restart").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "black";
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".box").textContent = "?";
});
