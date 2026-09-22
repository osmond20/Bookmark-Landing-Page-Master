const nav = document.querySelector(".nav-component")
const hamburger = document.querySelector(".icon-hamburger");
const logo = document.querySelector(".logo-bookmark");
const menu = document.querySelector(".menu-component");
const toggleBtn = document.querySelectorAll(".toggleBtn");
const featurePanels = document.querySelectorAll(".feature-panel");

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

toggleBtn.forEach(button =>{
    button.addEventListener("click", () =>{
        // remove the "active" class from all buttons
        toggleBtn.forEach(otherButton =>{
            otherButton.classList.remove("active");
        });

        // hide all panels before showing the user requested panel
        featurePanels.forEach(panel =>{
            panel.hidden = true;
        });

        // add the "active" state to the selected button
        button.classList.add("active");

        // gets the exact panel
        const targetPanel = document.getElementById(button.dataset.target);
        
        // show the requested panel
        targetPanel.hidden = false;
    });
});
