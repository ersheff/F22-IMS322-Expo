// suggested method - use this array to store the names for your scenes as strings...
let scenes = ["scene1", "scene2", "scene3"];
let flower;
let valley;
let people;
let tower;
let stars;
let bloomingFlower;
let lilyFlower;
let peopleWhite;
let windSound;
let bkgSound;
let button;

var scene1 = true;
var scene2 = false;
var scene3 = false;
var scene4 = false;



// ... and this index variable to step through the values in the scenes array
let sceneIndex = 0;

function setup() {
  let canvas = createCanvas(650, 450);
  canvas.parent("sketch-holder");
  textSize(20);
  textFont("Indie Flower");
  windSound.playMode("restart");
  bkgSound.playMode("restart");


  xStar=-40;
  yStar = 0;}

function preload() {
  valley = loadImage('images/valley.svg');
  people = loadImage('images/people.png');
  wind = loadImage('images/wind.png');
  tower = loadImage('images/tower.png');
  stars = loadImage('images/star.png');
  flower = loadImage('images/flower.png');
  bloomingFlower = loadImage('images/blooming-flower.png');
  lilyFlower = loadImage('images/lily-flower.png');
  peopleWhite = loadImage('images/people-white.png');
  windSound = loadSound("windSound.wav");
  bkgSound = loadSound("nightsky.mp3");

}

let x = 30;
let isFading = false;
let fadeAlpha = 0 ;


function draw() { 
  background(220);
  if (scenes[sceneIndex] === "scene1"){
	  drawScene1();
  } else if (scenes[sceneIndex] === "scene2"){
    // do more stuff
    drawScene2();
  } else if (scenes[sceneIndex] === "scene3"){
    // do even more stuff
    drawScene3();
  } else if (scenes[sceneIndex] === "scene4"){
    // soo much stuff
    drawScene4();
  }
  
}

function drawScene1() {
  background(99, 123, 186);
    // scene 1 content
    text("Once it smiled a silent dell", 50, 50);
    text("Where the people did not dwell;", 50, 80);
    text("(Click the right arrow to move the soldier)",280,440);
    fill(255, 255, 255);
    image(valley, 0, 0);
    image(wind, mouseX / 2.5, mouseY / 2.5);

  button = createButton('Start the journey!');
  button.position(10,470);
  button.mousePressed(playSound);

    if (keyCode == LEFT_ARROW) {
      x--;
    }
    else if (keyCode == RIGHT_ARROW) {
      x++;
    }
    else { x = 30 }
    image(people, x, 170);
    if (x > 500) {
      sceneIndex++
    }
  }


let xStar,yStar;

function drawScene2(){
    // scene 2 content
    background(255);
    fill("black");
    text("It started to get dark...",250,190);
    fill(0, 0, 0, fadeAlpha);
    square(0, 0, width);
    if (isFading) {
    if ((fadeAlpha+=3) > 255) {
      fadeAlpha = 255;
    }
  }

    fill("white");
    text("They had gone unto the wars,", 50, 50);
    text("Trusting to the mild-eyed stars,", 50, 80);
     
    image(peopleWhite, mouseX, 100, peopleWhite.width/2, peopleWhite.height/2 );
    image(peopleWhite, mouseX+150, 190, peopleWhite.width/2, peopleWhite.height/2 );
    image(peopleWhite, mouseX-250,250, peopleWhite.width/2, peopleWhite.height/2 );
   image(peopleWhite, mouseX-107,200, peopleWhite.width/2, peopleWhite.height/2 );
   image(peopleWhite, mouseX+175,110, peopleWhite.width/2, peopleWhite.height/2 );
   image(peopleWhite, mouseX+320,280, peopleWhite.width/2, peopleWhite.height/2 );
   image(peopleWhite, mouseX-333,140, peopleWhite.width/2, peopleWhite.height/2 );

  
    image(stars, xStar, yStar);
    if(yStar++ > 600) {
      sceneIndex++}
    //xStar = random(-250,400);
    //yStar = 0;}
  
 
  button = createButton('Click to see the stars');
  button.position(10,470);
  button.mousePressed(getDark);
  }
let flowerImageW = 0;
let flowerImageH = 0;

  function drawScene3 (){
    //scene 3 content
    background(0);
    text("Nightly, from their azure towers,", 50, 50);
    text("To keep watch above the flowers,", 50, 80);
    fill(255, 232, 130);
    image(tower, 0, 0);
    image(stars, xStar, yStar);
    
    image(stars, xStar, yStar);
    if(yStar++ > 600) { 
      xStar = random(-250,400);
      yStar = 0;}
    
    //scale(mouseX/20, mouseY/20);
    //let flowerImageW = bloomingFlower.width/1.5;
    //let flowerImageH = bloomingFlower.height/1.5;
    image(bloomingFlower, 270, 280, flowerImageW,flowerImageH);
    
    if(flowerImageH++ > bloomingFlower.height/2) {
    //flowerImageW = 0;
    flowerImageH = 0;
    }
// flowerImageW++ > bloomingFlower.width/1.5 &&
    //if(flowerImageH++ > height) {
    //flowerImageH = 0;}
    

    let lilyImageW = lilyFlower.width/1.5;
    let lilyImageH = lilyFlower.height/1.5;
    image(lilyFlower, 520, 280, lilyImageW, lilyImageH);}
    
    



// keep in mind that your actual final interaction design may not use this specific mousePressed logic - this is a placeholder for now to be able to step through your scenes in rough draft form


function getDark(){
  isFading = true;
}

function playSound(){
  bkgSound.play();
}