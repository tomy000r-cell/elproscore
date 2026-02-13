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

let minute = 55;
let score1Home = 1;
let score1Away = 0;

const scoreElement = document.getElementById("score1");
const minuteElement = document.getElementById("minute1");
const intensityBar = document.getElementById("intensityBar");

function goalAnimation() {

  const goalOverlay = document.createElement("div");
  goalOverlay.classList.add("goal-overlay");
  goalOverlay.innerHTML = "⚽ GOOOOAAAL ⚽";
  document.body.appendChild(goalOverlay);

  scoreElement.classList.add("goal-pulse");
  document.body.classList.add("shake");

  setTimeout(() => {
    goalOverlay.remove();
    scoreElement.classList.remove("goal-pulse");
    document.body.classList.remove("shake");
  }, 2000);
}

setInterval(() => {

  minute++;
  minuteElement.innerText = minute + "'";

  const randomIntensity = Math.floor(Math.random() * 100);
  intensityBar.style.width = randomIntensity + "%";

  if (Math.random() < 0.2) {

    if (Math.random() < 0.5) {
      score1Home++;
    } else {
      score1Away++;
    }

    scoreElement.innerText = score1Home + " - " + score1Away;
    goalAnimation();
  }

}, 4000);
