// Variables for your select and entry controls
let enterName = document.getElementById("first-name");

let birthDate = document.getElementById ("birthday");
let birthOutput = document.getElementById ("birth-output");

let tCheckbox = document.getElementById("t");
let fCheckbox = document.getElementById("f");
let sCheckbox = document.getElementById("s");
let rCheckbox = document.getElementById("r");
let nineCheckbox = document.getElementById("nine");
let repCheckbox = document.getElementById("rep");
let lCheckbox = document.getElementById("l");
let flCheckbox = document.getElementById("fl");
let eCheckbox = document.getElementById("e");

let submitButton = document.getElementById("submit");
let results = document.getElementById("results");

let enterYears = document.getElementById("years");

let enterTour = document.getElementById ("tour");

  
// Event listener(s) to gather information from your select and entry controls

enterName.addEventListener("change", firstNameOutput);

birthDate.addEventListener("change", birthChooser);


submitButton.addEventListener("click", checkboxSubmit);

enterYears.addEventListener("change", yearsOutput);

enterTour.addEventListener("change", tourOutput);





// Function definitions for your event listeners
function firstNameOutput() {
  let nameOutput = 
document.getElementById("name-output");
  nameOutput.innerText = enterName.value;
  nameOutput.style.color = "white";
}

function birthChooser() {
    let birthOutput = 
document.getElementById("birth-output");
  birthOutput.innerText = birthDate.value;
}

function checkboxSubmit() {
  let resultString = "Your favorites: ";

  if (tCheckbox.checked) { resultString += "Taylor Swift " };
  if (fCheckbox.checked) { resultString += "Fearless " };
  if (sCheckbox.checked) { resultString += "Speak Now " };
  if (rCheckbox.checked) { resultString += "Red " };
  if (nineCheckbox.checked) { resultString += "1989 " };
  if (repCheckbox.checked) { resultString += "Reputation " };
  if (lCheckbox.checked) { resultString += "Lover " };
  if (flCheckbox.checked) { resultString += "Folklore " };
  if (eCheckbox.checked) { resultString += "Evermore " };

  results.innerText = resultString;

}

function yearsOutput() {
  let yearsOutput = 
document.getElementById("years-output");
  yearsOutput.innerText = enterYears.value;
  yearsOutput.style.color = "white";

}

function tourOutput () {
    let tourOutput = 
document.getElementById("tour-output");
  tourOutput.innerText = enterTour.value;
  tourOutput.style.color = "white";
}


