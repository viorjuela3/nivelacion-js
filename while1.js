/* se crea un array vacio y con .length se determina cuantos elementos tiene el arreglo y .push agrega uno o varios elementos al final del aarreglo y devuelve la longitud actual del array

*/

let list = [];
let i = 0;
//mientras el arreglo list sea menor a 20 se continua con el if que evalua que la variable tenga un modulo de 0
while (list.length < 20) {
  if (i % 2 == 0) {
    list.push(i);
  }
  i++;
}
console.log(list);