document.addEventListener("DOMContentLoaded", function() {

    // Intro sécurité
    setTimeout(function(){
        const intro = document.getElementById("intro");
        if(intro) intro.style.display = "none";
    },3000);

    // Horloge
    setInterval(function(){
        const now = new Date();
        const clock = document.getElementById("clock");
        if(clock) clock.innerText = now.toLocaleTimeString();
    },1000);

    // Spectateurs fake
    let viewers = 12458;
    setInterval(function(){
        viewers += Math.floor(Math.random()*20-10);
        const v = document.getElementById("viewers");
        if(v) v.innerText = "🔥 " + viewers.toLocaleString() + " spectateurs en direct";
    },3000);

    // Minutes qui montent
    setInterval(function(){
        document.querySelectorAll(".minute").forEach(function(el){
            if(el.innerText.includes("'")){
                let num = parseInt(el.innerText);
                if(!isNaN(num)){
                    num++;
                    el.innerText = num + "'";
                }
            }
        });
    },60000);

    // GOAL clic sur match
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

            const team = match.querySelector(".team");
            const goal = document.createElement("span");
            goal.className = "goal";
            goal.innerText = " GOOOOAAALLL!";
            team.appendChild(goal);

            const sound = document.getElementById("goalSound");
            if(sound){
                sound.currentTime = 0;
                sound.play().catch(()=>{});
            }

            setTimeout(()=>{goal.remove();},3000);
        });
    });

});

// Navigation
function showTab(id){
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}
