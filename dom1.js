function cambiarStyle(color,display,justifyContent){
 
// Cambiar varios estilos

element.style.color = color;
element.style.display = display;
element.style.justifyContent = justifyContent;
}

var element = document.getElementById("titular");
cambiarStyle("red","flex","center");



function cambiarSaludo(){
    var element = document.getElementById("titular");
  
    // Cambiar el texto del elemento
    element.innerHTML = "Hola Mundo con Javascript";
} 

// se esta llamando el elemento clase pero especificamos en numero del div que queremos editar desde los corchetes
var div = document.getElementsByClassName("boton")[1];
  
  div.addEventListener("click", function() {
    cambiarSaludo();
  });

//Solucion codigo Juli
/*   function cambiar(){
    var titular = document.getElementById('titular');
   titular.innerText = "Hola Mundo con Javascript";
}*/
