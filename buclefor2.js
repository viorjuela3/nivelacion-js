/*1. Se declaran dos variables de iniciacion en 0 
2. Se declara la condicion que debe cumplir que el digito de la izquierda debe ser menor a 1 o se debe cumplir que el digito de la derecha sea igual a 1 y el digito de la izquierda menor que 4
3. si la siguiente condicion se cumple 
4. aumentara el digito de la derecha en 1 
5. dentro del if se verifica que el digito del lado derecho sea mayor a 4 si esto es verdadero se debe inicializar la variable en 0 y aunementar el digito de la izquierda
6. y se concatena los dos digitos


*/
for (let leftDigit = 0, rightDigit = 0; leftDigit < 1 || (leftDigit == 1 && rightDigit < 4); rightDigit++) {
  if (rightDigit > 4) {
      rightDigit = 0;
      leftDigit++;
  }
  console.log(`Contador: ${leftDigit}${rightDigit}`);
}