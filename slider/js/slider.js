var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel__inner");
var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");

var carouselInnerWidth = carouselInner.clientWidth;

var carouselItems = carouselInner.children;

var totalWidth = carouselItems.length * carouselInnerWidth;

carouselInner.style.width = `${totalWidth}px`;
carouselInner.style.transition = `all 0.4s linear`;

var position = 0;
btnNext.addEventListener("click", function () {
  if (position === carouselItems.length - 1) {
    position = -1;
  }
  position++;
  var positionWidth = 0 - carouselInnerWidth * position;
  carouselInner.style.transform = `translateX(${positionWidth}px)`;
});
btnPrev.addEventListener("click", function () {
  if (position === 0) {
    return;
  }
  position--;
  var positionWidth = 0 - carouselInnerWidth * position;
  carouselInner.style.transform = `translateX(${positionWidth}px)`;
});
