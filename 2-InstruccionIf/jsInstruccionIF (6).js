function mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById("edad").value;
edad=parseInt(edad);
if(edad >18){
    alert("Mayor de edad") 
}
      else if (edad >=13 && edad<=17){
     alert ("Adolescente")
}
      else {
    alert ("Menor de edad")
      }

}//FIN DE LA FUNCIÓN