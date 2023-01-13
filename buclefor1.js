//se pide por consola una letra
let letra = prompt("Por favor digite una letra")
// se pide por consola un número
let num = parseInt(prompt("Por favor digite un numero"))
//se declara un cadena vacia donde se va a CONCATENAR el numero de veces con la letra escrita
let cadena = ""

/*se inicializa una variable en 0 y se va aumentando hasta el numero ingresado por el usuario 
paso 1: la variable 1 que es 0 aumentara en 1 ahora su valor es 1
el operador += que funciona para ingrementar
paso 2:  cadena esta vacia y va sumar la variable letra ahora la variable cadena sera igual a el valor de la letra ingresada

se repite el paso 1 y ahora la variable i aumentado en 2 cuando llega a la variable cadena que ahora es igual a m va sumar a la variable letra dejando dos letras m seguidas en la variable cadena y el ciclo se repite hasta que la variable i es igual a la variable num
*/
for (let i = 0; i < num; i++) {
    
    cadena += letra;

    console.log(cadena);
}
