let starmapGrid = document.querySelector(".starmapGrid");
let destinationHeader = document.querySelector(".destinationHeader");
let mustafarScreen = document.querySelector(".mustafarScreen");
let deathStarScreen = document.querySelector(".deathStarScreen");
let planetMustafar = document.querySelector(".planetMustafar");
let planetDeathStar = document.querySelector(".planetDeathStar");
let backButtonMustafar = document.querySelector(".backButtonMustafar");
let backButtonDeathStar = document.querySelector(".backButtonDeathStar");

planetMustafar.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    destinationHeader.style.display = "none";
    mustafarScreen.style.display = "block";
});

backButtonMustafar.addEventListener('click', function(){
    mustafarScreen.style.display = "none";
    starmapGrid.style.display = "flex";
});

planetDeathStar.addEventListener('click', function(){
    starmapGrid.style.display = "none";
    deathStarScreen.style.display = "block";
});

backButtonDeathStar.addEventListener('click', function(){
    deathStarScreen.style.display = "none";
    starmapGrid.style.display = "flex";
});