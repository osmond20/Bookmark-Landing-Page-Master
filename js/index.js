const nav = document.querySelector(".nav-component")
const hamburger = document.querySelector(".icon-hamburger");
const logo = document.querySelector(".logo-bookmark");
const menu = document.querySelector(".menu-component");

hamburger.addEventListener("click", () => {
    let isOpen = nav.classList.toggle('toggle');

    if(isOpen){
        hamburger.setAttribute("src", "images/icon-close.svg");
        logo.setAttribute("src", "images/logo-bookmark-white.svg");  
        menu.setAttribute("aria-hidden", false);
        menu.classList.add("show");
    }
    else{
        hamburger.setAttribute("src", "images/icon-hamburger.svg");
        logo.setAttribute("src", "images/logo-bookmark.svg");
        menu.setAttribute("aria-hidden", true);
        menu.classList.remove("show");
    } 
});