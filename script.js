document.addEventListener("DOMContentLoaded", function() {

    // Intro auto hide
    const intro = document.getElementById("introScreen");
    setTimeout(() => {
        intro.style.display = "none";
    }, 2000);

});

// Navigation
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

// Simulation goal
setTimeout(() => {

    document.getElementById("score1").innerText = "2 - 0";
    document.getElementById("minute1").innerText = "57'";

    const overlay = document.getElementById("goalOverlay");
    overlay.classList.add("show");

    setTimeout(() => {
        overlay.classList.remove("show");
    }, 2500);

}, 6000);
