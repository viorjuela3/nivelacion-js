// Crear un array para guardar los nombres de los días de la semana
var diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// Pedir al usuario que ingrese un número entre 0 y 6
var numero = prompt("Ingresa un número entre 0 y 6 para obtener el nombre del día");

// Comprobar que el número ingresado es válido
if (numero >= 0 && numero <= 6) {
    // Mostrar el nombre del día correspondiente al número ingresado
    alert("El día correspondiente al número " + numero + " es " + diasSemana[numero]);
} else {
    // Mostrar un mensaje de error si el número ingresado no es válido
    alert("Por favor ingresa un número entre 0 y 6");
}