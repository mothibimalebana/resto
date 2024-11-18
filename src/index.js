import './css/home.css'

const screenController = (function (){
    /** DOM Elements: */
    const navRight = document.querySelector('.navRight');
    const navLeft = document.querySelector('.navLeft');

    const contentLeft = document.querySelector('.contentLeft')

    return{navLeft, navRight, contentLeft}
})();

console.log(screenController.contentLeft)

