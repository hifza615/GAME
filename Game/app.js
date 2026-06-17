var hulk = document.getElementById("hulk");
var sir = document.getElementById("sir");

// Hulk position
var hulkLeft = 50;
var hulkBottom = 0;

// Player 2 position
var sirLeft = 50;
var sirBottom = 0;


document.addEventListener("keydown", function (event) {

    // ================= HULK=================

    if (event.key === "w") {
        hulkBottom += 10;
        hulk.style.bottom = hulkBottom + "px";
        hulk.src = "hulk-fly.gif";
    }

    if (event.key === "s") {
        hulkBottom -= 10;
        hulk.style.bottom = hulkBottom + "px";
        hulk.src = "hulk-bottom.gif";
    }

    if (event.key === "a") {
        hulkLeft -= 10;
        hulk.style.left = hulkLeft + "px";
        hulk.src = "hulk-walk.gif";
    }

    if (event.key === "d") {
        hulkLeft += 10;
        hulk.style.left = hulkLeft + "px";
        hulk.src = "hulk-walkback.gif";
    }

 if (event.key === "z")   {
    hulk.src = "hulk.gif";
 }

    // ================= SIR (ARROWS) =================

    if (event.key === "ArrowUp") {
        sirBottom += 10;
        sir.style.bottom = sirBottom + "px";
        sir.src = "sir-fly.gif";
    }

    if (event.key === "ArrowDown") {
        sirBottom -= 10;
        sir.style.bottom = sirBottom + "px";
        sir.src = "sir-fly.gif";
    }

    if (event.key === "ArrowLeft") {
        sirLeft -= 10;
        sir.style.left = sirLeft + "px";   
        sir.src = "sir-walk.gif";
    }

    if (event.key === "ArrowRight") {
        sirLeft += 10;
        sir.style.left = sirLeft + "px";   
        sir.src = "sir-walk.gif";
    }


    if  (event.key=== "h"){


        sir.src = "sir.gif";
    }
});


var music = document.getElementById("bgMusic");

document.addEventListener("keydown", function (event) {
    if (event.key === "k") {
        music.play();
    }

    
    if (event.key === "p") {
        music.pause();
    }

});

