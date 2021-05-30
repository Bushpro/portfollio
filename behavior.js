function showMenu() {
    const hamburger = document.querySelector(".menu");
    const menu = document.querySelector(".ul");
    const closeMenu = document.querySelector(".close");

    hamburger.addEventListener("click",
    (e) => {
        // console.log(e.target);
        menu.style.visibility = "visible";
    }
    );

    closeMenu.addEventListener("click",
    (e) => {

        // console.log("menu");
        menu.style.visibility = "hidden";
        // menu.style.transition =  "all 500ms ease-in-out";
    }
    );
    
    items = document.querySelectorAll(".link-item");
    // console.log(items);
    // items.forEach(item => {
    //     item.addEventListener("click",
    //     (e) => {
    //         item.classList.toggle("active");
    //     }
    //     );
    // });
    function colorLink(){
        if(items){
            items.forEach(l =>
                l.classList.remove("active"))
                this.classList.add("active")
                // menu.style.visibility = "hidden";
        }
    }
    items.forEach(l => l.addEventListener("click", colorLink))
}
let darkbtn = document.querySelector(".darkgear");
let body = document.querySelector("body");
darkbtn.addEventListener("click",
()=> body.classList.toggle("darkMode"));
// console.log(darkbtn);
showMenu();