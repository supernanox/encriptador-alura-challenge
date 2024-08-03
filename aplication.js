const CARACTERES_ACEPTADOS = "abcdefghijklmnñopqrstuvwxyz0123456789.,:;¡!¿?-_"

let ingreso = "";
let egreso = "";

function validar(texto){
    if(texto.length > 0){
        for(i = 0; i < texto.length; i++){
            let carActual = texto.charAt(i);
            console.log(carActual)
            if(!CARACTERES_ACEPTADOS.includes(carActual)){
                alert("Caracter inválido: " + carActual);
                break;
        }
    }
    }else {
        alert("Debe ingresar el texto a encriptar.")
    }
}

function encriptar(){
    ingreso = document.getElementById("texto-procesar").value;
}
