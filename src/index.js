import { getMenuPage } from "./js/menu";
import { getHomePage } from "./js/home";

const screenController = (function (){
    let content = document.getElementById("content");
    const displayHome = getHomePage().innerHTML;
    const displayMenu = getMenuPage().innerHTML;

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");

    homeButton.addEventListener("click", () => {
        content.lastChild.remove();
        content.innerHTML = " ";
        content.innerHTML = displayHome;
    })
    menuButton.addEventListener("click", () => {
        content.lastChild.remove();
        content.innerHTML = " ";
        content.innerHTML = displayMenu;

    })
})();

console.log(screenController.menuButton)