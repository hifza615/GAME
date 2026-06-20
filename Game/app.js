alert(
"W = Hulk Fly\n" +
"S = Hulk Bottom\n" +
"A = Hulk Left\n" +
"D = Hulk Right\n" +
"Z = Hulk Normal\n\n" +

"Arrow Up = Sir Fly\n" +
"Arrow Down = Sir Bottom\n" +
"Arrow Left = Sir Left\n" +
"Arrow Right = Sir Right\n" +
"H = Sir Normal\n\n" +

"K = Play Music\n" +
"P = Pause Music"
);





var hulk = document.getElementById("hulk");
var sir = document.getElementById("sir");

// Hulk position
var hulkLeft = 50;
var hulkBottom = 0;

// Player 2 position
var sirRight = 50;
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
        sirRight -= 10;
        sir.style.right = sirRight + "px";   
        sir.src = "sir-walk.gif";
    }

    if (event.key === "ArrowRight") {
        sirRight += 10;
        sir.style.right = sirRight + "px";   
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
