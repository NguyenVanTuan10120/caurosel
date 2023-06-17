// var title = document.getElementById("num2");
// console.log(title);
// var p = document.getElementsByClassName("number1");
// console.log(p);
// var title2 = document.getElementsByTagName("h2");
// console.log(title2);
// var title3 = document.querySelector(".number1");
// console.log(title3);
// var title4 = document.querySelectorAll(".number1");
// console.log(title4);
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
var result = document.querySelector(".result");

btn.addEventListener("click", function () {
  var contentText = content.innerHTML;
  console.log(contentText);
});
function convert() {
  var content = document.getElementsByClassName("content");
  var contentText = content.innerHTML;
  var result = document.getElementsByClassName("result");
  result.innerHTML = contentText;
  contentText = "";
  console.log(result);
}
btn.addEventListener("click", convert);
