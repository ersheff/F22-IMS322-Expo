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


// Music Player.

let musicFile = document.getElementById("music-file");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let skipButton = document.getElementById("skip-button");
let backButton = document.getElementById("back-button");

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
backButton.addEventListener("click", skipBack);
skipButton.addEventListener("click", skipAhead);

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

// Write your own skipBack function using the skipAhead function as a model.

function skipBack() {
  musicFile.currentTime -= 5;
    console.log(musicFile.currentTime);
}

//photo gallery 

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");


btn1.addEventListener("click", toggle1);
btn2.addEventListener("click", toggle2);
btn3.addEventListener("click", toggle3);


function toggle1() {
  para1.classList.remove("inactive");
  para2.classList.add("inactive");
 para3.classList.add("inactive");


}

function toggle2() {
  para1.classList.add("inactive");
  para2.classList.remove("inactive");
  para3.classList.add("inactive");


}

function toggle3() {
  para1.classList.add("inactive");
  para2.classList.add("inactive");
  para3.classList.remove("inactive");


}
