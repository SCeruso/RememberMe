
     //window.addEventListener("load", function () { alert("La bla"); });
var cartas = new Array(16);
var seleccionada1 = -1;
var seleccionada2 = -1;
var correctas = 0;

function Carta(i) {
    var aux = "im" + i;
    this.img = document.getElementById(aux);
    this.girada = false;
    this.index = 0;
}


cartaClick = function (event) {
    var carta = event.target.id;
    carta = carta.slice(2, carta.length);
    carta = parseInt(carta);
    var imagen = carta;
    if (carta > 7)
        imagen = imagen - 8;
    if (!cartas[carta].girada && seleccionada1 == -1 && seleccionada2 == -1) {
        this.src = "imagenes/cartas/" + "im" + imagen + ".jpg";
        cartas[carta].girada = true;
        seleccionada1 = carta;
    }
    else if (!cartas[carta].girada && seleccionada2 == -1) {
        seleccionada2 = carta;
        this.src = "imagenes/cartas/" + "im" + imagen + ".jpg";
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
            cartas[seleccionada1].img.src = "http://placehold.it/100x100/E4247E/ffffff.png&text=100x100";
            cartas[seleccionada2].girada = false;
            cartas[seleccionada2].img.src = "http://placehold.it/100x100/E4247E/ffffff.png&text=100x100";
        }
        seleccionada1 = carta;
        seleccionada2 = -1;
        this.src = "imagenes/cartas/" + "im" + imagen + ".jpg";
        cartas[carta].girada = true;
    }
}
for (var i = 0; i < cartas.length; i++) {
    cartas[i] = new Carta(i);
    cartas[i].img.addEventListener("click",cartaClick);
}

for (var i = 0; i < cartas.length; i++) {
    if (i < 7)
        cartas[i].index = i + 1;
    else
        cartas[i].index = (i - 7);
}

