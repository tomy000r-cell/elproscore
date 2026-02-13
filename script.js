function showSection(sectionId, event) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    document.getElementById(sectionId).classList.add("active-section");

    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

window.addEventListener("load", function () {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }, 4000);
});
