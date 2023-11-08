"use strict"

window.onload = () =>{
    const googleBtn = document.getElementById("googleBtn");
    const schoolsBtn = document.getElementById("schoolsBtn");
    const imagesBtn = document.getElementById("imagesBtn");

    googleBtn.onclick = () => window.open("https://www.google.com/");
    schoolsBtn.onclick = () => window.open("https://www.w3schools.com/js/", "_self");
    imagesBtn.onclick = () => window.open("images.html", "_self")


    let objSet1 = document.querySelectorAll("p");
    console.log("objSet1:", objSet1);

    let objSet2 = document.querySelectorAll(".attn");
    console.log("objSet2:", objSet2);

    let objSet3 = document.querySelectorAll("p.attn");
    console.log("objSet3:", objSet3);


    let objSet5 = document.querySelectorAll("div > p");
    console.log("objSet5:", objSet5);

    let objSet6 = document.querySelectorAll("div, span");
    console.log("objSet6:", objSet6);




    const imageGroup = document.getElementsByClassName("imageGroup");
    Array.from(imageGroup).forEach((e) => e.style.border = "2px dotted red")

    const findImages = document.querySelectorAll("img:not([alt])")
    Array.from(findImages).forEach((e) => e.alt = "graffiti image")
    console.log(findImages)

    let objSet4 = document.querySelectorAll("img[alt]");
    console.log("objSet4:", objSet4);

}