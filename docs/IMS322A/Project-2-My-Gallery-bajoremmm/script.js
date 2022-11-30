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
  sceneIndex = 0;
}




// P5 PROJECT 
// suggested method - use this array to store the names for your scenes as strings...
let scenes = ["Love", "Words","Alive"];
let sceneIndex = 0;
let img;
let snowflakes = [];
let x, y;
let t = 0;
let noseX = 200;
let noseY = 100;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const offsetMin = -100;
const offsetMax = 100;
const offsets = [getRandomInt(offsetMin, offsetMax), getRandomInt(offsetMin, offsetMax), getRandomInt(offsetMin, offsetMax), getRandomInt(offsetMin, offsetMax), getRandomInt(offsetMin, offsetMax), getRandomInt(offsetMin, offsetMax)]

// img
function preload(){
  img = loadImage("heart.svg");
  img2 = loadImage("snowman.svg");
  img3 = loadImage("nose.svg");
}

function setup() {
  let myCanvas= createCanvas(400, 400);
  myCanvas.parent("section3");
  textSize(16);
  fill(240);
  noStroke();
  textStyle(BOLD);
   x = width / 2;
   y = height;
}

function draw() {
  background(100);

  // scene 1 content 
  if (scenes[sceneIndex] === "Love") {
    background(255, 192, 203);
    fill('Red');
    text("Feed yourself with love,", 50, 50);
    image(img, 225, y + offsets[0], img.width/4, img.height/4);
    image(img, 100, y + offsets[1], img.width/2, img.height/2);
    image(img, 300, y + offsets[2], img.width/8, img.height/8);
    image(img, 50, y + offsets[3], img.width/4, img.height/4);
    image(img, 400, y + offsets[4], img.width/2, img.height/2);
    image(img, 10, y + offsets[5], img.width/8, img.height/8);

  y = y - 1; 
  if (y < 0) {
    y = height;
  }

  }
// scene 1 content end
    
  // scene 2 content 
    else if (scenes[sceneIndex] === "Words") {
      background(173, 216, 230);
      image(img2, 80, 50,img2.width/2, img2.height/2);
      image(img3, noseX, noseY,img3.width/2, img3.height/2);
      
      fill('blue');
      text("hope,", 50,50);
      text("and healing words", 250, 350);
      fill('white');
      let t = frameCount / 60; // update time

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
// scene 2 content end 
      
      // scene 3 content
  }
    else if (scenes[sceneIndex] === "Alive") {
noStroke();
fill(40, 200, 40);
background("green"); 

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
     
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); 
    }
  }

  t = t + 0.01; 
      fill('white');
      text("There is no other way to feel", 50, 50);
text("ALIVE!", 250, 350)
      
      // scene 3 content
  }
}


function mousePressed() {
  
    if (scenes[sceneIndex] === "Love"){
if (mouseX > 0 && mouseY < 400) {
  sceneIndex ++ ;
  console.log(mouseX, mouseY);
 }
    }

if (scenes[sceneIndex] === "Words"){ 
  if (mouseX > 130  && mouseX < 180, mouseY > 100 && mouseY < 150) {
  sceneIndex ++ ; 
  } 
}

  if (scenes[sceneIndex] === "Alive"){
    if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
 }
}

function mouseDragged() {
  noseX = mouseX - 50;
  noseY = mouseY - 50;
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
