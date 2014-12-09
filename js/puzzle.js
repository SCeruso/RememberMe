var puzzle = document.getElementById("puzzle");
var seleccionada= 0;
var aciertos = 0;
var puzzles = ["imagenes/Puzzle/animales_puzzle.jpg", "imagenes/Puzzle/paisaje1_puzzle.jpg", "imagenes/Puzzle/monalisa_puzzle.jpg"]
var indx = 0;
var opciones = new Array(4);
var correctas = [1, 2, 0];
var boton = document.getElementById("Siguiente");


puzzle.src = "imagenes/Puzzle/animales_puzzle.jpg";

imgClick = function (event) {
    carta = event.target.id;
    carta = carta.slice(2, carta.length);
    carta = parseInt(carta);
    
    for (var i = 0; i < opciones.length; i++) {
        if (i == carta) {
            opciones[i].style = " border: red 5px solid; ";
        }
        else {
            opciones[i].style = "";
        }
    }
    seleccionada = carta;
}

botonClick = function (event) {
    if (seleccionada == correctas[indx])
        aciertos++;

    indx++;
    if (indx >= puzzles.length) {
        alert("Felicidades, ha obtenido " + aciertos + " aciertos");
        document.location.href = document.location.href
    }
    else {
        puzzle.src = puzzles[indx];
    }
}
boton.addEventListener("click", botonClick);
for (var i = 0; i < opciones.length; i++) {
    opciones[i] = document.getElementById("im" + i);
    opciones[i].src = "imagenes/Puzzle/im" + i + ".png";
    opciones[i].addEventListener("click", imgClick);

}