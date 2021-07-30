console.log("Hello world!");
const themeButton = document.querySelector(".js-themeButton");
const hideButton = document.querySelector(".js-hideButton");
const body = document.querySelector("body");
const mainHeader = document.querySelector(".mainHeader");
const themeName = document.querySelector(".themeName");
const headerToggle = document.querySelector(".headerToggle");

themeButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme")
    themeName.innerText = body.classList.contains("darkTheme") ? "jasny" : "cimeny";
});

hideButton.addEventListener("click", () => {
    mainHeader.classList.toggle("mainHeader__hidden")
    headerToggle.innerText = mainHeader.classList.contains("mainHeader__hidden") ? "Pokaż" : "Ukryj";
});

