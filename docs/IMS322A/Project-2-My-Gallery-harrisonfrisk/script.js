let hideButton = document.getElementById("next-button");
let content1 = document.getElementById("item-1");
let content2 = document.getElementById("item-2");
let content3 = document.getElementById("item-3");

let carousel = [content1, content2, content3];

let i = 0

hideButton.addEventListener("click", moveCarousel);


function moveCarousel() {
  
  carousel[i].classList.toggle("inactive");
  i++
  if(i > carousel.length-1){
    i = 0;
  }
  carousel[i].classList.toggle("inactive"); 
}
