var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  content.classList.add("full", "full2");
  if (!content.classList.contains("full")) {
    content.classList.add("");
  } else {
    content.classList.remove("full");
  }
});
