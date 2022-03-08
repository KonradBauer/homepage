{
    welcome = () => { console.log("Hello world!") };

    const toggleTheme = () => {
        const themeName = document.querySelector(".js-themeName");
        const body = document.querySelector("body");

        body.classList.toggle("darkTheme")
        themeName.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
    };

    const toggleHeader = () => {
        const mainHeader = document.querySelector(".mainHeader");
        const headerToggle = document.querySelector(".js-headerToggle");

        mainHeader.classList.toggle("mainHeader--hidden")
        headerToggle.innerText = mainHeader.classList.contains("mainHeader__hidden") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const themeButtonElement = document.querySelector(".js-themeButton");
        const hideButton = document.querySelector(".js-hideButton");

        hideButton.addEventListener("click", toggleHeader);
        themeButtonElement.addEventListener("click", toggleTheme);

        welcome();
    };

    init();
}