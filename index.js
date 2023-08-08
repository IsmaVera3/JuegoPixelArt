//import Swal from "sweetalert2/dist/sweetalert2.js";
//import "sweetalert2/src/sweetalert2.scss";

let celeste = 0;
let marron = 1;
let marronClaro = 2;
let marronOscuro = 3;
let rojo = 4;
let verde = 5;

let hamburguesaHecha = [
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(212, 172, 100)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(180, 124, 36)",
    "rgb(212, 172, 100)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(28, 172, 28)",
    "rgb(28, 172, 28)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(28, 172, 28)",
    "rgb(28, 172, 28)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(68, 44, 4)",
    "rgb(252, 4, 4)",
    "rgb(28, 172, 28)",
    "rgb(28, 172, 28)",
    "rgb(28, 172, 28)",
    "rgb(28, 172, 28)",
    "rgb(252, 4, 4)",
    "rgb(68, 44, 4)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(252, 4, 4)",
    "rgb(252, 4, 4)",
    "rgb(252, 4, 4)",
    "rgb(252, 4, 4)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(180, 124, 36)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(68, 44, 4)",
    "rgb(180, 124, 36)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(180, 124, 36)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
    "rgb(52, 172, 236)",
];
let hamburguesaVacia = [];

// Obtén el contenedor de la grilla y la paleta
const gridContainer = document.getElementById("grid-container");
const palette = document.getElementById("palette");
const gridColors = [];

// Definimos una paleta de colores
const colors = [
    "#b47c24",
    "#1cac1c",
    "#442c04",
    "#d4ac64",
    "#fc0404",
    "#34acec",
];

// Crea la grilla
function createGrid() {
    for (let i = 0; i < 100; i++) {
        // Cambia "100" por el número de celdas que deseas en tu grilla
        const cell = document.createElement("div");
        cell.classList.add("grid-item");
        gridContainer.appendChild(cell);

        gridColors.push(""); // Agrega un valor inicial vacío al arreglo
    }
}

// Función para cambiar el color de la celda cuando el usuario haga clic en ella
function changeColor(event) {
    if (event.target.classList.contains("grid-item")) {
        const selectedColor = palette.querySelector(".selected");
        if (selectedColor) {
            const color = selectedColor.style.backgroundColor;
            event.target.style.backgroundColor = color;

            // Obtiene el índice de la celda en el arreglo gridColors
            const cellIndex = Array.from(gridContainer.children).indexOf(
                event.target
            );
            gridColors[cellIndex] = color; // Actualiza el color en el arreglo
            //console.log(gridColors);
        }
    }
    if (sonIguales(hamburguesaHecha, gridColors)) {
        Swal.fire("Bien Hecho!", "Has completado el juego!", "success");
    } else {
        console.log("se pregunto");
    }
}

// Función para seleccionar el color de la paleta
function selectColor(event) {
    if (event.target.classList.contains("color")) {
        const selectedColor = palette.querySelector(".selected");
        if (selectedColor) {
            selectedColor.classList.remove("selected");
        }
        event.target.classList.add("selected");
    }
}

// Agrega un evento de clic a la grilla
gridContainer.addEventListener("click", changeColor);

// Agrega un evento de clic a la paleta
palette.addEventListener("click", selectColor);

// Inicializa la grilla
createGrid();
console.log(gridColors.length);

function sonIguales(hamburguesaHecha, gridColors) {
    for (let i = 0; i < hamburguesaHecha.length; i++) {
        //console.log("itaracion for numero:" + i);
        if (hamburguesaHecha[i] !== gridColors[i]) {
            //console.log("itaracion if numero:" + i);
            return false;
        }
    }
    return true;
}

