import { getHomePage } from "./js/home";
import { getMenuPage } from "./js/menu";

const screenController = (function (){
    const content = document.getElementById("content")
    getMenuPage();

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");

    homeButton.addEventListener("click", () => {
        content.lastChild.remove();
        getHomePage();
    })
    menuButton.addEventListener("click", () => {
        content.lastChild.remove();
        getMenuPage();

    })

    return {homeButton, menuButton}
})();

console.log(screenController.menuButton)