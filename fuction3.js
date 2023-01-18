var userYear = prompt("Ingrese un año:");
var century = centuryFromYear(userYear);

function centuryFromYear(year) {
//si el año es divisible por 100 el siglo es simplemente el año dividido por 100
  if (year % 100 === 0) {
    return year / 100;
  } else {
//Math.floor() es una función de JavaScript que redondea un número hacia abajo al número entero más cercano
    return Math.floor(year / 100) + 1;
  }
}

console.log("El siglo correspondiente al año " + userYear + " es el siglo " + century);