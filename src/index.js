import { getHomePage } from "./js/home";
import { getMenuPage } from "./js/menu";

const screenController = (function (){
    let content = document.getElementById("content");
    content.appendChild(getHomePage());

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");

    homeButton.addEventListener("click", () => {
        content.lastChild.remove();
        content.appendChild(getHomePage())
    })

    menuButton.addEventListener("click", () => {
        content.lastChild.remove();
        content.appendChild(getMenuPage())
    })
})();

console.log(screenController.menuButton)