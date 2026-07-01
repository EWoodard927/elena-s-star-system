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
let homeNavlink = document.querySelector(".homeNavlink");
let projectNavlink = document.querySelector(".projectNavlink");
let skillNavlink = document.querySelector(".skillNavlink");
let musicNavlink = document.querySelector(".musicNavlink");
let contactNavlink = document.querySelector(".contactNavlink");
let homeBlock = document.querySelector(".homeBlock");
let projectBlock = document.querySelector(".projectBlock");
let skillBlock = document.querySelector(".skillBlock");
let musicBlock = document.querySelector(".musicBlock");
let contactBlock = document.querySelector(".contactBlock");
let movieScreen = document.querySelector(".movieScreen");
let soundtrackButton1 = document.querySelector(".soundtrackButton1");
let soundtrackButton2 = document.querySelector(".soundtrackButton2");
let soundtrackButton3 = document.querySelector(".soundtrackButton3");
let soundtrackButton4 = document.querySelector(".soundtrackButton4");
let soundtrackHeader1 =document.querySelector(".soundtrackHeader1");
let soundtrackHeader2 =document.querySelector(".soundtrackHeader2");
let soundtrackHeader3 =document.querySelector(".soundtrackHeader3");
let soundtrackHeader4 =document.querySelector(".soundtrackHeader4");
let crawl = document.querySelector(".crawl");
let intro = document.querySelector(".intro");
let audioOff = document.querySelector(".audioOff");
let lightMode = document.querySelector(".lightMode");
let audioOn = document.querySelector(".audioOn");
let darkMode = document.querySelector(".darkMode");

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

homeNavlink.addEventListener('click', function(){
    movieScreen.style.display = "block";
    homeBlock.style.display = "block";
    projectBlock.style.display = "none";
    skillBlock.style.display = "none";
    musicBlock.style.display = "none";
    contactBlock.style.display = "none";
    crawl.style.opacity = 0;
    intro.style.opacity = 1;
});

projectNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "block";
    skillBlock.style.display = "none";
    musicBlock.style.display = "none";
    contactBlock.style.display = "none";
});

skillNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "block";
    musicBlock.style.display = "none";
    contactBlock.style.display = "none";
});

musicNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "none";
    musicBlock.style.display = "block";
    contactBlock.style.display = "none";
});

contactNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "none";
    musicBlock.style.display = "none";
    contactBlock.style.display = "block";
});

audioOff.addEventListener('click', function(){
    themeAudio.src = "";
    
});

soundtrackButton1.addEventListener('click', function(){
    themeAudio.src = "StarWarsTheme.mp3";
    themeAudio.load();
    themeAudio.play();
    soundtrackHeader1.innerHTML = "Currently playing...";
    soundtrackHeader1.style.color = "red";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
});

soundtrackButton2.addEventListener('click', function(){
    themeAudio.src = "03 Battle Of The Heroes.mp3";
    themeAudio.load();
    themeAudio.play();
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Currently playing...";
    soundtrackHeader2.style.color = "red";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
});

soundtrackButton3.addEventListener('click', function(){
    themeAudio.src = "14 Princess Leia's Theme.mp3";
    themeAudio.load();
    themeAudio.play();
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Currently playing...";
    soundtrackHeader3.style.color = "red";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
});

soundtrackButton4.addEventListener('click', function(){
    themeAudio.src = "06 Rey's Theme.mp3";
    themeAudio.load();
    themeAudio.play();
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Currently playing...";
    soundtrackHeader4.style.color = "red";
});