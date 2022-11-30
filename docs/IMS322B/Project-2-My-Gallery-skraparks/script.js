let enterName = document.getElementById("full-name");

let enterBday = document.getElementById("birthday");

let lizardSelect = document.getElementById("lizard-select");

let foodRadio = document.getElementById("food-radio");

let nameSelect = document.getElementById("name-select");



enterName.addEventListener("change", fullNameOutput);

enterBday.addEventListener("change", birthdayOutput);

lizardSelect.addEventListener("change", lizardOutput);

foodRadio.addEventListener("input", foodSelection);

nameSelect.addEventListener("change", nameOutput);


function fullNameOutput() {
  let nameOutput = document.getElementById("name-output");
  nameOutput.innerText = enterName.value;
  nameOutput.style.color = "white";
  nameOutput.style.backgroundColor = "green";
}

function birthdayOutput() {
  let bdayOutput = document.getElementById("bday-output");
  bdayOutput.innerText = enterBday.value;
  bdayOutput.style.color = "white";
  bdayOutput.style.backgroundColor = "green";
}

function lizardOutput() {
  let lizardChoice = lizardSelect.value;
  console.log(lizardChoice);
}


function foodSelection() {
  let foodChoice = document.querySelector('input[name="liz-food"]:checked').value;
  console.log(foodChoice);
}

function nameOutput() {
  let nameChoice = nameSelect.value;
  console.log(nameChoice);
}