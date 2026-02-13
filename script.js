// ===============================
// ELPROSCORE - SCRIPT COMPLET
// ===============================


// -------------------------------
// NAVIGATION ULTRA FLUIDE
// -------------------------------

function showSection(sectionId, event) {

    const sections = document.querySelectorAll(".section");
    const buttons = document.querySelectorAll("nav button");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        setTimeout(() => {
            section.classList.remove("active-section");
        }, 300);
    });

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    setTimeout(() => {
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add("active-section");

        setTimeout(() => {
            activeSection.style.opacity = "1";
            activeSection.style.transform = "translateY(0)";
        }, 50);
    }, 300);

    if (event) {
        event.target.classList.add("active");
    }
}


// -------------------------------
// SIMULATION MINUTE LIVE
// -------------------------------

function startLiveTimer() {

    const liveStatuses = document.querySelectorAll(".status.blink");

    liveStatuses.forEach(status => {

        let minuteText = status.innerText.replace("'", "");
        let minute = parseInt(minuteText);

        if (!isNaN(minute)) {

            setInterval(() => {
                minute++;
                status.innerText = minute + "'";
            }, 60000);

        }

    });

}

startLiveTimer();


// -------------------------------
// ANIMATION SCORE AU CLIC
// -------------------------------

function animateScore() {

    const scores = document.querySelectorAll(".score");

    scores.forEach(score => {

        score.style.transition = "all 0.3s ease";
        score.style.cursor = "pointer";

        score.addEventListener("click", () => {

            score.style.transform = "scale(1.3)";
            score.style.color = "#FFD700";

            setTimeout(() => {
                score.style.transform = "scale(1)";
            }, 300);

        });

    });

}

animateScore();


// -------------------------------
// INITIALISATION AU CHARGEMENT
// -------------------------------

document.addEventListener("DOMContentLoaded", () => {

    const firstSection = document.querySelector(".active-section");

    if (firstSection) {
        firstSection.style.opacity = "1";
        firstSection.style.transform = "translateY(0)";
    }


});
window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }, 4000);
});
