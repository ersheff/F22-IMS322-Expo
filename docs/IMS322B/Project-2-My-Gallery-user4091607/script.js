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

// DATAVIZ

// Arrays for Section B survey result data

let driverDistance = [230, 240, 250, 270, 290, 240, 220, 180, 230, 230, 250, 300, 310, 200, 150, 270, 290];

let totalDistance = 0;

for (var i = 0; i < driverDistance.length; i++) {
  totalDistance = totalDistance + driverDistance[i];
}

let avgDistance = totalDistance / driverDistance.length;

// console.log("Avg Distance: " + avgDistance);

var avgDis = document.getElementById("avgDis");
avgDis.innerText = avgDistance;

// console.log("Total Distance: " + totalDistance);

var totalDis = document.getElementById("totalDis");
totalDis.innerText = totalDistance;


let drivers = [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
let woods = [2, 2, 3, 1, 3, 3, 2, 1, 2, 3, 4, 2, 2, 3, 7, 2, 2];
let irons = [6, 6, 5, 4, 6, 5, 5, 5, 5, 6, 4, 4, 5, 7, 1, 5, 5];
let wedges = [2, 1, 3, 3, 2, 1, 0, 3, 4, 2, 2, 1, 3, 3, 2, 1, 2];
let putters = [1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1];


let totalDrivers = 0;
for (var i = 0; i < drivers.length; i++) {
  totalDrivers = totalDrivers + drivers[i];
}
// console.log(totalDrivers);
document.getElementById("drivers").style.width = totalDrivers + .1 + "%";

let totalWoods = 0;
for (var i = 0; i < woods.length; i++) {
  totalWoods = totalWoods + woods[i];
}
// console.log(totalWoods);
document.getElementById("woods").style.width = totalWoods + .1 + "%";

let totalIrons = 0;
for (var i = 0; i < irons.length; i++) {
  totalIrons = totalIrons + irons[i];
}
// console.log(totalIrons);
document.getElementById("irons").style.width = totalIrons + .1 + "%";

let totalWedges = 0;
for (var i = 0; i < wedges.length; i++) {
  totalWedges = totalWedges + wedges[i];
}
// console.log(totalWedges);
document.getElementById("wedges").style.width = totalWedges + .1 + "%";

let totalPutters = 0;
for (var i = 0; i < putters.length; i++) {
  totalPutters = totalPutters + putters[i];
}
// console.log(totalPutters);
document.getElementById("putters").style.width = totalPutters + .1 + "%";

let totalClubs = [totalDrivers, totalWoods, totalIrons, totalWedges, totalPutters]
// console.log(totalClubs);

let totalNumberClubs = 0;
for (var i = 0; i < totalClubs.length; i++) {
  totalNumberClubs = totalNumberClubs + totalClubs[i];
}
// console.log(totalNumberClubs);

var totalClubs1 = document.getElementById("totalNumberClubs");
totalClubs1.innerText = totalNumberClubs;


//POEM
let scenes = ["redRose", "whiteRose", "falcon", "dove"];
let redImage;
let whiteImage;
let falconImage;
let doveImage;
let sceneIndex = 0;
let cloudx = 100;
let cloudy = 100;
let squares = [];
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  var myCanvas = createCanvas(10000, 400);
  myCanvas.parent("canvasID");
}

window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  //canvas.size(w, h);
}

function preload() {
  redImage = loadImage("red-rose.svg");
  whiteImage = loadImage("white-rose.svg");
  falconImage = loadImage("falcon.svg");
  doveImage = loadImage("dove.svg");
}

function draw() {
  background(0, 204, 255);
  fill("green");
  w = window.innerWidth;
  h = window.innerHeight;
  rect(0, 325, w, 75);
  if (scenes[sceneIndex] === "redRose") {
    let imgW = redImage.width;
    let imgH = redImage.height;
    imageMode(CENTER);
    image(redImage, w / 2, height / 2, mouseX, mouseY);
    fill("black");
    text("The red rose...", 50, 100);
    text("... whispers of passsion", w - 250, 300);
    textSize(13);
    strokeWeight(2);
    text("Click Here", 50, 300);
  }
  else if (scenes[sceneIndex] === "whiteRose") {
    let imgW = whiteImage.width;
    let imgH = whiteImage.height;
    imageMode(CENTER);
    image(whiteImage, w / 2, height / 2, imgW, imgH);
    heart(mouseX, mouseY, 20);
    fill("black");
    text("And the white rose...", 50, 100);
    text("... breathes of love", w - 250, 300);
    textSize(13);
    strokeWeight(2);
    text("Place Heart Here", w - 250, 100);
  }
  else if (scenes[sceneIndex] === "falcon") {
    let imgW = falconImage.width;
    let imgH = falconImage.height;
    imageMode(CENTER);
    image(falconImage, mouseX, mouseY, imgW, imgH);
    fill("black");
    text("O the red rose...", 50, 100);
    text("... is a falcon", w - 250, 300);
    textSize(13);
    strokeWeight(2);
    text("Land Falcon Here", 50, 300);
    for (sq of squares) {
      fill("red");
      square(sq.x, sq.y, 15);
    }
  }
  else if (scenes[sceneIndex] === "dove") {
    let imgW = doveImage.width;
    let imgH = doveImage.height;
    imageMode(CENTER);
    image(doveImage, w / 2, height / 2, imgW, imgH);
    fill("black");
    text("and the white rose...", 50, 100);
    text("... is a dove", w - 250, 300);
    for (sq of squares) {
      fill("White");
      square(sq.x, sq.y, 15);
      textSize(13);
      strokeWeight(2);
      text("Click Here", 50, 300);
    }
  }

  makeCloud(cloudx - 50, cloudy - 60);
  makeCloud(cloudx + 70, cloudy - 50);
  fill(220);
  noStroke();
  cloudx += 0.15;
}

function makeCloud(cloudx, cloudy) {
  fill(250)
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx + - 20, cloudy + 10, 70, 50);
}

function mousePressed() {
  sceneIndex++;
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}