// Pedir al usuario que ingrese un valor entero
let num = prompt("Ingresa un valor entero:");

// se anidan dos ciclos for 1 para crear la linea y el otro para poner los asteriscos en cada linea creada

/*
1. se declara una variable que se llama linea en vacio en la que se concatena el incremento dependiendo el numero ingresado por el usuario 
2. en el primero for se crea la linea
3. en el segundo for se ponen la cantidad de asteriscos por linea creada

*/

for (let i = 1; i <= num; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "*";
    }
    console.log(linea);
}