function showSection(sectionId, event) {

  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active-section');
  });

  document.getElementById(sectionId).classList.add('active-section');

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event) {
    event.target.classList.add('active');
  }
}

/* ===== FAUX LIVE ULTRA RÉALISTE ===== */

let minute = 55;
let score1Home = 1;
let score1Away = 0;

const scoreElement = document.getElementById("score1");
const minuteElement = document.getElementById("minute1");

/* Animation BUT */
function goalAnimation() {

  const goalOverlay = document.createElement("div");
  goalOverlay.classList.add("goal-overlay");
  goalOverlay.innerHTML = "⚽ GOOOOAAAL ⚽";

  document.body.appendChild(goalOverlay);

  scoreElement.classList.add("goal-pulse");

  setTimeout(() => {
    goalOverlay.remove();
    scoreElement.classList.remove("goal-pulse");
  }, 2000);
}

/* Simulation live */
setInterval(() => {

  minute++;
  minuteElement.innerText = minute + "'";

  if (Math.random() < 0.15) {

    if (Math.random() < 0.5) {
      score1Home++;
    } else {
      score1Away++;
    }

    scoreElement.innerText = score1Home + " - " + score1Away;
    goalAnimation();
  }

}, 5000);

/* Spotlight souris */
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
});
