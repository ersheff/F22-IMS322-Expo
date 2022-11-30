// suggested method - use this array to store the names for your scenes as strings...
let scenes = ["0","1","2","3","4","5","6","7"];
let y=600;
let leavesGraphic;
let leavesGraphic2;
let fishSVG;
let steamGraphic;
let waterGraphic;
let scaler = 50;
let scaleDir = 1;
let dawnGraphic;
let birdGraphic;
let headSVG;
let bodySVG;
let legSVG;
let legY = 800;
let bodyX = -200;
let headX = 1800;


let angle = 0.0;
let waterMove = 0;
let waterMove1 = -1300;
let rectY = 100;

// ... and this index variable to step through the values in the scenes array
let sceneIndex = 0;

function setup() {
  let canvas = createCanvas(windowWidth*0.9, windowHeight*0.9);
  canvas.parent("sketch-holder");
  imageMode(CENTER);
  angleMode(DEGREES);
}

function preload() {
  leavesGraphic = loadImage("leaves.png");
  leavesGraphic2 = loadImage("leaves2.png");
  fishSVG = loadImage("fish.svg");
  volcanoGraphic = loadImage("volcano.png");
  steamGraphic = loadImage("steam.png");
  waterGraphic = loadImage("water.png");
  dawnGraphic = loadImage("dawn.png");
  birdGraphic = loadImage("bird.svg");
  headSVG = loadImage("head.svg");
  bodySVG = loadImage("body.svg");
  legSVG = loadImage("leg.svg");
}

function draw() {
  if (scenes[sceneIndex] === "0") {
    // scene 0 content
    background(255,231,233);
    fill(247,79,107);
    textAlign(CENTER);
    textSize(30);
    text("Beauty and the Best - Tango",width/2,height/2);
    textSize(15);
    text("Click anywhere to begin and move forward",width/2,height/1.88);
    text("Some scenes may be interactive",width/2,height/1.8);
  }
  
  else if (scenes[sceneIndex] === "1") {
    // scene 1 content
    background(235,242,255);
    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("Nature is beautiful, quiet, and serene,",width/2,50);
    
    fill(255,221,125);
    strokeWeight(0);
      if(y>=400) {
      y-=2;
    }
    circle(width/2, y, 200);
    fill(133,177,255);
    strokeWeight(0);
    rect(1, height/1.5, width, 300);
  }
  else if (scenes[sceneIndex] === "2") {
    // scene 2 content
    background(55,64,70);
    fill("white");
    textAlign(CENTER);
    textSize(20);
    text("Nature is the forest, with its many shades of green,",width/2,50);
    
    push();
    if ((mouseX > width/6) && (mouseX < width/4) &&
    (mouseY > 175) && (mouseY < 225)) {
    translate(width/5,200);
    rotate(angle);
    image(leavesGraphic, 1, 1, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    else {
      image(leavesGraphic, width/5, 200, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    pop();
    
    push();
    if ((mouseX > width/3) && (mouseX < width/1.5) &&
    (mouseY > 400) && (mouseY < 550)) {
    translate(width/2,450);
    rotate(angle);
    image(leavesGraphic, 1, 1, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    else {
      image(leavesGraphic, width/2, 450, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    pop();
    
    push();
    if ((mouseX > width/1.4) && (mouseX < width/1) &&
    (mouseY > 100) && (mouseY < 300)) {
    translate(width/1.2,200);
    rotate(angle);
    image(leavesGraphic, 1, 1, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    else {
      image(leavesGraphic, width/1.2, 200, leavesGraphic.width / 3, leavesGraphic.height / 3);
    }
    angle= angle + 1;
    pop();
    
  }
  else if (scenes[sceneIndex] === "3") {
    // scene 3 content
    background(178,67,66);
    fill("white");
    textAlign(CENTER);
    textSize(20);
    text("Nature is the birds, welcoming in the dawn,",width/2,50);
    image(dawnGraphic, width/2, 780, dawnGraphic.width/3, dawnGraphic.height/3);
    translate(width/2,780);
    rotate(angle);
    image(birdGraphic, 100, 500, birdGraphic.width, birdGraphic.height);
    angle++;
    
  }
  else if (scenes[sceneIndex] === "4") {
    
    // scene 4 content
    background(251,241,235);
    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("Nature is a calf, struggling to its feet as soon as it is born.",width/2,50);
    
    if(legY > 450) {
      legY-=4;
    }
    image(legSVG, width/1.95,legY, legSVG.width/4, legSVG.height/4);
    //image(legSVG, 580,450, legSVG.width/4, legSVG.height/4);
    if(bodyX < width/2) {
      bodyX+=10;
    }
    image(bodySVG, bodyX, 400, bodySVG.width/4, bodySVG.height/4);
    //image(bodySVG, 550,400, bodySVG.width/4, bodySVG.height/4);
    if(headX > width/1.65) {
      headX-=15;
    }
    image(headSVG, headX,300, headSVG.width/4, headSVG.height/4);
    console.log(headX);
    
  }
  else if (scenes[sceneIndex] === "5") {
    // scene 5 content
    background(167,197,239);
    fill("white");
    strokeWeight(0);
    textAlign(CENTER);
    textSize(20);
    text("Nature is a salmon, swimming against the stream,",width/2,50);
    image(fishSVG, width/2, 350, fishSVG.width, fishSVG.height);
    image(waterGraphic, waterMove, 400, waterGraphic.width/3, waterGraphic.height/3);
    image(waterGraphic, waterMove1, 400, waterGraphic.width/3, waterGraphic.height/3);
    waterMove = waterMove + 2;
    waterMove1 = waterMove1 + 2;
    if(waterMove > 2000){
      waterMove = -700;
    }
    if(waterMove1 > 2000) {
      waterMove1 = -700;
    }
  }
  else if (scenes[sceneIndex] === "6") {
    // scene 6 content
    background(178,67,66);
    image(steamGraphic, width/2, 260, steamGraphic.width / 3, steamGraphic.height / 3);
    fill(178,67,66);
    rect(width/2.5,rectY,300,300);
    rectY -= 3;
    image(volcanoGraphic, width/2, 520, volcanoGraphic.width/3, volcanoGraphic.height/3);
    fill("white");
    strokeWeight(0);
    textAlign(CENTER);
    textSize(20);
    text("Nature is a volcanic geyser, venting off steam.",width/2,50);
  }
  else if (scenes[sceneIndex] === "7") {
    // scene 7 content
    background(255,231,233);
    fill(247,79,107);
    textAlign(CENTER);
    textSize(30);
    text("The end",width/2,350);
    textSize(15);
    text("Refresh the page to restart",width/2,370);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// keep in mind that your actual final interaction design may not use this specific mousePressed logic - this is a placeholder for now to be able to step through your scenes in rough draft form
function mousePressed() {

  if (scenes[sceneIndex] == "6") {
    sceneIndex++;
  }
  else if (scenes[sceneIndex] == "5") {
    if ((mouseX > width/2.5) && (mouseX<width/1.5) && (mouseY>250) && (mouseY<410)) {
    sceneIndex++;
    }
  }
  else if (scenes[sceneIndex] == "4") {
    if (headX < width) {
    sceneIndex++;
    }
  }
  else if (scenes[sceneIndex] == "3") {
    sceneIndex++;
  }
  else if (scenes[sceneIndex] == "2") {
    if ((mouseX > width/6) && (mouseX < width/4) && (mouseY > 175) && (mouseY < 225)) {
      sceneIndex++;
    }
    else if ((mouseX > width/3) && (mouseX < width/1.5) &&
    (mouseY > 400) && (mouseY < 550)) {
      sceneIndex++;
    }
    else if ((mouseX > width/1.4) && (mouseX < width/1) &&
    (mouseY > 100) && (mouseY < 300)) {
      sceneIndex++;
    }
  }
  else if (scenes[sceneIndex] == "1") {
    sceneIndex++;
  }
  
  else if (y===398) {
    sceneIndex++;
  }
  else if (scenes[sceneIndex] == "0") {
    if ((mouseX > 0) && (mouseX < 1700) && (mouseY > 0) && (mouseY < 700)) {
      sceneIndex++;
    }
  }
   
    
  }
  
  
  
  
  
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
  