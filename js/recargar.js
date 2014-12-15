
var recarga = document.getElementById("recarga");


recarga.addEventListener("click", function(event){
    document.location.href = document.location.href
});
recarga.addEventListener("mouseover", function (e) {
    document.body.style.cursor = 'pointer';

});
recarga.addEventListener("mouseout", function (e) {
    document.body.style.cursor = 'default';

});
