const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

let startIndex = 0;
let limit = 3;

function showSlides(startIndex, limit) {
  slides.forEach((slide, index) => {
    if (index >= startIndex && index < startIndex + limit) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
      slider.style.overflow = "auto";
    }
  });
}

function goForward() {
  if (startIndex + limit <= slides.length) {
    startIndex += limit;
    if (startIndex + limit > slides.length) {
      startIndex = slides.length - 3;
    }
    showSlides(startIndex, limit);
  }
}
//nur muss ich bei hier den if -3 Bediengung fragen, weil hier 10. gerade Zahl ist
function goBackward() {
  if (startIndex >= limit) {
    startIndex -= limit;
  } else {
    startIndex = 0;
  }
  showSlides(startIndex, limit);
}
// hier nicht weil schon wegen goForward teil ungerade Zahl 9 ist, also passt das hier
buttonNext.addEventListener("click", goForward);
buttonPrev.addEventListener("click", goBackward);
