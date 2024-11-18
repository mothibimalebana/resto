import './css/home.css'

const screenController = (function (){
    /** DOM Elements: */
    const navRight = document.querySelector('.navRight');
    const navLeft = document.querySelector('.navLeft');

    const contentLeft = document.querySelector('.contentLeft'); //contentLetextContentft and its children
    const textContent = document.querySelector('.textContent');
    const contentButtons = document.querySelector('.contentButtons');

    const contentRight = document.querySelector('.contentRight');

    return{navLeft, navRight, contentLeft, contentRight, contentButtons}
})();

console.log(screenController.contentRight)

