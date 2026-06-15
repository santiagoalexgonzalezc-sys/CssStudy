
const catchMeButton = document.getElementById("catchMeButton");

let currentX = 200;
let currentY = 200;

let targetX = currentX;
let targetY = currentY;

document.addEventListener("mousemove", (e) => {
  const rect = catchMeButton.getBoundingClientRect();

  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const dx = btnX - e.clientX;
  const dy = btnY - e.clientY;

  const distance = Math.sqrt(dx * dx + dy * dy);

  // only run when cursor is close
  if (distance < 150) {
    const angle = Math.atan2(dy, dx);

    const pushDistance = 120;

    targetX = catchMeButton.offsetLeft + Math.cos(angle) * pushDistance;
    targetY = catchMeButton.offsetTop + Math.sin(angle) * pushDistance;
  }
});

function animate() {
  currentX += (targetX - currentX) * 0.12;
  currentY += (targetY - currentY) * 0.12;

  catchMeButton.style.left = currentX + "px";
  catchMeButton.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();
