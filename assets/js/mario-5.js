"use strict";

/*
    --- ELEMENTOS HTML ---
*/

let botonesControles = document.querySelectorAll("#personajes-css ul.lista-controles button");
console.log("---------");
console.log(botonesControles);

let classesToggle = ["seleccionado", "estrella", "girando", "enemigo", "gigante", "transparente", "pixelado", "espejo"];
console.log("-----------------");
console.log(classesToggle);

let figurasGaleria = document.querySelectorAll("#personajes-css ul.lista-personajes figure");

console.log(figurasGaleria);

const outputSalida = document.querySelector("#resultado-clases");

function seleccionarPersonaje(personaje, clase, slogan, output = outputSalida) {
    const nombre = personaje.textContent;
    // personaje.classList.add(clase);
    personaje.classList.toggle(clase);

    if (personaje.classList.contains(clase)) {
        message = output.textContent = `${nombre} ${slogan}`;
    } else {
        message = `${nombre} ya no ${slogan}`;
    }

    output.textContent = message;
}

// prettier-ignore
figurasGaleria.forEach(function(figuras, indice) {
    botonesControles[indice].addEventListener(
        "click",
        () => seleccionarPersonaje(
            figuras,
            classesToggle[indice],
            "agrega la clase"
        )
    )
});
