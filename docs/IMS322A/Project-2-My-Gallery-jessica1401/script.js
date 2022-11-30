// Variables for your select and entry controls
let nameInput = document.getElementById("name-input");
let birthdayInput = document.getElementById("birthday");
let bioInput = document.getElementById("bio")
let questionOne = document.getElementById("question1");
let questionTwo = document.getElementById("question2");
let questionThree = document.getElementById("question3");
  let retroCheckbox = document.getElementById("retro");
  let softgirlCheckbox = document.getElementById("softgirl");
  let y2kCheckbox = document.getElementById("y2k");
  let skaterCheckbox = document.getElementById("skater");
  let artsyCheckbox = document.getElementById("artsy");
  let results = document.getElementById("results");
let questionFour = document.getElementById("question4");
//let submitButton = document.getElementById("submit");

// Event listener(s) to gather information from your select and entry controls
nameInput.addEventListener("change", nameInputFunc);
birthdayInput.addEventListener("change", dobFunc);
bioInput.addEventListener("change", bioFunc);
questionOne.addEventListener("change", question1Func);
questionTwo.addEventListener("input", question2Func);
questionThree.addEventListener("input", question3Func);
questionFour.addEventListener("change", question4Func);
//submitButton.addEventListener("click", submitFunc);

// Function definitions for your event listeners

function nameInputFunc() {
  let nameOutput = document.getElementById("name-output");
  nameOutput.innerText = "Hello " + nameInput.value;
  //nameOutput.style.color = "#FF37A6";
  console.log(nameOutput);
}

function dobFunc() {
  let dobOutput = document.getElementById("dob-output");
  dobOutput.innerText = birthdayInput.value;
  console.log(outputdob);
}

function bioFunc() {
  let bioOutput = document.getElementById("bio-output");
  bioOutput.innerText = bioInput.value;
  console.log(outputbio);
}

function question1Func() {
  let output1 = document.getElementById("answer-one");
  output1.innerText="1. Your favorite item in the closet is " + questionOne.value;
  console.log(output1);
}

function question2Func() {
  let seasonChoice = document.querySelector('input[name="question2"]:checked').value;
  let seasonOutput=document.getElementById("answer-two");
  seasonOutput.innerText="2. Your fashion season is "+ seasonChoice;
  console.log(seasonChoice);
}

function question3Func() {
  let aesChoice = "3. Your aesthetic style is ";
  
  if (retroCheckbox.checked) { aesChoice += "Retro " };
  if (softgirlCheckbox.checked) { aesChoice += "Soft Girl " };
  if (y2kCheckbox.checked) { aesChoice += "Y2K " };
  if (skaterCheckbox.checked) { aesChoice += "Skater " };
  if (artsyCheckbox.checked) { aesChoice += "Artsy " };
  console.log(aesChoice);

  let aesOutput=document.getElementById("answer-three");
  aesOutput.innerText= aesChoice;
}

function question4Func() {
  let weekOutput = document.getElementById("answer-four");
  weekOutput.innerText = "4. The best Fashion Week is in "+questionFour.value;
  console.log(output4);
}
