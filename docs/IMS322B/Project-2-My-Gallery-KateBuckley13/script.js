let aboutme = document.getElementById("aboutme");
let responsivephoto = document.getElementById("responsivephoto");
let musicplayer = document.getElementById("musicplayer");
let datavis = document.getElementById("datavis");

let section0 = document.getElementById("section0");
let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");

let musicFile = document.getElementById("alabama-shakes");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let aheadButton = document.getElementById("ahead-button");
let backButton = document.getElementById("back-button");
let musicProgress = document.getElementById("music-progress");

aboutme.addEventListener("click", showSection0);
responsivephoto.addEventListener("click", showSection1);
musicplayer.addEventListener("click", showSection2);
datavis.addEventListener("click", showSection3);

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
musicProgress.addEventListener("change", musicSeek);

function musicSeek(){
  musicFile.currentTime = musicProgress.value;
}

function showSection0() {
  aboutme.classList.add("active-button");
  responsivephoto.classList.remove("active-button");
  musicplayer.classList.remove("active-button");
  datavis.classList.remove("active-button");
  section0.classList.add("active-section");
  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
}

function showSection1() {
  aboutme.classList.remove("active-button");
  responsivephoto.classList.add("active-button");
  musicplayer.classList.remove("active-button");
  datavis.classList.remove("active-button");
  section0.classList.remove("active-section");
  section1.classList.add("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
}

function showSection2() {
  aboutme.classList.remove("active-button");
  responsivephoto.classList.remove("active-button");
  musicplayer.classList.add("active-button");
  datavis.classList.remove("active-button");
  section0.classList.remove("active-section");
  section1.classList.remove("active-section");
  section2.classList.add("active-section");
  section3.classList.remove("active-section");
}

function showSection3() {
  aboutme.classList.remove("active-button");
  responsivephoto.classList.remove("active-button");
  musicplayer.classList.remove("active-button");
  datavis.classList.add("active-button");
  section0.classList.remove("active-section");
  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.add("active-section");
}

function playAudio(){
  musicFile.play();
} 

function pauseAudio(){
  musicFile.pause();
}

function updateMusicProgress() {
let currentMinute = Math.floor(musicFile.currentTime / 60); 
let currentSecond = Math.floor(musicFile.currentTime % 60);
musicProgress.value = musicFile.currentTime;
let timeString;
  if (currentSecond < 10) {
    timeString = currentMinute + ":0" + currentSecond;
  }
  else {
    timeString = currentMinute + ":" + currentSecond;
  }
  document.getElementById("timeRead").innerText = timeString;
  }

setInterval(updateMusicProgress, 1000);
console.log(musicFile.currentTime);


let distanceFromHome = [0, 213, 878, 252, 270, 315, 249, 43, 887, 411, 8878, 300, 38, 459, 198, 275, 295];
let distanceFromHometotal = 0;

for (let i = 0; i < distanceFromHome.length; i++) {
  distanceFromHometotal += distanceFromHome[i];
}
console.log(distanceFromHometotal);
let distanceFromHomeavg = distanceFromHometotal/distanceFromHome.length;
console.log(distanceFromHomeavg);


let dogs = [1, 0, 1, 0, 2, 0, 2, 1, 1, 3, 0, 1, 1, 1, 1, 0, 0];
let dogstotal = 0;

for (let i = 0; i < dogs.length; i++) {
  dogstotal += dogs[i];
}
console.log(dogstotal); 

let dogBar = document.getElementById("dogBar")
dogBar.style.height = dogstotal * 10 + "px";


let cats = [2, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let catstotal = 0;

for (let i = 0; i < cats.length; i++) {
  catstotal += cats[i];
}
console.log(catstotal);

let catBar = document.getElementById("catBar")
catBar.style.height = catstotal * 10 + "px";


let birds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let birdstotal = 0;

for (let i = 0; i < birds.length; i++) {
  birdstotal += birds[i];
}
console.log(birdstotal);

let birdBar = document.getElementById("birdBar")
birdBar.style.height = birdstotal * 10 + "px";


let fish = [0, 5, 0, 0, 8, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0];
let fishtotal = 0;

for (let i = 0; i < fish.length; i++) {
  fishtotal += fish[i];
}
  console.log(fishtotal);

let fishBar = document.getElementById("fishBar")
fishBar.style.height = fishtotal * 10 + "px";


let rabbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
let rabbitstotal = 0;

for (let i = 0; i < rabbits.length; i++) {
  rabbitstotal += rabbits[i];
}
console.log(rabbitstotal);

let rabbitsBar = document.getElementById("rabbitsBar")
rabbitsBar.style.height = rabbitstotal * 10 + "px";


let reptiles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0];
let reptilestotal = 0;

for (let i = 0; i < reptiles.length; i++) {
  reptilestotal += reptiles[i];
}
console.log(reptilestotal);

let reptileBar = document.getElementById("reptileBar")
reptileBar.style.height = reptilestotal * 10 + "px";


let other = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
let othertotal = 0;

for (let i = 0; i < other.length; i++) {
  othertotal += other[i];
}
 console.log(othertotal);

let otherBar = document.getElementById("otherBar")
otherBar.style.height = othertotal * 10 + "px";


let totalpets = [15, 7, 0, 22, 1, 2, 2];
let totalpetstotal = 0;

for (let i = 0; i < totalpets.length; i++) {
  totalpetstotal += totalpets[i];
}
console.log(totalpetstotal);

