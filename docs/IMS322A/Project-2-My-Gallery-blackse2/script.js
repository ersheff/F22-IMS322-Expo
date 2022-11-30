let tab1 = document.getElementById("tab1");

let tab2 = document.getElementById("tab2");

let tab3 = document.getElementById("tab3");

let section1 = document.getElementById("section1");

let section2 = document.getElementById("section2");

let section3 = document.getElementById("section3");

tab1.addEventListener("click", showSection1);

tab2.addEventListener("click", showSection2);

tab3.addEventListener("click", showSection3);

function showSection1() {
  tab1.classList.add("active-button");
  tab2.classList.remove("active-button");
  tab3.classList.remove("active-button");
  section1.classList.add("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
}

function showSection2() {
  tab1.classList.remove("active-button");
  tab2.classList.add("active-button");
  tab3.classList.remove("active-button");
  section1.classList.remove("active-section");
  section2.classList.add("active-section");
  section3.classList.remove("active-section");
}

function showSection3() {
  tab1.classList.remove("active-button");
  tab2.classList.remove("active-button");
  tab3.classList.add("active-button");
  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.add("active-section");
}

// Variable have been created to reference the audio file and play button. You will need to declare variable for your pause, skip ahead, and skip back buttons after they have been added to your HTML.
let musicFile = document.getElementById("music-file");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let skipAheadButton = document.getElementById("skip-ahead-button");
let skipBackButton = document.getElementById("skip-back-button");

// ----------

// This event listener handles the play function. You will need to add event listeners for the pause, skip ahead, and skip back buttons.
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
skipAheadButton.addEventListener("click", skipAhead);
skipBackButton.addEventListener("click", skipBack);


// ----------

// Three of the four necessary functions have been created for you.
function playAudio() {
  musicFile.play();
}

function pauseAudio() {
  musicFile.pause();
}

function skipAhead() {
  // This function adds 5 seconds to the current time location of the audio file.
  musicFile.currentTime += 5;
  // The current time is logged to the console, just for your reference.
  console.log(musicFile.currentTime);
}

function skipBack() {
  musicFile.currentTime -= 5;
  console.log(musicFile.currentTime);
}

let distanceFromHome = [27, 216, 110, 11, 280, 20, 95, 150, 1162, 45, 237, 722, 133, 244, 947, 411, 285, 7287, 8817];

let totalDistance = (0);

for (x of distanceFromHome) {
  console.log(totalDistance+=x)
}

let avgDistance = totalDistance/distanceFromHome.length
console.log(avgDistance); 

let homeResult = document.getElementById("home-result");
homeResult.innerText = ("Average Distance: " + avgDistance + " mi");

let totalDistResult = document.getElementById("total-dist-result");
totalDistResult.innerText = ("Total Distance: " + totalDistance + " mi");


let dogs = [3, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, 2, 0, 1, 4, 3, 2, 1, 0];

let totalDogs = (0);

for (d of dogs) {
  console.log(totalDogs+=d);
}

let cats = [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 2, 0, 0, 0, 0];

let totalCats = (0);

for (c of cats) {
  console.log(totalCats+=c);
}

let birds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0];

let totalBirds = (0);

for (b of birds) {
  console.log(totalBirds+=b);
}

let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 0, 0];

let totalFish = (0);

for (f of fish) {
  console.log(totalFish+=f);
}

let rabbits = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];

let totalRabbits = (0);

for (ra of rabbits) {
  console.log(totalRabbits+=ra);
}

let reptiles = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let totalReptiles = (0);

for (re of reptiles) {
  console.log(totalReptiles+=re);
}

let other = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let totalOther = (0);

for (o of other) {
  console.log(totalOther+=0);
}

let pets = [25, 9, 6, 8, 2, 1, 0];

let totalPets = (0);

for (p of pets) {
  console.log(totalPets+=p);
}

let totalPetResult = document.getElementById("total-pet-result");
totalPetResult.innerText = ("Total Pets: " + totalPets);

