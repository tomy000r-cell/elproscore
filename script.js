window.onload = function () {
    setTimeout(() => {
        document.getElementById("introScreen").style.display = "none";
    }, 2000);
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

function triggerGoal() {
    const goal = document.getElementById("goalOverlay");
    goal.classList.add("show");

    setTimeout(() => {
        goal.classList.remove("show");
    }, 2000);
}
