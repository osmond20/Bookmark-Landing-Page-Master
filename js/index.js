const nav = document.querySelector(".nav-component")
const hamburger = document.querySelector(".icon-hamburger");
const logo = document.querySelector(".logo-bookmark");
const menu = document.querySelector(".menu-component");
const toggleBtn = document.querySelectorAll(".toggleBtn");
const featurePanels = document.querySelectorAll(".feature-panel");
const questions = document.querySelectorAll(".question");
const arrowBtns = document.querySelectorAll(".arrow-btn");
const answers = document.querySelectorAll(".answer-component");

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


arrowBtns.forEach(button =>{
    button.addEventListener("click", ()=>{
        const isOpen = button.classList.contains("active");
        if(!isOpen){
                arrowBtns.forEach(otherButton =>{
                otherButton.classList.remove("active");
                const answer = document.getElementById(otherButton.dataset.target);
                answer.hidden = true;
            });
            button.classList.add("active");
            const targetAnswer = document.getElementById(button.dataset.target);
            targetAnswer.hidden = false;
        }
        else if(isOpen){
              arrowBtns.forEach(otherButton =>{
                otherButton.classList.remove("active");
                const answer = document.getElementById(otherButton.dataset.target);
                answer.hidden = true;
            });
        }
    });
});
