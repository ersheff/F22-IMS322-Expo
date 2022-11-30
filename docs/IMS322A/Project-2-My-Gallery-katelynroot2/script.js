// total hours doing homework
let amountOfHours = [6, 5, 4, 2, 6, 3, 2, 5, 3, 4, 5, 3];
let total=0;

for (let x of amountOfHours) {
  total += x;
}

  let totalOutput = document.getElementById("total-output");
  totalOutput.innerText=total;

// average amount of hours
let avg = total/amountOfHours.length;

let avgOutput = document.getElementById("avg-output");
avgOutput.innerText=avg;

//amount of hours of sleep
//ten hours or more total
let ten = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let tenTotal=0;

for (let y of ten) {
  tenTotal += y;
}

console.log(tenTotal);

let tenBar = document.getElementById("ten-bar");
tenBar.style.height = tenTotal + "rem";
  
//nine hours
let nine = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let nineTotal=0;

for (let x of nine) {
  nineTotal += x;
}

console.log(nineTotal);

let nineBar = document.getElementById("nine-bar");
nineBar.style.height = nineTotal + "rem";

//eight hours
let eight = [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1];
let eightTotal=0;

for (let w of eight) {
  eightTotal += w;
}
console.log(eightTotal);

let eightBar = document.getElementById("eight-bar");
eightBar.style.height = eightTotal + "rem";

//seven hours
let seven = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1];
let sevenTotal=0;

for (let v of seven) {
  sevenTotal += v;
}
console.log(sevenTotal);

let sevenBar = document.getElementById("seven-bar");
sevenBar.style.height = sevenTotal + "rem";

//6 or less hours
let six = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
let sixTotal=0;

for (let u of six) {
  sixTotal += u;
}
console.log(sixTotal);

let sixBar = document.getElementById("six-bar");
sixBar.style.height = sixTotal + "rem";