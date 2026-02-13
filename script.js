function showSection(sectionId, event) {

  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active-section');
  });

  document.getElementById(sectionId).classList.add('active-section');

  document.querySelectorAll('nav button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (event) {
    event.target.classList.add('active');
  }
}

window.addEventListener("load", () => {
  document.getElementById("live").classList.add("active-section");
});
