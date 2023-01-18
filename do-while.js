//la variable letter se usa para almacenar el valor ingresado por el usuario 

let letter;

do {
  letter = prompt("Por favor, ingresa la letra A en mayúscula:");
} while (letter !== "A");

//mientras la variable guardada no sea igual a la letra A solicitara nuevamente ingresar la letra A en mayuscula

alert("¡Muy bien! Ingresaste la letra A en mayúscula correctamente.");