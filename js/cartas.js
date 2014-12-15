
     //window.addEventListener("load", function () { alert("La bla"); });
var cartas = new Array(16);
var seleccionada1 = -1;
var seleccionada2 = -1;
var correctas = 0;
var carta;
function Carta(i) {
    var aux = "im" + i;
    this.img = document.getElementById(aux);
    this.girada = false;
    this.index = 0;
}


cartaClick = function (event) {
    carta = event.target.id;
    carta = carta.slice(2, carta.length);
    carta = parseInt(carta);
    var imagen = cartas[carta].index - 1;
    if (!cartas[carta].girada && seleccionada1 == -1 && seleccionada2 == -1) {
        this.src = "imagenes/cartas/" + "im" + imagen + ".png";
        cartas[carta].girada = true;
        seleccionada1 = carta;
    }
    else if (!cartas[carta].girada && seleccionada2 == -1) {
        seleccionada2 = carta;
        this.src = "imagenes/cartas/" + "im" + imagen + ".png";
        cartas[carta].girada = true;

        if (cartas[seleccionada1].index == cartas[seleccionada2].index) {
            correctas += 2;
            if (correctas == 16)
                alert("FELICIDADES! HA GANADO");
        }
    }
    else if (!cartas[carta].girada) {
        if (cartas[seleccionada1].index != cartas[seleccionada2].index) {
            cartas[seleccionada1].girada = false;
            cartas[seleccionada1].img.src = "imagenes/cartas/dorso.jpg";
            cartas[seleccionada2].girada = false;
            cartas[seleccionada2].img.src = "imagenes/cartas/dorso.jpg";
        }
        seleccionada1 = carta;
        seleccionada2 = -1;
        this.src = "imagenes/cartas/" + "im" + imagen + ".png";
        cartas[carta].girada = true;
    }
}
for (var i = 0; i < cartas.length; i++) {
    cartas[i] = new Carta(i);
    cartas[i].img.addEventListener("click",cartaClick);
}

for (var i = 0; i < cartas.length; i++) {
    if (i < 8)
        cartas[i].index = i + 1;
    else
        cartas[i].index = (i - 7);
}

