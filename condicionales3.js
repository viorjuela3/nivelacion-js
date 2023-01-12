let nota = parseInt(prompt("Por favor ingrese su nota"))

if(nota >= 9){
    console.log("Su estado actual en el curso es: SOBRESALIENTE")
    
}
else if(nota >= 7 ){
    console.log("Su estado actual en el curso es: NOTABLES")  
}
else if(nota >= 5){
    console.log("Su estado actual en el curso es: APROBADO")
}
else{
    console.log("Su estado actual en el curso es: SUSPENDIDO")
}