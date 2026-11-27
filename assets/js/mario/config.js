// ===================================
// CONFIGURACIÓN
// Todos los "números mágicos" y listas de datos en un único sitio.
// Si hay que cambiar algo del juego, se cambia aquí.
// ===================================

export const CONFIG = {
    // Carpeta de las imágenes (relativa al HTML)
    RUTA_IMG: "../assets/img/marioBros/",

    // prettier-ignore
    SPRITES: [
        "mario.png",
        "luigi.webp",
        "yoshi.webp",
        "bowser.webp",
        "princesaDaisy.webp",
        "princesaPeach.webp",
        "toad.webp",
        "wario.webp"
    ],

    NOMBRES: ["Mario", "Luigi", "Yoshi", "Bowser", "PrincesaDaisy", "PrincesaPeach", "Toad", "Wario"],

    // Monedas que aparecen en cada tanda
    CANTIDAD_MONEDAS: 8,

    // Duración (ms) de la transición al avanzar o retroceder
    VELOCIDAD: 800,
};
