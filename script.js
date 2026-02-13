document.addEventListener("DOMContentLoaded", function () {

    // INTRO
    const intro = document.getElementById("introScreen");
    if (intro) {
        setTimeout(() => {
            intro.style.display = "none";
        }, 2000);
    }

    // HORLOGE
    setInterval(() => {
        const now = new Date();
        const clock = document.getElementById("liveClock");
        if (clock) {
            clock.innerText = "🕒 " + now.toLocaleTimeString();
        }
    }, 1000);

    // MINUTES QUI DÉFILENT
    let minute = 57;
    setInterval(() => {
        const minuteEl = document.getElementById("minute1");
        if (minuteEl) {
            minute++;
            minuteEl.innerText = minute + "'";
        }
    }, 60000); // 1 minute réelle = 1 minute match

    // SPECTATEURS SIMULÉS
    let viewers = 12458;
    setInterval(() => {
        viewers += Math.floor(Math.random() * 20 - 10);
        const viewersEl = document.getElementById("liveViewers");
        if (viewersEl) {
            viewersEl.innerText =
                "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
        }
    }, 3000);

});

// NAVIGATION
function showSection(sectionId, event) {

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active-section");
    });

    document.querySelectorAll("nav button").forEach(button => {
        button.classList.remove("active");
    });

    const section = document.getElementById(sectionId);
    if (section) section.classList.add("active-section");

    if (event) event.target.classList.add("active");
}

// BUT INTÉGRÉ
function triggerGoal(matchElement) {

    const scoreElement = matchElement.querySelector(".score");
    const homeTeam = matchElement.querySelector(".home");
    const sound = document.getElementById("goalSound");

    if (!scoreElement || !homeTeam) return;

    let parts = scoreElement.innerText.split(" - ");
    let homeScore = parseInt(parts[0]) + 1;
    let awayScore = parseInt(parts[1]);

    scoreElement.innerText = homeScore + " - " + awayScore;

    const goalTag = document.createElement("span");
    goalTag.innerText = " 🔥 GOOOOAAALLL!";
    goalTag.style.color = "gold";
    goalTag.style.fontWeight = "bold";
    goalTag.style.marginLeft = "10px";

    homeTeam.appendChild(goalTag);

    if (sound) sound.play();

    setTimeout(() => {
        goalTag.remove();
    }, 3000);
}
