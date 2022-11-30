// Variable have been created to reference the audio file and play button. You will need to declare variable for your pause, skip ahead, and skip back buttons after they have been added to your HTML.
let musicFile = document.getElementById("music-file");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
//let forwardButton = document.getElementById("forward-button");
//let backButton = document.getElementById("back-button");
let timeSlider = document.getElementById("slider1");
let volumeSlider = document.getElementById("slider");

// ----------

// This event listener handles the play function. You will need to add event listeners for the pause, skip ahead, and skip back buttons.
playButton.addEventListener("click", playAudio);

timeSlider.addEventListener("change", seekTime);

volumeSlider.addEventListener("change", thisVolume);




// ----------

// Three of the four necessary functions have been created for you.


function playAudio() {
  if(musicFile.paused) {
    musicFile.play();
    document.querySelector("#play-button").addEventListener('click', function() {
  	document.querySelector("#cd").style.animationPlayState = 'paused';
  });
    
  } else {
    musicFile.pause()
    document.querySelector("#play-button").addEventListener('click', function() {
	  document.querySelector("#cd").style.animationPlayState = 'running';
});
  }
}

function thisVolume() { 
  musicFile.volume = (Math.abs(volumeSlider.value-100))/100;
        }

setInterval(updateTime, 1000);

function updateTime() {
  timeSlider.value = musicFile.currentTime;
  let slideOutput = document.getElementById("timeoutput");
  let s= parseInt(musicFile.currentTime % 60);
  let m= parseInt((musicFile.currentTime / 60) % 60);
  slideOutput.innerText =  m + ':' + s;
  //console.log(musicFile.currentTime);
}

function seekTime() {
  musicFile.currentTime = timeSlider.value;
}


