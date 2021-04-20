let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number⚠️";
  } else if (guess === secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Correct Guess 🥇";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".box").textContent = secretNumber;
    } else {
      document.querySelector(".message").textContent =
        "😄 You Lose Try Again 💣";
      document.querySelector(".score").textContent = "😄😄😄😄😄";
    }
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      guess > secretNumber
        ? (document.querySelector(".message").textContent = "Too high 👍")
        : (document.querySelector(".message").textContent = "Too Low 👎");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😄 You Lose Try Again 💣";
      document.querySelector(".score").textContent = "😄😄😄😄😄";
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
