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

/* FAUX LIVE */

let minute = 55;
let score1Home = 1;
let score1Away = 0;

setInterval(() => {

  minute++;
  document.getElementById("minute1").innerText = minute + "'";

  if (Math.random() < 0.1) {
    score1Home++;
    document.getElementById("score1").innerText = score1Home + " - " + score1Away;
  }

}, 5000);

/* Spotlight effect */

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty('--x', e.clientX + 'px');
  document.body.style.setProperty('--y', e.clientY + 'px');
  document.body.style.backgroundPosition = ${e.clientX/50}px ${e.clientY/50}px;
});
