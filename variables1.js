//Declaro las variables con los datos que conozco que es el valor del producto y el iva
const precioproducto = 2300
const iva = 19

//opero las variables y uso los parentesis para dar jerarquia a los operadores
let totalxiva = (precioproducto*iva)/100

let totalxcomprafinal = precioproducto + totalxiva

//el console.log me permite mostrar en pantalla el valor de las variables luego de haberlas operado
console.log("El iva del producto es de: $"+totalxiva)

console.log("Su compra tendra un valor final de: $" + totalxcomprafinal)
