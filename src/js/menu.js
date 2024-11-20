import '../css/home.css';
import granolaImg from "../img/granola.png";
import veganMeal from "../img/vegan.png";

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
    
        // menuItems1: menuContent
        const h6Content = document.createElement("h6");
        h6Content.textContent = "desserts";
        const h3Content = document.createElement("h3");
        h3Content.textContent = "Greek Yoghurt with Strawberries"
        const pContent = document.createElement("p");
        pContent.textContent = "Este es un simple texto de relleno solo esta para rellenar, y mostrar el lugar donde iria un texto real de la pagina cuando este hecha en su totalidad" ;
        const bContent = document.createElement("button");
        bContent.textContent = "order now";

        // menuItems1: menuImg1
        const granola = new Image();
        granola.src = granolaImg;
        menuImg1.appendChild(granola);

    
        // appending for menuItems1
        menuContent1.appendChild(h6Content);
        menuContent1.appendChild(h3Content);
        menuContent1.appendChild(pContent);
        menuContent1.appendChild(bContent);

        menuItems1.appendChild(menuContent1);
    
        menuItems1.appendChild(menuImg1);

        menuContainer.appendChild(menuItems1);
        content.appendChild(menuContainer);

        // menuItems2
        const vegan = new Image()
    }

    return {getMenuPage}
})();

export const getMenuPage = () => menuPage.getMenuPage();