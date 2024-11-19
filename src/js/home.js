import "../css/home.css"
import korean_dish from '../img/korean-dish.png';

const homePage = (function (){
    /** DOM Elements: */
    const content = document.querySelector('#content');

    const contentLeft = document.createElement("div"); //contentLetextContentft and its children
    contentLeft.classList.add("contentLeft");

    const textContent = document.createElement("div");
    textContent.classList.add("textContent");

    const contentButtons = document.createElement("div");
    contentButtons.classList.add("contentButtons");


    const contentRight = document.createElement('div');//contentRight (only contains an img)
    contentRight.classList.add("contentRight");

    /**DOM Manipulation**/
    //contentLeft > textContent
    function getHomePage(){

    textContent.textContent = "Home made, healthy and";
    const textSpan = document.createElement("span"); // create span for text on content left

    textSpan.textContent = " vegan food";   //give the span relevent text
    textContent.appendChild(textSpan);
    contentLeft.appendChild(textContent);   //done with textContent

    //contentLeft > contentButtons >buttonLeft
    const buttonLeft = document.createElement("button");
    buttonLeft.classList.add("buttonLeft"); 
    buttonLeft.textContent = "View Menu";
    contentButtons.appendChild(buttonLeft); //button added to parent in Dom

    //contentLeft > contentButtons > buttonRight
    const buttonRight = document.createElement("button");
    buttonRight.classList.add("buttonRight");
    buttonRight.textContent = "Local Menu";
    contentButtons.appendChild(buttonRight); //button added to parent in DOM

    contentLeft.appendChild(contentButtons);
    content.appendChild(contentLeft)

    /**Content Right **/
    const img = document.createElement("img");
    const koreanDish = new Image();
    koreanDish.src = korean_dish;
    contentRight.appendChild(koreanDish);
    content.appendChild(contentRight);
    }

    return{getHomePage}
})();

export const getHomePage = () => homePage.getHomePage();