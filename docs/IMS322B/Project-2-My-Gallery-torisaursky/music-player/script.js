//please note the time slider is only functional using Mozilla Firefox and similar browers, it does not work with Google Chrome

let musicFile = document.getElementById("music-file");

let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let musicSlider = document.getElementById("music-slider");
let timeClock = document.getElementById("time-clock");
let volumeSlider = document.getElementById("volume-slider");
let volumePercent = document.getElementById("volume-percent");
let muteButton = document.getElementById("mute-button");

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
musicSlider.addEventListener("input", sliderTime);
volumeSlider.addEventListener("input", sliderVolume);
muteButton.addEventListener("click", muteTrack);

let mySeconds = 0;
let myMinutes = 0;
let tempTime = 0;
let timeString = "0:0";
let tempVolume = 100;

setInterval(update, 100);

function update() {
  updateTime();
  musicSlider.value = musicFile.currentTime;
  timeClock.innerHTML = timeString + "/2:26";

  volumePercent.innerHTML = volumeSlider.value + "%";
  if (musicFile.volume == 0) {
    muteButton.classList.remove("inactive");
  } else {
    muteButton.classList.add("inactive");
  }
} //end update

function playAudio() {
  musicFile.play();
  playButton.classList.remove("inactive");
  pauseButton.classList.add("inactive");
}

function pauseAudio() {
  musicFile.pause();
  pauseButton.classList.remove("inactive");
  playButton.classList.add("inactive");
}

function updateTime() {
  if (mySeconds < 10) {
    timeString = myMinutes + ":0" + mySeconds;
  } else {
    timeString = myMinutes + ":" + mySeconds;
  }

  mySeconds = Math.trunc(musicFile.currentTime) % 60;
  myMinutes = Math.trunc(musicFile.currentTime / 60);
  tempTime = Math.trunc(musicFile.currentTime);
}

function sliderTime() {
  musicFile.currentTime = musicSlider.value;
}

function sliderVolume() {
  musicFile.volume = (volumeSlider.value / 100);
}

function muteTrack() {
  if (musicFile.volume != 0) {
    tempVolume = musicFile.volume;
    volumeSlider.value = 0;
    musicFile.volume = 0;
  } else {
    musicFile.volume = tempVolume;
    volumeSlider.value = tempVolume * 100;
  }

}