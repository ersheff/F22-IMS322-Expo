 // Variables for your select and entry controls

//name
let nameBio = document.getElementById("name");
let nameField = document.getElementById("name-field");

//favorite coffee shop
let favoriteBio = document.getElementById("favorite");
let shopField = document.getElementById("shop-field");

//favorite drinks
let latteBox = document.getElementById("latte");
let capBox = document.getElementById("cap");
let icedBox = document.getElementById("iced");
let espressoBox = document.getElementById("espresso");
let dripBox = document.getElementById("drip");
let americanoBox = document.getElementById("americano");

let submitButton = document.getElementById("submit");
let bioFavorite = document.getElementById("bio-favorite");

//where at
let whereAt = document.getElementById("where-at");

//cups per day
let cupsPerDay = document.getElementById("cups-per-day");

// Event listener(s) to gather information from your select and entry controls
submitButton.addEventListener("click", nameOutput);
submitButton.addEventListener("click", checkBoxSubmit);
submitButton.addEventListener("click", favShopFunc);
cupsPerDay.addEventListener("change", cupPerDayFunc);
whereAt.addEventListener("click", dailyCoffeeChoice);

// Function definitions for your event listeners

function nameOutput() {
  let nameResultString = "Name: ";
  let nameSection = nameBio.value;
  nameField.innerText = (nameResultString + nameSection);
}

function favShopFunc() {
  let shopResultString = "Favorite coffee shop: ";
  let favoriteSection = favoriteBio.value;
  shopField.innerText = (shopResultString + favoriteSection);
}

function checkBoxSubmit() {
  let resultString = "Favorite coffee drink(s): ";
  if (latteBox.checked) { resultString += "Latte, " };
  if (capBox.checked) { resultString += "Cappachino, " };
  if (icedBox.checked) { resultString += "Iced Coffee, " };
  if (espressoBox.checked) { resultString += "Espresso Shot," };
  if (dripBox.checked) { resultString += "Drip Coffee, " };
  if (americanoBox.checked) { resultString += "Americano, " };
  bioFavorite.innerText = resultString;
}

function cupPerDayFunc() {
  let numberPerDay = document.getElementById("cup-number");
  let output = document.querySelector('#cups-per-day option:checked').value;
  numberPerDay.innerText = ("Cups per day: " + output);
}

function dailyCoffeeChoice() {
  let coffeeOutput = document.getElementById("home-vs-cafe");
  let coffeeChoice = document.querySelector('input[name="where"]:checked').value;
  coffeeOutput.innerText = ("Prefers coffee from: " + coffeeChoice);
}