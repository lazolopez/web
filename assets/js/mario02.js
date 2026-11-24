"use strict";

// let figuras = document.querySelectorAll("#galeria-mario figure");

// console.log("---------------");
// console.log("Array de figuras de galeria Mario");
// console.log(figuras);
// console.log("---------------");

// let imaxesMarioBros = ["assets/img/mario_PNG11 (1).png", "assets/img/Luigi.webp", "assets/img//Princesa Daisy.webp", "assets/img/Princesa Peach.webp", "assets/img/Toad.webp", "assets/img/Wario.webp"];

// figuras.forEach(function (figura, indice) {
//     figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
// });

// figuras.forEach(function (figura, indice) {
//     figura.style.backgroundImage = `url("${imaxesMarioBros[indice]}")`;
// });

// Ejercicio 1b

let ulGaleriaMario = document.querySelector("#galeria-mario ul.galeria");

ulGaleriaMario.classList.add("personajes");

// Ejercicio 1c

let personajesGaleriaMario = ["Mario", "Luigi", "Princesa Daisy", "Princesa Peach", "Toad", "Wario"];

let bgColorsGaleriaMario = ["indianred", "green", "black", "lightpink", "salmon", "lightyellow"];

let figuras = document.querySelectorAll("#galeria-mario figure");
let captions = document.querySelectorAll("#galeria-mario figcaption");

console.log(captions);

figuras.forEach(function (figura, indice) {
    figura.style.backgroundColor = bgColorsGaleriaMario[indice];
});

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});

// captions.forEach(function (caption, indice) {
//     caption.textContent = personajesGaleriaMario[indice];
// });
