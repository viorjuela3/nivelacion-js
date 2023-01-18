let letra = prompt("Ingresa una letra");
//Creamos un array de letras
let arrayLetras = ['a','b','c','d','x']

function contieneLetra(letra, arrayLetras) {
    //Se recorre el array para determinar si la letra existe 
    for (var i = 0; i < arrayLetras.length; i++) {
        if (letra === arrayLetras[i]) {
            return true;
        }
    }
    return false;

}

//Si la letra existe lo mencionara
alert("Su letra si existe en nuestro sistema");

contieneLetra();