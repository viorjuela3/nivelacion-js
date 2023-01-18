class Ficha {
    constructor(nombre) {
      this.nombre = nombre;
      //en el siguiente arreglo se guardan los kilometros recorridos y con el metodo .push se guardaran tantos argumentos como el usuario vaya ingresando
      this.sesiones = [];
      //este es el contador de las sesiones realizadas 
      this.numsesiones = 0;
    }
  
    //Este método recibe como parámetro los kilómetros recorridos en una sesión y los guarda en el arreglo de sesiones y aumenta el contador de sesiones en 1.
    anotar(kilometros) {
      this.sesiones.push(kilometros);
      //push es un método de los arreglos en JavaScript que se utiliza para agregar un nuevo elemento al final del arreglo
      this.numsesiones++;
    }
    
    //Este método calcula y retorna la media de los kilómetros recorridos en todas las sesiones.
    media() {
      let total = 0;
      //.length es una propiedad de los arreglos que se utiliza para obtener la longitud de un arreglo, la longitud de un arreglo es el número de elementos que contiene, se utiliza la propiedad .length en el metodo media() de la clase Ficha para obtener la cantidad de elementos en el arreglo sesiones y calcular la media de los kilómetros recorridos.
      for (let i = 0; i < this.sesiones.length; i++) {
        total += this.sesiones[i];
      }
      //se está utilizando el ciclo for para recorrer cada elemento del arreglo y sumar sus valores, y luego se divide la suma total de los valores entre el total de sesiones, para obtener la media.
      return total / this.numsesiones;
    }
  }

  //se solicita al usuario su nombre, luego se utiliza un ciclo while para que siga solicitando al usuario los kilómetros recorridos en cada sesión hasta que el usuario escriba "salir", y se utiliza el método anotar() para guardar esos datos.
  
  let nombre = prompt("Ingresa tu nombre:");
  let ficha = new Ficha(nombre);
  
  while (true) {
      let kilometers = prompt("Ingresa los kilometros recorridos en la sesion o escriba 'salir' para finalizar: ");
      if (kilometers === 'salir') {
          break;
      }
      ficha.anotar(parseInt(kilometers));
  }
    alert("La media de kilometros recorridos es: " + ficha.media());