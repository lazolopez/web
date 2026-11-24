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

// captions.forEach(function (caption, indice) {
//     caption.textContent = personajesGaleriaMario[indice];
// });

const info = document.querySelector("#info");

let colores = document.querySelectorAll("#paleta-colores ul.paleta li");

let colorSeleccionado = null;
colores.forEach(function (li) {
    li.style.backgroundColor = li.textContent;
});

function seleccionarColor() {
    colorSeleccionado = this.textContent;
    info.textContent = `Color seleccionado: ${colorSeleccionado}`;
}

function pintarFigura() {
    if (colorSeleccionado === null) {
        info.textContent = "Primero elige un color";
        return;
    }

    this.style.backgroundColor = colorSeleccionado;
    info.textContent = `${this.textContent} ahora es ${colorSeleccionado}`;
}

colores.forEach(function (li, indice) {
    li.onclick = seleccionarColor;
});

figuras.forEach(function (figura, indice) {
    figura.onclick = pintarFigura;
});

// ejercicio 2b

// Agregar 2item de la lista.galeria

// let ulGaleria = document.querySelector()

let itemGaleria = document.createElement("li");
let figureGaleria = document.createElement("figure");
let captionGaleria = document.createElement("figcaption");

ulGaleriaMario.appendChild(itemGaleria);
itemGaleria.appendChild(figureGaleria);
figureGaleria.appendChild(captionGaleria);

figureGaleria.classList.add("img-before");
bgColorsGaleriaMario.push("red");

captions.forEach(function (caption, indice) {
    caption.textContent = personajesGaleriaMario[indice];
});
