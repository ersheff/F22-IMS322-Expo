//Tab System
let photoTab = document.getElementById("photo-tab");
let questionTab = document.getElementById("question-tab");
let poemTab = document.getElementById("poem-tab");
let photoGallery = document.getElementById("photo-gallery");
let questionnaire = document.getElementById("questionnaire");
let poem = document.getElementById("poem");
let myHeader = document.getElementById("my-header");

photoTab.addEventListener("click", showPhotos);

questionTab.addEventListener("click", showQuestion);

poemTab.addEventListener("click", showPoem);

function showPhotos() {
  photoTab.classList.add("active-button");
  questionTab.classList.remove("active-button");
  poemTab.classList.remove("active-button");
  photoGallery.classList.remove("no-content");
  questionnaire.classList.add("no-content");
  poem.classList.add("no-content");
}

function showQuestion() {
  photoTab.classList.remove("active-button");
  questionTab.classList.add("active-button");
  poemTab.classList.remove("active-button");
  photoGallery.classList.add("no-content");
  questionnaire.classList.remove("no-content");
  poem.classList.add("no-content");
}

function showPoem() {
  photoTab.classList.remove("active-button");
  questionTab.classList.remove("active-button");
  poemTab.classList.add("active-button");
  photoGallery.classList.add("no-content");
  questionnaire.classList.add("no-content");
  poem.classList.remove("no-content");
}





//Questionnaire
let myName = document.getElementById("my-name");
let myDate = document.getElementById("my-date");
let myMovie = document.getElementById("my-movie");
let statusRadio = document.getElementById("status-radio");

//Checkbox variables
let sebastianCheckbox = document.getElementById("sebastian");
let shenziCheckbox = document.getElementById("shenzi");
let banzaiCheckbox = document.getElementById("banzai");
let pipCheckbox = document.getElementById("pip");
let stitchCheckbox = document.getElementById("stitch");
let bambiCheckbox = document.getElementById("bambi");
let mushuCheckbox = document.getElementById("mushu");
let pascalCheckbox = document.getElementById("pascal");
let svenCheckbox = document.getElementById("sven");


let submitButton = document.getElementById("submit");
let results = document.getElementById("results");

submitButton.addEventListener("click", checkboxSubmit);

function checkboxSubmit() {
//name
  let nameOutput = document.getElementById("name-output");
  let typedName = myName.value;
  nameOutput.innerText = typedName;

//date
  let dateOutput = document.getElementById("date-output");
  let inputDate = myDate.value;
  dateOutput.innerText = inputDate;

//movie
  let movieOutput = document.getElementById("movie-output");
  let selectMovie = myMovie.value;
  movieOutput.innerText = selectMovie;
  
  //checkbox
  let resultString = "";
  if (sebastianCheckbox.checked) { resultString += "Sebastian " };
  if (shenziCheckbox.checked) { resultString += "Shenzi " };
  if (banzaiCheckbox.checked) { resultString += "Banzai " };
  if (pipCheckbox.checked) { resultString += "Pip " };
  if (stitchCheckbox.checked) { resultString += "Stitch " };
  if (bambiCheckbox.checked) { resultString += "Bambi " };
  if (mushuCheckbox.checked) { resultString += "Mushu " };
  if (pascalCheckbox.checked) { resultString += "Pascal " };
  if (svenCheckbox.checked) { resultString += "Sven " };
  results.innerText = resultString;

//status
   let statusOutput = document.getElementById("status-output");
  let statusSelect =
document.querySelector('input[name="status"]:checked').value;
  statusOutput.innerText = statusSelect;
}
















//Poem
let scenes = ["one", "one", "one", "one", "one", "one", "two", "two", "two", "two", "two", "two", "three", "three", "three", "three", "three", "four", "four", "four", "four", "four", "four", "five"];
let circles = [];
let pumpkins = [];
let sceneIndex = 0;
let eaten1 = false;
let eaten2 = false;
let eaten3 = false;
let eaten4 = false;
let eaten5 = false;
let cut1 = false;
let cut2 = false;
let cut3 = false;
let cut4 = false;
let cut5 = false;

function preload() {
  archFont = loadFont('ArchitectsDaughter-Regular.ttf');
  tree = loadImage('tree.png');
  pumpkin = loadImage('pumpkin.png');
  butterfly = loadImage('monarch.png');
  flower = loadImage('butterflyweed.png');
  cat = loadImage('chicken-nugget-cat.png');
  tall = loadImage('tall-grass.png');
}

function setup() {
  let canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);
  canvas.parent('poem');
  imageMode(CENTER);
}

function draw() {
  background(255, 220, 180);
  if (scenes[sceneIndex] === "one") {
    image(tree, windowWidth/3, windowHeight/3.5, windowWidth/3.75, windowWidth/3.75);
    textSize(20);
    noStroke();
    fill(153, 56, 0);
    textAlign(CENTER)
    textFont(archFont)
    text("''Orange as the perfumed fruit", windowWidth/3, windowHeight/1.75);
    text("hanging their globes on the glossy tree,''", windowWidth/3, windowHeight/1.65);
    for (circ of circles) {
      fill(225, 155, 20)
      circle(circ.x, circ.y, windowHeight/24);
    }
  }

  else if (scenes[sceneIndex] === "two") {
    fill(153, 56, 0);
    textSize(20);
    text("''Orange as pumpkins in the field,''", windowWidth/3, windowHeight/1.70);
    image(pumpkin, windowWidth/6, windowHeight/3, windowWidth/5, windowWidth/5);
    image(pumpkin, windowWidth/3, windowHeight/3, windowWidth/5, windowWidth/5);
    image(pumpkin, windowWidth/2, windowHeight/3, windowWidth/5, windowWidth/5);
    for (pump of pumpkins) {
      image(pumpkin, pump.x, pump.y++, windowHeight/8, windowHeight/8);
    }

  }
  else if (scenes[sceneIndex] === "three") {
    text("''Orange as butterflyweed", windowWidth/3, windowHeight/1.75);
    text("and the monarchs who come to eat it,''", windowWidth/3, windowHeight/1.65);
    if (!eaten1) {
      image(flower, windowWidth/6, windowHeight/6, windowHeight/4, windowHeight/4);
    }
    if (!eaten2) {
      image(flower, windowWidth/2, windowHeight/3.125, windowHeight/5, windowHeight/5);
    }
    if (!eaten3) {
      image(flower, windowWidth/3, windowHeight/3, windowHeight/6, windowHeight/6);
    }
    if (!eaten4) {
      image(flower, windowWidth/5, windowHeight/2.5, windowHeight/5.5, windowHeight/5.5);
    }
    if (!eaten5) {
      image(flower, windowWidth/2.5, windowHeight/7, windowHeight/8, windowHeight/8);
    }
    image(butterfly, mouseX, mouseY, windowHeight/4, windowHeight/4);
  }
  else if (scenes[sceneIndex] === "four") {
    text("''Orange as my cat", windowWidth/3, windowHeight/1.75);
    text("running lithe through the high grass.''", windowWidth/3, windowHeight/1.65);
    image(cat, windowWidth/3.125, windowHeight/3, windowWidth/3.5, windowWidth/3.5);
    if (!cut1) {
      image(tall, windowWidth/6, windowHeight/3.25, windowWidth/4, windowHeight/2);
    }
    if (!cut2) {
      image(tall, windowWidth/4.5, windowHeight/3.25, windowWidth/4, windowHeight/2);
    }
    if (!cut3) {
      image(tall, windowWidth/3, windowHeight/3.25, windowWidth/4, windowHeight/2);
    }
    if (!cut4) {
      image(tall, windowWidth/2.5, windowHeight/3.25, windowWidth/4, windowHeight/2);
    }
    if (!cut5) {
      image(tall, windowWidth/2, windowHeight/3.25, windowWidth/4, windowHeight/2);
    }
  }
  else if (scenes[sceneIndex] === "five") {
    text("Exerpt from 'Colors Passing Through Us'", windowWidth/3, windowHeight/3);
    text("Written By Marge Piercy", windowWidth/3, windowHeight/2.75);
  }
}

window.onresize = resize;

function resize() {
winX = windowWidth;
winY = windowHeight;
}

function mousePressed() {
  //scene One
  let newCircle = {
    x: mouseX,
    y: mouseY
  }

  let newPumpkin = {
    x: mouseX,
    y: mouseY
  }

  if (scenes[sceneIndex] === "one" && mouseX > windowWidth/4.5 && mouseX < windowWidth/2.25 && mouseY < windowHeight/1.85 && mouseY > windowHeight/14) {
    circles.push(newCircle);
  }

  if (scenes[sceneIndex] === "two") {
    pumpkins.push(newPumpkin);
  }

  if (scenes[sceneIndex] === "three" && mouseX > windowWidth/10 && mouseX < windowWidth/5 && mouseY > windowHeight/12 && mouseY < windowHeight/3.5) {
    eaten1 = true;
  }
  if (scenes[sceneIndex] === "three" && mouseX > windowWidth/2.2 && mouseX < windowWidth/1.8 && mouseY > windowHeight/4.4 && mouseY < windowHeight/2.35) {
    eaten2 = true;
  }
  if (scenes[sceneIndex] === "three" && mouseX > windowWidth/3.5 && mouseX < windowWidth/2.75 && mouseY > windowHeight/4 && mouseY < windowHeight/2.35) {
    eaten3 = true;
  }
  if (scenes[sceneIndex] === "three" && mouseX > windowWidth/6.5 && mouseX < windowWidth/4.5 && mouseY > windowHeight/3 && mouseY < windowHeight/2) {
    eaten4 = true;
  }
  if (scenes[sceneIndex] === "three" && mouseX > windowWidth/2.75 && mouseX < windowWidth/2.25 && mouseY > windowHeight/12 && mouseY < windowHeight/5) {
    eaten5 = true;
  }

  if (scenes[sceneIndex] === "four" && mouseX > windowWidth/12 && mouseX < windowWidth/4.5 && mouseY > windowHeight/12 && mouseY < windowHeight/1.8) {
    cut1 = true;
  }
  if (scenes[sceneIndex] === "four" && mouseX > windowWidth/6 && mouseX < windowWidth/3.75 && mouseY > windowHeight/12 && mouseY < windowHeight/1.8) {
    cut2 = true;
  }
  if (scenes[sceneIndex] === "four" && mouseX > windowWidth/4 && mouseX < windowWidth/2.75 && mouseY > windowHeight/12 && mouseY < windowHeight/1.8) {
    cut3 = true;
  }
  if (scenes[sceneIndex] === "four" && mouseX > windowWidth/2.75 && mouseX < windowWidth/2 && mouseY > windowHeight/12 && mouseY < windowHeight/1.8) {
    cut4 = true;
  }
  if (scenes[sceneIndex] === "four" && mouseX > windowWidth/2.4 && mouseX < windowWidth/1.75 && mouseY > windowHeight/12 && mouseY < windowHeight/1.8) {
    cut5 = true;
  }

  if (scenes[sceneIndex] === "five") {
    circles.length = 0;
    pumpkins.length = 0;
  }


  //General
  if (mouseX > 0 && mouseX < windowWidth/1.5 && mouseY > 0 && mouseY < windowWidth/1.5) {
    sceneIndex++;
    if (sceneIndex > 23) {
      sceneIndex = 0;
      eaten1 = false;
      eaten2 = false;
      eaten3 = false;
      eaten4 = false;
      eaten5 = false;
      cut1 = false;
      cut2 = false;
      cut3 = false;
      cut4 = false;
      cut5 = false;
    }
  }
}