const CARACTERES_ACEPTADOS = "abcdefghijklmnñopqrstuvwxyz0123456789.,:;¡!¿?-_";

let ingreso = "";
let egreso = "";

function validarParaEncriptar(texto) {
    if (texto.length > 0) {
        for (i = 0; i < texto.length; i++) {
            let carActual = texto.charAt(i);
            if (!CARACTERES_ACEPTADOS.includes(carActual)) {
                alert("Caracter inválido: " + carActual);
                break;
            } else {
                agregarParaEncriptar(carActual);
            }
        }
    } else {
        alert("Debe ingresar el texto a encriptar.");
    }

    mostrarResultado(egreso);
    resetearEgreso();

}

function validarParaDesencriptar(texto) {
    if (texto.length > 0) {
        for (i = 0; i < texto.length - 1; i++) {
            if (!CARACTERES_ACEPTADOS.includes(i)) {
                alert("Caracter inválido: " + carActual);
                break;
            } else {

            }            
        }
    } else {
        alert("Debe ingresar el texto a desencriptar.");
    }

    desencriptar(texto);
    resetearEgreso();

}

function btnEncriptar() {
    ingreso = document.getElementById("texto-procesar").value;
    validarParaEncriptar(ingreso);
}

function btnDesencriptar() {
    ingreso = document.getElementById("texto-procesar").value;
    validarParaDesencriptar(ingreso);
}

function agregarParaEncriptar(caracter) {
    switch (caracter) {
        case "a":
            egreso = egreso + "ai";
            break;
        case "e":
            egreso = egreso + "enter";
            break;
        case "i":
            egreso = egreso + "imes";
            break;
        case "o":
            egreso = egreso + "ober";
            break;
        case "u":
            egreso = egreso + "ufat";
            break;
        default:
            egreso = egreso + caracter;
            break;
    }
}

function desencriptar(textoParaDesencriptar) {
    let egresoDesencriptado = "";
    if (textoParaDesencriptar.includes("ai")) {
        egresoDesencriptado = textoParaDesencriptar.replaceAll("ai", "a");
    }
    mostrarResultado();
}

function mostrarResultado() {
    let texto = document.getElementById("texto-resultado");
    let elementosparaQuitar = document.querySelectorAll(".elementos-para-quitar");

    texto.removeAttribute("hidden");
    texto.innerHTML = egreso;
    elementosparaQuitar.forEach(elemento => { elemento.setAttribute("hidden", "") });
}

function resetearEgreso() {
    egreso = "";
}