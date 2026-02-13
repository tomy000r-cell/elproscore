// Intro screen
window.onload = () => {
  setTimeout(() => {
    document.getElementById("introScreen").style.display = "none";
  }, 2500);
};

function showSection(sectionId, event) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active-section');
  });

  document.getElementById(sectionId).classList.add('active-section');

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}

// Goal simulation
setTimeout(() => {
  document.getElementById("score1").innerText = "2 - 0";
  document.getElementById("minute1").innerText = "57'";

  const overlay = document.getElementById("goalOverlay");
  overlay.classList.add("show");

  setTimeout(() => {
    overlay.classList.remove("show");
  }, 2500);

}, 6000);

// Intensity bar
setInterval(() => {
  const bar = document.getElementById("intensityBar");
  if (bar) {
    bar.style.width = Math.floor(Math.random() * 100) + "%";
  }
}, 2000);
