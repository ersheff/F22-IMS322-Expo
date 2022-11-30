let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");

let prevSlide = document.getElementById("slide-arrow-prev");
let nextSlide = document.getElementById("slide-arrow-next");

let cityImg = document.getElementById("city-img");
let mountainImg = document.getElementById("mountain-img");
let beachImg = document.getElementById("beach-img");

let imgSequence = [cityImg, mountainImg, beachImg];
let imgIndex = 0;

// the arrow buttons, unless you click the actal 1,2,3 buttons
slide1.addEventListener("click", toggle1);
slide2.addEventListener("click", toggle2);
slide3.addEventListener("click", toggle3);


prevSlide.addEventListener("click", goToPrev);
nextSlide.addEventListener("click", goToNext);




function toggle1() {
  cityImg.classList.remove("inactive");
  mountainImg.classList.add("inactive");
  beachImg.classList.add("inactive");
  slide1.classList.add("active-indicator");
  slide2.classList.remove("active-indicator");
  slide3.classList.remove("active-indicator");
  imgIndex = 0;
}

function toggle2() {
  cityImg.classList.add("inactive");
  mountainImg.classList.remove("inactive");
  beachImg.classList.add("inactive");
  slide1.classList.remove("active-indicator");
  slide2.classList.add("active-indicator");
  slide3.classList.remove("active-indicator");
  imgIndex = 1;
}

function toggle3() {
  cityImg.classList.add("inactive");
  mountainImg.classList.add("inactive");
  beachImg.classList.remove("inactive");
  slide1.classList.remove("active-indicator");
  slide2.classList.remove("active-indicator");
  slide3.classList.add("active-indicator");
  imgIndex = 2;
}

function goToNext() {
  imgIndex++;
  if (imgIndex > 2) {
    imgIndex = 0;
  }
  if (imgIndex === 0) {
    toggle1();
  }
  else if (imgIndex === 1) {
    toggle2();
  }
  else if (imgIndex === 2) {
    toggle3();
  }
}

function goToPrev() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = 2;
  }
  if (imgIndex === 0) {
    toggle1();
  }
  else if (imgIndex === 1) {
    toggle2();
  }
  else if (imgIndex === 2) {
    toggle3();
  }
}