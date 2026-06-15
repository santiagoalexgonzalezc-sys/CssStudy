const catchMeButton = document.getElementById("catchMeButton");

function move() {
  const x = Math.random() * 500;
  const y = Math.random() * 500;

  catchMeButton.style.left = x + "px";
  catchMeButton.style.top = y + "px";
}
