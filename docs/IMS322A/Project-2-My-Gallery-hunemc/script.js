let firstButton = document.getElementById("first-button");
let secondButton = document.getElementById("second-button");
let thirdButton = document.getElementById("third-button");

let firstSlide = document.getElementById("slide1");
let secondSlide = document.getElementById("slide2");
let thirdSlide = document.getElementById("slide3");

firstButton.addEventListener("click", showOne);
secondButton.addEventListener("click", showTwo);
thirdButton.addEventListener("click", showThree);

function showOne() {
  firstSlide.classList.add("active");
  secondSlide.classList.remove("active");
  thirdSlide.classList.remove("active");
  firstButton.classList.add("active-button");
  secondButton.classList.remove("active-button");
  thirdButton.classList.remove("active-button");
}

function showTwo() {
  firstSlide.classList.remove("active");
  secondSlide.classList.add("active");
  thirdSlide.classList.remove("active");
  firstButton.classList.remove("active-button");
  secondButton.classList.add("active-button");
  thirdButton.classList.remove("active-button");
}

function showThree() {
  firstSlide.classList.remove("active");
  secondSlide.classList.remove("active");
  thirdSlide.classList.add("active");
  firstButton.classList.remove("active-button");
  secondButton.classList.remove("active-button");
  thirdButton.classList.add("active-button");
}



// Variables for your select and entry controls

let firstLastName = document.getElementById("first-last-name");
let birthDate = document.getElementById("birthday");
let selectLevel = document.getElementById("select-level");

let flStudioCheckbox = document.getElementById("flstudio");
let abletonCheckbox = document.getElementById("ableton");
let logicCheckbox = document.getElementById("logic");
let proToolsCheckbox = document.getElementById("protools");
let otherCheckbox = document.getElementById("other");

let aboutMe = document.getElementById("about-me");

let submitButton = document.getElementById("submit-button");

let nameResult = document.getElementById("name-result");
let levelResult = document.getElementById("level-result");
let dawResult = document.getElementById("daw-result");
let aboutResult = document.getElementById("about-result");
let dateResult = document.getElementById("date-result");

// Event listener(s) to gather information from your select and entry controls

submitButton.addEventListener("click", checkboxSubmit);
submitButton.addEventListener("click", nameSubmit);
submitButton.addEventListener("click", levelSubmit);
submitButton.addEventListener("click", aboutSubmit);
submitButton.addEventListener("click", birthdaySubmit);

// Function definitions for your event listeners
function nameSubmit() {
let nameResults = "My name is: " + firstLastName.value;
nameResult.innerText = nameResults;
}

function checkboxSubmit() {
  let checkboxResults = "The DAW(s) I use are: ";
  if (flStudioCheckbox.checked) { checkboxResults += "FL Studio " };
  if (abletonCheckbox.checked) { checkboxResults += "Ableton Live " };
  if (logicCheckbox.checked) { checkboxResults += "Logic Pro " };
  if (proToolsCheckbox.checked) { checkboxResults += "Pro Tools" };
  if (otherCheckbox.checked) { checkboxResults += "Other" };

  dawResult.innerText = checkboxResults;
}

function levelSubmit() {
  let levelResults = "My producing level is: " + selectLevel.value;
  levelResult.innerText = levelResults;  
}

function aboutSubmit() {
  let aboutResults = "My alias is: " + aboutMe.value;
  aboutResult.innerText = aboutResults;
}

function birthdaySubmit() {
  let dateResults = "I was born on: " + birthDate.value;
dateResult.innerText = dateResults;
}




let distanceFromHome = [27, 216, 110, 11, 280, 20, 95, 150, 1162, 45, 237, 722, 133, 244, 947, 411, 285, 7287, 8817];

let dogs = [3, 0, 2, 0, 2, 0, 0, 2, 1, 1, 1, 2, 0, 1, 4, 3, 2, 1, 0];
let cats = [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 2, 0, 0, 0, 0];
let birds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0];
let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 0, 0];
let rabbits = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
let reptiles = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let other = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let averageDistance = 0;
let averageDistanceResult = document.getElementById("average-distance");

for (let y = 0; y < distanceFromHome.length; y++) {
  averageDistance += distanceFromHome[y];
  averageDistanceResult.innerText = "The average distance traveled is: " + (averageDistance / (y + 1));
}

let totalDistance = 0;
let totalDistanceResult = document.getElementById("total-distance");

for (let i = 0; i < distanceFromHome.length; i++) {
  totalDistance += distanceFromHome[i];
  totalDistanceResult.innerText = "The total distance traveled is: " + totalDistance;
}

let totalDogs = 0;
let totalDogsResult = document.getElementById("total-dogs");

for (let d = 0; d < dogs.length; d++) {
  totalDogs += dogs[d];
  totalDogsResult.innerText = "The total number of dogs is: " + totalDogs;
}

let totalCats = 0;
let totalCatsResult = document.getElementById("total-cats");

for (let c = 0; c < cats.length; c++) {
  totalCats += cats[c];
  totalCatsResult.innerText = "The total number of cats is: " + totalCats;
}

let totalBirds = 0;
let totalBirdsResult = document.getElementById("total-birds");

for (let b = 0; b < birds.length; b++) {
  totalBirds += birds[b];
  totalBirdsResult.innerText = "The total number of birds is: " + totalBirds;
}

let totalFish = 0;
let totalFishResult = document.getElementById("total-fish");

for (let f = 0; f < fish.length; f++) {
  totalFish += fish[f];
  totalFishResult.innerText = "The total number of fish is: " + totalFish;
}

let totalRabbits = 0;
let totalRabbitsResult = document.getElementById("total-rabbits");

for (let r = 0; r < rabbits.length; r++) {
  totalRabbits += rabbits[r];
  totalRabbitsResult.innerText = "The total number of rabbits is: " + totalRabbits;
}

let totalReptiles = 0;
let totalReptilesResult = document.getElementById("total-reptiles");

for (let l = 0; l < reptiles.length; l++) {
  totalReptiles += reptiles[l];
  totalReptilesResult.innerText = "The total number of reptiles is: " + totalReptiles;
}

let totalOther = 0;
let totalOtherResult = document.getElementById("total-other");

for (let o = 0; o < other.length; o++) {
  totalOther += other[o];
  totalOtherResult.innerText = "The total number of other is: " + totalOther;
}


anychart.onDocumentReady(function() {

  // set the data
  var data = [
      {x: "Dogs", value: totalDogs},
      {x: "Cats", value: totalCats},
      {x: "Birds", value: totalBirds},
      {x: "Fish", value: totalFish},
      {x: "Rabbits", value: totalRabbits},
      {x: "Reptiles", value: totalReptiles},
      {x: "Other", value: totalOther}
  ];

  // create the chart
  var chart = anychart.pie();

  // add the data
  chart.data(data);

  // display the chart in the container
  chart.container('container');
  chart.draw();

});