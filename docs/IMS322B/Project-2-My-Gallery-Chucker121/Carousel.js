let LeftSide = document.getElementById("LSide");
let TopSide = document.getElementById("TSide");
let RightSide = document.getElementById("RSide");

LeftSide.addEventListener("click", toggleactive1);
TopSide.addEventListener("click", toggleactive2);
RightSide.addEventListener("click", toggleactive3);


let btnL = document.getElementById("btnL");
let btnT = document.getElementById("btnT");
let btnR = document.getElementById("btnR");

btnL.addEventListener("click", toggleactive1);
btnT.addEventListener("click", toggleactive2);
btnR.addEventListener("click", toggleactive3);


  
function toggleactive1(){
  LeftSide.classList.toggle("Linactive");
  TopSide.classList.add("Tinactive");
  RightSide.classList.add("Rinactive");
}
function toggleactive2(){
  LeftSide.classList.add("Linactive");
  TopSide.classList.toggle("Tinactive");
  RightSide.classList.add("Rinactive");
}
function toggleactive3(){
  LeftSide.classList.add("Linactive");
  TopSide.classList.add("Tinactive");
  RightSide.classList.toggle("Rinactive");
}