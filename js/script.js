console.log("Hello world!");
const themeButton = document.querySelector(".js-themeButton");
const removeButton = document.querySelector(".js-removeButton")
const body = document.querySelector("body");
const mainHeader = document.querySelector(".mainHeader")


themeButton.addEventListener("click", () => {
    body.classList.toggle("darkTheme")
});

removeButton.addEventListener("click", () => {
    mainHeader.remove();
    removeButton.remove();
});
