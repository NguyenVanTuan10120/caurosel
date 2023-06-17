var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var setContent = document.querySelector(".set-content");
var sum = document.querySelector(".dataSum");
var setSum = document.querySelector(".setAtr");
var removeSum = document.querySelector(".remove");

// btn.addEventListener("click", function () {
//   var classes = content.className;
//   console.log(classes);
// });
// setContent.addEventListener("click", function () {
//   setContent.id = `superNumber`;
// });
btn.addEventListener("click", function () {
  var sums = sum.getAttribute("data-sum");
  console.log(sums);
});
setSum.addEventListener("click", function () {
  sum.setAttribute("data-sum", 20);
});
removeSum.addEventListener("click", function () {});
