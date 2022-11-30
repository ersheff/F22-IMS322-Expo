// suggested method - use this array to store the names for your scenes as strings...
let scenes = ["text1", "text2", "text3"];
let windowPNG;
let curtainPNG;
let curtain1PNG;
let windPNG;
let moonPNG;
let bedPNG;
let babyPNG;
let libertyPNG;
let sunPNG;
let starsPNG; 
let gradientJPG;
let xoff = 0;

let winY = 50;
let sunY = 350;
let sunX = 350;
let sleepY = 350;
let sleepX = 350;


// ... and this index variable to step through the values in the scenes array
let sceneIndex = 0;

function preload(){
  windowPNG = loadImage("window.png");
  curtainPNG = loadImage ("curtain.png");
  curtain1PNG = loadImage ("curtain1.png");
  windPNG = loadImage ("wind.png");
  moonPNG = loadImage ("moon.png");
  bedPNG = loadImage ("bed.png");
  babyPNG = loadImage ("baby.png");
  libertyPNG = loadImage ("liberty.png");
  sunPNG = loadImage ("sun.png");
  starsPNG = loadImage ("stars.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('grey');

  
  if (scenes[sceneIndex] === "text1") {
    
    fill('#5481D5');
    square(0, 0, 400);

    rect (80, 100, 240,170);
    imageMode(CENTER);
    image(windowPNG, width/2, winY, windowPNG.width/4 , windowPNG.height/4);

    imageMode(CORNER);
    image(windPNG, -10,200, windPNG.width/8, windPNG.height/8);
    
    textSize(23);
    fill ('black');
    text('Curtains forcing their will', 80, 350);
    text('against the wind', 121, 380);

    xoff = xoff + 0.015;
    
    let n = noise(xoff);
    push();
    shearX(PI*n/8);
    scale(0.5);
    image(curtainPNG, -70, 160);
    pop();

    push();
    shearX(PI*n/8);
    scale(0.5);
    image(curtain1PNG, 325, 160);
    pop();
    
  }

  
  else if (scenes[sceneIndex] === "text2") {
    
    if (sleepX > 50 && sleepX < 150 &&
     sleepY > 50 && sleepY < 150)
  {fill("blue")}
    else {fill("black")}
    
    square(0, 0, 400);

    image(moonPNG, 230, 0, moonPNG.width/5 , moonPNG.height/5 );
    image(bedPNG, 40,50, bedPNG.width/2.5 , bedPNG.height/2.5 );
    image (babyPNG, 80, 100, babyPNG.width/4 , babyPNG.height/4 );
    
    noStroke();
    square(120,120,45); 
  
        textSize(18);
    fill('orange');
    text('Z', sleepX,sleepY);
    text('Z', sleepX +20,sleepY +20);
    text('Z', sleepX + 40,sleepY +40);

    textSize(23);
    fill ('white');
    text('children sleep', 130, 350);
    text('exchanging dreams with seraphim', 25, 380);
    
  }
    
  else if (scenes[sceneIndex] === "text3"){

  if(sunX > 50 && sunX < 150 &&
     sunY > 50 && sunY < 150)
    {fill('#FDA060')}
  else {fill("black")}
  
    square(0, 0, 400);
    
    textSize(23);
    fill ('white');
    text('The city drags', 200, 340);
    text('itself awake on', 200, 360);
    text('subway straps', 200, 380);

    image (libertyPNG, -110, 5, libertyPNG.width/2 , libertyPNG.height/2);

    imageMode(CENTER);
    image (sunPNG, sunX, sunY, sunPNG.width/6 , sunPNG.height/6 )
    imageMode(CORNER);
  
  }
}

// keep in mind that your actual final interaction design may not use this specific mousePressed logic - this is a placeholder for now to be able to step through your scenes in rough draft form
function mousePressed() {
  if (winY >= 180 && scenes[sceneIndex] === "text1") {
    sceneIndex++;
  }
  // need to add second condition here so it doesn't automatically skip
  
  else if (scenes[sceneIndex] === "text2") {
    if(sleepX > 50 && sleepX < 150 &&
       sleepY > 50 && sleepY < 150)
    {sceneIndex++;}
    
    }
  else if (scenes[sceneIndex] === "text3") {
    if(sunX > 50 && sunX < 150 &&
       sunY > 50 && sunY < 150)
    {sceneIndex++;}
  }
  
}

function mouseDragged() {
  winY = mouseY;
  if(winY > 180) {
    winY = 180;
  }
 
 if(scenes[sceneIndex] == "text2"){
  sleepY = mouseY;
  sleepX = mouseX;
 } 
  // check to see if on sun scene first
  if(scenes[sceneIndex] == "text3"){
    sunY = mouseY;
    sunX = mouseX;
  }
}