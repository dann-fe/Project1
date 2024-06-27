let loginButton = document.querySelector(".login");
let loginWindow = document.querySelector("#login-popout-window");
let closeButton = document.querySelector(".close-window")
function openLoginWindow () {
    loginWindow.style.display = "flex";
}

function closeLoginWindow () {
    loginWindow.style.display = "none";
}

loginButton.addEventListener("click", openLoginWindow);
closeButton.addEventListener("click", closeLoginWindow);