let visable = false;
let visableButton = document.getElementById('poem_toggle');
visableButton.addEventListener("click", toggleVisable);


  let body = document.body;
  let system;
  let ShapeSize = 5;
  let oSize = (ShapeSize*Math.sqrt(2))/2;
  let allSystems = [];
  let snowing = true;
  let scene = ['mountain', 'slope', 'white'];
  let sceneIndex = 0;
  let imageRotation = 0;
  let reverse = false;
  let finalSquare = 0;
  let musicVar = 0;
  let mOffset = 0;
  
  function preload() {
    myImage = loadImage("Music.png");
  }
  function setup() {
    createCanvas(windowWidth, windowHeight);
    let Spacing = windowWidth/5;
     allSystems.push(new ParticleSystem(createVector(Spacing, -20)));
     allSystems.push(new ParticleSystem(createVector(Spacing*2, -20)));  
     allSystems.push(new ParticleSystem(createVector(Spacing*3, -20)));  
     allSystems.push(new ParticleSystem(createVector(Spacing*4, -20)));
    // allSystems.push(new ParticleSystem(createVector(Spacing*5, -20)));
  
    mOffset = windowHeight;
  }

  function draw() {
    resizeCanvas(windowWidth, windowHeight);
    let MSpacing = windowHeight/7;
    background(51);
    if (snowing){ 
      allSystems.forEach(function(system){
      system.addParticle();
      system.run();
      });
    }
    if (sceneIndex === 0){
      fill('gray');
      triangle(0,windowHeight+mOffset, 0, 0+mOffset, windowWidth/2, windowHeight+mOffset);
      if (mOffset <= 30) {
        strokeWeight(2);
        fill('white');
        text(' This is where I sat', 50,(windowHeight/5)*4-100);
        text('In the avalanche.', 50,(windowHeight/5)*4-85);
        text('In winter', 50,(windowHeight/5)*4-70);
      }
      finalSquare = 0;
      if (mOffset > 0){
        mOffset-=5;
      }
   }
    else if (sceneIndex === 1){
      textAlign(CENTER);
      mOffset = windowHeight;
      strokeWeight(0);
      background(0);
      fill('white');
      text('First, song,', windowWidth/2,windowHeight/2-30);
      text('a detonation', windowWidth/2,windowHeight/2);
      let imgW = myImage.width;
      let imgH = myImage.height;
      imageMode(CENTER);
      
      push()
      translate(windowWidth-100, MSpacing*2);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(100, MSpacing*2);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(windowWidth-100, MSpacing*3);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(100, MSpacing*3);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(windowWidth-100, MSpacing*4);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(100, MSpacing*4);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(windowWidth-100, MSpacing*5);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      push()
      translate(100, MSpacing*5);
      rotate(imageRotation);
      tint(255, musicVar);
      image(myImage, 0, 0, imgW/4, imgH/4);
      pop()
      musicVar++;
      if (reverse){
        imageRotation -= .01;
      }
      else{
        imageRotation += .01;
      }
      if (imageRotation >= .2){
        reverse = true;
      }
      else if (imageRotation <= -.2){
        reverse = false;
      }
    }
    else if (sceneIndex === 2){
      musicVar = 0;
      fill(finalSquare);
      square(0,0,9999);
      fill('black');
      finalSquare++;
      if (finalSquare >= 100){
        text('...Then White Everywhere', windowWidth/2,windowHeight/2);
      }
   }
  
  }
  function mousePressed() {
    console.log("click");
    sceneIndex++
    if (sceneIndex > 2){
      sceneIndex = 0;
    }
    if (sceneIndex === 0){
      snowing = true;
    }
    else {
      snowing = false;
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // A simple Particle class
  let Particle = function(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 360;
  };
  
  Particle.prototype.run = function() {
    this.update();
    this.display();
  };
  
  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };
  
  // Method to display
  Particle.prototype.display = function() {
    stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    line(this.position.x+ShapeSize, this.position.y, this.position.x-ShapeSize, this.position.y);
    line(this.position.x, this.position.y+ShapeSize, this.position.x, this.position.y-ShapeSize);
    line(this.position.x+oSize, this.position.y+oSize, this.position.x-oSize, this.position.y-oSize);
    line(this.position.x-oSize, this.position.y+oSize, this.position.x+oSize, this.position.y-oSize);
  };
  
  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    return this.lifespan < 0;
  };
  
  let ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };
  
  ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
  };
  
  ParticleSystem.prototype.run = function() {
    for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

body.classList.add('CanvasInactive');
function toggleVisable(){
  if (visable) {
    visable = false
    body.classList.remove('CanvasInactive');
     }
    
  else {
    visable = true
    body.classList.add('CanvasInactive');
  }
}