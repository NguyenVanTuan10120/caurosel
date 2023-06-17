var btn = document.querySelector(".btn");
var obj = document.querySelector(".object");
var text = document.querySelector(".text");
var setBtn = document.querySelector(".setBtn");
var content = document.querySelector(".content");
var btnRemove = document.querySelector(".btnRemove");

btn.addEventListener("click",function(){
    // if(obj.classList.contains("abc")){
    //     obj.classList.remove("abc");
    // }
    // else{
    //     obj.classList.add("abc");
   // }
   obj.classList.toggle("abc")
   
}) 
setBtn.addEventListener("click", function(){
    content.dataset.content = "npm";
    content.dataset.contentValue = "13";
})
btnRemove.addEventListener("click",function(){
    delete content.dataset.content;
})
