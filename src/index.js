import {}

const screen = (function (){
    const content = document.getElementById("content")

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");

    return {content}
})();

export const content = screen.content;