// Variable have been created to reference the audio file and play button. You will need to declare variable for your pause, skip ahead, and skip back buttons after they have been added to your HTML.
let musicFile = document.getElementById("music-file");
let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let backButton = document.getElementById("back-button");
let forwardButton = document.getElementById("forward-button");





// ----------

// This event listener handles the play function. You will need to add event listeners for the pause, skip ahead, and skip back buttons.
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
backButton.addEventListener("click", skipBack);
forwardButton.addEventListener("click", skipAhead);

// ----------

// Three of the four necessary functions have been created for you.
function playAudio() {
  musicFile.play();
  function incrementSeconds() {
    seconds += 1;
    el.innerText = "You pressed play " + seconds + " seconds ago. I cannot stop this timer. Neither can you. And that slider, it does nothing. Go nuts. You won't break anything.";
}

var cancel = setInterval(incrementSeconds, 1000);
}

function pauseAudio() {
  musicFile.pause();

}




function skipAhead() {
  // This function adds 5 seconds to the current time location of the audio file.
  musicFile.currentTime += 5;
  // The current time is logged to the console, just for your reference.
  console.log(musicFile.currentTime);
}


// Write your own skipBack function using the skipAhead function as a model.

function skipBack() {
  musicFile.currentTime -= 5;
  console.log(musicFile.currentTime)
}

var seconds = 0;
var el = document.getElementById('seconds-counter');











// Variables for your select and entry controls
let enterName = document.getElementById("first-name");

let enterDate = document.getElementById("date-selector");

let enterDwarf = document.getElementById("dwarf-radio");

let enterRace = document.getElementById("race-select");

let enterMovie = document.getElementById("fav-movie");




// Event listener(s) to gather information from your select and entry controls









// Function definitions for your event listeners

function firstNameOutput() {
  let nameOutput = document.getElementById("name-output");
  nameOutput.innerText = enterName.value;
}

function birthdayOutput() {
  let birthdayOutput = document.getElementById("birthday-output");
  birthdayOutput.innerText = enterDate.value;
}



function raceOutput() {
  let yourRaceOutput = document.getElementById("race-output");
  yourRaceOutput.innerText = enterRace.value;
}

function movieOutput() {
  let favMovieOutput = document.getElementById("movie-output");
  favMovieOutput.innerText = enterMovie.value;
}

function favDwarfOutput() {
            var ele = document.getElementsByName('fav-dwarf');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result-dwarf").innerHTML
                        = "Dwarf: "+ele[i].value;
            }
        }

function movieOutput() {
            var ele = document.getElementsByName('fav-movie');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                document.getElementById("result").innerHTML
                        = "Movie: "+ele[i].value;
            }
        }





let scenes = ["1", "2", "3"];


// ... and this index variable to step through the values in the scenes array

let sceneIndex = 0;
let x = 0;
let y = 0;
let d = 50;
let cX = 475;
let cY = 100;
let cR = 75;  
let r = 0;
let g = 175;
let b = 255;
let kX = 0;
let a = 100;


let img;
let img2;
let img3;
let img4;
let img5;


function preload() {

  img = loadImage('mountain.png');
  img2 = loadImage('trees.png');
  img3 = loadImage('carrot.png');
  img4 = loadImage('ghost.png');
  img5 = loadImage('tongue.png');
}

function setup() {
  let renderer = createCanvas(600, 400);
renderer.parent("square");
  textFont('Georgia');


}


function draw() {
  background(r, g, b, a);

    
  
  image(img, -50, 134, 400, 266);
  image(img2, 300, 335, 300, 86);




  
  
 
  if (scenes[sceneIndex] === "1") {

     fill("black");
    
    text("Consider a girl who keeps slipping off, arms limp as old carrots,", 10, 30);

   fill("yellow");

    circle(cX, cY, cR);



    image(img3, mouseX, mouseY, 100, 102);



 




  }

  else if (scenes[sceneIndex] === "2") {

    text("into the hypnotist's trance, into a spirit world,", 100, 70);

    
  if (x < 475 && r < 30) {
    fill("yellow")
  } else { fill("orange")
         g --
      
         r ++
         }
    if (x < 475 && b > 150) {
      b --
    }
    if ( r > 100) {
      r = 100
      b = 100

      
      image(img4, 300, 136, 100, 102);
    }
         
    
  circle(cX, cY, cR);



    fill("black");

 
      if (x < 475) {
        x += 4;
      }
      circle(x, 100, d);




  }


  else if (scenes[sceneIndex] === "3") {

   
    fill('white');
    text("speaking with the gift of tongues.", 200, 100);

    image(img5, 100, 136, 100, 102);
    translate(width / 2, height / 2);

    if (a > 50) {
      r ++
    }
    

    

    
  }
}

// keep in mind that your actual final interaction design may not use this specific mousePressed logic - this is a placeholder for now to be able to step through your scenes in rough draft form
function mousePressed() {
   
  sceneIndex++; 
  if (sceneIndex >= scenes.length) {
    sceneIndex = 0;
    x = 0;
    y = 0;
    d = 50;
    cX = 475;
    cY = 100;
    cR = 75;  
    r = 0;
    g = 175;
    b = 255;
    kX = 0;
    a = 100;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    sceneIndex++;
  } else if (keyCode === RIGHT_ARROW) {
    sceneIndex = 0;
  }
  }
function keyPressed() {
  
  return false; 
}  

