// var title = document.getElementsByTagName("h1");
// console.log(title);
// var content = document.getElementById("123");
// console.log(content);
// var description = document.querySelector("title");
// console.log(description);
//===================
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  var contentText = content.innerHTML;
  console.log(contentText);
});
function moveContent() {
  var div1 = document.getElementByClassName(".content");
  var content = div1.innerHTML;

  var div2 = document.getElementByClassName(".result");
  div2.innerHTML = content;

  div1.innerHTML = "";
}
//dùng DOM Even
var title = document.querySelector(".title");
// title.onclick = function () {
//   alert("Bạn có muốn tiếp tục không?");
// };
//====dùng phương thức addEvenListener
var events = document.querySelector(".events");
var button = document.querySelector("button");

var handle = function () {
  console.log("chào bạn lần 1");
};
events.addEventListener("click", handle);
button.addEventListener("click", function () {
  events.removeEventListener("click", handle);
});
var handle2 = function () {
  console.log("chào bạn lần 2");
};
events.addEventListener("click", handle2);
