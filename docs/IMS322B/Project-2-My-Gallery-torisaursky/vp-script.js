let scenes = ["Scene 1", "Scene 2", "Scene 3", "Scene 4"];
let sceneIndex = 0;

let boatY = 0;
let brainAlpha = 255;

//colors
let seaColor = "#6783e0";
let sandColor = "#ffe1a0";
let blueWhite = "#c6d1f5";

function preload() {
  myFont = loadFont("vp-Ammys_Handwriting.ttf");

  crab = loadImage("vp-images/crab.png");
  shell1 = loadImage("vp-images/shell1.svg");
  shell2 = loadImage("vp-images/shell2.svg");
  sparkles = loadImage("vp-images/sparkles.gif");
  brain = loadImage("vp-images/brain.svg");
}

function setup() {
  createCanvas(windowWidth, 400).parent("site-body");
  mainText();
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(100);
  let canvasCenter = (windowWidth / 2);

  if (scenes[sceneIndex] === "Scene 1") {
    createSea(400);
    createShore();
    createBoat();
    //text
    fill(135, 175, 250);
    text("A shore reaching beyond your sight", canvasCenter, 50);

    subtitle();
    text("*click to continue*", canvasCenter, 375);
    mainText();
  }
  else if (scenes[sceneIndex] === "Scene 2") {
    boatY += 1.25;

    createSea(400);
    noTint();
    image(sparkles, canvasCenter - 125, 225, 200, 200);
    createShore();

    if (boatY === 335) {
      sceneIndex++;
    } //end if

    fill("white");
    text("A sea that sparkles with brilliant light", canvasCenter - 60, 240, 250, 100);

    subtitle();
    text("*click to continue*", canvasCenter, 375);
    mainText();

    createBoat();
  } else if (scenes[sceneIndex] === "Scene 3") {
    background(seaColor);
    tint(255, brainAlpha);
    image(brain, canvasCenter, 200);
    brainAlpha -= 1;

    if (brainAlpha === 0) {
      sceneIndex++;
    } //end if

    text("The walls in your mind", canvasCenter, 100);
    text("will melt away", canvasCenter, 300);

    subtitle();
    text("*click to continue*", canvasCenter, 375);
    mainText();
  } else if (scenes[sceneIndex] === "Scene 4") {
    brainAlpha = 255;
    createSunset();
    createSea(180);

    fill("white");
    text("Before the sunny glow", canvasCenter, 300);

    subtitle();
    text("*click to continue*", canvasCenter, 375);
    mainText();
  } //end if
}

function windowResized() {
  resizeCanvas(windowWidth, 400);
}

function mousePressed() {
  sceneIndex++;
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
    boatY = 0;
  }
}

function mainText() {
  textFont(myFont);
  textStyle(NORMAL);
  textSize(22);
}

function subtitle() {
  textFont("Helvetica");
  textStyle(ITALIC);
  textSize(14);
  fill(blueWhite);
} //end subtitle

function createShore() {
  let canvasCenter = (windowWidth / 2);

  noStroke();
  fill(sandColor);
  ellipseMode(CENTER);
  ellipse(canvasCenter - 100, 50, 400, 150);
  ellipse(canvasCenter + 125, 50, 230, 140);

  noTint();
  image(crab, canvasCenter - 25, 75, 30, 20);
  image(shell1, canvasCenter - 130, 90, 20, 20);
  image(shell2, canvasCenter + 115, 95, 20, 20);
} //end createShore

function createSea(height) {
  noStroke();
  fill(seaColor);
  rectMode(CORNERS);
  rect(0, 400 - height, windowWidth, 400);
} //end createSea

function createBoat() {
  let canvasCenter = (windowWidth / 2);

  //mast
  stroke("black");
  strokeWeight(5);
  line(canvasCenter + 50, 100 + boatY, canvasCenter + 50, 75 + boatY);

  //boat
  noStroke();
  fill("brown");
  arc(canvasCenter + 50, 100 + boatY, 50, 40, 0, PI)

  //sail
  fill(255);
  triangle(canvasCenter + 50, 65 + boatY, canvasCenter + 35, 90 + boatY, canvasCenter + 75, 90 + boatY);
} //end createBoat

function createSunset() {
  let canvasCenter = (windowWidth / 2);

  background("#f54514");
  fill("#f56614");
  ellipse(canvasCenter, 200, 550, 450);
  fill("#f58c14");
  ellipse(canvasCenter, 200, 400, 350);
  fill("#f5a614");
  ellipse(canvasCenter, 200, 250, 215);

  fill("#f5db14");
  circle(canvasCenter, 200, 100);
} //end createSunset