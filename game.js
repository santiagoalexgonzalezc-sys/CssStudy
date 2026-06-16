const catchMeButton = document.getElementById("catchMeButton");

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const buttonX = rect.left + rect.width / 2;
  const buttonY = rect.top + rect.height / 2;

  const dx = buttonX - e.clientX;
  const dy = buttonY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    let newLeft = catchMeButton.offsetLeft + dx * 2;
    let newTop = catchMeButton.offsetTop + dy * 2;

    newLeft = Math.max(
      0,
      Math.min(1000 - catchMeButton.offsetWidth, newLeft)
    );

    newTop = Math.max(
      0,
      Math.min(600 - catchMeButton.offsetHeight, newTop)
    );

    catchMeButton.style.left = newLeft + "px";
    catchMeButton.style.top = newTop + "px";
  }
});

catchMeButton.addEventListener("click", () => {
  score++;
  document.getElementById("score").textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highScoreText").textContent =
      "High Score: " + highScore;
  }
});


newLeft = Math.max(
  0,
  Math.min(1000 - catchMeButton.offsetWidth, newLeft)
);

newTop = Math.max(
  0,
  Math.min(600 - catchMeButton.offsetHeight, newTop)
);

let highScore = localStorage.getItem("highScore");

if (highScore === null) {
  highScore = 0;
} else {
  highScore = Number(highScore);
}

document.getElementById("highScoreText").textContent =
  "High Score: " + highScore;

catchMeButton.addEventListener("click", () => {
  score++;

  document.getElementById("score").textContent = "Score: " + score;

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    document.getElementById("highScoreText").textContent =
      "High Score: " + highScore;
  }
});

function resetIfStuck() {
  const rect = catchMeButton.getBoundingClientRect();

  const stuckLeft = rect.left < 20 || rect.right > window.innerWidth - 20;
  const stuckTop = rect.top < 20 || rect.bottom > window.innerHeight - 20;

  if (stuckLeft || stuckTop) {
    catchMeButton.style.left = "400px";
    catchMeButton.style.top = "250px";
  }
}

let canScore = true;

catchMeButton.addEventListener("click", () => {
  if (!canScore) return;

  canScore = false;
  score++;

  document.getElementById("score").textContent = "Score: " + score;

  setTimeout(() => {
    canScore = true;
  }, 200); 
});
