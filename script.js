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
let currentAudio = "StarWarsTheme.mp3";
let crawl = document.querySelector(".crawl");
let intro = document.querySelector(".intro");
let audioOff = document.querySelector(".audioOff");
let lightMode = document.querySelector(".lightMode");
let audioOn = document.querySelector(".audioOn");
let darkMode = document.querySelector(".darkMode");
let audioAlert = document.querySelector(".audioAlert");
let sendEmail = document.querySelector(".sendEmail");
let nameInput = document.querySelector(".nameInput");
let emailInput = document.querySelector(".emailInput");
let messageInput = document.querySelector(".messageInput");

//For light mode purposes:
let navbar = document.querySelector(".navbar");
let starmap = document.querySelector(".starmap");
let planetTag = document.querySelector(".planetTag");
let planetTags = document.querySelectorAll(".planetTag");
let citeButton = document.querySelector(".citeButton");
let projectBox = document.querySelector(".projectBox");
let projectBoxes = document.querySelectorAll(".projectBox");
let projectScreen = document.querySelector(".projectScreen");
let projectHeader = document.querySelector(".projectHeader");
let skillScreen = document.querySelector(".skillScreen");
let skillHeader = document.querySelector(".skillHeader");
let skillBox = document.querySelector(".skillBox");
let skillBoxes = document.querySelectorAll(".skillBox")
let myMusic = document.querySelector(".myMusic");
let musicHeader = document.querySelector(".musicHeader");
let soundtrackMenu = document.querySelector(".soundtrackMenu");
let violinParagraph = document.querySelector(".violinParagraph");
let aboutHeader = document.querySelector(".about");

//For purposes of the source citations:
let sourceBlock = document.querySelector(".sourceBlock");
let sourceMenu = document.querySelector(".sourceMenu");
let imageSourceButton = document.querySelector(".imageSourceButton");
let audioSourceButton = document.querySelector(".audioSourceButton");
let inspoSourceButton = document.querySelector(".inspoSourceButton");
let sourceList = document.querySelector(".sourceList");
let imageList = document.querySelector(".imageList");
let audioList = document.querySelector(".audioList");
let inspoList = document.querySelector(".inspoList");
let sourceMessage = document.querySelector(".sourceMessage");

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
    sourceBlock.style.display = "none";
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
    sourceBlock.style.display = "none";
});

skillNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "block";
    musicBlock.style.display = "none";
    contactBlock.style.display = "none";
    sourceBlock.style.display = "none";
});

musicNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "none";
    musicBlock.style.display = "block";
    contactBlock.style.display = "none";
    sourceBlock.style.display = "none";
});

contactNavlink.addEventListener('click', function(){
    movieScreen.style.display = "none";
    homeBlock.style.display = "none";
    projectBlock.style.display = "none";
    skillBlock.style.display = "none";
    musicBlock.style.display = "none";
    contactBlock.style.display = "block";
    sourceBlock.style.display = "none";
});

audioOff.addEventListener('click', function(){
    themeAudio.src = "";
    audioOff.style.display = "none";
    audioOn.style.display = "block";
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
    soundtrackButton1.disabled = true;
    soundtrackButton2.disabled = true;
    soundtrackButton3.disabled = true;
    soundtrackButton4.disabled = true;
    audioAlert.style.display = "block";
});

audioOn.addEventListener('click', function(){
    themeAudio.src = currentAudio;
    audioOff.style.display = "block";
    audioOn.style.display = "none";
    soundtrackButton1.disabled = false;
    soundtrackButton2.disabled = false;
    soundtrackButton3.disabled = false;
    soundtrackButton4.disabled = false;
    audioAlert.style.display = "none";
    
    if (currentAudio === "StarWarsTheme.mp3"){
    soundtrackHeader1.innerHTML = "Currently playing...";
    soundtrackHeader1.style.color = "red";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
    }

    else if (currentAudio === "03 Battle Of The Heroes.mp3"){
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Currently playing...";
    soundtrackHeader2.style.color = "red";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
    }

    else if (currentAudio === "14 Princess Leia's Theme.mp3"){
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Currently playing...";
    soundtrackHeader3.style.color = "red";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
    }

    else if (currentAudio === "06 Rey's Theme.mp3"){
    soundtrackHeader1.innerHTML = "Main Theme";
    soundtrackHeader1.style.color = "black";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Currently playing...";
    soundtrackHeader4.style.color = "red";
    }

    else {
    soundtrackHeader1.innerHTML = "Currently playing...";
    soundtrackHeader1.style.color = "red";
    soundtrackHeader2.innerHTML = "Battle of the Heroes";
    soundtrackHeader2.style.color = "black";
    soundtrackHeader3.innerHTML = "Princess Leia's Theme";
    soundtrackHeader3.style.color = "black";
    soundtrackHeader4.innerHTML = "Rey's Theme";
    soundtrackHeader4.style.color = "black";
    }

    themeAudio.load();
    themeAudio.play();
});

lightMode.addEventListener('click', function(){
    navbar.style.borderColor = "black";
    navbar.style.color = "black";
    navbar.style.backgroundColor = "rgba(255, 255, 255, .7)";
    homeNavlink.style.color = "black";
    projectNavlink.style.color = "black";
    skillNavlink.style.color = "black";
    musicNavlink.style.color = "black";
    contactNavlink.style.color = "black";

    aboutHeader.style.backgroundColor = "rgba(255, 255, 255, .7)"
    aboutHeader.style.color = "darkblue";
    aboutHeader.style.borderRadius = "10px";
    aboutHeader.style.borderColor = "darkblue";
    aboutHeader.style.width = "fit-content";
    aboutHeader.style.margin = "0 auto";
    aboutHeader.style.padding = "5px 30px";
    starmap.style.bottom = "65px";

    starmap.style.color = "black";
    starmap.style.setProperty('--starmap-before-bg', 'white');

    planetTags.forEach(planetTag => {
        planetTag.style.color = "black";
    })

    citeButton.style.borderColor = "black";
    citeButton.style.backgroundColor = "white";
    citeButton.style.color = "black";
    audioOff.style.borderColor = "black";
    audioOff.style.color = "black";
    audioOff.style.backgroundColor = "white";
    audioOn.style.borderColor = "black";
    audioOn.style.backgroundColor = "white";
    audioOn.style.color = "black";
    audioAlert.style.color = "darkred";

    projectBoxes.forEach(projectBox => {
        projectBox.style.backgroundColor = "white";
        projectBox.style.color = "black";
    });

    skillBoxes.forEach(skillBox => {
        skillBox.style.backgroundColor = "white";
        skillBox.style.color = "black";
    });

    projectHeader.style.backgroundColor = "rgba(255, 255, 255, .7)"
    projectHeader.style.color = "darkblue";
    projectHeader.style.borderRadius = "10px";
    projectHeader.style.borderColor = "darkblue";
    projectHeader.style.width = "fit-content";
    projectHeader.style.margin = "0 auto";

    skillHeader.style.backgroundColor = "rgba(255, 255, 255, .7)"
    skillHeader.style.color = "darkblue";
    skillHeader.style.borderRadius = "10px";
    skillHeader.style.borderColor = "darkblue";
    skillHeader.style.width = "fit-content";
    skillHeader.style.margin = "0 auto";

    musicHeader.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    myMusic.style.backgroundColor = "white";
    myMusic.style.color = "black";
    soundtrackMenu.style.backgroundColor = "white";
    soundtrackMenu.style.color = "black";
    violinParagraph.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    violinParagraph.style.color = "black";
    musicBlock.style.backgroundColor = "white";

    sendEmail.style.borderColor = "black";
    sendEmail.style.color = "black";
    sendEmail.style.backgroundColor = "white";

    lightMode.style.display = "none";
    darkMode.style.display = "block";
});

darkMode.addEventListener('click', function(){
    navbar.style.borderColor = "yellow";
    navbar.style.color = "yellow";
    navbar.style.backgroundColor = "rgba(0, 0, 0, .7)";
    homeNavlink.style.color = "yellow";
    projectNavlink.style.color = "yellow";
    skillNavlink.style.color = "yellow";
    musicNavlink.style.color = "yellow";
    contactNavlink.style.color = "yellow";
    starmap.style.color = "#83EEFF";
    starmap.style.setProperty('--starmap-before-bg', 'black');

    aboutHeader.style.backgroundColor = "transparent"
    aboutHeader.style.color = "#83EEFF";
    aboutHeader.style.borderRadius = "10px";
    aboutHeader.style.borderColor = "none";
    aboutHeader.style.width = "fit-content";
    aboutHeader.style.margin = "0 auto";
    aboutHeader.style.padding = "none";

    planetTags.forEach(planetTag => {
        planetTag.style.color = "#83EEFF";
    })

    citeButton.style.borderColor = "yellow";
    citeButton.style.backgroundColor = "black";
    citeButton.style.color = "yellow";
    audioOff.style.borderColor = "yellow";
    audioOff.style.color = "yellow";
    audioOff.style.backgroundColor = "black";
    audioOn.style.borderColor = "yellow";
    audioOn.style.backgroundColor = "black";
    audioOn.style.color = "yellow";
    audioAlert.style.color = "red";

    projectBoxes.forEach(projectBox => {
        projectBox.style.backgroundColor = "black";
        projectBox.style.color = "#83EEFF";
    });

    skillBoxes.forEach(skillBox => {
        skillBox.style.backgroundColor = "black";
        skillBox.style.color = "yellow";
    });

    projectHeader.style.backgroundColor = "transparent";
    projectHeader.style.color = "yellow";
    projectHeader.style.borderRadius = "10px";
    projectHeader.style.borderColor = "none";
    projectHeader.style.width = "fit-content";
    projectHeader.style.margin = "0 auto";

    skillHeader.style.backgroundColor = "transparent";
    skillHeader.style.color = "yellow";
    skillHeader.style.borderRadius = "10px";
    skillHeader.style.borderColor = "none";
    skillHeader.style.width = "fit-content";
    skillHeader.style.margin = "0 auto";

    musicHeader.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    myMusic.style.backgroundColor = "black";
    myMusic.style.color = "#83EEFF";
    soundtrackMenu.style.backgroundColor = "transparent";
    soundtrackMenu.style.color = "#83EEFF";
    violinParagraph.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    violinParagraph.style.color = "#83EEFF";
    musicBlock.style.backgroundColor = "transparent";

    sendEmail.style.borderColor = "yellow";
    sendEmail.style.color = "yellow";
    sendEmail.style.backgroundColor = "black";

    lightMode.style.display = "block";
    darkMode.style.display = "none";
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
    currentAudio = "StarWarsTheme.mp3";
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
    currentAudio = "03 Battle Of The Heroes.mp3";
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
    currentAudio = "14 Princess Leia's Theme.mp3";
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
    currentAudio = "06 Rey's Theme.mp3";
});

sendEmail.addEventListener('click', function(){
    let messageInputValue = messageInput.value;
    messageInputValue = messageInputValue.replace(" ", "%20");
    window.location.href="mailto:ElenaWoodard27@gmail.com? &body="+ messageInputValue;
    messageInput.value = "";
    nameInput.value = "";
    emailInput.value = "";
});

citeButton.addEventListener('click', function(){
    homeBlock.style.display = "none";
    movieScreen.style.display = "none";
    sourceBlock.style.display = "flex";
});

imageSourceButton.addEventListener('click', function(){
    imageList.style.display = "block";
    audioList.style.display = "none";
    inspoList.style.display = "none";
    sourceMessage.style.display = "none";
});

audioSourceButton.addEventListener('click', function(){
    imageList.style.display = "none";
    audioList.style.display = "block";
    inspoList.style.display = "none";
    sourceMessage.style.display = "none";
});

inspoSourceButton.addEventListener('click', function(){
    imageList.style.display = "none";
    audioList.style.display = "none";
    inspoList.style.display = "block";
    sourceMessage.style.display = "none";
});