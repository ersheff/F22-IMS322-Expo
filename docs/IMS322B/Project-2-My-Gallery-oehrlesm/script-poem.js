let scenes = ["butterfly", "snow", "flowers"];
let snowflakes = []; // array to hold snowflake objects
let cloudx = 100;
let cloudy = 100;
var bgcolor = (100, 100, 100);
var butterflySVG;




let sceneIndex = 0;

function setup() {
  createCanvas(600, 600);
  
}

function preload () {
  butterflySVG = loadImage("butterfly.svg");
}


function draw() {
  background('lightblue');
  let t = frameCount / 60;
  
  makeCloud(cloudx, cloudy-50);
  makeCloud(cloudx + 100, cloudy + 100)
  fill(220)
  noStroke();
  fill(300);
  cloudx+=0.1;
  blue--;
   flower();
  ground();
  

  function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 530, 600, 530);
}

  
function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}


  
  if (scenes[sceneIndex] === "butterfly") {
  let b = 'It is a blue-butterfly day here in spring,';
fill('blue');
text(b, 20, 20, 400, 400);
  }
    
  else if (scenes[sceneIndex] === "snow") {

 

    
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}


function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {

    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
  
  let t = 'And with these sky-flakes down in flurry on flurry';
fill('white');  
text(t, 20, 20, 400, 400);
}

  }
  else if (scenes[sceneIndex] === "flowers") {
    
 let s = 'There is more unmixed color on the wing, then flowers will show for days unless they hurry.';
fill('purple');
text(s, 20, 20, 400, 600);
    image(butterflySVG, 150,150, butterflySVG.width,butterflySVG.height );
  }


  
function flower() {
  //drawFlower();
  
  //flower1
  for (var r11 = 0; r11 < 10; r11++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(400, 550, 400, 400 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(400, 550, 400, 460);
    }
    noStroke();
  }

  push();
  fill(230, 190, 230, 240);
  translate(400, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(PI / 5);
  }
  pop();


  //flower2
  for (var r21 = 0; r21 < 10; r21++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(300, 580, 300, 430 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(300, 580, 300, 490);
    }
    noStroke();
  }
  
  push();
  fill(235, 194, 204, 240);
  translate(300, 430);
  noStroke();

  for (var r2 = 0; r2 < 10; r2++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
  
  
  //flower3
   for (var r31 = 0; r31 < 10; r31++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(180, 535, 180, 390 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(180, 535, 180, 435);
    }
    noStroke();
  }
  
  push();
  fill(245, 204, 174, 240);
  translate(180, 385);
  noStroke();
  for (var r3 = 0; r3 < 10; r3++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();

  
  //flower4
     for (var r41 = 0; r41 < 10; r41++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(510, 575, 510, 425 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(510, 575, 510, 485);
    }
    noStroke();
  }
  
  push();
  fill(245, 174, 154, 240);
  translate(510, 425);
  noStroke();
  for (var r4 = 0; r4 < 10; r4++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();

  //flower5
     for (var r51 = 0; r51 < 10; r51++) {
    stroke(85,107,47,20);
    strokeWeight(3);
    if (frameCount <= 600) {
      line(70, 600, 70, 450 + frameCount / 10);
    }
    if (frameCount > 600) {
      line(70, 600, 70, 510);
    }
    noStroke();
  }
  
  push();
  fill(245, 174, 184, 240);
  translate(70, 450);
  noStroke();
  for (var r5 = 0; r5 < 10; r5++) {
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50)
    }
    rotate(PI / 5);
  }
  pop();
  
}
  
}


function mousePressed() {
  sceneIndex++;
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
  }
  
}

