//Name Age Brith
let myText = document.getElementById("my-text");
let myText1 = document.getElementById("my-text1");
let myText2 = document.getElementById("my-text2");

myText.addEventListener("change", myTextFunc);
myText1.addEventListener("change", myText1Func);
myText2.addEventListener("change", myText2Func);

function myTextFunc(){
  let output = myText.value;
  console.log(output);
}
function myText1Func(){
  let output = myText1.value;
  console.log(output);
}
function myText2Func(){
  let output = myText2.value;
  console.log(output);
}

//Choose your favourite payment
let paymentRadio = document.getElementById("payment");

paymentRadio.addEventListener("input", paymentSelection);

function paymentSelection(){
  let paymentChoice = document.querySelector('input[name="payment-option"]:checked').value;
  console.log(paymentChoice);
}

//Proportion of payment
let numberSelect = document.getElementById("number-select");

numberSelect.addEventListener("change",numberOutput);

function numberOutput(){
  let numberChoice = numberSelect.value;
  console.log(numberChoice);
}

//Has an accident occurred
let riskRadio =document.getElementById("risk");

riskRadio.addEventListener("input", riskSelection);

function riskSelection(){
  let riskChoice = document.querySelector('input[name="yesno-option"]:checked').value;
  console.log(riskChoice);
}

//How can I help you
let myReport = document.getElementById("report");

myReport.addEventListener("change", myReportFunc);

function myReportFunc(){
  let output2 = myReport.value;
  console.log(output2);
}



let submitButton=document.getElementById("submit-button");
let showData=document.getElementById("show-data");
submitButton.addEventListener("click",submitButtonFunc);

function submitButtonFunc(){
  showData.innerText= "Name: " + myText.value 
    + "\nJob: " + myText1.value + "\nBrith: " + myText2.value +"\nChoose your favourite payment：" +  document.querySelector('input[name="payment-option"]:checked').value + "\nProportion of payment: " + numberSelect.value + "\nHas an accident occurred? " + document.querySelector('input[name="yesno-option"]:checked').value + "\nHow can I help you? " + myReport.value;
}









var audio = document.getElementById("music-file");
// Three of the four necessary functions have been created for you.
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}










let distanceFromHome = [27, 216, 110, 11, 280, 20, 95, 150, 1162, 45, 237, 722, 133, 244, 947, 411, 285, 7287, 8817];

totalDistance=0;
for (df of distanceFromHome){
  totalDistance+=df;
}
let avgDistance=totalDistance/distanceFromHome.length;

let dogs = [2,7,6,1,4,1,3,5,5,3,7,1]; //blue
let cats = [3,1,5,6,6,2,4,2,4,7,4,5]; //red
let birds = [7,3,4,2,3,5,6,1,2,5,6,2]; //yellow  
let fish = [1,6,2,4,5,3,7,3,5,6,3,4]; //green
let rabbits = [4,2,7,5,7,4,1,6,1,4,1,7]; //purple
let reptiles = [6,5,3,3,1,7,5,4,7,1,2,6]; //orange
let other = [5,4,1,7,2,6,2,7,3,2,5,3]; //black


var totalDogs=0; //blue
var totalCats=0; //red
var totalBirds=0; //yellow
var totalFish=0; //green
var totalRabbits=0; //purple
var totalReptiles=0; //orange
var totalOther=0; //black


for (d of dogs){
  totalDogs+=d;  
}

for (c of cats){
  totalCats+=c;  
}

for (b of birds){
  totalBirds+=b;  
}

for (f of fish){
  totalFish+=f;  
}

for (ra of rabbits){
  totalRabbits+=ra;  
}

for (re of reptiles){
  totalReptiles+=re;  
}

for (o of other){
  totalOther+=o;  
}

var totalPets = 0;
for (var i=0; i<dogs.length; i++) {
  totalPets += dogs[i] +  fish[i] + rabbits[i];
}





console.log(totalPets);
let totalPs = document.getElementById('total-p');
totalPs.innerHTML = `${totalPets}`




console.log(totalDogs);
let rectangle = document.getElementById('rectangle');
let totalWidth = document.getElementById('total');
rectangle.style.width = `${totalDogs*15}px`
totalWidth.innerHTML = `${totalDogs}`

console.log(totalCats);
let rectangle1 = document.getElementById('rectangle1');
let totalWidth1 = document.getElementById('total1');
rectangle1.style.width = `${totalCats*15}px`
totalWidth1.innerHTML = `${totalCats}`

console.log(totalBirds);
let rectangle2 = document.getElementById('rectangle2');
let totalWidth2 = document.getElementById('total2');
rectangle2.style.width = `${totalBirds*15}px`
totalWidth2.innerHTML = `${totalBirds}`


console.log(totalFish);
let rectangle3 = document.getElementById('rectangle3');
let totalWidth3 = document.getElementById('total3');
rectangle3.style.width = `${totalFish*15}px`
totalWidth3.innerHTML = `${totalFish}`

console.log(totalRabbits);
let rectangle4 = document.getElementById('rectangle4');
let totalWidth4 = document.getElementById('total4');
rectangle4.style.width = `${totalRabbits*15}px`
totalWidth4.innerHTML = `${totalRabbits}`

console.log(totalReptiles);
let rectangle5 = document.getElementById('rectangle5');
let totalWidth5 = document.getElementById('total5');
rectangle5.style.width = `${totalReptiles*15}px`
totalWidth5.innerHTML = `${totalReptiles}`

console.log(totalOther);
let rectangle6 = document.getElementById('rectangle6');
let totalWidth6 = document.getElementById('total6');
rectangle6.style.width = `${totalOther*15}px`
totalWidth6.innerHTML = `${totalOther}`