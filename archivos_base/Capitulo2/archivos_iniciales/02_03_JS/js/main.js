var canvas, context;
var pastPostX =0;
var pastPostY =200;
var paso =10;

function init(){
    var grafica = document.getElementById("sec_grafica");
    grafica.style.display ="none";

    var mapa= document.getElementById("sec_mapa");
    mapa.style.display="none";
}
function cambio(ref){
    ocultar();
    var elemento = document.getElementById(ref);
    elemento.style.display ="block";
}
function ocultar(){
    var textos = document.getElementById("sec_textos");
    textos.style.display ="none";

    var grafica = document.getElementById("sec_grafica");
    grafica.style.display ="none";

    var mapa = document.getElementById("sec_mapa");
    mapa.style.display ="none";
}
function creaGrafica(){
    canvas = document.getElementById("grafica");
    if(canvas.getContext){
        context=canvas.getContext("2d");
        dibujarGrafica();

    }else{
        alert("el navegador no soporta canvas");
    }
}
function dibujarGrafica(){
    var valor= Math.round(200*Math.random());
    context.beginPath();
    var newPosX = pastPostX+paso;
    var newPosY = 200 - valor;
    context.moveTo(pastPostX,pastPostY);
    context.strokeStyle = "#ff0000";
    context.lineWidth = 1;
    context.lineTo(newPosX,newPosY);
    context.stroke();
    pastPostX = newPosX;
    pastPostY = newPosY;
    
    setTimeout("dibujarGrafica()", 500);

}