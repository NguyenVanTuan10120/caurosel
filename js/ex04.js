var btn = document.querySelector(".btn");
var content = document.querySelector(".content");
btn.addEventListener("click", function () {
  //content.classList.toggle("my");

  if (content.classList.contains("my")) {
    content.classList.remove("my-space");
    setTimeout(function () {
      content.classList.remove("my");
    }, 400);
    this.innerText = "Hiện";
  } else {
    content.classList.add("my");
    setTimeout(function () {
      content.classList.add("my-space");
    }, 400);
    this.innerText = "Ẩn";
  }
});
