var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel__inner");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var slide = document.querySelectorAll(".slide");
var slideWidth = slide[0].offsetWidth;

var slideLength = slide.length;
var position = 0;
var index = 0;

nextButton.addEventListener("click", function () {
  handleChangeSlide(1);
});
prevButton.addEventListener("click", function () {
  handleChangeSlide(-1);
});
function handleChangeSlide(direction) {
  if (direction === 1) {
    if (index >= slideLength - 1) {
      index = slideLength - 1;
      return;
    }
    position = position - slideWidth;
    carouselInner.style = `transform: translateX(${position}px)`;
    index++;
  } else if (direction === -1) {
    if (index <= 0) {
      index = 0;
      return;
    }

    position = position + slideWidth;
    carouselInner.style = `transform: translateX(${position}px)`;
    index--;
  }
}
