/*declaramos la variables de los 3 numeros que vamos a solicitar usamos parseInt para poder 
operar posteriormente la variable como un numero entero*/

let num1 = parseInt(prompt("Vamos a encontrar la media de 3 numeros por favor digite el primer número"))
let num2 = parseInt(prompt("Por favor digite el segundo número"))
let num3 = parseInt(prompt("Por favor digite el tercer número"))

//usamos la jerarquia de los operadores para sumar primero las 3 variables

let media = (num1 + num2 + num3) / 3

console.log("La media de los tres numeros ingresados es: " + media)