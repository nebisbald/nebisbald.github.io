const upButton1 = document.getElementById("up1");
const downButton1 = document.getElementById("down1");

const upButton2 = document.getElementById("up2");
const downButton2 = document.getElementById("down2");

const upButton3 = document.getElementById("up3");
const downButton3 = document.getElementById("down3");

upButton1.addEventListener("mouseover", initialize);
downButton1.addEventListener("mouseover", initialize);

upButton2.addEventListener("mouseover", initialize);
downButton2.addEventListener("mouseover", initialize);

upButton3.addEventListener("mouseover", initialize);
downButton3.addEventListener("mouseover", initialize);

initialize();

function initialize(){

    upButton1.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    upButton1.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    downButton1.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    downButton1.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    upButton2.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    upButton2.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    downButton2.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    downButton2.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    upButton3.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    upButton3.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");

    downButton3.style.setProperty("left", (Math.floor(Math.random() * 10000)).toString() + "px");
    downButton3.style.setProperty("top", (Math.floor(Math.random() * 10000)).toString() + "px");
}

