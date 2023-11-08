"use strict"

window.onload = () =>{
    const googleBtn = document.getElementById("googleBtn");
    const schoolsBtn = document.getElementById("schoolsBtn");
    const imagesBtn = document.getElementById("imagesBtn");

    googleBtn.onclick = () => window.open("https://www.google.com/");
    schoolsBtn.onclick = () => window.open("https://www.w3schools.com/js/", "_self");
    imagesBtn.onclick = () => window.open("images.html", "_self")

}