let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let carouselsection1 = document.getElementById("carousel-section1");
let carouselsection2 = document.getElementById("carousel-section2");
let carouselsection3 = document.getElementById("carousel-section3");

btn1.addEventListener("click", toggle1);
btn2.addEventListener("click", toggle2);
btn3.addEventListener("click", toggle3);

function toggle1() {
  carouselsection3.classList.remove("active-slide")
  carouselsection2.classList.remove("active-slide")
  carouselsection1.classList.add("active-slide")
}

function toggle2() {
  carouselsection3.classList.remove("active-slide")
  carouselsection2.classList.add("active-slide")
  carouselsection1.classList.remove("active-slide")
}

function toggle3() {
  carouselsection3.classList.add("active-slide")
  carouselsection2.classList.remove("active-slide")
  carouselsection1.classList.remove("active-slide")
}