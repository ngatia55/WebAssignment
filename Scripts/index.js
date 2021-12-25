const openSideBar = document.querySelector(".menu");
const closeSideBar = document.querySelector("#close");
const menu = document.querySelector(".sideBar");

openSideBar.addEventListener("click", () => {
    openNavigation();
});

closeSideBar.addEventListener("click", () => {
    closeNavigation();
});

function openNavigation() {
    menu.style.transition = "all .5s ease-in-out";
    menu.classList.add("opennav");
}

function closeNavigation() {
    menu.style.transition = "all .5s ease-in-out";
    menu.classList.remove("opennav");
}