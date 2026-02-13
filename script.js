document.addEventListener("DOMContentLoaded", () => {

  // INTRO
  const intro = document.getElementById("intro");
  setTimeout(() => {
    intro.style.display = "none";
  }, 2000);

  // HORLOGE
  setInterval(() => {
    const now = new Date();
    document.getElementById("clock").innerText =
      now.toLocaleTimeString();
  }, 1000);

  // SPECTATEURS
  let viewers = 12458;
  setInterval(() => {
    viewers += Math.floor(Math.random() * 20 - 10);
    document.getElementById("viewers").innerText =
      "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
  }, 3000);

  // ONGLET
  const buttons = document.querySelectorAll(".tab-btn");
  const tabs = document.querySelectorAll(".tab");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  // MINUTES QUI MONTENT
  setInterval(() => {
    const minuteElements = document.querySelectorAll(".minute");

    minuteElements.forEach(el => {
      if (el.innerText !== "HT") {
        let current = parseInt(el.innerText);
        if (!isNaN(current)) {
          el.innerText = (current + 1) + "'";
        }
      }
    });
  }, 60000);

  // GOAL AU CLICK
  const matches = document.querySelectorAll(".match");

  matches.forEach(match => {
    match.addEventListener("click", () => {
      const score = match.querySelector(".score");
      const home = match.querySelector(".home");
      const goalSound = document.getElementById("goalSound");
      const popup = document.getElementById("goal-popup");

      let parts = score.innerText.split("-");
      let homeScore = parseInt(parts[0]);
      let awayScore = parseInt(parts[1]);

      homeScore++;
      score.innerText = homeScore + " - " + awayScore;

      const goalText = document.createElement("span");
      goalText.classList.add("goal-animation");
      goalText.innerText = "GOOOOAAALLL!";
      home.appendChild(goalText);

      goalSound.play();

      popup.innerText = "⚽ GOOOOOAAALLL ⚽";
      setTimeout(() => popup.innerText = "", 2000);
      setTimeout(() => goalText.remove(), 3000);
    });
  });

});
