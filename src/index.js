import { getHomePage } from "./js/home";
import { getMenuPage } from "./js/menu";

const screenController = (function (){
    const content = document.getElementById("content")
    getHomePage();

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");

    homeButton.addEventListener("click", () => {
        content.innerHTML = "";
        getHomePage();
    })
    menuButton.addEventListener("click", () => {
        content.innerHTML = "";
        getMenuPage();

    })

    return {homeButton, menuButton}
})();

console.log(screenController.menuButton)