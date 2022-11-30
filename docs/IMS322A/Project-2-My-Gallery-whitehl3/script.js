let firstName =
  document.getElementById("firstname");
let firstOutput =
  document.getElementById("first-output");
let lastName =
  document.getElementById("lastname");
let lastOutput=
  document.getElementById("last-output");
let birthDate =
  document.getElementById("birthday");
let birthOutput=
  document.getElementById("birth-output");
let homeState=
  document.getElementById("state");
let stateOutput=
  document.getElementById("state-output");
let email=
  document.getElementById("email");
let emailOutput=
  document.getElementById("email-output");
let cryptids=
  document.getElementById("cryptids");
let cryptidOutput=
  document.getElementById("cryptid-output");
let submit =
  document.getElementById("submit");

submit.addEventListener("click", nameChooser);
submit.addEventListener("click", lnameChooser);
submit.addEventListener("click", birthChooser);
submit.addEventListener("click", stateChooser);
submit.addEventListener("click", emailChooser);
submit.addEventListener("click", cryptidChooser);


function nameChooser(){
  firstOutput.innerHTML = firstName.value;
}

function lnameChooser(){
  lastOutput.innerHTML = lastName.value;
}

function birthChooser(){
  birthOutput.innerHTML = birthDate.value;
}

function stateChooser(){
  stateOutput.innerHTML= homeState.value;
}

function emailChooser(){
  emailOutput.innerHTML=email.value;
}

function cryptidChooser(){
  cryptidOutput.innerHTML=cryptids.value;
}
