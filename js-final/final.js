const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

upButton.addEventListener("mouseover", initialize);
downButton.addEventListener("mouseover", initialize);

initialize();

function initialize(){

    upButton.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    upButton.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    downButton.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    downButton.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");
}

function disappear() {
    
}