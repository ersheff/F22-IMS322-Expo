//frog poem
let scenes = ["1", "2", "3", "4"];
let beginX = 140;
let beginY = 180;
let endX = 229;
let endY = 264;
let distX;
let distY;
let exponent = 4;
let x = 0.0;
let y = 0.0;
let step = 0.01;
let pct = 0.0;

var outerRipple = 0;

let img;
function preload() {
  img = loadImage('frog.png');
  img2 = loadImage("frog2.png");
}

let sceneIndex = 0;

function setup() {
  createCanvas(400, 400).parent("frogcanvas");

}

function draw() {
  background('lightgreen');
  fill('darkblue');
  ellipse(250, 300, 200, 100);


  if (scenes[sceneIndex] === "1") {
    fill('white');
    textSize(20);
    text('An old silent pond', 20, 90);
    image(img, 140, 180, 70, 70);
    textSize(10)
    text('Click Anywhere', 323, 385)
    outerRipple= 0;
  }

  else if (scenes[sceneIndex] === "2") {
    fill('white');
    textSize(20);
    text('A frog jumps into the pond,', 20, 90);
    textSize(10)
    text('Click Anywhere', 323, 385)
    noStroke();
    distX = endX - beginX;
    distY = endY - beginY;
    pct += step;
    if (pct < 1.0) {
      x = beginX + pct * distX;
      y = beginY + pow(pct, exponent) * distY;
    }
    image(img, x, y, 70, 70);
  }

  else if (scenes[sceneIndex] === "3") {
    fill('white');
    textSize(20);
    text('Splash!', 20, 90);
    textSize(10)
    text('Click Anywhere', 323, 385)
    for (var i = 0; i < 5; i++) {
      var ripple = outerRipple - 30 * i;
      if (ripple > 0) {
        var fade = map(ripple, 0, 225, 0, 225, 250, 300, 200, 100);
        stroke(fade);
        fill('lightblue');
        ellipse(250, 300, ripple);
      }
    }
    outerRipple = outerRipple + 2
    image(img2, 228, 268, 70, 50);
  }


  else if (scenes[sceneIndex] === "4") {
    fill('white');
    textSize(20);
    text('Silence again.', 20, 90);
    textSize(10)
    text('Click Anywhere', 323, 385)
  }

}

function mousePressed() {
  sceneIndex++;
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
  pct = 0.0;
  distX = endX - beginX;
  distY = endY - beginY;
}

//DIY Slider 
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//MusicPlayer 
let musicFile = document.getElementById("music-file");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let skipAheadButton = document.getElementById("skipahead-button");
let skipBackButton = document.getElementById("skipback-button");

playButton.addEventListener("click", playAudio);

pauseButton.addEventListener("click", pauseAudio);

skipAheadButton.addEventListener("click", skipAheadAudio);

skipBackButton.addEventListener("click", skipBackAudio); 


function playAudio() {
  musicFile.play();
}

function pauseAudio() {
  musicFile.pause();
}

function skipAheadAudio() {
  musicFile.currentTime += 5;
}

function skipBackAudio() {
  musicFile.currentTime -= 5; 
} 

console.log(musicFile.currentTime);
