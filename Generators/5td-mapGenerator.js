/*
This is based on the Five Torches Deep Book
*/

function generateMAP() {
    const mapColor = ["white", "#25408F", "#41AD4A", "#FFF100", "#FAA419", "#d12229"];
    const childDiv = document.getElementById("boxMap").children;
    for (i=0; i<childDiv.length; i++) {
        childDiv[i].style.backgroundColor = mapColor[Math.floor(Math.random()*6)];
    }
}

function clearMAP() {
    const childDiv = document.getElementById("boxMap").children;
    for (i=0; i<childDiv.length; i++) {
        childDiv[i].style.backgroundColor = "white";
    }
}