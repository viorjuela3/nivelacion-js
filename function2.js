function totalAPagar() {
    var precio = parseFloat(prompt("Ingresa el precio del producto:"));
    var descuento = 0;
    //el precio debe ser menor a 100 para poder aplicar el 10% de descuento si el valor es menor a 100 el descuento queda en 0 
    if (precio > 100) {
      descuento = precio * 0.1;
    }

    //Se calcula el precio con el descuento restandole al precio el porcentaje del descuento 
    var precioConDescuento = precio - descuento;
     //se calcula el valor total de los impuestos multiplicando el precio con descuento por el porcentaje de impuestos
    var impuestos = parseFloat(prompt("Ingresa el porcentaje de impuestos (sin el signo %):"))/100;
    //se suma el precio con descuento y los impuestos para obtener el valor total a pagar.
    var total = precioConDescuento + (precioConDescuento*impuestos);
    return total;
}

totalAPagar();