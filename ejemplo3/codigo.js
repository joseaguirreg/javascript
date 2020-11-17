// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn = document.getElementById("btn");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "aleatorio" */
var aleatorio = document.getElementById("aleatorio")
/* Obtenemos los dos input y los almacenamos en
variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

//añadir evento de click y funcion
btn.addEventListener("click",function(){
    var n1= inputUno.value;
    var n2= inputDos.value;

    aleatorio.innerHTML = generarAleatorio(n1,n2);
    console.log(aleatorio);
});

function generarAleatorio(n1,n2){
    return Math.round(Math.random()*(n2-n1)+parseInt(n1));
}