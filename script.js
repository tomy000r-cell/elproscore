document.addEventListener("DOMContentLoaded", function() {

    // INTRO
    setTimeout(function(){
        const intro = document.getElementById("intro");
        if(intro) intro.style.display = "none";
    },3000);

    // HORLOGE
    setInterval(function(){
        const now = new Date();
        const clock = document.getElementById("clock");
        if(clock) clock.innerText = now.toLocaleTimeString();
    },1000);

    // SPECTATEURS
    let viewers = 12458;
    setInterval(function(){
        viewers += Math.floor(Math.random()*20-10);
        const v = document.getElementById("viewers");
        if(v) v.innerText = "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
    },3000);

    // MINUTES QUI MONTENT (VERSION SANS APOSTROPHE)
    setInterval(function(){
        document.querySelectorAll(".minute").forEach(function(el){

            let text = el.innerText;

            // Ignore HT
            if(text.trim().toUpperCase() === "HT") return;

            // Récupère le nombre seulement
            let number = parseInt(text.replace(/\D/g, ''));

            if(!isNaN(number)){
                number++;
                el.innerText = number + "’";
            }

        });
    },60000);


    // GOAL AU CLIC
    document.querySelectorAll(".match").forEach(function(match){

        match.addEventListener("click", function(){

            const score = match.querySelector(".score");
            if(!score) return;

            let parts = score.innerText.split("-");
            let home = parseInt(parts[0]);
            let away = parseInt(parts[1]);

            if(isNaN(home) || isNaN(away)) return;

            home++;
            score.innerText = home + " - " + away;

            // Ajout GOOOAAALLL
            const firstTeam = match.querySelector(".team");

            const goal = document.createElement("span");
            goal.className = "goal";
            goal.innerText = " GOOOOOOAAALLL!";
            firstTeam.appendChild(goal);

            setTimeout(function(){
                goal.remove();
            },3000);

        });

    });

});

function showTab(id){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
