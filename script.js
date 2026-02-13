window.onload = function () {
    setTimeout(() => {
        const intro = document.getElementById("introScreen");
        if (intro) intro.style.display = "none";
    }, 2000);

    updateClock();
    setInterval(updateClock, 1000);
    simulateViewers();
};

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

function triggerGoal(matchElement) {

    const scoreElement = matchElement.querySelector(".score");
    const homeTeam = matchElement.querySelector(".home");

    let score = scoreElement.innerText.split(" - ");
    let homeScore = parseInt(score[0]) + 1;
    let awayScore = parseInt(score[1]);

    scoreElement.innerText = homeScore + " - " + awayScore;

    const goalTag = document.createElement("span");
    goalTag.classList.add("goal-tag");
    goalTag.innerText = "GOOOAAALLL!";

    homeTeam.appendChild(goalTag);

    document.getElementById("goalSound").play();

    setTimeout(() => {
        goalTag.remove();
    }, 3000);
}

function updateClock() {
    const now = new Date();
    document.getElementById("liveClock").innerText =
        "🕒 " + now.toLocaleTimeString();
}

function simulateViewers() {
    let viewers = 12458;

    setInterval(() => {
        viewers += Math.floor(Math.random() * 20 - 10);
        document.getElementById("liveViewers").innerText =
            "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
    }, 3000);
}
