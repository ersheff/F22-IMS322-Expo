//music player

// Variables
let musicFile = document.getElementById("music-file");
let playButton = document.querySelector(".playpause-track");
let aheadButton = document.querySelector(".skip-ahead");
let behindButton = document.querySelector(".skip-behind");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.getElementById("current-time");
let total_duration = document.querySelector(".total-duration");
let volume = document.querySelector("#volume-control");
let myAudio = document.getElementById('audio_playo24')
let track_index = 0;
let isPlaying = false;
let updateTimer;



// Functions
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  musicFile.play();
  isPlaying = true;
}

function pauseTrack() {
  musicFile.pause();
  isPlaying = false;
}

function skipAhead() {
  musicFile.currentTime += 5;
  console.log(musicFile.currentTime);
}

function skipBehind() {
  musicFile.currentTime -= 5;
  console.log(musicFile.currentTime);
}


function toggleMute() {
   var myAudio = document.getElementById('love-like-you.mp3');
   myAudio.muted = !myAudio.muted;
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = musicFile.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  musicFile.currentTime = seekto;

  // Check if the current track duration is a legible number
  if (!isNaN(musicFile.duration)) {
    seekPosition = musicFile.currentTime * (100 / musicFile.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(musicFile.currentTime / 60);
    let currentSeconds = Math.floor(musicFile.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(musicFile.duration / 60);
    let durationSeconds = Math.floor(musicFile.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    console.log(currentSeconds);
    curr_time.innerText = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

setInterval(everySecond, 1000);

function everySecond() {
  let currentMinutes = Math.floor(musicFile.currentTime / 60);
  let currentSeconds = Math.floor(musicFile.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(musicFile.duration / 60);
  let durationSeconds = Math.floor(musicFile.duration - durationMinutes * 60);

  // Add a zero to the single digit time values
  if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
  if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
  if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
  if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

  // Display the updated duration
  console.log(currentSeconds);
  curr_time.innerText = currentMinutes + ":" + currentSeconds;
}

function seekUpdate() {
  let seekPosition = 0;
}

  // Questionnare

  // Variables for your select and entry controls
  let greyCheckbox = document.getElementById("grey");
  let whiteCheckbox = document.getElementById("whiteface");
  let pearlCheckbox = document.getElementById("pearl");
  let cinnamonCheckbox = document.getElementById("cinnamon");
  let lutinoCheckbox = document.getElementById("lutino");
  let piedCheckbox = document.getElementById("pied");
  let blueCheckbox = document.getElementById("blue");
  let otherCheckbox = document.getElementById("other");
  let numberRadio = document.getElementById("number-section");
  let numberOutput = document.getElementById("amount-tiel");
  let firstName = document.getElementById("first-name-input")
  let lastName = document.getElementById ("last-name-input")
  let adoptionDay = document.getElementById ("adoption-date")
  let nameOutput = document.getElementById ("name-output")
  
  let submitButton = document.getElementById("submit-button");
  let colorResults = document.getElementById("color-tiel");
  
  // Event listener(s) to gather information from your select and entry controls
  submitButton.addEventListener("click", submitAll);
  
  
  
  // Function definitions for your event listeners
  // Function for first, last and adoption day
  function submitAll() {
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let adoptionDayValue = document.getElementById("date-selector").value
    nameOutput.innerText = firstNameValue + " " + lastNameValue;
    adoptionDay.innerText = "Cockatiel Adoption Date: " + adoptionDayValue;
    
    let numberChoice = document.querySelector('input[name="number-tiel"]:checked').value;
    numberOutput.innerText = numberChoice;
  
    let resultString = "Color of tiel(s) you own: ";
  
    if (greyCheckbox.checked) { resultString += "Grey "};
    if (whiteCheckbox.checked) { resultString += "White-faced " };
    if (pearlCheckbox.checked) { resultString += "Pearl " };
    if (cinnamonCheckbox.checked) { resultString += "Cinnamon " };
    if (lutinoCheckbox.checked) { resultString += "Lutino " };
    if (piedCheckbox.checked) { resultString += "Pied " };
    if (blueCheckbox.checked) { resultString += "Blue " };
    if (otherCheckbox.checked) { resultString += "Other" };
  
    colorResults.innerText = resultString;
  }
