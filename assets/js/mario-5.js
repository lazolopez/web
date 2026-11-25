"use strict";

/*
    --- ELEMENTOS HTML ---
*/

const outputSalida = document.querySelector("#resultado-clases");
const botonControlMario = document.querySelector("#btn-seleccionar-mario");
const marioGaleria = document.querySelector("#mario-galeria");

const botonControlLuigi = document.querySelector("#btn-estrella-luigi");
const luigiGaleria = document.querySelector("#luigi-galeria");

const botonControlYoshi = document.querySelector("#btn-girar-yoshi");
const yoshiGaleria = document.querySelector("#yoshi-galeria");

/*
    --- FUNCIONES ---
*/

/*
function seleccionarMario() {
    marioGaleria.classList.add("seleccionado");

    outputSalida.textContent = "Mario ha sido seleccionado!";
}

function seleccionarLuigi() {
    luigiGaleria.classList.add("estrella");

    outputSalida.textContent = "Luigi ha sido seleccionado!";
}
*/

function seleccionarPersonaje(personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    personaje.classList.add(clase);

    if (personaje.classList.contains(clase)) {
        message = output.textContent = `${nombre} ${slogan}`;
    } else {
        message = `${nombre} ya no ${slogan}`;
    }

    output.textContent = message;
}

/*
    --- EVENTOS ---
*/

// botonControlMario.addEventListener("click", seleccionarMario);

// botonControlLuigi.addEventListener("click", seleccionarLuigi);

// botonControlLuigi.addEventListener("click", seleccionarPersonaje(luigiGaleria, "estrella"));

botonControlMario.addEventListener("click", () => seleccionarPersonaje(marioGaleria, "seleccionado", "ha sido seleccionado"));

botonControlLuigi.addEventListener("click", () => seleccionarPersonaje(luigiGaleria, "estrella", "se ilumina como el sol"));

botonControlYoshi.addEventListener("click", () => seleccionarPersonaje(yoshiGaleria, "girando", "no para de girar"));
