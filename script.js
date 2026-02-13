document.addEventListener("DOMContentLoaded", function () {

    // Horloge live
    setInterval(() => {
        const now = new Date();
        const clock = document.getElementById("liveClock");
        if (clock) {
            clock.innerText = "🕒 " + now.toLocaleTimeString();
        }
    }, 1000);

    // Spectateurs simulés
    let viewers = 12458;
    setInterval(() => {
        viewers += Math.floor(Math.random() * 20 - 10);
        const viewersEl = document.getElementById("liveViewers");
        if (viewersEl) {
            viewersEl.innerText =
                "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
        }
    }, 3000);

    // Minutes qui montent
    setInterval(() => {
        const minuteElements = document.querySelectorAll(".minute[data-minute]");
        minuteElements.forEach(el => {
            let current = parseInt(el.getAttribute("data-minute"));
            current++;
            el.setAttribute("data-minute", current);
            el.innerText = current + "'";
        });
    }, 60000);
});

// Navigation
function showSection(sectionId, event) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active-section");
    });

    document.querySelectorAll("nav button").forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active-section");
    event.target.classList.add("active");
}

// But
function triggerGoal(matchElement) {

    const scoreEl = matchElement.querySelector(".score");
    const homeTeam = matchElement.querySelector(".home");
    const sound = document.getElementById("goalSound");

    if (!scoreEl || !homeTeam) return;

    let parts = scoreEl.innerText.split(" - ");
    let homeScore = parseInt(parts[0]) + 1;
    let awayScore = parseInt(parts[1]);

    scoreEl.innerText = homeScore + " - " + awayScore;

    const goal = document.createElement("span");
    goal.className = "goal-flash";
    goal.innerText = " GOOOOAAALLL!";
    homeTeam.appendChild(goal);

    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }

    setTimeout(() => {
        goal.remove();
    }, 3000);
}
