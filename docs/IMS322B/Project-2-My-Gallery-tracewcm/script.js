let musicFile = document.getElementById("music");
let playButton = document.getElementById("audio-file");
let skipBack = document.getElementById("skip-back")
let skipForward = document.getElementById("skip-forward")


playButton.addEventListener("click", playButton);


play-button.addEventListener("click", play1);


function playAudio() {
  music.play();
}




// Arrays for Section B survey result data


// distance
let distanceFromHome = [0, 213, 878, 252, 270, 315, 249, 43, 887, 411, 8878, 300, 38, 459, 198, 275, 295];
let totalDist = 0

for (dist of distanceFromHome) {
  totalDist += dist
}

averageDist = totalDist / distanceFromHome.length

console.log("The average distance from home is", averageDist)
console.log("The total distance from home is", totalDist)


// pets data
let dogs = [1, 0, 1, 0, 2, 0, 2, 1, 1, 3, 0, 1, 1, 1, 1, 0, 0];
let cats = [2, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let birds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let fish = [0, 5, 0, 0, 8, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0];
let rabbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0];
let reptiles = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0];
let other = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];

// total pets
let totalPets = 0;

// pet counts if needed
let totalDogs = 0;
let totalCats = 0;
let totalBirds = 0;
let totalFish = 0;
let totalRabbits = 0;
let totalReptiles = 0;
let totalOther = 0;

for (d of dogs){
  totalPets += d;
  totalDogs += d;
}

for (c of cats){
  totalPets += c;
  totalCats +=c;
}

for (b of birds){
  totalPets += b;
  totalBirds
}

for (f of fish){
  totalPets += f;
  totalFish += f;
}

for (ra of rabbits){
  totalPets += ra;
  totalRabbits += ra;
}

for (re of reptiles){
  totalPets += re;
  totalReptiles += re;
}

for (o of other){
  totalPets += o;
  totalOther += o;
}

console.log("The total number of pets is", totalPets);
console.log("The total number of dogs is", totalDogs);
console.log("The total number of cats is", totalCats);
console.log("The total number of birds is", totalBirds);
console.log("The total number of fish is", totalFish);
console.log("The total number of rabbits is", totalRabbits);
console.log("The total number of reptiles is", totalReptiles);
console.log("The total number of other is", totalOther);