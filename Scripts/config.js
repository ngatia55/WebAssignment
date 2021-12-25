let promptNameInput = document.querySelector(".name_alert");
let promptPassInput = document.querySelector(".pass_alert");
let userNameField = document.getElementById("usernameinput");
let passwordField = document.getElementById("passcode");
let loginForm = document.getElementById("form");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


userNameField.addEventListener("input", () => {
    removeNamePrompt();
})
function removeNamePrompt() {
    if (userNameField.value !== "") {
        promptNameInput.style.transition = "all .5s ease-in-out";
        promptNameInput.classList.add("hide");
        return true;
    } else {
        promptNameInput.style.transition = "all .5s ease-in-out";
        promptNameInput.classList.remove("hide");
    }
}

passwordField.addEventListener("input", () => {
    removePassPrompt();
})
function removePassPrompt() {
    if (passwordField.value !== "") {
        promptPassInput.style.transition = "all .5s ease-in-out";
        promptPassInput.classList.add("hide");
        return true;
    } else {
        promptPassInput.style.transition = "all .5s ease-in-out";
        promptPassInput.classList.remove("hide");
        return false;
    }
}

loginForm.addEventListener("submit", (e) => {
    if (userNameField.value == "" || userNameField.value == null || userNameField.value.match(pattern) || passwordField.value == "" || passwordField.value == null || passwordField.value.length < 8 ) {
        promptPassInput.style.transition = "all .5s ease-in-out";
        promptPassInput.classList.remove("hide");
        promptNameInput.style.transition = "all .5s ease-in-out";
        promptNameInput.classList.remove("hide"); 
        e.preventDefault();
    }
})
