
var audio = document.getElementById("audio");
var boton = document.getElementById("play");
var status = 0;

boton.addEventListener("click", function(event){
    if (status == 0){
	boton.className= "icon-play pull-left";
	audio.pause();
	status = 1;
	}
    else {
	boton.className= "icon-pause pull-left";
	audio.play();
	status = 0;
	}
	
});
boton.addEventListener("mouseover", function (e) {
    document.body.style.cursor = 'pointer';

});
boton.addEventListener("mouseout", function (e) {
    document.body.style.cursor = 'default';

});
