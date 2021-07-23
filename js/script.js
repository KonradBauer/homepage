console.log("Hello world!");
const themeButton = document.querySelector(".js-themeButton");
const removeButton = document.querySelector(".js-removeButton");
const body = document.querySelector("body");
const mainHeader = document.querySelector(".mainHeader");
const themeName = document.querySelector(".themeName");


themeButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme")
    if (body.classList.contains("darkTheme")) {
        themeName.innerText = "jasny"
    } else {
        themeName.innerText = "ciemny"
    }
});

removeButton.addEventListener("click", () => {
    mainHeader.remove();
    removeButton.remove();
});

