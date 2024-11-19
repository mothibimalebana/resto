import '../css/home.css';
import granola from "../img/granola.png";

const menuPage = (function (){
    /**DOM Elements */

    const content = document.getElementById("content");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menuHeader");

    const menuItems1 = document.createElement("div");
    menuItems1.classList.add("menuItems");

    const menuItems2 = document.createElement("div");
    menuItems2.classList.add("menuItems");

    const menuContent1 = document.createElement("div");
    menuContent1.classList.add("menuContent");

    const menuContent2 = document.createElement("div");
    menuContent2.classList.add("menuContent");

    const menuImg1 = document.createElement("div");
    menuImg1.classList.add("menuImg");

    const menuImg2 = document.createElement("div");
    menuImg2.classList.add("menuImg");


    function getMenuPage(){
        const headerH4 = document.createElement("h4");
        headerH4.textContent = "Menu";
        menuHeader.appendChild(headerH4);

        const headerP = document.createElement("p");
        headerP.textContent = "From The House";
        menuHeader.appendChild(headerP);
    
        menuContainer.appendChild(menuHeader);
        content.appendChild(menuContainer);
    }

    return {getMenuPage}
})();

export const getMenuPage = () => menuPage.getMenuPage();