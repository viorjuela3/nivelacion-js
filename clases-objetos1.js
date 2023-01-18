class Student {
    //creamos la clase student y en el constructor no ponemos las variables a inicializar porque las pediremos al usuario
    constructor() {
      this.name = prompt("Ingresa tu nombre:");
      this.english = parseInt(prompt("Ingresa tu calificación en inglés:"));
      this.programming = parseInt(prompt("Ingresa tu calificación en programación:"));
      this.html = parseInt(prompt("Ingresa tu calificación en HTML:"));
    }
    //se crea un metodo para sumar las 3 notas y dividirlas para tener el promedio
    getAverage() {
      return (this.english + this.programming + this.html) / 3;
    }
  }
  
  //llamanos la clase para crear el nuevo objeto con los datos que creamos
  let student = new Student();
  alert(`Nombre: ${student.name}`);
  alert(`Promedio: ${student.getAverage()}`);

 