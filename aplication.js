const CARACTERES_ACEPTADOS = "abcdefghijklmnñopqrstuvwxyz0123456789.,:;¡!¿?-_";

let ingreso = "";
let egreso = "";

function validar(texto) {
    if (texto.length > 0) {
        for (i = 0; i < texto.length; i++) {
            let carActual = texto.charAt(i);
            if (!CARACTERES_ACEPTADOS.includes(carActual)) {
                alert("Caracter inválido: " + carActual);
                break;
            }else{
                agregar(carActual);
            }
        }
    } else {
        alert("Debe ingresar el texto a encriptar.");
    }
    alert(egreso);
}

function encriptar() {
    ingreso = document.getElementById("texto-procesar").value;
    validar(ingreso);
}

function agregar(caracter){
    if(caracter == "a"){
        egreso = egreso + "4";
    }else {
        egreso = egreso + caracter;
    }
}