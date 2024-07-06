const loginButton = document.querySelector(".login");
const loginWindow = document.querySelector("#login-window");
const closeButton = document.querySelectorAll(".close-window")
const body = document.body;
const joinButton = document.querySelector(".join-button");
const signupWindow = document.querySelector("#signup-window");
const modalPopoutWindow = document.querySelector(".modal-popout-window");
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

loginButton.addEventListener("click", openLoginWindow);
closeButton[0].addEventListener("click", closeLoginWindow);
closeButton[1].addEventListener("click", closeSignupWindow);
// body.addEventListener("click", closeLoginWindow);
joinButton.addEventListener("click", openSignupWindow);