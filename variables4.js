let comensales = parseInt(prompt("¿Cuantos comensales quieren tortillas (1 por comensal)?"))
//se declaran los ingredientes con base a 1 kilo de patatas (1000gramos)
let patatasBase = 1000 
let huevosBase = 5
let cebollaBase = 300

//Se declara la fracción entre 1 kilo y 200 gramos de patatas

let fraccion = 1000/200

//Se declaran los ingredientes para una tortilla

let tortillap = 1
let patatasp = patatasBase/fraccion
let huevosp = huevosBase/fraccion
let cebollasp = cebollaBase/fraccion

//Se están calculando los ingredientes segun el numero de comensales

let tortilla = tortillap*comensales
let patatas = patatasp*comensales
let huevos = huevosp*comensales
let cebolla = cebollasp*comensales

console.log("Su lista de ingredientes para: " + comensales  + " Comensales\n" + "Tortillas = " + tortilla + " unidades" +"\nPatatas = " + patatas + " gramos"+ "\nHuevos = " + huevos + " unidades" + "\nCebollas = " + cebolla + " gramos")