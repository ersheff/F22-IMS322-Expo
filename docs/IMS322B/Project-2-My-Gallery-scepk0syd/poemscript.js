//IMPORTANT INSTRUCTIONS
//SLIDE 1- hover mouse all the way to right side of canvas to advance to next slide
//SLIDE 2- click anywhere on screen to activate car cursor, then click yellow sign to advance to next slide
//SLIDE 3- press space bar to activate flood lights transition

let scenes = ["sunset casts blindness", "bled bright over interstate", "squint on, westward bound!"];
let sceneIndex = 0;
let c1, c2;
let car = false;
let truckY = 200;
let factor = 1.1;
let r1 = 10;
let r2 = 10;
let headlights = false;

function setup() {
  createCanvas(400, 400);
  textSize(15);
}

function draw() {
  if (scenes[sceneIndex] === "sunset casts blindness") {
    headlights = false;
    r1 = 10;
    r2 = 10;
    c1 = color(251, 176, 64);
    c2 = color(237, 28, 36);

    // This sets the gradient for the background
    for (let y = 0; y < height; y++) {
      n = map(y, 0, height, 0, 1);
      let newc = lerpColor(c1, c2, n);
      stroke(newc);
      line(0, y, width, y);
    }

    stroke(25);
    text("sunset casts blindness", 80, 100);
    fill(255);
    textSize(25);
    textFont('Georgia');

    let cloud1y = 230;
    let cloud2y = 300;
    // The cloudes move with the mouse
    image(cloudImg1, mouseX - 50, cloud1y);
    image(cloudImg2, mouseX + 5, cloud2y);
    cloudImg2.resize(0, 85);

    // When to change scenes
    if (mouseX > 350) {
      sceneIndex++;
    }
    
  } else if (scenes[sceneIndex] === "bled bright over interstate") {
    c1 = color(251, 176, 64);
    c2 = color(237, 28, 36);
    noCursor();

    // Set up the background
    for (let y = 0; y < height; y++) {
      n = map(y, 0, height, 0, 1);
      let newc = lerpColor(c1, c2, n);
      stroke(newc);
      line(0, y, width, y);
    }
    
    text("bled bright over interstate", 60, 140);
    fill(255);
    
    image(cloudImg2, -180, 1);
    image(cloudImg1, 195, 65);
    cloudImg1.resize(0, 40);
    image(roadImg, 0, 120);
    roadImg.resize(0, 400);
    image(signImg, 325, 255);
    signImg.resize(0, 60);
    
    if (car) {
      // Put a car image on the sign
      image(carImg2, 340, 275);
      carImg2.resize(0, 15);
      // Make the cursor a car
      image(carImg, mouseX, mouseY)
      carImg.resize(0, 30);
    }
    
  } else if (scenes[sceneIndex] === "squint on, westward bound!") {
    fill(0);
    noStroke();
    cursor();
    car = false;
    
    background(159, 96, 80);
    image(cloudImg2, -180, 35);
    image(cloudImg1, 225, 40);
    text("squint on, westward bound!", 50, 100);

    // Make the truck bounce
    if (truckY > 210 || truckY < 200) {
      factor = factor * -1;
    }
    truckY = truckY + factor;
    image(truckImg, 50, truckY);
    truckImg.resize(0, 220);

    // Fill the screen with the headlight animation
    if (headlights) {
      fill(255);
      noStroke();
      circle(100, 300, r1);
      circle(300, 300, r2);
      r1 = r1 + 2.5;
      r2 = r2 + 2.5;
    }

    // When to change scenes
    if (r1 > 700) {
      sceneIndex = 0;
    }
  }
}

// What to do when the mouse is pressed in the second sceen
function mousePressed() {
  if (sceneIndex == 1) {
    if (car && mouseX > 320 && mouseX < 390 && mouseY > 250 && mouseY <         320) {
      // When scene 2 should change to scene 3
      sceneIndex++;
    } else {
      car = true;
    }
  }
}


function keyPressed() {
  // Start the headlights animation when the spacebar
  // is pressed
  if (key == ' ') {
    headlights = true;
  }
}

// Preload all of the images
function preload() {
  cloudImg1 = loadImage('cloud.png');
  cloudImg2 = loadImage('cloud.png');
  roadImg = loadImage('road.png');
  signImg = loadImage('sign.png');
  carImg = loadImage('car.png');
  carImg2 = loadImage('car.png');
  truckImg = loadImage('truck.png');
}
