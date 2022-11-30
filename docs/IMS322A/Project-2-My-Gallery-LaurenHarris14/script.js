let homePage = document.getElementById("home-page");
let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let homeSection = document.getElementById("home-section");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");

homePage.addEventListener("click", showHomeSection);
tab1.addEventListener("click", showSection1);
tab2.addEventListener("click", showSection2);
tab3.addEventListener("click", showSection3);

function showHomeSection() {
  homePage.classList.add("active-button");
  tab1.classList.remove("active-button");
  tab2.classList.remove("active-button");
  tab3.classList.remove("active-button");
  homeSection.classList.add("active-section");
  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
}

function showSection1() {
  homePage.classList.remove("active-button");
  tab1.classList.add("active-button");
  tab2.classList.remove("active-button");
  tab3.classList.remove("active-button");
  homeSection.classList.remove("active-section");
  section1.classList.add("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
}

function showSection2() {
  homePage.classList.remove("active-button");
  tab1.classList.remove("active-button");
  tab2.classList.add("active-button");
  tab3.classList.remove("active-button");
  homeSection.classList.remove("active-section");
  section1.classList.remove("active-section");
  section2.classList.add("active-section");
  section3.classList.remove("active-section");
}

function showSection3() {
  homePage.classList.remove("active-button");
  tab1.classList.remove("active-button");
  tab2.classList.remove("active-button");
  tab3.classList.add("active-button");
  homeSection.classList.remove("active-section");
  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.add("active-section");
}


// music player
let musicFile = document.getElementById("djo-song");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button")
let aheadButton = document.getElementById("ahead-button")
let backButton = document.getElementById("back-button")
let musicSlider = document.getElementById("music-slider")
let muteButton = document.getElementById("mute-button");
let volumeSlider = document.getElementById("volume-slider");


playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
musicSlider.addEventListener("change", changeTime);
muteButton.addEventListener("click",audioMute,false);
volumeSlider.addEventListener("input",setVolume,false);

function readTime() {
  musicSlider.value = musicFile.currentTime;
}

function changeTime() {
  musicFile.currentTime= musicSlider.value;
}

setInterval(readTime, 1000);

function playAudio() {
  musicFile.play();
}

function pauseAudio() {
  musicFile.pause();
}

function audioMute(){
	if(musicFile.muted){
		musicFile.muted = false;
		muteButton.innerHTML = "Mute";
	} else {
		musicFile.muted = true;
		muteButton.innerHTML = "Unmute";
	}
}
function setVolume(){
	musicFile.volume = volumeSlider.value / 100;
}

console.log(musicFile.currentTime);


// questionnaire

let myText = document.getElementById("my-text");
let myGrade = document.getElementById("grade-menu");
let sizeMenu = document.getElementById("size-menu");
let toppingMenu = document.getElementById("topping-menu");
let firstOutput = document.getElementById("first-output");
let secondOutput = document.getElementById("second-output");
let thirdOutput = document.getElementById("third-output");
let fourthOutput = document.getElementById("fourth-output");
let mySlider = document.getElementById("slider");
let fifthOutput = document.getElementById("fifth-output");
let mutebtn = document.getElementById("mutebtn");
let volumeslider = document.getElementById("volumeslider");
let submitButton = document.getElementById("submit-button");


// Event listener(s) to gather information from your select and entry controls
submitButton.addEventListener("click", submitAll);

function submitAll() {
  firstOutput.innerText = myText.value;
  secondOutput.innerText = myGrade.value;
  thirdOutput.innerText = toppingMenu.value;
  fourthOutput.innerText = sizeMenu.value
  fifthOutput.innerText = mySlider.value
}


// data vis
//let distanceFromHome = [27, 216, 110, 11, 280, 20, 95, 150, 1162, 45, 237, 722, 133, 244, 947, 411, 285, 7287, 8817];

let france = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let spain = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
let japan = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0];
let ghana = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0];
let switzerland = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
let brazil = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];

let total = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;
let total8 = 0;

let f = 0;
let s = 0;
let j = 0;
let g = 0;
let sW= 0;
let b= 0;
let europe = 0;
let africa = 0;
let asia = 0;
let southAmerica = 0;
let northAmerica = 0;
let australia = 0;
let antarctica = 0;

for (f of france) {
  total += f;
}
console.log(total)

let franceBar = document.getElementById("france-total")
franceBar.style.height = total * 10 + "px";

for (s of spain) {
  total2 += s;
}
console.log(total2)

let spainBar = document.getElementById("spain-total")
spainBar.style.height = total2 * 10 + "px";

for (j of japan) {
  total3 += j;
}
console.log(total3)

let japanBar = document.getElementById("japan-total")
japanBar.style.height = total3 * 10 + "px";

for (g of ghana) {
  total4 += g;
}
console.log(total4)

let ghanaBar = document.getElementById("ghana-total")
ghanaBar.style.height = total4 * 10 + "px";

for (sW of switzerland) {
  total5 += sW;
}
console.log(total5)

let switzerlandBar = document.getElementById("switzerland-total")
switzerlandBar.style.height = total5 * 10 + "px";

for (b of brazil) {
  total6 += b;
}
console.log(total6)

let brazilBar = document.getElementById("brazil-total")
brazilBar.style.height = total6 * 10 + "px";

for (distance of distanceFromHome) {
  total8 += distance;
}
console.log(total8)
