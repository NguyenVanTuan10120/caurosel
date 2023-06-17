var tabs = document.querySelector(".tabs");
var tabsItem = tabs.querySelectorAll("ul li a");
if(tabsItem.length){
    tabsItem.forEach(function(tab){
        tab.addEventListener("click", function(){
            var itemActive = tabs.querySelector("ul li a.active");
            if(itemActive){
                itemActive.classList.remove("active");
            }
            //thêm class active vào item vừa click
            this.classList.add("active");
            //lấy id selector dựa vào href
            var hash = this.getAttribute("href");
            //lấy element của tab pannel đang active
            var tabPannelActive = tabs.querySelector(".tab-pannel.active");
            if(tabPannelActive){
                tabPannelActive.classList.remove("active");
            }
            //tạo element từ id selector lấy được từ bước trên
            var tabPannel = tabs.querySelector(hash);
            //thêm class active vào tab-pannel vừa click
            tabPannel.classList.add("active");
        });
    })
}