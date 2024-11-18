import './css/home.css'

const homePage = (function (){
    /** DOM Elements: */
    const content = document.querySelector('#content');

    const contentLeft = document.querySelector('.contentLeft'); //contentLetextContentft and its children
    const contentButtons = document.querySelector('.contentButtons');

    const contentRight = document.querySelector('.contentRight');//contentRight (only contains an img)

    /**DOM Manipulation**/
    //contentLeft > textContent
    const textContent = document.createElement("div");
    textContent.classList.add("textContent");
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
    buttonLeft.classList.add("buttonRight");
    buttonRight.textContent = "Local Menu";
    contentButtons.appendChild(buttonRight); //button added to parent in DOM

    contentLeft.appendChild(contentButtons);
    content.appendChild(contentLeft)

    return{textContent}
})();

homePage.textContent