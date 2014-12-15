var img = document.getElementById("im");
var imagenes = ["imagenes/testmemoria/0.jpg", "imagenes/testmemoria/1.jpg", "imagenes/testmemoria/2.jpg"];
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var indx = 0;
var textos = [document.getElementById("text0"),  document.getElementById("textarea0"),  document.getElementById("textarea1"),  document.getElementById("textarea2")];

img.src = imagenes[indx];

nextClick = function (event) {
    indx++;
    if (indx >= imagenes.length)
        indx = 0;

        img.src = imagenes[indx];
	
    for (var i = 0; i < textos.length; i++)
	textos[i].value = "";
}

prevClick = function (event) {
    indx--;
    if (indx < 0)
        indx = imagenes.length - 1;

        img.src = imagenes[indx];
	for (var i = 0; i < textos.length; i++)
		textos[i].value = "";
}
next.addEventListener("click", nextClick);

prev.addEventListener("click", prevClick);

prev.addEventListener("mouseover", function (e) {
    document.body.style.cursor = 'pointer';

});
prev.addEventListener("mouseout", function (e) {
    document.body.style.cursor = 'default';

});
next.addEventListener("mouseover", function (e) {
    document.body.style.cursor = 'pointer';

});
next.addEventListener("mouseout", function (e) {
    document.body.style.cursor = 'default';

});
