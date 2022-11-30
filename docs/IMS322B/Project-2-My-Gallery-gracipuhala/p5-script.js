let scenes = ["moon", "cliff", "glimmer"];
let sceneIndex = 0;

let mouseImage;

let cX = 250;
let cY = 100;
let cR = 100;

let moon1y = 500;

let starImage;
let cliffImage;
let cliffX = -226.5;
let cliff2Image;

let cliffDraw;
let cliffSwitch = true;


function preload() {
  mouseImage = loadImage("images/mousestar.png");
  starImage = loadImage("images/stars.png");
  cliffImage = loadImage("images/cliff1.png");
  cliff2Image = loadImage("images/cliff2.png");
}

function setup() {
  createCanvas(500, 500).parent("p5-canvas");
  cliffDraw = cliffImage;
  textAlign(CENTER);
  textFont('Georgia');
  textSize(18);
}

function draw() {
  background("black");
  let starW = starImage.width;
  let starH = starImage.height;
  
  image(starImage, 0, 0, starW/2, starH/2);
  
    if (scenes[sceneIndex] === "moon") {

let cR2 = 100;

  image(mouseImage, mouseX, mouseY, mouseImage.width/50, mouseImage.height/50);

  let pcHit = collidePointCircle(mouseX, mouseY, cX, cY, cR);
  if (pcHit) {
    fill("gray");
    noStroke();
    cR = 110;
  }
  else {
    fill("black");
    noStroke();
    cR = 50;
  }

  circle(cX, cY, cR);

      
  fill("gray");
  noStroke();
  circle(250, moon1y, 100);
    if (moon1y > 100) {
   moon1y --;
 }

  fill("#2B3990");
  rect(0, 400, 500, 100);


      fill(255);
  text('The sea is calm tonight. The tide is full, the moon lies fair upon the straits.', 75, 190, 350, 300);

  }

      
  else if (scenes[sceneIndex] === "cliff") {

  let cR2 = 100;

  image(mouseImage, mouseX, mouseY, mouseImage.width/50, mouseImage.height/50);

  let pcHit = collidePointCircle(mouseX, mouseY, cX, cY, cR);
  if (pcHit) {
    fill("gray");
    noStroke();
    cR = 110;
  }
  else {
    fill("black");
    noStroke();
    cR = 50;
  }

  circle(cX, cY, cR);
      
    fill("gray")
    noStroke();
  circle(250, 100, 100);


  
    fill("#2B3990");
  rect(0, 400, 500, 100)   
    
  let cliffW = cliffImage.width;
  let cliffH = cliffImage.height;

  image(cliffImage, cliffX, 250, cliffW/2, cliffH/2);
    
  if (cliffX < 0) {
  cliffX ++;
  }

     fill(255);
    text('on the French coast the light gleams and is gone; the cliffs of England stand.', 250, 325, 250, 300);
      
  }

    
    else if (scenes[sceneIndex] === "glimmer") {


  fill("yellow");
    noStroke();
  triangle(0, 400, 200, 400, 250, 100);
    
    fill("gray")
    noStroke();
  circle(250, 100, 100);
      
  fill("#2B3990");
  rect(0, 400, 500, 100)  
      
  let cliffW = cliffDraw.width;
  let cliffH = cliffDraw.height;

  image(cliffDraw, 0, 250, cliffW/2, cliffH/2);
    
    fill(255);
     text('Glimmering and vast, out in the tranquil bay.', 250, 300, 200, 300);

      image(mouseImage, mouseX, mouseY, mouseImage.width/50, mouseImage.height/50);

  }
  
}

function mousePressed() {
  if (sceneIndex < scenes.length-1) {
    sceneIndex+=1;
  }
  
  if (scenes[sceneIndex] === "glimmer") {
    if (cliffSwitch === true) {
      cliffDraw = cliff2Image;
      cliffSwitch = false;
    } else {
      cliffDraw = cliffImage;
      cliffSwitch = true;
    }
  }
}
