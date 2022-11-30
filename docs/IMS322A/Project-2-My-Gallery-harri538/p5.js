let scenes = ["sun", "hearts", "dim"];
let sceneIndex = 0;

let dia = 0;
let growAmount = 1;
let grow = true;

let heart;

function preload () {
  heart = loadImage("heart.png");
}


function setup() {
  createCanvas(700, 500).parent("p5-canvas");
}

function draw() {
  background("lightblue");
  noStroke();
  fill("yellow");
  circle(600, 80, dia);
  if (dia > 110) {grow = false;}
  if (dia < 80) {grow = true;}
  if (grow == true) {dia += growAmount;} 
  else {dia -= growAmount;}
      
  if (scenes[sceneIndex] === "sun") {
    fill("white")
    textAlign(CENTER);
        textStyle(BOLD);
        textSize(20);
        textFont('Georgia');
    text("Oh, somewhere in this favoured land the sun is shining bright", width/2, height/2)
   // Green Ground
  noStroke();
  fill(0,100,0);// rgb
  rect(0,350,width,500);
  }

 else if (scenes[sceneIndex] === "hearts") {
   background("lightblue");
   textAlign(CENTER);
   image(heart, 50, 20, 100, 100);
   image(heart, 200, 20, 100, 100);
   image(heart, 400, 20, 100, 100);
   image(heart, 550, 20, 100, 100);
   fill("white")
    textAlign(CENTER);
    text("The band is playing somewhere, and somewhere hearts are light;", width/2,  height -325)
    text("And somewhere men are laughing, and somewhere children shout", width/2, height -170)
      // Green Ground
  noStroke();
  fill(0,100,0);// rgb
  rect(0,350,width,500);

   
}
    else if (scenes[sceneIndex] === "dim") {
    background("#d0d486");
    textAlign(CENTER);
    text("But there is no joy in Mudville - mighty Casey has struck out.", width/2,  height/2)
    }  
  }
  



function mousePressed() {
  sceneIndex++;
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
}