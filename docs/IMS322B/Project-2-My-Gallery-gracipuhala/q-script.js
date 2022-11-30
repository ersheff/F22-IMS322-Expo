// Variables for your select and entry controls
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let birthDate = document.getElementById("date-selector");
let cupcakeRadio = document.getElementById("cupcake-radio");
let cakeOutput = document.getElementById("cake-output");
let inputSlider = document.getElementById("slider");
let cupcakeName = document.getElementById("cupcake-name");
let submitButton = document.getElementById("submit-button");
// Event listener(s) to gather information from your select and entry controls

submitButton.addEventListener("click", submitForm)
// Function definitions for your event listeners

function submitForm() {
let firstNameOutput = document.getElementById("first-name-output");
  firstNameOutput.innerText = firstName.value;
  
let lastNameOutput = document.getElementById("last-name-output");
  lastNameOutput.innerText = lastName.value;

    let dateOutput = document.getElementById("date-output")
  dateOutput.innerText = birthDate.value;

  let cupcakeChoice = document.querySelector('input[name="fav-cupcake"]:checked').value;
cakeOutput.innerText = cupcakeChoice;

let sliderOutput = document.getElementById("slider-output");
sliderOutput.innerText = inputSlider.value;

let favoriteCupcakeOutput = document.getElementById("favorite-cupcake-output");
favoriteCupcakeOutput.innerText = cupcakeName.value;
}


