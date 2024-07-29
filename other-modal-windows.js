const modalPopoutWindow = document.querySelector(".modal-popout-window");
const loginButton = document.querySelector(".login");
const loginWindow = document.querySelector("#login-window");
const signupWindow = document.querySelector("#signup-window");
const signupLink = document.getElementById("signup-link");
const closeButton = document.querySelectorAll(".close-window");
const hamburgerIcon = document.querySelector(".hamburger");
const modalHamburgerMenu = document.getElementById("modal-hamburger-menu");
const loginFooterLink = document.querySelectorAll(".footer-link");
let menuIsOpen = false;
const body = document.body;
function openLoginWindow () {
    loginWindow.style.display = "flex";
    body.classList.add("no-scroll");
}

function openSignupWindow (){
    signupWindow.style.display = "flex";
    body.classList.add("no-scroll");
}

function closeLoginWindow () {
    loginWindow.style.display = "none";
    body.classList.remove("no-scroll");
}

function closeSignupWindow () {
    signupWindow.style.display = "none";
    body.classList.remove("no-scroll");
}

function loginCloseSignupOpen () {
    closeLoginWindow();
    openSignupWindow();
}

function toggleHamburgerMenu() {
    if (menuIsOpen == true) {
        modalHamburgerMenu.style.display = "none";
    } else if (menuIsOpen == false) {
        modalHamburgerMenu.style.display = "block";
    }
    menuIsOpen = !menuIsOpen;
}

loginButton.addEventListener("click", openLoginWindow);
closeButton[0].addEventListener("click", closeLoginWindow);
closeButton[1].addEventListener("click", closeSignupWindow);
loginFooterLink[5].addEventListener("click", openLoginWindow);
signupLink.addEventListener("click", loginCloseSignupOpen);
hamburgerIcon.addEventListener("click", toggleHamburgerMenu);
