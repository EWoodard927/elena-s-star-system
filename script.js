let starmapGrid = document.querySelector(".starmapGrid");
let destinationHeader = document.querySelector(".destinationHeader");
let mustafarScreen = document.querySelector(".mustafarScreen");
let deathStarScreen = document.querySelector(".deathStarScreen");
let tatooineScreen =  document.querySelector(".tatooineScreen");
let nabooScreen = document.querySelector(".nabooScreen");
let planetMustafar = document.querySelector(".planetMustafar");
let planetDeathStar = document.querySelector(".planetDeathStar");
let planetTatooine = document.querySelector(".planetTatooine");
let planetNaboo = document.querySelector (".planetNaboo");
let backButtonMustafar = document.querySelector(".backButtonMustafar");
let backButtonDeathStar = document.querySelector(".backButtonDeathStar");
let backButtonTatooine = document.querySelector(".backButtonTatooine");
let backButtonNaboo = document.querySelector(".backButtonNaboo");
let themeAudio = document.getElementById("themeAudio");

setTimeout(function(){
    document.getElementById("themeAudio").play();
}, 7100);

planetMustafar.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    destinationHeader.style.display = "none";
    mustafarScreen.style.display = "block";
});

backButtonMustafar.addEventListener('click', function(){
    mustafarScreen.style.display = "none";
    starmapGrid.style.display = "flex";
    destinationHeader.style.display = "block";
});

planetDeathStar.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    destinationHeader.style.display = "none";
    deathStarScreen.style.display = "block";
});

backButtonDeathStar.addEventListener('click', function(){
    deathStarScreen.style.display = "none";
    starmapGrid.style.display = "flex";
    destinationHeader.style.display = "block";
});

planetNaboo.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    destinationHeader.style.display = "none";
    nabooScreen.style.display = "block";
});

backButtonNaboo.addEventListener('click', function(){
    nabooScreen.style.display = "none";
    starmapGrid.style.display = "flex";
    destinationHeader.style.display = "block";
});

planetTatooine.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    destinationHeader.style.display = "none";
    tatooineScreen.style.display = "block";
});

backButtonTatooine.addEventListener('click', function(){
    tatooineScreen.style.display = "none";
    starmapGrid.style.display = "flex";
    destinationHeader.style.display = "block";
});