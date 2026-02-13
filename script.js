document.addEventListener("DOMContentLoaded", function() {

  // Sécurité : on force la disparition de l’intro
  const intro = document.getElementById("introScreen");
  if (intro) {
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.transition = "opacity 0.6s ease";
      setTimeout(() => {
        intro.style.display = "none";
      }, 600);
    }, 2000);
  }

  // Navigation
  window.showSection = function(sectionId, event) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active-section');
    });

    document.getElementById(sectionId).classList.add('active-section');

    document.querySelectorAll('nav button').forEach(btn => {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');
  };

  // Goal simulation
  setTimeout(() => {
    const score = document.getElementById("score1");
    const minute = document.getElementById("minute1");
    const overlay = document.getElementById("goalOverlay");

    if (score && minute && overlay) {
      score.innerText = "2 - 0";
      minute.innerText = "57'";
      overlay.classList.add("show");

      setTimeout(() => {
        overlay.classList.remove("show");
      }, 2500);
    }

  }, 6000);

  // Intensity bar
  setInterval(() => {
    const bar = document.getElementById("intensityBar");
    if (bar) {
      bar.style.width = Math.floor(Math.random() * 100) + "%";
    }
  }, 2000);

});
